import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Shef from '../../RandomMeals';
import EachShef from '../Common/EachShef';

const Shefs = () => {

    return (
        <Container>
            <div style={{textAlign:"center"}}>
                <h5>Our Awesome Team</h5>
                <h2>Met Our Shef</h2>
            </div>
            <Row>
                {Shef.map((person) => (<EachShef person={person} key={person.id} />))}
            </Row>
        </Container>
    );
};

export default Shefs;