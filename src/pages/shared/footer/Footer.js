import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='bg-dark py-5 mt-5 text-white'>
            <Container className='text-start ml-auto my-5'>
                <h2>About Us</h2>
                <p>The duties of a hotel server include all the normal responsibilities of a food server in a restaurant, with some additions depending on hotel facilities and needs. Some hotels operate restaurants in addition to lodgings, and some have banquet halls and meeting spaces that require catering.</p>
            </Container>
            <Container>
                <Row>
                    <Col md='8'>
                        <p>© 2021 - Hotel XYZ.All rights reserved
                            Powered by XYZ</p>
                    </Col>
                    <Col md='4' className='text-center'>
                        <div className='d-flex gap-3 justify-content-center'>
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </Col >
                </Row >
            </Container >

        </div >
    );
};

export default Footer;