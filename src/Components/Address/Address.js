import React from 'react';
import { Button } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs'
import Payment from '../Payment/Payment';
import './Address.css'

const Address = () => {
    return (
        <div>
            <div className='User_Info'>
                <div className='d-flex justify-content-end'>
                    <div>
                        <b className='list_ab'>a</b>
                    </div>

                    <div className='ms-5'>
                        <div className='d-flex '>
                            <h6 className='Off_White'>LOGIN</h6>
                            <h6 className='ms-2 icon_color'><BsCheckLg /></h6>
                        </div>
                        <div className='user_input'>
                            <input value="Raihan Bhuiyan" type="text"></input>
                            <input value="01531834607" type="number"></input>
                        </div>
                    </div>
                    <div className="ms-auto">
                        <Button variant="light">Change</Button>
                    </div>

                </div>

            </div>

            <div className='User_Info mt-5'>
                <div className='d-flex justify-content-end'>
                    <div>
                        <b className='list_ab'>b</b>
                    </div>

                    <div className='ms-5'>
                        <div className='d-flex '>
                            <h6 className='Off_White'>SHIPPING ADDRESS</h6>
                            <h6 className='ms-2 icon_color'><BsCheckLg /></h6>
                        </div>
                        <div className='user_input'>

                            <input value="01531834607" type="number"></input>
                        </div>
                    </div>
                    <div className="ms-auto">
                        <Button variant="light">Change</Button>
                    </div>

                </div>

            </div>
            <div className='Payment_Info mt-3'>
                <div className='d-flex justify-content-start'>
                    <div>
                        <b className='list_ab'>C</b>
                    </div>

                    <div className=' ms-5'>
                        <div className='d-flex '>
                            <h6 className=''>PAYMENT METHOD</h6>
                            
                        </div>
                     
                    </div>
                    <Payment/>
                    

                </div>

            </div>
        </div>

    );
};

export default Address;