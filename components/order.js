import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import ReactDOM from "react-dom";

const Order = () => {
    const [inputList, setInputList] = useState([]);
    const [summ, setSum] = useState();
    const [state, setState] = useState({
        username: "",
        data: ""
    })

    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        var target = event.target;
        
        const data = {
            username: target.username.value,
            carpetname: target.select.value,
            height: target.height.value,
            width: target.width.value,
            text: target.text.value,
        }
        
        console.log(data);
    }
    
    function handleChange(event) {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    const carpetRef = useRef();
    const heightRef = useRef();
    const widthRef = useRef();

    const testcarpetRef = React.createRef();
    const testheightRef = React.createRef();
    const testwidthRef = React.createRef();
    const i = 0;
    
    const addOrderBox = () => {
        setInputList(inputList.concat(<OrderBox key={inputList.length} props={[testcarpetRef, testheightRef, testwidthRef, i++]} />));
    }
    
    const calculateSum = (event) => {

        const data = {
            carpetname: carpetRef.current.value,
            height: heightRef.current.value,
            width: widthRef.current.value,
        }
        console.log(data);

        const test = {
            carpetname: testcarpetRef.current,
            height: testheightRef.current,
            width: testwidthRef.current,
        }

        console.log(test);

        var carpet = data.carpetname;
        var area = data.height * data.width;

        if(carpet == 'wool') {
            setSum(area * 500);
        } else if(carpet == 'synthetic') {
            setSum(area * 600);
        } else if(carpet == 'heavy') {
            setSum(area * 700);
        } else if(carpet == 'silk') {
            setSum(area * 800);
        } else if(carpet == 'shaggy') {
            setSum(area * 900);
        }
    }

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

                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Input
                                    id="username"
                                    name="username"
                                    placeholder="Ваше имя"
                                    type="text"
                                    value={state.username}
                                    onChange={handleChange}
                                    />
                                </FormGroup>

                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <select
                                            className="form-select"
                                            id="exampleSelect"
                                            name="select"
                                            ref={carpetRef}
                                            >
                                                <option value="wool">Шерстяной ковер</option>
                                                <option value="synthetic">Синтетический ковер</option>
                                                <option value="heavy">Тяжелый ковер 4х4, 5х4</option>
                                                <option value="silk">Шелковый ковер</option>
                                                <option value="shaggy">Шегги ковер</option>
                                            </select>
                                        </FormGroup>
                                    </Col>

                                    <Col md={3}>
                                        <FormGroup>
                                            <input
                                            className="form-control"
                                            id="height"
                                            name="height"
                                            placeholder="длина"
                                            type="number"
                                            ref={heightRef}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={3}>
                                        <FormGroup>
                                            <input
                                            className="form-control"
                                            id="width"
                                            name="width"
                                            placeholder="ширина"
                                            type="number"
                                            ref={widthRef}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                {inputList}

                                <Button color="secondary" onClick={addOrderBox}>
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
                                        Сумма: {summ} тг
                                    </Label>
                                </FormGroup>

                                <Button className="me-5" color="primary" onClick={calculateSum}>
                                    Расчитать стоимость
                                </Button>

                                <Button color="success" type="submit">
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

const OrderBox = (props) => {
    return (
        <>
        <Row key={props[3]}>
            <Col md={6}>
                <FormGroup>
                    <select
                    className="form-select"
                    id="exampleSelect"
                    name="select"
                    ref={props[0]}
                    >
                        <option value="wool">Шерстяной ковер</option>
                        <option value="synthetic">Синтетический ковер</option>
                        <option value="heavy">Тяжелый ковер 4х4, 5х4</option>
                        <option value="silk">Шелковый ковер</option>
                        <option value="shaggy">Шегги ковер</option>
                    </select>
                </FormGroup>
            </Col>

            <Col md={3}>
                <FormGroup>
                    <input
                    className="form-control"
                    id="height"
                    name="height"
                    placeholder="длина"
                    type="number"
                    ref={props[1]}
                    />
                </FormGroup>
            </Col>

            <Col md={3}>
                <FormGroup>
                    <input
                    className="form-control"
                    id="width"
                    name="width"
                    placeholder="ширина"
                    type="number"
                    ref={props[2]}
                    />
                </FormGroup>
            </Col>
        </Row>
        </>
    )
}

export default Order;
