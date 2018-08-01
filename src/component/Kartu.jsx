import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardLink,
    CardBody,
    CardTitle,
    CardSubtitle,
    Container,
    Row,
    Col,
    Button } from 'reactstrap';
import '../custom.css'

const Example = (props) => {
    return (
        <div>
            <Card>
                <CardImg src={props.card.img} />
                <CardBody>
                    <CardTitle>{props.card.judul}</CardTitle>
                    <CardText>{props.card.subJudul}</CardText>
                </CardBody>
                <CardBody>
                    <Row>
                        <Col>
                            <CardLink className="text-secondary" href="#"><small>by Santren Koding</small></CardLink>
                        </Col>
                        <Col className="ml-auto text-right text-danger">
                            <small>Kuota Terbatas</small>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;
