import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import OthersMeal from '../OthersMeal/OthersMeal';
import { BsEmojiSmile, BsBoxArrowInRight } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { AddToCart } from '../../redux/actions/CartActions';
import './EachDetails.css';

const EachDetails = ({ Ig }) => {
    const catagory = Ig.strCategory;
    console.log(Ig)
    const id = Ig.idMeal
    const [IgData, setIgData] = useState([]);
    const dispatch = useDispatch()
    const [count, setcount] = useState(1);
    const handleIncrease = () => {

        const newCount = Object.keys({ matchData: Ig }).length;
        console.log(newCount)
        const TotalCount = newCount + count * 1;

        ;
        setcount(TotalCount)
    }
    const handleDecrease = () => {

        const TotalCount = count - 1;
        if (TotalCount < 0) {
            return 0
        }
        else {
            setcount(TotalCount)
        }
    }
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

                    <span className="cart"><AiOutlineMinus style={{ cursor: "pointer" }} onClick={() => handleDecrease()} />  <b className="p-3">{count}</b>
                        <AiOutlinePlus style={{ cursor: "pointer" }} onClick={() => handleIncrease()} />  </span>
                    <br />
                    <br />
                    <Button className='w-50' onClick={() => dispatch(AddToCart(Ig,count), notify())}>Add to cart</Button>
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