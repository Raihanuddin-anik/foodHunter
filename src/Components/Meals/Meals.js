import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Meals = ({ meal }) => {
    console.log(meal)
    const key = meal.idMeal;
    return (

        <Col md={3} xs={6}>
            <Link to={'/details/' + key}>
                <div style={{ margin: "10px" }}>
                    <Card.Img variant="top" src={meal.strMealThumb} />
                    <p style={{ color: "white", textAlign: "center" }}>{meal.strMeal}</p>
                </div>
            </Link>
        </Col >

    );
};

export default Meals;