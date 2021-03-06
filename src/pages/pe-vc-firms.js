import React from 'react';
import Layout from '../layout';
import { Link } from 'gatsby';
import { Container, Row, Card, Col } from 'react-bootstrap';
import image3 from '../images/bg-vcpe-p.jpg';
import image4 from '../images/Update-file.png';

// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"
const PEVCFIRMS = () => {
    return (
      <div>
        <Layout>
        <img src={image3} style={{ height: '300px', width: '100%' }} />
          <div className="d-flex" style={{ position: 'relative', top: '-14rem', left: '15px', fontSize: '12px' }}>
            <p className="text-white">
              <Link to="/" className="text-white">
                Home&nbsp;
              </Link>
              /
            </p>
            <p>
              <Link to="/consulting" className="text-white">
                &nbsp;Consulting /
              </Link>
            </p>
            <p>
              <Link to="/" className="text-white">
                &nbsp;Venture Capital & Private Equity Firms
              </Link>
            </p>
          </div>
          <h2 className="text-white" style={{ position: 'relative', top: '-13rem', left: '15px' }}>
            Venture Capital & Private Equity Firms
          </h2>
          <Container style={{ marginTop: '-70px' }}>
            <p>AIQRATE Consulting offerings for VC & PE firms: </p>
            <Row>
              <Col md={6}>
                <img src={image4} style={{ width: '100%' }} />
              </Col>
              <Col md={6}>
                <p className="normal-para">
                  Venture Capital and Private Equity firms are feverishly focusing on making strategic investments in AI
                  startups, niche and boutique firms. However, the AI startup ecosystem space is deficient in syndicated
                  insights, topical AI trends and differentiated metrics based on which VC & PE firms can make informed
                  investment decisions.
                </p>
              </Col>
              <p className="normal-para">
                Through our extensive M&A, fund raising, due diligence experience in the AI arena, AIQRATE provides
                consultative insights and services across the spectrum of the global AI market and regional players with
                deep competencies and unique differentiators
              </p>
            </Row>
          </Container>
        </Layout>
      </div>
    );
  }
export default PEVCFIRMS;
