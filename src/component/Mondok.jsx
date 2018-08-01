import React from 'react'
import { Container, Row, Col, Card, CardImg } from 'reactstrap'
import Kartu from './Kartu.jsx'
import Aux from '../hoc/Auxilary.jsx'

export default class Mondok extends React.Component {

    state = {
        img: 'http://i67.tinypic.com/2m2gkyp.png',
    }
    render() {
        return (
            <Container>
                <h3 className="text-center">Mondok by Santren Koding</h3>
                <p className="text-center">Sebuah Kegiatan Belajar Intensif Programming & Al Qur'an Selama 3 Tahun hingga jaminan kerja </p>
                <Row className="justify-content-md-center my-2 my-md-5">
                    <Col md="4">
                        <Card>
                            <CardImg top src={this.state.img} />
                        </Card>
                    </Col>
                </Row>
                <div className="text-center m-2 m-md-3">
                    <a className="btn btn-outline-success" href="">Lihat Selengkapnya</a>
                </div>
            </Container>
        )
    }
}
