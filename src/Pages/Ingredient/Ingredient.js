import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Ingredient = () => {
    const {key} = useParams()
    const [IgData, setIgData] = useState([])
    console.log(IgData)
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${key}`)
            .then((response) => {
                // handle success
                setIgData(response.data.meals);
            })

    },[])
    return (
        <div>

        </div>
    );
};

export default Ingredient;