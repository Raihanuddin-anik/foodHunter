import React, { useContext } from 'react';
import { CardImg, Container, Image, Nav, Navbar } from 'react-bootstrap';
import image from '../../assest/p-logo.png';
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Pages/LogIn/LogIn';
import {  signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Header = () => {
    let navigate = useNavigate();
    const handleSingOut = () => {
        signOut(auth)
            .then(res => {
               console.log(res)
               navigate('/')
                }
             )
            .catch(err => {
              console.log(err)
            })
    }
    const [user] = useAuthState(auth);
    const cart = useSelector((state) => state.cartReducers);
    return (
        <div className="Header_component" >
            <Navbar expand="lg" className="Nav_Bar" >
                <Container>

                    <Navbar.Brand href="#home">
                        <Link to="/"> <Image className='w-25' fluid src={image} /></Link>
                    </Navbar.Brand>
                    <Link className="text-dark  Nav_Item_cart_small  pe-2" to="/cart">{cart.length} <AiOutlineShoppingCart /></Link>

                        <Nav className="ms-auto my-2">

                            <Nav.Link className="Nav_Home"> <Link to="/" style={{textDecoration:"none"}} className="text-dark Nav_Item">Home</Link></Nav.Link>
                            <Nav.Link className="Nav_Profile"> {user ? 
                            <div class="dropdown">
                                <Image className="Profile_Img" src={user.photoURL} />
                                <button  style={{textDecoration:"none"}} class="dropbtn">{user?.displayName}</button>
                                <div class="dropdown-content">
                                    <Link to="/foodCart">Orders and Recording</Link>
                                    <Link to="/profile">Profile</Link>
                                    <a  onClick={()=>handleSingOut()}>Log Out</a>
                                </div> 
                            </div> : <Link  className="login_Text" to ="/login"><span style={{paddingTop:"3px",color:"black"}}>LOGIN</span><CgProfile /></Link> }</Nav.Link>
                            <Nav.Link className="Nav_Cart">   <Link className="text-dark  Nav_Item_cart_larg pe-2"  style={{textDecoration:"none"}} to="/foodCart">{cart.length} <AiOutlineShoppingCart /></Link></Nav.Link>
                        </Nav>


                </Container>
            </Navbar>
        </div>
    );
};

export default Header;