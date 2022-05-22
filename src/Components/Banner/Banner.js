import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import sideLogo from '../../assest/meal-icon.png';
import Header from '../Header/Header'; 
import {AiOutlineBars} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Pages/LogIn/LogIn';
import {  signOut } from "firebase/auth";
import './Banner.css'
const Banner = () => {
    let navigate = useNavigate();
    const handleSingOut = () => {
        signOut (auth)
            .then(res => {
               console.log(res)
               navigate('/')
                }
             )
            .catch(err => {
              console.log(err)
            })
    }
    const [user] = useAuthState(auth);
    const cart = useSelector((state) => state.cartReducers);
    return (

        <div className="Banner" >
            <Header/>
            <nav>
                <input type="checkbox" id="check"/>
                    <label for="check" className="checkbtn">
                        <AiOutlineBars/>
                    </label>
                    <label className="logo">FoodX</label>
                    <ul>
                        <li> <Link className='nav_item' to='/'>Home</Link></li>
                        <li className='nav_item'> About</li>
                        <li>{user?<Link className='nav_item' to='/profile'> {user?.displayName} </Link>: <Link className='nav_item' to='/login'>LogIn </Link>}</li>
                        <li><Link className='nav_item' to='/foodCart'>{cart.length} <AiOutlineShoppingCart /></Link></li>
                    </ul>
                  
            </nav>
          
        
        </div>


    );
};

export default Banner;
