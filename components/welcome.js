import React from "react";
import Image from 'next/image'
import { Container, Row, Col } from "reactstrap";

const Welcome = () => {
    return (
        <section className="section position-relative" id="welcome">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="pr-lg-5">
                            <h1 className="mb-4 font-weight-normal line-height-1_4">С <span className="text-primary font-weight-medium">kilem juu</span> ваши проблемы испарятся</h1>
                            <p className="text-muted mb-4 pb-2">Больше у Вас не будет проблем по стирке ковров, оставьте это профессионалам. С нами <span className="text-warning fw-bold">выгодно</span>, <span className="text-warning fw-bold">дешево</span>, <span className="text-warning fw-bold">быстро</span>.</p>
                            <a href="#" className="btn btn-warning">
                                Нажмите <span className="ml-2 right-icon">&#8594;</span>
                            </a>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="mt-5 mt-lg-0">
                            <Image src="/images/welcome_page.jpg" alt="" className="img-fluid mx-auto d-block" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Welcome;
