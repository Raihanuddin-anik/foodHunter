import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import customHook from '../../Hooks/customHook';
import MealService from '../../Services/MealService';
import Banner from '../../Components/Banner/Banner';
import Header from '../../Components/Header/Header';
import Meals from '../../Components/Meals/Meals';
import axios from 'axios';
import Ingredient from '../../Components/Ingredient/Ingredient';
import Shefs from '../../Components/Shefs/Shefs';
import Shef from '../../RandomMeals';

const Home = () => {
    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
        axios.get('https://floating-springs-68465.herokuapp.com/Meals')
            .then(res => setData(res.data))
    }, [])
    
    return (
        <div>

            <div style={{ backgroundColor: "black" }}>

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
                <Ingredient />
                <Shefs />
            </div>

        </div>
    );
};

export default Home;