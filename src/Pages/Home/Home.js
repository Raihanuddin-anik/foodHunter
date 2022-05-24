import React, { useEffect, useState } from 'react';
import {  Container, Row, Spinner } from 'react-bootstrap';
import Banner from '../../Components/Banner/Banner';
import Meals from '../../Components/Meals/Meals';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import axios from 'axios';
import Ingredient from '../../Components/Ingredient/Ingredient';
import Shefs from '../../Components/Shefs/Shefs';
import './Home.css'
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    const [data, setData] = useState([]);
    const [slicedData, setSlicedData] = useState([]);
    const [startNumber, setStartNumner] = useState(0);
    const [lastNumber, setLastNumber] = useState(6)
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
                <h4 >SHOWING {slicedData.length} OUT OF {data.length}</h4>
                <div className='more_btn' >
                    <button onClick={() => setLastNumber(lastNumber - 1)} className="arrowBtn">< IoIosArrowBack /></button>
                    <button className="btn2">{slicedData.length}</button>
                    <button onClick={() => setLastNumber(lastNumber + 1)} className="arrowBtn">< IoIosArrowForward /></button>
                </div>
                {slicedData.length == 0 &&<div className='text-center'>
                    <Spinner className='text-center' animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>}
                <Row>
                    {
                        slicedData?.map((meal) => (
                            <Meals key={meal.idCategory}
                                meal={meal} />
                        ))
                    }
                </Row>
            </Container>
            <Ingredient />
            <Shefs />
            <Footer />

        </div>


    );
};

export default Home;