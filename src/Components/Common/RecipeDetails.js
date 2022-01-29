import React from 'react';
import { Container, Row, Col, Image, Table } from 'react-bootstrap';

const RecipeDetails = ({ data }) => {
    console.log(data)
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Image src={data.strMealThumb} className='w-100' />
                    <p className='mt-5'>{data.strInstructions}</p>
                </Col>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>  
                                <th>Ingredients</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data.strIngredient1}</td>
                                <td>{data.strMeasure1}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient2}</td>
                                <td>{data.strMeasure2}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient3}</td>
                                <td>{data.strMeasure3}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient4}</td>
                                <td>{data.strMeasure4}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient5}</td>
                                <td>{data.strMeasure5}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient6}</td>
                                <td>{data.strMeasure6}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient7}</td>
                                <td>{data.strMeasure7}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient8}</td>
                                <td>{data.strMeasure8}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient9}</td>
                                <td>{data.strMeasure9}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient10}</td>
                                <td>{data.strMeasure10}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient11}</td>
                                <td>{data.strMeasure11}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient12}</td>
                                <td>{data.strMeasure12}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient13}</td>
                                <td>{data.strMeasure13}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient14}</td>
                                <td>{data.strMeasure14}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient15}</td>
                                <td>{data.strMeasure15}</td>
                            </tr>
                            <tr>
                                <td>{data.strIngredient16}</td>
                                <td>{data.strMeasure16}</td>
                            </tr>
                        
                            <tr>
                                <td>{data.strIngredient17}</td>
                                <td>{data.strMeasure17}</td>
                            </tr>
                        
                            <tr>
                                <td>{data.strIngredient18}</td>
                                <td>{data.strMeasure18}</td>
                            </tr>
                        
                            <tr>
                                <td>{data.strIngredient19}</td>
                                <td>{data.strMeasure19}</td>
                            </tr>
                        
                            <tr>
                                <td>{data.strIngredient20}</td>
                                <td>{data.strMeasure20}</td>
                            </tr>
                        
                        
                           
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default RecipeDetails;