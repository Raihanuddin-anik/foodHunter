import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import sideLogo from '../../assest/meal-icon.png';
import banner from '../../assest/shop-bg-darken.jpg';
import Header from '../Header/Header'; 
import {AiOutlineBars} from 'react-icons/ai'
import './Banner.css'
const Banner = () => {
    return (

        <div className="Banner" >
            
            <nav>
                <input type="checkbox" id="check"/>
                    <label for="check" className="checkbtn">
                        <AiOutlineBars/>
                    </label>
                    <label className="logo">FoodX</label>
                    <ul>
                        <li> <Link to='/'><a className="active" href="#">Home</a></Link></li>
                        <li> <Link to='/cart'><a href="#">About</a></Link></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Feedback</a></li>
                    </ul>
            </nav>


        </div>


    );
};

export default Banner;
