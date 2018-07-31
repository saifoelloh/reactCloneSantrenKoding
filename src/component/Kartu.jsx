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
                    <CardSubtitle>{props.card.subJudul}</CardSubtitle>
                </CardBody>
                <CardBody>
                    <CardLink href="#">by Santren Koding</CardLink>
                    <CardLink href="#">Kuota Terbatas</CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;
