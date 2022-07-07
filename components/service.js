import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "reactstrap";

const Service = () => {
    const services = [
        {id: 1, img: "./images/service1.jpg", title: "Пролили жидкость?", description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link: "#service2"},
        {id: 2, img: "./images/service2.jpg", title: "Дети испачкали?", description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link: "#service3"},
        {id: 3, img: "./images/service3.jpg", title: "Питомцы испортили?", description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link: "#service4"},
        {id: 4, img: "./images/service4.jpg", title: "Устали выводить пятна?", description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", link: "#price"},
    ];

    return (
        <section className="section" id="service">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark">
                                <span className="text-warning">Виды услуг</span>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque in mauris sit amet sollicitudin.</p>
                            </h3>
                        </div>
                    </Col>
                </Row>
                <ServiceBox service={services} />
            </Container>
        </section>
    );
}

const ServiceBox = (props) => {
    return (
        <>
        {
            props.service.map((service, key) => 
            (service.id % 2 !== 0) ?
                <Row key={key} className="align-items-center mt-5 mb-5">
                    <Col md={5}>
                        <div className="modal-dialog">
                            <Image alt="" src={service.img} className="img-fluid d-block mx-auto" id={"service"+service.id} />
                        </div>
                    </Col>

                    <Col md={{size:6, offset:1}}>
                        <div className="mt-5 mt-sm-0 mb-4">
                            <h5 className="text-dark font-weight-normal mb-3 pt-3">{service.title}</h5>
                            <p className="text-muted mb-3 f-15">{service.description}</p>
                            <a href={service.link} className="f-16 text-warning"><span className="ml-2"><svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 11.998c0-5.518 4.48-9.998 9.998-9.998s9.998 4.48 9.998 9.998c0 5.517-4.48 9.997-9.998 9.997s-9.998-4.48-9.998-9.997zm1.5 0c0 4.69 3.808 8.497 8.498 8.497s8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498-8.498 3.808-8.498 8.498zm4.716 1.528s1.505 1.501 3.259 3.254c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 3.258-3.254 3.258-3.254.145-.145.217-.335.217-.526 0-.192-.074-.384-.221-.53-.292-.293-.766-.295-1.057-.004l-1.977 1.977v-6.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.693l-1.979-1.978c-.289-.289-.761-.287-1.054.006-.147.147-.221.339-.222.53 0 .191.071.38.216.525z"/></svg></span></a>
                        </div>
                    </Col>
                </Row>
                :
                <Row key={key} className="align-items-center mt-5 mb-5">
                    <Col md={6}>
                        <div className="mb-4">
                            <div className="my-4">
                                <i className="mdi mdi-account-group"></i>
                            </div>
                            <h5 className="text-dark font-weight-normal mb-3 pt-3">{service.title}</h5>
                            <p className="text-muted mb-3 f-15">{service.description}</p>
                            <a href={service.link} className="button f-16 text-warning"><span className="right-icon ml-2"><svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.009 11.998c0-5.518 4.48-9.998 9.998-9.998s9.998 4.48 9.998 9.998c0 5.517-4.48 9.997-9.998 9.997s-9.998-4.48-9.998-9.997zm1.5 0c0 4.69 3.808 8.497 8.498 8.497s8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498-8.498 3.808-8.498 8.498zm4.716 1.528s1.505 1.501 3.259 3.254c.146.147.338.22.53.22s.384-.073.53-.22c1.754-1.752 3.258-3.254 3.258-3.254.145-.145.217-.335.217-.526 0-.192-.074-.384-.221-.53-.292-.293-.766-.295-1.057-.004l-1.977 1.977v-6.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.693l-1.979-1.978c-.289-.289-.761-.287-1.054.006-.147.147-.221.339-.222.53 0 .191.071.38.216.525z"/></svg></span></a>
                        </div>
                    </Col>
                    <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
                        <div className="modal-dialog" id={"service"+service.id}>
                            <Image alt="" src={service.img} className="img-fluid d-block mx-auto"/>
                        </div>
                    </Col>
                </Row>
            )
        }
        </>
    );
}

export default Service;
