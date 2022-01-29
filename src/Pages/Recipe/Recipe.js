import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetails from '../../Components/Common/RecipeDetails';
import Header from '../../Components/Header/Header';

const Recipe = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState([])
    console.log(recipe)
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => {
                // handle success
                setRecipe(response.data.meals);
            })

    }, [id])
    return (
        <div>
           {recipe.map((data)=>(<RecipeDetails data={data}/>))}
        </div>
    );
};

export default Recipe;