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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Brand href="#home">
                            <Image fluid  src={image} />
                            </Navbar.Brand>
                        </Nav>
                        <Nav className="mr-auto">
                            <Nav.Link className="text-dark ps-5">Home</Nav.Link>
                            <Nav.Link className="text-dark ps-5">Api</Nav.Link>
                            <Nav.Link className="text-dark ps-5">Forum</Nav.Link>
                            <Nav.Link className="text-dark ps-5"><AiFillFacebook/></Nav.Link>
                            <Nav.Link className="text-dark ps-5"><AiFillTwitterSquare/></Nav.Link>
                            <Link className="mt-2 ps-5" to="/cart">{CartItem.length} <AiOutlineShoppingCart/></Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;