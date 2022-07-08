import React from "react";
import { Container, Row, Col } from "reactstrap";

const Price = () => {
    const tableData = [
        {name: 'шерстяные', cost: '500 тенге'},
        {name: 'синтетические', cost: '600 тенге'},
        {name: 'шелковые', cost: '700 тенге'},
        {name: 'шегги(высоковорсные, травка)', cost: '800 тенге'},
        {name: 'гобелен', cost: '900 тенге'},
        {name: 'большие ковры 4x5, 4x4', cost: '1000 тенге'}
    ]

    return (
        <section className="section" id="price">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="title text-center mb-5">
                            <h3 className="text-dark">
                                <span className="text-warning">Цены</span>
                                <p className="text-muted"></p>
                            </h3>
                        </div>

                        <table className="table fs-5 table-hover table-bordered">
                            <caption className="ms-2 fs-6">Скидка при заказе от 20 кв.м</caption>
                            <thead>
                                <tr>
                                    <th>Название ковра</th>
                                    <th>Цена</th>
                                </tr>
                            </thead>
                            <tbody className="fw-normal">
                                {tableData.map(row => (
                                    <tr key={row.name}>
                                        <th>{row.name}</th>
                                        <th>{row.cost}</th>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Price;
