import React from "react";
import Image from 'next/image';
import { Container, Row, Col } from "reactstrap";

const CleaningProcess = () => {
    const cards = [
        {id: 1, img: "/images/cp1.jpg", title: "Удаление грязи и пыли", description: "На фабрике есть автоматический выбивальный станок. Ни один пылесос не сможет избавить от пыли так как это сделает станок для выбивания ковров"},
        {id: 2, img: "/images/cp2.jpg", title: "Стирка ковра", description: "Стирка проходит на специальном оборудовании компании Cleanvac, которая считается одной из ведущих в мире компаний-производителей профессионального оборудования для уборки."},
        {id: 3, img: "/images/cp3.jpg", title: "Отжим", description: "После мойки следующий шаг это отжим в центрифуге. Этот этап нужен для того чтобы избавиться от 90% жидкости и подготовить ковер для сушки."},
        {id: 4, img: "/images/cp4.jpg", title: "Сушка", description: "После стирки и отжима все ковры помещаются в специальную сушильную камеру с фенами, которая имеет оптимальный режим для сушки. На фабрике имеется сушильная камера, осушитель воздуха с протяжной вентиляцией. Сушка проводится при температуре не выше 50 °C, в специальном помещении, где поддерживается оптимальная влажность и температура. Ни одна клининговая компания в Астане с экстракторами и роторными машинами не сможет так основательно почистить ковер, как наше специализированное оборудование."},
    ];

    return (
        <section className="section" id="cleaning_process">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="font-weight-normal text-dark">
                                <span className="text-warning">Как проходит процесс чистки?</span>
                            </h3>
                                
                            <div className="align-items-center mt-5 mb-5 col-lg-16">
                                <Container>
                                    {cards.map(card => (
                                        <div key={card.id}>
                                            <div className="card mt-5">
                                                <img className="card-img-top" layout="fill" alt="" src={card.img}/>
                                                <div className="circle"><span>{card.id}</span></div>
                                                <div className="card-body">
                                                    <h4 className="card-title">{card.title}</h4>
                                                    <p className="card-text text-left">{card.description}</p>
                                                </div>
                                            </div>
                                            <svg width={32} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"/></svg>
                                        </div>
                                    ))
                                    }
                                </Container>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CleaningProcess;
