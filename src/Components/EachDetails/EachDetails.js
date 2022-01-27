import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import OthersMeal from '../OthersMeal/OthersMeal';

const EachDetails = ({ Ig }) => {
    const catagory = Ig.strCategory;
    const [IgData, setIgData] = useState([]);
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catagory}`)
            .then((response) => {
                // handle success
                setIgData(response.data.meals);
            })

    }, [catagory])
    
    return (
        <Row>
            <Col md={4}>
                 <Image src={Ig.strMealThumb} className="w-100"/>
            </Col>
            <Col md={8}>
                {IgData.map((meals)=> <OthersMeal meals={meals} key={meals.idMeal} />)} 
            </Col>
        </Row>
    );
};

export default EachDetails;