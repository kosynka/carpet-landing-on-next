import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

const Order = () => {
    return (
        <section className="section" id="order">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title mb-5">
                            <h3 className="font-weight-normal text-center text-dark mb-5">
                                <span className="text-warning">Сделать заказ</span>
                                <p className="text-muted">Расчитайте стоимость заказа и ждите звонка от нас</p>
                            </h3>

                            <Form>
                                <FormGroup>
                                    <Input
                                    id="user_name"
                                    name="name"
                                    placeholder="Ваше имя"
                                    type="text"
                                    />
                                </FormGroup>

                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Input
                                            id="exampleSelect"
                                            name="select"
                                            type="select"
                                            >
                                                <option>Шерстяной ковер</option>
                                                <option>Синтетический ковер</option>
                                                <option>Тяжелый ковер 4х4, 5х4</option>
                                                <option>Шелковый ковер</option>
                                                <option>Шегги ковер</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>

                                    <Col md={3}>
                                        <FormGroup>
                                            <Input
                                            id="width"
                                            name="width"
                                            placeholder="длина"
                                            type="number"
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={3}>
                                        <FormGroup>
                                            <Input
                                            id="width"
                                            name="width"
                                            placeholder="ширина"
                                            type="number"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Button color="secondary">
                                    + Добавить ковер
                                </Button>

                                <FormGroup>
                                    <Label for="exampleText">
                                    Дополнительные пожелания
                                    </Label>
                                    <Input
                                    id="exampleText"
                                    name="text"
                                    type="textarea"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="sum">
                                        Сумма:
                                    </Label>
                                    <Input id="sum" plaintext value="0 тг"/>
                                </FormGroup>

                                <Button className="me-5" color="primary">
                                    Расчитать стоимость
                                </Button>

                                <Button color="success">
                                    Сделать заказ
                                </Button>
                                </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Order;
