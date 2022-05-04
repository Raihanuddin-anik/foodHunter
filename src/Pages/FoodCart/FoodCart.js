import React from 'react';
import { Container, Table, Row, Col, Image, Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai'
import './FoodCart.css'
// import { cartContext } from '../../App'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart } from '../../redux/actions/CartActions';
import CartInfo from '../../Components/CartInfo/CartInfo';
import Address from '../../Components/Address/Address';
const Cart = () => {
    const cart = useSelector((state) => state.cartReducers);

    const PlaceOrder = () => {
        console.log("Hello")
        fetch('https://floating-springs-68465.herokuapp.com/addOrder', {
            method: 'POST',
            body: JSON.stringify(cart),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log("sr", json));
    }
    return (
        <div style={{ height: "300vh" }}>
            <Container className="py-5">
                <h2>Food Cart</h2>
                <Row>
                    <Col md={8}>
                       <Address/>
                    </Col>
                    <Col md={4}>
                        <CartInfo></CartInfo>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;