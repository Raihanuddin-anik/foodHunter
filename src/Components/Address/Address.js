import React, { useEffect, useRef, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import MakePayment from '../Payment/MakePayment';
import { FaCreditCard } from 'react-icons/fa';
import './Address.css'
import { auth } from '../../Pages/LogIn/LogIn';
import { useAuthState } from 'react-firebase-hooks/auth';

const Address = ({ setPayment ,setAllInfo}) => {
    const [disabled, setDisabled] = useState('disabled');
    const [disabledAddress, setdisabledAddress] = useState('disabled')

    const inputRef = useRef();
    const textAreaRef = useRef()
    useEffect(() => {
        if (!disabled) {
            inputRef.current.focus();

        } else {
            inputRef.current.blur()
        }
    }, [disabled])
    useEffect(() => {
        if (!disabledAddress) {
            textAreaRef.current.focus();

        } else {
            textAreaRef.current.blur()
        }
    }, [disabledAddress])
    const [logInInfo] = useAuthState(auth);

    const [user, setuser] = useState({
        name: logInInfo?.displayName,
        number: '',
        Address: ''
    })
    const ChangeNameNumberAddress = (e) => {
        const NewUserInfo = { ...user };
        NewUserInfo[e.target.name] = e.target.value;
        setuser(NewUserInfo);
        setAllInfo(NewUserInfo);
    }



    return (
        <Container>
            <div className='User_Info'>
                <div className='d-flex justify-content-end'>
                    <div>
                        <b className='list_ab'>a</b>
                    </div>

                    <div className='div_section'>
                        <div className='d-flex '>
                            <h6 className='Off_White'>{user.name && user.number ? <span style={{ color: "green" }}>LOGIN</span>:<span style={{ color: "black" }}>LOGIN</span> }</h6>
                            <h6 className='ms-2 '>{user.name && user.number ? <span style={{ color: "green" }}>< BsCheckLg /></span> : <span style={{ color: "red" }}><ImCross /><small className='provide_Info'>provide your Name and Number</small></span>}</h6>
                        </div>
                        <div className='user_input'>
                            <input ref={inputRef} placeholder="Name" value={user.name} name="name" disabled={disabled} onChange={(e) => ChangeNameNumberAddress(e)} type="text"></input>
                            <input ref={inputRef} placeholder="Number" name="number" disabled={disabled} onChange={(e) => ChangeNameNumberAddress(e)} type="number"></input>
                        </div>
                    </div>
                    <div className="ms-auto">
                        <Button className="submit_btn" variant="info" onClick={() => setDisabled(!disabled)}>Change</Button>
                    </div>

                </div>

            </div>

            <div className='User_Info mt-5'>
                <div className='d-flex justify-content-end'>
                    <div>
                        <b className='list_ab'>b</b>
                    </div>

                    <div className='div_section'>
                        <div className='d-flex '>
                            <h6 className='Off_White'>{user.Address ? <span style={{ color: "green" }}>SHIPPING ADDRESS</span>:<span style={{ color: "black" }}>SHIPPING ADDRESS</span>}</h6>
                            <h6 className='ms-2 icon_color'>{user.Address ? <span style={{ color: "green" }}>< BsCheckLg /></span> : <span style={{ color: "red" }}><ImCross /><small className='provide_Info'>provide your Address</small></span>}</h6>
                        </div>
                        <div>

                            <textarea ref={textAreaRef} disabled={disabledAddress} placeholder='Give delivery address' className='Address_Input' rows="2"  value={user.Address} onChange={(e) => ChangeNameNumberAddress(e)} name="Address"></textarea>
                        </div>
                    </div>
                    <div className="ms-auto">
                        <Button className="submit_btn" onClick={() => setdisabledAddress(!disabledAddress)} variant="info">Change</Button>
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

                </div>


            </div>
            <div className='Card_Info mt-3'>
                <div className='d-flex justify-content-start'>

                    <div className='list_C'></div>


                    <div className=' ms-5'>
                        <div className='d-flex'>
                            <div className='card_Icon'>  <FaCreditCard /> </div>
                            <h6 className="ms-5">Debit/Credit Card</h6>
                        </div>

                    </div>

                </div>


            </div>
            <div className='Make_payment mt-3'>


                <MakePayment setPayment={setPayment} />






            </div>

        </Container>

    );
};

export default Address;