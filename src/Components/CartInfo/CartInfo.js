import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart } from '../../redux/actions/CartActions';
import { Link } from 'react-router-dom';
import {AiFillDelete} from 'react-icons/ai';

const CartInfo = ({ payment, PlaceOrder }) => {
    console.log("show", payment)
    const cart = useSelector((state) => state.cartReducers);
    const dispatch = useDispatch()
    const total = cart.reduce((total, prd) => total + parseInt(prd.id), 0);
    return (
        <div>

            <div>
                <div style={{ alignItems: "center" }}>

                    {cart.map((data) => <div style={{ backgroundColor: "rgb(245, 241, 241)", borderRadius: "10px" }} className="d-flex mt-2 p-2">
                        <div className="d-flex justify-content-between">
                            <img className='w-25 Meal_thumb' src={data.ImgUrl} />
                         
                            <div className='text-center'>
                                <small>{data.Name}</small>
                                <br/>
                                <b>{data.id}$</b>
                                <p> portion : {data.count}</p>
                                
                            </div>
                            
                            <AiFillDelete style={{color:"red", marginTop:"10px",fontSize:"30px",cursor:"pointer"}} onClick={() => dispatch(RemoveFromCart(data.newId))}>Remove</AiFillDelete>

                        </div>



                    </div>)}

                </div>

            </div>
            <div>

                <div className="mt-3 p-2">
                    <div className="d-flex">
                        <div>
                            <h6> {cart.length} item</h6>
                        </div>
                        <div className="ms-auto">
                            <h6 >{total}$</h6>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div>
                            <h6>Tax</h6>
                        </div>
                        <div className="ms-auto">
                            <h6 >12$</h6>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div>
                            <h6>Delivery</h6>
                        </div>
                        <div className="ms-auto">
                            <h6 >5$</h6>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div>
                            <h6>Total</h6>
                        </div>
                        <div className="ms-auto">
                            <h6 >{total}$</h6>
                        </div>
                    </div>
                </div>
                <Button onClick={() => PlaceOrder()} disabled={!payment} variant="success" className="w-100"><Link to="/success">Place</Link></Button>
            </div>

        </div>
    );
};

export default CartInfo;