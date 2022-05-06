import React from 'react';
import { Col, Image, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OthersMeal = ({ meals, AddToCart }) => {
    
    const key = meals.idMeal;
    return (
        
            <Col md={4} sm={6} xs={6}>
                 <Link to={'/details/' + key}>
                <Image src={meals.strMealThumb} className='w-100' />
                <p style={{ textAlign: "center", color: "white",textDecoration:"none" }}>{meals.strMeal}</p>
                </Link>
                
            </Col>
        
    );
};

export default OthersMeal;