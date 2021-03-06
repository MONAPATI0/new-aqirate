import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../layout';
import image3 from '../images/bg-BeingAI-p.jpg';

const BeingPositive = () => {
        return (

            <div>
                <Layout>
                    <img src={image3} alt="no image" style={{ height: "300px", width: "100%" }} />
                    <div className="d-flex" style={{ position: "relative", top: "-14.9rem", left: "40px", fontSize: "12px" }}>
                        <p className="text-white normal-para" ><Link to="/" className="text-white">Home&nbsp;</Link>/</p><p><Link to="/About-Us" className="text-white">&nbsp;About Us /</Link></p><p><Link to="/" className="text-white">&nbsp; Being AI +Ve</Link></p>
                    </div>
                    <h2 className="text-white" style={{ position: "relative", top: "-12rem", left: "40px" }}> Being AI +Ve</h2>
                    <Container>
                        <Row>
                            <Col className="mb-5">
                                <p className="normal-para" style={{marginTop:"-50px"}}>
                                    Our world still faces pressing systemic challenges that affect humanity at a large scale.  From our <strong>complex and
                                labyrinthine legal systems, traffic congestions, water scarcity, pollution and sanitation to the </strong>
                                    <strong>inefficiencies in our healthcare sector, large-scale problems still abound.</strong> The need of the hour is to better
                                    connect the people with basic facilities they require. AI may not be panacea in and of itself, but there it offers a
                                    huge potential to improve the quality of life of people across the globe. Thankfully, today multiple nations have
                                the intellectual capital – our peers in the<strong>AI domains</strong>  – that can bring substantial dividend for the population
                                                    at large.
                            </p>
                                <p className="normal-para">
                                    At AIQRATE, our attempt will be to touch upon how AI can be used to address large, complex and unsolved
                            problems and contribute to improving the<strong>quality of life of humanity</strong> and enable the<strong>Positive Use of AI</strong> for all.
                                                                    Being AI +ve is the way to go.
                            </p>
                                <p className="normal-para">Reach out to us with your suggestions and inputs at&nbsp;<a href="" style={{ color: "blue" }}>consult@aiqrate.ai.</a></p>
                            </Col>
                        </Row>
                    </Container>
                </Layout>
            </div>
        )
    }
export default BeingPositive;