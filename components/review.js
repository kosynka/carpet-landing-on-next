import React from "react";
import { Container, Row, Col } from "reactstrap";

const Review = () => {
    const reviewes = [
        { title: "Мадина", description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Аскар", description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Айнур", description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Жазира", description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Кайрат", description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
        { title: "Влада", description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
    ];

    return (
        <section className="section" id="review">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center md-5">
                            <h3 className="font-weight-normal text-dark">
                                <span className="text-warning">Отзывы наших клиентов</span>
                            </h3>
                            <p className="text-muted">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        reviewes.map((review, key) =>
                            <Col key={key} lg={4} md={6}>
                                <div className="md-5">
                                    <i className={review.icon}></i>
                                </div>
                                <h5 className="text-dark font-weight-normal pt-1 mb-4">{review.title}</h5>
                                <p className="text-muted mb-4">{review.description}</p>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    );
}

export default Review;
