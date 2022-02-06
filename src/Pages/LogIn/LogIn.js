import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useLocation,useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LogIn.css";


const firebaseConfig = {
    apiKey: "AIzaSyDwYZBO0_G35q_CeA6pG_rdH-KK5ftRS4Q",
    authDomain: "foodservice-cbcfe.firebaseapp.com",
    projectId: "foodservice-cbcfe",
    storageBucket: "foodservice-cbcfe.appspot.com",
    messagingSenderId: "1004435149966",
    appId: "1:1004435149966:web:bc917b112ee033251625df"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const LogIn = () => {


    const auth = getAuth();
    const [NewUser, setNewUser] = useState(false);
    const [user, setuser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    // const [loggedInUser, setloggedInUser] = useContext(InfoContext);
    const history = useNavigate();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const { email, photoURL, displayName } = res.user;
                const UserSignIn = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                // setuser(UserSignIn)
                // setloggedInUser(UserSignIn)
                history.replace(from)
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    const handleSingOut = () => {
        signOut(auth)
            .then(res => {
                const SignOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: '',
                    photo: ''
                }
                // setuser(SignOutUser);
                // setloggedInUser(SignOutUser)


            })
            .catch(err => {

            })
    }
    const handleCheckEmailPassword = (e) => {

        let isFormValid = true;

        if (e.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === "password") {
            const isPasswordvalid = e.target.value.length > 6;
            const isPasswordNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordvalid && isPasswordNumber;
        }
        if (isFormValid) {
            const NewUserInfo = { ...user };
            NewUserInfo[e.target.name] = e.target.value;
            setuser(NewUserInfo);
        }
    }
    const handleSubmit = (e) => {

        console.log(user.email, user.password);
        if (NewUser && user.email && user.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    const NewUserInfo = { ...user };
                    NewUserInfo.error = '';
                    NewUserInfo.success = true;
                    setuser(NewUserInfo);
                    console.log(res)
                })
                .catch(error => {
                    // Handle Errors here.
                    const NewUserInfo = { ...user };
                    NewUserInfo.success = false;
                    NewUserInfo.error = error.message;
                    console.log(error.message)
                    setuser(NewUserInfo);
                    // ...

                });
        }
        if (!NewUser && user.email && user.password) {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then(res => {
                    const NewUserInfo = { ...user };
                    NewUserInfo.error = '';
                    NewUserInfo.success = true;
                    setuser(NewUserInfo);
                    // setloggedInUser(NewUserInfo);
                    history.replace(from)
                    console.log(res)
                })
                .catch(function (error) {
                    // Handle Errors here.
                    const NewUserInfo = { ...user };
                    NewUserInfo.success = false;
                    NewUserInfo.error = error.message;
                    setuser(NewUserInfo);
                    // ...
                });
        }
        e.preventDefault();
    }

    return (
        <div className="App">

            <Button className="w-25 mt-5" onClick={handleSingOut}>Sign Out</Button> :
            <Button className="w-25 mt-5" onClick={handleSignIn}>Sing In with Google PopUP</Button>

            <div className="Login">
                <input type="checkbox" name="NewUser" onClick={() => setNewUser(!NewUser)} id="" />
                <br />
                <label htmlFor="NewUser">New User Sign up</label>
                <br />

                <Form >

                    {NewUser && <Form.Group size="lg" controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            placeholder="Enter Your Name"

                        />
                    </Form.Group>
                    }
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            name="email"
                            required
                            onBlur={handleCheckEmailPassword}

                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            onBlur={handleCheckEmailPassword}
                            required
                        />
                    </Form.Group>
                    <Button className="w-100 mt-2" size="lg" onClick={handleSubmit} type="submit" >
                        Login
                    </Button>
                </Form>
                <p style={{ color: 'red' }}>{user.error}</p>
                {
                    user.success && <p style={{ color: 'green' }}> User {NewUser ? "Create" : "logIn"} successfully</p>
                }
            </div>
        </div>
    );
};

export default LogIn;