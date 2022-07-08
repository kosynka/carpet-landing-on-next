import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "reactstrap";

const Problem = () => {
    const problems = [
        {id: 1, img: "/images/problem1.jpg", title: "Пролили жидкость?", description: "Кофе, чай, грязная вода ...", link: "#problem2"},
        {id: 2, img: "/images/problem2.jpg", title: "Дети испачкали?", description: "Грязь, краска, карандаши ...", link: "#problem3"},
        {id: 3, img: "/images/problem3.jpg", title: "Питомцы испортили?", description: "Следы грязных лап, шерсть, столкнул вещь на ковер", link: "#problem4"},
        {id: 4, img: "/images/problem4.jpg", title: "Устали выводить пятна?", description: "Тогда сделайте 3 простых шага: сделайте заказ, ждите курьера, получите свежий и чистый ковер через 3 дня", link: "#cleaning_process"},
    ];

    return (
        <section className="section" id="problem">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark">
                                <span className="text-warning" >Мы знаем что Вам нужно</span>
                                <p className="text-muted">потому что каждый из нас сталкивался с этими проблемами</p>
                            </h3>
                        </div>
                    </Col>
                </Row>
                <ProblemBox problem={problems} />
            </Container>
        </section>
    );
}

const ProblemBox = (props) => {
    return (
        <>
        {
            props.problem.map((problem, key) => 
            (problem.id % 2 !== 0) ?
                <Row key={key} className="align-items-center mt-5 mb-5" id={"problem"+problem.id}>
                    <Col md={5}>
                        <div className="modal-dialog">
                            <Image objectFit="contain" height={574} width={612} alt="" src={problem.img} className="img-fluid d-block mx-auto" />
                        </div>
                    </Col>

                    <Col md={{size:6, offset:1}}>
                        <div className="mt-5 mt-sm-0 mb-4">
                            <h5 className="text-dark font-weight-normal mb-3 pt-3">{problem.title}</h5>
                            <p className="text-muted mb-3 f-15">{problem.description}</p>
                            <a href={problem.link} className="f-16"><span className="ml-2"><svg width={50} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 11.998c0-5.518 4.48-9.998 9.998-9.998s9.998 4.48 9.998 9.998c0 5.517-4.48 9.997-9.998 9.997s-9.998-4.48-9.998-9.997zm1.5 0c0 4.69 3.808 8.497 8.498 8.497s8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498-8.498 3.808-8.498 8.498zm4.716 1.528s1.505 1.501 3.259 3.254c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 3.258-3.254 3.258-3.254.145-.145.217-.335.217-.526 0-.192-.074-.384-.221-.53-.292-.293-.766-.295-1.057-.004l-1.977 1.977v-6.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.693l-1.979-1.978c-.289-.289-.761-.287-1.054.006-.147.147-.221.339-.222.53 0 .191.071.38.216.525z"/></svg></span></a>
                        </div>
                    </Col>
                </Row>
                :
                <Row key={key} className="align-items-center mt-5 mb-5" id={"problem"+problem.id}>
                    <Col md={5}>
                        <div className="mb-4">
                            <div className="my-4">
                                <i className="mdi mdi-account-group"></i>
                            </div>
                            <h5 className="text-dark font-weight-normal mb-3 pt-3">{problem.title}</h5>
                            <p className="text-muted mb-3 f-15">{problem.description}</p>
                            <a href={problem.link} className="f-16"><span className="right-icon ml-2"><svg width={50} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 11.998c0-5.518 4.48-9.998 9.998-9.998s9.998 4.48 9.998 9.998c0 5.517-4.48 9.997-9.998 9.997s-9.998-4.48-9.998-9.997zm1.5 0c0 4.69 3.808 8.497 8.498 8.497s8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498-8.498 3.808-8.498 8.498zm4.716 1.528s1.505 1.501 3.259 3.254c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 3.258-3.254 3.258-3.254.145-.145.217-.335.217-.526 0-.192-.074-.384-.221-.53-.292-.293-.766-.295-1.057-.004l-1.977 1.977v-6.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.693l-1.979-1.978c-.289-.289-.761-.287-1.054.006-.147.147-.221.339-.222.53 0 .191.071.38.216.525z"/></svg></span></a>
                        </div>
                    </Col>
                    <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
                        <div className="modal-dialog">
                            <Image objectFit="contain" height={574} width={612} alt="" src={problem.img} className="img-fluid d-block mx-auto"/>
                        </div>
                    </Col>
                </Row>
            )
        }
        </>
    );
}

export default Problem;
