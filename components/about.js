import React from "react";
import { Container, Row, Col } from "reactstrap";

const About = () => {
    return (
        <section className="section" id="about">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark"><span className="text-warning">Наши контакты</span></h3>
                            <p className="text-black-90">...</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <h2 className="font-weight-light line-height-1_6 text-dark mb-4">Оставляйте отзыв и делитесь с друзьями!</h2>
                    </Col>
                    <Col md={{ size: 7, offset: 1 }}>
                        <Row>
                            <Col md={6}>
                                <h6 className="text-dark font-weight-light f-20 mb-3">Связаться с нами</h6>
                                <p className="text-black-90 font-weight-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque in mauris sit amet sollicitudin. Morbi suscipit lorem neque, quis ullamcorper ipsum vestibulum id. Etiam sed nisi aliquet, suscipit lorem non, blandit diam. Nulla placerat quam mauris, eu congue ex scelerisque eu.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
