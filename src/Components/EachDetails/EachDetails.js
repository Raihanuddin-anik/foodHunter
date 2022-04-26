import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import OthersMeal from '../OthersMeal/OthersMeal';
import { BsEmojiSmile, BsBoxArrowInRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {cartContext} from '../../App'
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../redux/actions/CartActions';

const EachDetails = ({ Ig }) => {
    const catagory = Ig.strCategory;
    const id = Ig.idMeal
    const [IgData, setIgData] = useState([]);
    const [cartItem, setCartItem] = useContext(cartContext);
  const dispatch =  useDispatch()
    const notify = () => toast("Added To Card!");
    
    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catagory}`)
            .then((response) => {
                // handle success
                setIgData(response.data.meals);
            })
            

    }, [catagory])

    // const AddToCart = (meal) =>{
    //     let Multiple ;
    //     Multiple = [...cartItem, meal];
    //     setCartItem(Multiple)
    //     notify()
    //   }
   

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
                    <Button onClick={()=>dispatch(AddToCart(Ig),notify())}>Add to cart</Button>
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
                        {IgData.map((meals) => <OthersMeal AddToCart={AddToCart} meals={meals} key={meals.idMeal} />)}
                    </Row>
                </Container>
            </Col>


        </>
    );
};

export default EachDetails;