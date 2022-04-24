import React from 'react';
import { Container,Row,Col, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sideLogo from '../../assest/meal-icon.png';
import patreon from '../../assest/patreon_logo.png';
import './Banner.css'
const Banner = () => {
    return (
 
            <Container style={{paddingTop:"40px"}} >
                <Row>
                    <Col className="text-white text-center" lg={2}>
                       <Link to='/'> <Image   src={sideLogo} /></Link> 
                    </Col>
                    <Col className="text-white text-center ps-5" lg={8}>
                       <h1 className="text-white">Welcome to RestaBook</h1>
                     <p> Welcome to RestaBook: An open, crowd-sourced database of Recipes from around the world.
                 We also offer a free JSON API for anyone wanting to use it.<br/>
                 If you like the site, please consider supporting us on Patreon by clicking the link below./..</p>
                
                  <Image className="w-25"  src={patreon} />
                   <p>Click to Support: Currently 650 supporters</p>
                    </Col>
                    <Col className="text-white text-center second_Img" lg={2}>
                        <img   src={sideLogo} />
                    </Col>
                </Row>
            </Container>
       
        
    );
};

export default Banner;
