import React from 'react';
import { Col, Image, Container, Row } from 'react-bootstrap';

const OthersMeal = ({ meals }) => {
    console.log(meals)
    return (
        
               <>
                    <Image src={meals.strMealThumb} className='w-25' />
               </>
          
    );
};

export default OthersMeal;