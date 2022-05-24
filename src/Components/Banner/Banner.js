import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header'; 
import {AiOutlineBars} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Pages/LogIn/LogIn';
import './Banner.css'
const Banner = () => {

    const [user] = useAuthState(auth);
    console.log(user);
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
                        <li>{user?<Link className='nav_item' to='/profile'> Profile </Link>: <Link className='nav_item' to='/login'>LogIn </Link>}</li>
                        <li><Link className='nav_item' to='/foodCart'>{cart.length} <AiOutlineShoppingCart /></Link></li>
                    </ul>
                  
            </nav>
          
        
        </div>


    );
};

export default Banner;
