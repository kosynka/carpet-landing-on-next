import React from "react";
import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
    return (
        <>
        {
            props.feature.map((feature, key) => 
            (feature.id % 2 !== 0) ?
                <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
                    <Col md={5}>
                        <div>
                            <img src={feature.img} alt="" className="img-fluid d-block mx-auto" />
                        </div>
                    </Col>

                    <Col md={{size:6, offset:1}}>
                        <div className="mt-5 mt-sm-0 mb-4">
                            <div className="my-4">
                                <i className={feature.icon}></i>
                            </div>
                            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                            <p className="text-muted mb-3 f-15">{feature.desc}</p>
                            <a href={feature.link} className="f-16 text-warning">Raed More <span className="right-icon ml-2">&#8594;</span></a>
                        </div>
                    </Col>
                </Row>
                :
                <Row key={key} className="align-items-center mt-5">
                    <Col md={6}>
                        <div className="mb-4">
                            <div className="my-4">
                                <i className="mdi mdi-account-group"></i>
                            </div>
                            <h5 className="text-dark font-weight-normal mb-3 pt-3">{feature.title}</h5>
                            <p className="text-muted mb-3 f-15">{feature.desc}</p>
                            <a href={feature.link} className="f-16 text-warning">Read More <span className="right-icon ml-2">&#8594;</span></a>
                        </div>
                    </Col>
                    <Col md={{size:5, offset:1}} className="mt-5 mt-sm-0">
                        <div>
                            <img src={feature.img} alt="" className="img-fluid d-block mx-auto"/>
                        </div>
                    </Col>
                </Row>
            )
        }
        </>
    );
}

