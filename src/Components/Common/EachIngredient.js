import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EachIngredient = ({ item }) => {
    const key = item.idMeal
    return (
        <Col md={3} xs={6}>
            <Link to={'/details/' + key}>
                <Image className="w-100" src={item.Img} />
                <p style={{ color: "white", textAlign: "center" }}>{item.item}</p>
            </Link>
        </Col>
    );
};

export default EachIngredient;