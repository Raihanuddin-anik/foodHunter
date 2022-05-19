import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import customHook from '../../Hooks/customHook';
import MealService from '../../Services/MealService';
import Banner from '../../Components/Banner/Banner';
import Header from '../../Components/Header/Header';
import Meals from '../../Components/Meals/Meals';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import axios from 'axios';
import Ingredient from '../../Components/Ingredient/Ingredient';
import Shefs from '../../Components/Shefs/Shefs';
import Shef from '../../RandomMeals';
import './Home.css'

const Home = () => {
    const [data, setData] = useState([]);
    const [slicedData, setSlicedData] = useState([]);
    const [startNumber, setStartNumner] = useState(0);
    const [lastNumber, setLastNumber] = useState(8)
    useEffect(() => {
        axios.get('https://floating-springs-68465.herokuapp.com/Meals')
            .then(res => setData((res.data)))
    }, [])
    useEffect(() => {
        const doSlice = data.slice(startNumber, lastNumber);
        setSlicedData(doSlice)
    }, [data, lastNumber])

    return (


        <div >
            <Banner />
            <Container className="mb-5 mt-5">
                <h4>Showing {slicedData.length} out of {data.length}</h4>
                <Row>
                    {
                        slicedData?.map((meal) => (
                            <Meals key={meal.idCategory}
                                meal={meal} />
                        ))
                    }
                </Row>
                <div className='more_btn' >
                    <button onClick={() => setLastNumber(lastNumber - 1)} className="arrowBtn">< IoIosArrowBack /></button>
                    <button className="btn2">{slicedData.length}</button>
                    <button onClick={() => setLastNumber(lastNumber + 1)} className="arrowBtn">< IoIosArrowForward /></button>
                </div>
            </Container>
            <Ingredient />
            <Shefs />
        </div>


    );
};

export default Home;