import { axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import EachIngredient from '../Common/EachIngredient';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './Ingredient.css';

const Ingredient = () => {
    const [Ingredient, setIngredient] = useState([])

    useEffect(() => {
        fetch('https://floating-springs-68465.herokuapp.com/Ingredients')
            .then(response => response.json())
            .then(json => setIngredient(json))
    }, [Math.random()])

    return (
        <div  className='Ingredient_div'>
            <Container >

                <Row>
                    <h5 style={{ color: "white", textAlign: "center",margin:"15px" }}>Which Item do you Like Most?</h5>
                    <OwlCarousel className="owl-theme"  loop autoplay={true} autoplayTimeout={2000} items={4} >
                        {Ingredient.map((item) => (
                            <EachIngredient item={item} key={item._id} />
                        ))}
                    </OwlCarousel>
                </Row>
            </Container>
        </div>
    );
};

export default Ingredient;