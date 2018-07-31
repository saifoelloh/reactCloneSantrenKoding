import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import Aux from '../hoc/Auxilary.jsx'
import Kartu from './Kartu.jsx'

export default class SantrenKilat extends React.Component {
    state = {
        kartu : {
            img : "https://lh5.googleusercontent.com/e6ixy5iFrGuPwlZFn0oU0vPgqMT9zPKdmswiBbZJEVpSbH6L2gVlcKAKFAoz7n31T45ZsSx8tQ=w1191",
            judul : "Santren Kilat #1 (Coming Soon)",
            subJudul : "4 Hari Intensif Laravel"
        }
    }

    render() {
        return (
            <Aux>
                <Container>
                    <h2 className="text-center my-4">Daftar Santren Kilat Koding</h2>
                    <br />
                    <Row>
                        <Col md="4">
                            <Kartu card={this.state.kartu} />
                        </Col>
                        <Col md="4"></Col>
                        <Col md="4"></Col>
                    </Row>
                    <div className="text-center m-2 m-md-5">
                        <a href="" className="btn btn-outline-success" outline color="success">Lihat Seluruh Kajian Koding</a>
                    </div>
                </Container>
            </Aux>
        )
    }
}
