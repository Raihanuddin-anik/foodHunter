import React, { useState } from 'react';
import { Container,  Row, Col } from 'react-bootstrap';
import './FoodCart.css'
import {useSelector } from 'react-redux';
import CartInfo from '../../Components/CartInfo/CartInfo';
import Address from '../../Components/Address/Address';
import Banner from '../../Components/Banner/Banner';
const FoodCart = () => {
    const cart = useSelector((state) => state.cartReducers);
    const [payment, setPayment] = useState(false);
    const [AllInfo, setAllInfo] = useState({
        name: '',
        number: '',
        Address: ''

    })
    const DeliveryInfo = { cart, AllInfo };

    const PlaceOrder = () => {
        console.log("Hello")
        fetch('https://floating-springs-68465.herokuapp.com/addOrder', {
            method: 'POST',
            body: JSON.stringify(DeliveryInfo),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log("sr", json));
    }
    return (
        <div>
            <Banner />
            <Container className="py-5">
                <h2>Food Cart</h2>
                <Row>
                    <Col md={8}>
                        <Address setAllInfo={setAllInfo} setPayment={setPayment} />
                    </Col>
                    <Col md={4}>
                        <CartInfo PlaceOrder={PlaceOrder} payment={payment}></CartInfo>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodCart;