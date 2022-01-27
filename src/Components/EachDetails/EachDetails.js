import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const EachDetails = ({ Ig }) => {
    console.log(Ig)
    return (
        
            <Col md={3}>
                <Image className='w-100' src={Ig.strMealThumb} />
            </Col>
      
    );
};

export default EachDetails;