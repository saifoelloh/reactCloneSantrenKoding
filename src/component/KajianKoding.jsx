import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Aux from "../hoc/Auxilary.jsx";
import Kartu from "./Kartu.jsx";
import '../custom.css'

export default class KajianKoding extends React.Component {
    state = {
        kartu: [
            {
                img:
                "https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg",
                judul: "Kajian Koding #3",
                subJudul: "ReactJS dan Firebase Auth/Hosting"
            },
            {
                img:
                "https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381",
                judul: "Kajain Koding #2",
                subJudul: "html, css, boostrap dasar"
            },
            {
                img:
                "https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572",
                judul: "Kajian Koding #1",
                subJudul: "Belajar Laravel Dasar"
            }
        ]
    };
    render() {
        return (
            <Aux>
                <Container>
                    <h2 className="text-center my-4">Daftar Kajian Koding Rutin</h2>
                    <br />
                    <Row>
                        {this.state.kartu.map((data, key) => {
                            return (
                                <Col className="my-2" md="4" sm="12">
                                    <Kartu card={data} />
                                </Col>
                            );
                        })}
                    </Row>
                    <div className="text-center m-2 m-md-5">
                        <a
                            href=""
                            className="btn btn-outline-success"
                            outline
                            color="success">
                            Lihat Seluruh Kajian Koding
                        </a>
                    </div>
                </Container>
            </Aux>
        );
    }
}
