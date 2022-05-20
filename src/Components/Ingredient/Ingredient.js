import { axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import EachIngredient from '../Common/EachIngredient';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const Ingredient = () => {
    const [Ingredient, setIngredient] = useState([])
    console.log(Ingredient)
    useEffect(() => {
        fetch('https://floating-springs-68465.herokuapp.com/Ingredients')
            .then(response => response.json())
            .then(json => setIngredient(json))
    }, [ ])
   
    return (
        <Container>
            
            <Row>
            <h5 style={{ color: "white", textAlign: "center" }}>Which Item do you Like Most?</h5>
            <OwlCarousel className="owl-theme" autoplay={true} center={true} loop margin={5} nav>
                {Ingredient.map((item) => (
                    <EachIngredient item={item} key={item._id} />
                    ))}
             </OwlCarousel>
            </Row>
        </Container>
    );
};

export default Ingredient;