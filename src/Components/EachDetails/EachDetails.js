import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import OthersMeal from '../OthersMeal/OthersMeal';
import { BsEmojiSmile, BsBoxArrowInRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EachDetails = ({ Ig }) => {
    const catagory = Ig.strCategory;
    const notify = () => toast("Wow so easy!");
    const id = Ig.idMeal
    const [IgData, setIgData] = useState([]);
    console.log(IgData)
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catagory}`)
            .then((response) => {
                // handle success
                setIgData(response.data.meals);
            })

    }, [catagory])

    return (
        <>
            <Col md={4} >
                <h5 style={{
                    textAlign: "center",
                    color: "white",
                    marginBottom: "30px",
                    marginTop: "30px"
                }}>{Ig.strMeal}</h5>
                <Image src={Ig.strMealThumb} className="w-100 " />
                <div style={{ textAlign: "center", marginTop: "20px" }}>

                    <ToastContainer position="top-right"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover />
                    <Button onClick={notify}>Add to cart</Button>
                    <h5 style={{
                        color: "white", marginTop: "20px"
                    }}> Wanna Make Yourself ? <BsEmojiSmile /></h5>
                    <Link to={'/recipe/' + id}> <p style={{
                        textAlign: "center"
                    }} > Let's Explore <BsBoxArrowInRight /> </p></Link>

                </div>
            </Col>
            <Col md={8} >
                <Container >
                    <Row>
                        <h5 style={{
                            textAlign: "center",
                            color: "white",
                            marginBottom: "30px",
                            marginTop: "30px"
                        }}>Look On Related Meals</h5>
                        {IgData.map((meals) => <OthersMeal meals={meals} key={meals.idMeal} />)}
                    </Row>
                </Container>
            </Col>


        </>
    );
};

export default EachDetails;