import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GoLocation } from 'react-icons/go';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import './Footer.css'
const Footer = () => {
    return (
        <div className='main_div'>
            <Container>
                <Row >
                    <Col md={3} style={{ marginTop: "60px" }}>
                        <h3>FoodX</h3>
                        <p className='web_Info'>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                        <div style={{ fontSize: '30px' }}><span><FaFacebookF /> </span>&nbsp;<span><AiOutlineTwitter /> </span>&nbsp; <span><AiFillInstagram /></span> &nbsp;<span><AiFillYoutube /></span>  &nbsp;<span> <AiFillLinkedin /></span></div>
                    </Col>
                    <Col md={3} style={{ marginTop: "60px" }}>
                        <h5>WORKING HOUR</h5>

                        <table>
                            <tbody>
                                <tr>
                                    <th>Monday - Friday</th>
                                    <td>09:00 - 22:00</td>
                                </tr>
                                <tr>
                                    <th>Saturday</th>
                                    <td>11:00 - 00:00</td>
                                </tr>
                                <tr>
                                    <th>Sunday</th>
                                    <td>11:00 - 23:00</td>
                                </tr>
                                <tr>
                                    <th><br /></th>
                                    <td><br /></td>
                                </tr>
                                <tr>
                                    <th>* Happy hour</th>
                                    <td>17:00 - 21:00</td>
                                </tr>
                            </tbody>
                        </table>

                    </Col>
                    <Col md={3} style={{ marginTop: "60px" }}>
                        <h5>OUR ADDRESS</h5>


                        <h6> <GoLocation /> &nbsp; Silk St, Barbican, London EC2Y 8DS, UK</h6>
                        <p><BsFillTelephonePlusFill /> &nbsp; +39-055-123456</p>
                        <p> <AiOutlineMail /> &nbsp; booking@patiotime.com</p>



                    </Col>
                    <Col md={3} style={{ marginTop: "60px" }}>
                        <h5>NEWSLETTER</h5>
                        <p>Receive the latest news from us.</p>
                        <input className='Email_Input' name='email' placeholder='Your Email Address' /> <AiOutlineArrowRight />
                        <br />
                        <br />
                        <input type='checkbox' /><span>  &nbsp; I agree to the privacy Policy</span>
                    </Col>
                    <br />
                    <br />
                  
                    <hr />
                    <div className=' security_div  mt-5 mb-3 '>
                        <p className='Copyright_p'>
                            © Copyright PatioTime WordPress Theme for Restaurant & Cafe.
                        </p>
                        <div className='privacy_p'>
                           <span> PRIVACY </span>&nbsp; &nbsp;
                          <span>  TERM OF USE</span> &nbsp; &nbsp;
                          <span>  POLICY</span>
                        </div>
                    </div>
                </Row>
            </Container>


        </div>
    );
};

export default Footer;