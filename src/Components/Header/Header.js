import React, { useContext } from 'react';
import { CardImg, Container, Image, Nav, Navbar } from 'react-bootstrap';
import image from '../../assest/logo.png';
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Pages/LogIn/LogIn';
import {  signOut } from "firebase/auth";
const Header = () => {
    const handleSingOut = () => {
        signOut(auth)
            .then(res => {
               console.log(res)
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
                        <Link to="/"> <Image fluid src={image} /></Link>
                    </Navbar.Brand>
                    <Link className="text-dark  Nav_Item_cart_small  pe-2" to="/cart">{cart.length} <AiOutlineShoppingCart /></Link>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav.Link>  </Nav.Link>
                        <Nav className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>

                            <Nav.Link className="Nav_Home"> <Link to="/" className="text-dark Nav_Item">Home</Link></Nav.Link>
                            <Nav.Link className="Nav_Profile"> {user ? 
                            <div class="dropdown">
                                <Image className="Profile_Img" src={user.photoURL} />
                                <button class="dropbtn">{user?.displayName}</button>
                                <div class="dropdown-content">
                                    <a href="#">Orders and Recording</a>
                                    <Link to="/profile">Profile</Link>
                                    <a onClick={()=>handleSingOut()}>Log Out</a>
                                </div> 
                            </div> : <Link to ="/profile"><span style={{marginRight:"3px",color:"black"}}>LOGIN</span><CgProfile /></Link> }</Nav.Link>
                            <Nav.Link className="Nav_Cart">   <Link className="text-dark  Nav_Item_cart_larg  pe-2" to="/cart">{cart.length} <AiOutlineShoppingCart /></Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;