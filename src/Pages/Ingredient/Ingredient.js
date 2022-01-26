import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import EachIngerdient from '../../Components/EachIngredient/EachIngerdient';

const Ingredient = () => {
    const { key } = useParams()
    const [IgData, setIgData] = useState([])
    console.log(IgData)
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${key}`)
            .then((response) => {
                // handle success
                setIgData(response.data.meals);
            })

    }, [])

    return (
        <Container>
            <Row>
                {IgData.map((Ig) => <EachIngerdient Ig={Ig} key={Ig.idMeal} />)}
            </Row>
        </Container>
    );
};

export default Ingredient;