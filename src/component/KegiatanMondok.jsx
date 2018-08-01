import React from 'react'
import Aux from '../hoc/Auxilary.jsx'
import { Container, Row, Col } from 'reactstrap'
import '../custom.css'

export default class KegiatanMondok extends React.Component {
    render() {
        return (
            <Container className="p-2 p-md-3">
                <Row>
                    <Col className="backHijau text-white text-center" md="6" sm="12">
                        <br />
                        <h4>Kegiatan</h4>
                        <br />
                        <div>
                            <p>
                                <span class="glyphicons glyphicons-log-in"></span> Koding
                            </p>
                            <span class="glyphicons glyphicons-log-in"></span> Belajar Agama dan Al-Qur'an
                            <p>
                            </p>
                            <p>
                                <span class="glyphicons glyphicons-log-in"></span> Pendidikan Karakter
                            </p>
                        </div>
                    </Col>
                    <Col className="text-center" md="6" sm="12">
                        <br />
                        <img src="http://i63.tinypic.com/oid9xu.png" alt="" />
                        <h4>"Memberi Manfaat Untuk Ummat"</h4>
                        <br />
                        <p>-Santren Koding-</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
