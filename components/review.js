import React from "react";
import { Container, Row, Col } from "reactstrap";

const Review = () => {
    const reviewes = [
        { title: "Мадина", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque in mauris sit amet sollicitudin." },
        { title: "Аскар", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque in mauris sit amet sollicitudin." },
        { title: "Айнур", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque in mauris sit amet sollicitudin." },
        { title: "Жазира", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque in mauris sit amet sollicitudin." },
        { title: "Кайрат", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque in mauris sit amet sollicitudin." },
        { title: "Влада", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque in mauris sit amet sollicitudin." },
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
                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque in mauris sit amet sollicitudin.</p>
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
