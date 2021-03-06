import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import EachDetails from '../../Components/EachDetails/EachDetails';
import Header from '../../Components/Header/Header';
import OthersMeal from '../../Components/OthersMeal/OthersMeal';


const DetailsFood = () => {
    const { key } = useParams()
    const [IgData, setIgData] = useState([])

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${key}`)
            .then((response) => {
                // handle success
                setIgData(response.data.meals);
            })

    }, [key])


    return (
        <div>
           <Banner/>
            <div style={{ backgroundColor: "black" }}>
                <Container >
                    <Row>
                        {IgData.map((Ig) => <EachDetails Ig={Ig} key={Ig.idMeal} />)}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default DetailsFood;