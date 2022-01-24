import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import customHook from '../../Hooks/customHook';
import MealService from '../../Services/MealService';
import Banner from '../../Components/Banner/Banner';
import Header from '../../Components/Header/Header';
import Meals from '../../Components/Meals/Meals';

const Home = () => {
const [ data, setData] = useState([])
    useEffect(()=>{
        MealService.getAllMeal().then((res)=>setData(res))
    })
 
    console.log(data)
    return (
        <div style={{backgroundColor:"black"}}>
            <Header />
            <Banner />
            <Container>
                <Row>
                    {
                        data?.map((meal) => (
                            <Meals key={meal.idCategory}
                                meal={meal} />
                        ))
                    }
                </Row>
            </Container>
            
        </div>
    );
};

export default Home;