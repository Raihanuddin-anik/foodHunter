import React from 'react';
import { Container, Table, Row, Col, Image, Button } from 'react-bootstrap';
import {AiFillDelete} from 'react-icons/ai'
import './Cart.css'
// import { cartContext } from '../../App'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart } from '../../redux/actions/CartActions';
const Cart = () => {
    const cart = useSelector((state) => state.cartReducers);
    const dispatch = useDispatch()
    
    const total = cart.reduce( (total,prd) => total + parseInt(prd.idMeal) , 0);
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
            .then((json) => console.log("sr",json));
    }
    return (
        <div style={{ backgroundColor: "black", height: "300vh" }}>
            <Container className="py-5">
                <Row>
                    <Col md={8}>
                        <h4 style={{ color: "white" }}>Your Cart Have {cart.length} Item</h4>
                        <Table variant="dark">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Origin</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((data) => <tr>
                                    <td className='w-25'><Image src={data.strMealThumb} className="img-fluid w-25" /></td>
                                    <td className='w-25'>${data.strMeal}</td>
                                    <td className='w-25'>${data.idMeal}</td>
                                    <td className='w-25'>${data.strArea}</td>
                                    <td style={{fontSize:"20px",cursor:"pointer"}} onClick={()=>dispatch(RemoveFromCart(data.idMeal))} ><AiFillDelete/></td>
                                </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="bg-dark" md={4}>
                        <div className='cart-totals fl-warp'>
                            <Table className="total-table">
                                <tbody>
                                    <tr>
                                        <th> Cart Subtotal:</th>
                                        <td>${total}</td>
                                    </tr>
                                    <tr>
                                        <th> Shipping Total:</th>
                                        <td>$12</td>
                                    </tr>
                                    <tr>
                                        <th> Total:</th>
                                        <td>${total + 12}</td>
                                    </tr>
                                </tbody>

                            </Table>
                          <Link to="/success">  <Button onClick={()=>PlaceOrder()} className="ms-5">Place Order</Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;