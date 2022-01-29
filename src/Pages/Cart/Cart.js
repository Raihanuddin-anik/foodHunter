import React from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import './Cart.css'

const Cart = () => {
    return (
        <div style={{backgroundColor:"black", height:"300vh"}}>
            <Container className="py-5">
                <Row>
                    <Col md={8}>
                        <Table variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>

                            </tbody>
                        </Table>
                    </Col>
                    <Col className="bg-dark" md={4}>
                        <div className='cart-totals fl-warp'>
                            <table className="total-table">
                                <tbody>
                                    <tr>
                                        <th> Cart Subtotal:</th>
                                        <td>$240</td>
                                    </tr>
                                    <tr>
                                        <th> Cart Subtotal:</th>
                                        <td>$240</td>
                                    </tr>
                                    <tr>
                                        <th> Cart Subtotal:</th>
                                        <td>$240</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;