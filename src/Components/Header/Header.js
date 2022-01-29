import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import image from '../../assest/logo.png';
import { AiFillFacebook,AiFillTwitterSquare,AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';

const Header = () => {
    const [CartItem, setCartItem] = useContext(cartContext);
    return (
        <div className="Header_component" >
            <Navbar expand="lg">
                <Container>
                  

                        <Nav className="me-auto">
                            <Navbar.Brand href="#home">
                            <Image fluid  src={image} />
                            </Navbar.Brand>
                        </Nav>
                        <Nav >
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav.Link className="text-dark ps-5">Home</Nav.Link>
                            <Nav.Link className="text-dark ps-5">Api</Nav.Link>
                            <Nav.Link className="text-dark ps-5">Forum</Nav.Link>

                            <Nav.Link className="text-dark ps-5"><AiFillFacebook/></Nav.Link>
                            <Nav.Link className="text-dark ps-5"><AiFillTwitterSquare/></Nav.Link>
                            </Navbar.Collapse>
                            <Link className=" p-2" to="/cart">{CartItem.length} <AiOutlineShoppingCart/></Link> 
                            
                        </Nav>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;