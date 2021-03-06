import { signOut } from 'firebase/auth';
import React from 'react';
import { Form, Image, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Pages/LogIn/LogIn';

const Profile = () => {
    const [user] = useAuthState(auth);
    let navigate = useNavigate();
    const handleSingOut = () => {
        signOut (auth)
            .then(res => {
               console.log(res)
               navigate('/')
               window.location.reload()
                }
             )
            .catch(err => {
              console.log(err)
            })
           
    }
 
    return (
        <div>
             <Image style={{borderRadius:"50px",display:"block",marginLeft:"auto",marginRight:"auto"}}  src={user.photoURL}/>
            <Form  style={{width:"25rem",margin:"auto"}}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={user.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="Name"value={user.displayName}  />
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" value={user.phoneNumber} />
                </Form.Group>
                <Button className="w-100">Save</Button>
                <Button variant="danger" onClick={handleSingOut} className="w-100 mt-2">LogOut</Button>
            </Form>
        </div>
    );
};

export default Profile;