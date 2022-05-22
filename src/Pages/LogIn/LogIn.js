import React, { useState, useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LogIn.css";
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLock } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg'
import { InfoContext } from '../../App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyDwYZBO0_G35q_CeA6pG_rdH-KK5ftRS4Q",
    authDomain: "foodservice-cbcfe.firebaseapp.com",
    projectId: "foodservice-cbcfe",
    storageBucket: "foodservice-cbcfe.appspot.com",
    messagingSenderId: "1004435149966",
    appId: "1:1004435149966:web:bc917b112ee033251625df"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
console.log(auth)


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

    const [loggedInUser, setloggedInUser] = useContext(InfoContext);

    // const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';
    // navigate(from, { replace: true });
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
                setuser(UserSignIn)
                setloggedInUser(UserSignIn)

            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
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
    // const handleSubmit = (e) => {

    //     console.log(user.email, user.password);
    //     if (NewUser && user.email && user.password) {
    //         const auth = getAuth();
    //         createUserWithEmailAndPassword(auth, user.email, user.password)
    //             .then(res => {
    //                 const NewUserInfo = { ...user };
    //                 NewUserInfo.error = '';
    //                 NewUserInfo.success = true;
    //                 setuser(NewUserInfo);
    //                 console.log(res)
    //             })
    //             .catch(error => {
    //                 // Handle Errors here.
    //                 const NewUserInfo = { ...user };
    //                 NewUserInfo.success = false;
    //                 NewUserInfo.error = error.message;
    //                 console.log(error.message)
    //                 setuser(NewUserInfo);
    //                 // ...

    //             });
    //     }
    //     if (!NewUser && user.email && user.password) {
    //         const auth = getAuth();
    //         signInWithEmailAndPassword(auth, user.email, user.password)
    //             .then(res => {
    //                 const NewUserInfo = { ...user };
    //                 NewUserInfo.error = '';
    //                 NewUserInfo.success = true;
    //                 setuser(NewUserInfo);
    //                 setloggedInUser(NewUserInfo);


    //             })
    //             .catch(function (error) {
    //                 // Handle Errors here.
    //                 const NewUserInfo = { ...user };
    //                 NewUserInfo.success = false;
    //                 NewUserInfo.error = error.message;
    //                 setuser(NewUserInfo);
    //                 // ...
    //             });
    //     }
    //     e.preventDefault();
    // }

    return (
        <div className='Login_page'>
            <Container>

                <Row className="justify-content-md-center row " >
                    <Col md={{ span: 5, offset: 0 }} className="centered_div">
                        {NewUser?<h2 className='text-center mt-5 bt-5'>Login</h2>: <h2 className='text-center mt-5 bt-5'>Login</h2>}
                        <Form >
                            {NewUser ?
                                <div>
                                    <Form.Label htmlFor="basic-url">Name</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text className="name_Icon"><CgProfile /></InputGroup.Text>
                                        <FormControl className="name" placeholder='Enter Your Email' />
                                    </InputGroup> </div> : ''}
                            <Form.Label htmlFor="basic-url">Email</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text className="email_Icon"><AiOutlineMail /></InputGroup.Text>
                                <FormControl className="email" placeholder='Enter Your Email' />
                            </InputGroup>
                            <Form.Label htmlFor="basic-url">Password</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text className="password_Icon"><BiLock /></InputGroup.Text>
                                <FormControl className="password" placeholder='Enter Your Email' />
                            </InputGroup>
                            <p style={{ color: 'red' }}>{user.error}</p>
                            {
                                user.success && <p style={{ color: 'green' }}> User {NewUser ? "Create" : "logIn"} successfully</p>
                            }
                            <Button className="mt-2 w-100" size="lg" type="submit" >
                                Login
                            </Button>
                            <p className="mt-5 text-center">Or SignUp Using </p>

                        </Form>
                        <div className="text-center">
                            <span className='icon_one'><BsGoogle /></span>
                            <span className='icon_two'><BsFacebook /></span>
                            <span className='icon_three'><AiFillTwitterCircle /></span>
                        </div>
                        <p className="mt-5 text-center">Or SignUp Using </p>
                        {NewUser ? <h6 style={{ cursor: "pointer" }} onClick={() => setNewUser(false)} className="text-center"> LOGIN</h6> : <h6 style={{ cursor: "pointer" }} onClick={() => setNewUser(true)} className="text-center"> SIGN UP</h6>}
                        {/* <Col md={{ span: 6, offset: 0 }}><Button variant='info' className="w-100 mt-5" onClick={handleSignIn}> <AiFillGooglePlusCircle className="fs-5" />Sing In with Google PopUP </Button></Col> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogIn;