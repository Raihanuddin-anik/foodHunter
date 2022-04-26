import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart } from '../../redux/actions/CartActions';
import './Shipment.css'
const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const cart = useSelector((state) => state.cartReducers);
    const dispatch = useDispatch()
    const total = cart.reduce( (total,prd) => total + parseInt(prd.idMeal) , 0);
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* include validation with required or other standard HTML validation rules */}
                        <input className="inputfield" placeholder='Name' {...register("exampleRequired", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span className="error">This field is required</span>}
                        <input className="inputfield" placeholder='email' type="email" {...register("exampleRequired", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span className="error">This field is required</span>}
                        <input className="inputfield" placeholder='Phone' {...register("exampleRequired", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span className="error">This field is required</span>}
                        <input className="inputfield" placeholder='Address' {...register("exampleRequired", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span className="error">This field is required</span>}
                        <Button variant="danger" className="mt-3 w-100">Submit</Button>
                    </form>
                </Col>

                <Col md={6}>
                    <Row>
                        <Col >
                            <div>
                                <div style={{ width: '20rem', alignItems: "center" }}>

                                    {cart.map((data) => <div style={{ backgroundColor: "rgb(245, 241, 241)", borderRadius: "10px" }} className="d-flex mt-2 p-2">
                                        <div className="d-flex">
                                            <img className='w-25 Meal_thumb' src={data.strMealThumb} />
                                            <div className="p-2 ms-2">
                                                <small>{data.strMeal}</small>
                                                <br />
                                                <b>{data.idMeal}$</b>

                                            </div>
                                            <Button style={{ width: "40%", height: "40px" }} onClick={() => dispatch(RemoveFromCart(data.idMeal))}>Remove</Button>
                                        </div>

                                        <small style={{ marginTop: "44px", marginRight: "8px" }}>  </small>

                                    </div>)}

                                </div>

                            </div>
                        </Col>
                        <Col >
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
                                <Button  className="w-100">Place</Button>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
};

export default Shipment;