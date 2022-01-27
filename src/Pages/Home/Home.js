import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import customHook from '../../Hooks/customHook';
import MealService from '../../Services/MealService';
import Banner from '../../Components/Banner/Banner';
import Header from '../../Components/Header/Header';
import Meals from '../../Components/Meals/Meals';
import axios from 'axios';
import Ingredient from '../../Components/Ingredient/Ingredient';

const Home = () => {
    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
        axios.get('http://localhost:3100/Meals')
            .then(res => setData(res.data))
    }, [])

   
    return (
        <div style={{ backgroundColor: "black" }}>
            <Header />
            <Banner />
            <Container className="mb-5">
                <Row>
                    {
                        data?.map((meal) => (
                            <Meals key={meal.idCategory}
                                meal={meal} />
                        ))
                    }
                </Row>
            </Container>
            <Ingredient/>


        </div>
    );
};

export default Home;