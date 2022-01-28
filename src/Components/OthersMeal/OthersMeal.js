import React from 'react';
import { Col, Image, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OthersMeal = ({ meals }) => {
    console.log(meals)
    const key = meals.idMeal;
    return (
        
            <Col md={4} >
                 <Link to={'/details/' + key}>
                <Image src={meals.strMealThumb} className='w-100' />
                <p style={{ textAlign: "center", color: "white" }}>{meals.strMeal}</p>
                </Link>
            </Col>
        
    );
};

export default OthersMeal;