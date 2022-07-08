import React from "react";
import { Container, Row, Col } from "reactstrap";

const Order = () => {
    return (
        <section className="section" id="order">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark">
                                <span className="text-warning">Сделать заказ</span>
                                <p className="text-muted">потому что каждый из нас сталкивался с этими проблемами</p>
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Order;
