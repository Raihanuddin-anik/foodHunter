import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import customHook from '../../Hooks/customHook';
import MealService from '../../Services/MealService';
import Banner from '../../Components/Banner/Banner';
import Header from '../../Components/Header/Header';
import Meals from '../../Components/Meals/Meals';
import axios from 'axios';

const Home = () => {
const [ data, setData] = useState([]);
console.log(data)
    useEffect(()=>{
        axios.get('http://localhost:3100/Meals')
            .then(res => setData(res.data))
    },[])
 
  
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