import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Modal, Button } from 'react-bootstrap';

const Example = () => {
    const [show, setIsShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);
    const handleClose = () => setIsShow(false);
    const handleShow = () => setIsShow(true);

    return (
        <section className="section" id="example">
            <Row className="justify-content-center">
                <Col lg={12} md={8}>
                    <div className="title text-center mb-5">
                        <h3 className="font-weight-normal text-dark">
                            <span className="text-warning">Пример работ</span>
                            <p className="text-muted">до и после</p>
                        </h3>

                        <div className="row">
                            <div className="mb-4">
                                <Button onClick={handleShow}>
                                    Launch demo modal
                                </Button>

                                <Modal size="lg" fullscreen={fullscreen} show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Col xs={12} md={12}>
                                            <img
                                                width={1024}
                                                src="../images/problem4.jpg"
                                                data-mdb-img="../images/problem4.jpg"
                                                alt=""
                                                className="modal-img shadow-1-strong rounded"
                                            />
                                        </Col>
                                    </Modal.Body>
                                </Modal>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default Example;
