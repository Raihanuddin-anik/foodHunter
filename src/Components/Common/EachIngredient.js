import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EachIngredient = ({ item }) => {
    const key = item.idMeal
    return (
        <Col>
           
          
            <Link style={{textDecoration:"none"}} to={'/details/' + key}>
                <Image className="w-75" src={item.Img} />
                <p style={{ textAlign: "center",fontSize:"17px",color:"gray", }}>{item.item}</p>
            </Link>
       
        </Col>
    );
};

export default EachIngredient;