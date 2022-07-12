import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

var iterator = 2;
var new_data = {
    carpetname: [],
    height: [],
    width: []
}

const Order = () => {
    const [inputList, setInputList] = useState([]);
    const [summ, setSum] = useState();
    const [success, setSuccess] = useState('');

    const carpetRef = useRef();
    const heightRef = useRef();
    const widthRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        var target = event.target;

        let send_carpets = [carpetRef.current.value];
        let send_heights = [heightRef.current.value];
        let send_widths = [widthRef.current.value];
        let send_areas = [heightRef.current.value*widthRef.current.value];

        let stop = iterator - 2;

        for(let i = 0; i < stop; i++) {
            let carpet = document.getElementById(new_data.carpetname[i]).value;
            let height = document.getElementById(new_data.height[i]).value;
            let width = document.getElementById(new_data.width[i]).value;
            let area = height * width;
            
            send_carpets.push(carpet);
            send_heights.push(height);
            send_widths.push(width);
            send_areas.push(area);
        }

        const data = {
            username: target.username.value,
            phone: target.phone.value,
            carpetnames: send_carpets,
            heights: send_heights,
            widths: send_widths,
            areas: send_areas,
            sum: calculateSum(),
            text: target.text.value,
        }

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
                subject: data,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
    }
    
    function createIDs(num) {
        let select = 'select' + num;
        let height = 'height' + num;
        let width = 'width' + num;
        return [select, height, width];
    }
    
    const addOrderBox = () => {
        setInputList(inputList.concat(<OrderBox key={inputList.length} id={createIDs(iterator)} />));

        let select = 'select' + iterator;
        let height = 'height' + iterator;
        let width = 'width' + iterator;

        console.log('added ' + select, height, width);

        new_data.carpetname.push(select);
        new_data.height.push(height);
        new_data.width.push(width);

        iterator = iterator + 1;
    }

    const calculateSum = (event) => {
        var output_sum = 0;
        var carpets = [];
        var areas = [];

        let stop = iterator - 2;
        for(let i = 0; i < stop; i++) {
            let carpet = document.getElementById(new_data.carpetname[i]).value;
            let area = document.getElementById(new_data.height[i]).value * document.getElementById(new_data.width[i]).value;
            
            carpets.push(carpet);
            areas.push(area);
        }

        const data = {
            carpetname: carpetRef.current.value,
            height: heightRef.current.value,
            width: widthRef.current.value,
        }

        carpets.push(data.carpetname);
        areas.push(data.height * data.width);

        let fin_stop = iterator - 1;
        for(let i = 0; i < fin_stop; i++) {
            if(carpets[i] == 'wool') {
                output_sum = output_sum + (areas[i] * 500);
            } else if(carpets[i] == 'synthetic') {
                output_sum = output_sum + (areas[i] * 600);
            } else if(carpets[i] == 'heavy') {
                output_sum = output_sum + (areas[i] * 700);
            } else if(carpets[i] == 'silk') {
                output_sum = output_sum + (areas[i] * 800);
            } else if(carpets[i] == 'shaggy') {
                output_sum = output_sum + (areas[i] * 900);
            }
        }
        setSum(output_sum);

        return output_sum;
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
                                    <Input required
                                    id="username"
                                    name="username"
                                    placeholder="Ваше имя"
                                    type="text"
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Input required
                                    id="phone"
                                    name="phone"
                                    placeholder="Номер телефона: 87001002030"
                                    pattern="^\d{11}$"
                                    type="tel"
                                    />
                                </FormGroup>

                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <select
                                            className="form-select"
                                            id="select1"
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
                                            id="height1"
                                            name="height"
                                            placeholder="длина, м"
                                            type="number"
                                            ref={heightRef}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={3}>
                                        <FormGroup>
                                            <input
                                            className="form-control"
                                            id="width1"
                                            name="width"
                                            placeholder="ширина, м"
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

                                <Label for="success">
                                    {success}
                                </Label>
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
        <Row>
            <Col md={6}>
                <FormGroup>
                    <select
                    className="form-select"
                    id={props.id[0]}
                    name="select"
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
                    id={props.id[1]}
                    name="height"
                    placeholder="длина, м"
                    type="number"
                    />
                </FormGroup>
            </Col>

            <Col md={3}>
                <FormGroup>
                    <input
                    className="form-control"
                    id={props.id[2]}
                    name="width"
                    placeholder="ширина, м"
                    type="number"
                    />
                </FormGroup>
            </Col>
        </Row>
        </>
    )
}

export default Order;
