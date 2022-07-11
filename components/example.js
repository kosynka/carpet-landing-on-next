import React, { useState, useRef } from "react";
import ReactDOM from 'react-dom'
import { Row, Col } from "reactstrap";
import { Modal, Button } from 'react-bootstrap';

const Example = () => {
    const [show, setIsShow] = useState(false);
    const handleClose = () => setIsShow(false);
    const [imgSrc, setImgSrc] = useState('');

    var ids = [0, 0];

    function handleShow(id, nextId) {
        setIsShow(true);
        ids[0] = id-1;
        ids[1] = nextId;
        setImgSrc(ids[1] == 1 ? examples[ids[0]]["imgPre"] : examples[ids[0]]["imgAfter"]);
    }

    const examples = [
        {id: 1, imgPre: "/images/example1pre.jpg", imgAfter: "/images/example1after.jpg"},
        {id: 2, imgPre: "/images/example2pre.jpg", imgAfter: "/images/example2after.jpg"},
        {id: 3, imgPre: "/images/example3pre.jpg", imgAfter: "/images/example3after.jpg"},
    ];

    return (
        <section className="section" id="example">
            <Row>
                <Col lg={12} md={8}>
                    <div className="title mb-5 text-center">
                        <h3 className="font-weight-normal text-dark">
                            <span className="text-warning">Пример работ</span>
                            <p className="text-muted mb-4">до и после</p>
                        </h3>

                        {examples.map(example => (
                        <Row key={example.id} className="mb-4">
                            <Col md={6} className="mb-4">
                                <div className="row">
                                    <div className="mt-4">
                                        <img
                                            width="85%"
                                            src={example.imgPre}
                                            alt=""
                                            className="modal-img rounded"
                                            onClick={() => handleShow(example.id, 1)}
                                            data-bs-toggle="modal"
                                        />
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-4">
                                <div className="row">
                                    <div className="mt-4">
                                        <img
                                            width="85%"
                                            src={example.imgAfter}
                                            alt=""
                                            className="modal-img rounded"
                                            onClick={() => handleShow(example.id, 2)}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        ))}

                        {/* Modal pop-up */}
                        <Modal size="xl" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Body>
                                <Col xs={12} md={12}>
                                    <img width="100%" height="100%" src={imgSrc} alt="" className="modal-img rounded"/>
                                </Col>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default Example;
