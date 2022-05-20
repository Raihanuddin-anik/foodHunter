import React, { useContext } from 'react';
import { CardImg, Container, Image, Nav, Navbar } from 'react-bootstrap';
import image from '../../assest/p-logo.png';
import { GoLocation } from "react-icons/go";
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {AiOutlineMail} from 'react-icons/ai'
import './Header.css';

const Header = () => {

    return (
        <div className="top_Nav">
            <h6> <GoLocation /> &nbsp; Silk St, Barbican, London EC2Y 8DS, UK</h6>
            <div><span><BsFillTelephonePlusFill />  +39-055-123456 </span>&nbsp; &nbsp;<span> <AiOutlineMail />  booking@patiotime.com</span></div>
            
        </div>
    );
};

export default Header;