import React, { Component } from 'react';
import Layout from '../layout';
import { Container, Row, Col } from 'react-bootstrap';
import img13 from "../images/bg-advisory-p.jpg"
import ExperienceSetup from '../images/AI-experience-centre-Enterprises.png';

const ExperienceCenterSetup = () => {
    return (
      <Layout>
        <img
          style={{ margin: 0 }}
          src={img13}
          alt="Landing3"
          style={{ height: "40vh", width: "100%" }}
        />
        <Container>
          <Row>
            <Col lg={6}>
              <img
                src={ExperienceSetup}
                alt="bg-home-wgatwedo"
                style={{ height: "auto" }}
              />
            </Col>
            <Col lg={6}>
              <p className="normal-para mt-2">
                AI experience centres showcase contextualized business cases
                built on AI techniques: computer vision, conversational AI,
                image classification, social media command center, thus making
                AI Interactive, Immersive and Intuitive (3i).
              </p>
              <p className="normal-para">
                Enterprises are using experience centers as innovation hubs to
                not only foster disruption in their business arenas but to also
                promote thought leadership and build strategic relationships.
                The AI experience Centre is a great experiential mechanism to
                exhibit to key stakeholders: clients, investors and end users on
                the efficacy of the AI use cases. This further accelerates
                adoption process in the enterprise.
              </p>
            </Col>
            <p className="normal-para">
              AIQRATE’s i-Cube framework will enable an experience centre set up
              approach with topical business use cases. The framework focusses
              on reducing time to market and the pay-back period and help with
              orienting the stakeholders required to get buy in and adoption.
            </p>
          </Row>
          {/* <Row>
          
          <h2 className="align-self-center">VIDEOS</h2>
          <div clasName="tutors-listing">
              <div className="row card-deck">
              <div className="col-xs-12 col-md-4 card-wrapper">
                  <div className="row tutor">
                    <div className="col-xs-offset-1 col-xs-4 col-md-12">
                    <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/MkggmSChVlk" allowfullscreen="allowfullscreen">
                    </iframe>
                        
                    </div>
                  </div>
                </div>
                  <div className="col-xs-12 col-md-4 card-wrapper">
                    <div className="row tutor">
                      <div className="col-xs-offset-1 col-xs-4 col-md-12">
                      <iframe width="100%" height="100%"
                              src="https://www.youtube.com/embed/MkggmSChVlk" allowfullscreen="allowfullscreen">
                      </iframe>
                          
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4 card-wrapper">
                    <div className="row tutor">
                      <div className="col-xs-offset-1 col-xs-4 col-md-12">
                      <iframe width="100%" height="100%"
                              src="https://www.youtube.com/embed/MkggmSChVlk" allowfullscreen="allowfullscreen">
                      </iframe>
                          
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-4 card-wrapper">
                    <div className="row tutor">
                      <div className="col-xs-offset-1 col-xs-4 col-md-12">
                      <iframe width="100%" height="100%"
                              src="https://www.youtube.com/embed/MkggmSChVlk" allowfullscreen="allowfullscreen">
                      </iframe>
                          
                      </div>
                    </div>
                  </div>
                  
                
               
                
              </div>
            </div>
         
          </Row> */}
        </Container>
      </Layout>
    )
  }
export default ExperienceCenterSetup;
