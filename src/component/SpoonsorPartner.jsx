import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Aux from '../hoc/Auxilary.jsx'

export default class SponsorPartner extends React.Component {

    state = {
        mul : [
            {
                img: "http://i67.tinypic.com/2hcn70k.jpg",
                link: "klinikita.co.id"
            }
        ],
        gambar: [
            {
                img: "https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png",
                link: "https://www.undip.ac.id/language/id/"
            },
            {
                img: "https://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358",
                link: "https://dinus.ac.id/"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/id/archive/6/6a/20150926142003%21Logo_unisbank.jpg",
                link: "https://www.unisbank.ac.id/"
            },
            {
                img: "http://id.indonesiayp.com/img/id/c/1445918663-86-pt-java-valley-technology.png",
                link: "http://www.java-valley.com/"
            },
            {
                img: "https://dynamiclearningid.files.wordpress.com/2017/01/orderdilla.png?w=500",
                link: "https://www.dynamiclearningid.org/"
            },
            {
                img: "https://www.go-mekanik.com/assets/public/src/imgs/gomekanik/logo.png",
                link: "https://www.go-mekanik.com/"
            },
        ],
        gambar1: [
            {
                img: "https://sdk.semarangkota.go.id/web/pemkot.png",
                link: ""
            },
            {
                img: "http://www.sandec.org/images/sandec-logo.png",
                link: ""
            },
            {
                img: "http://i64.tinypic.com/28v94w6.png",
                link: ""
            },
            {
                img: "https://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png",
                link: ""
            }
        ]
    }
    render() {
        return (
            <Container>
                <h3 className="text-center">Sponsor & Partner</h3>
                <br />
                <Row className="justify-content-md-center">
                    <Col lg="4" md="4" sm="12">
                        <a href={this.state.mul[0].link}>
                            <img className="img-fluid" src={this.state.mul[0].img} alt="" />
                        </a>
                    </Col>
                </Row>
                <br />
                <Row>
                    { this.state.gambar.map( datum => {
                        return (
                            <Col className="text-center" lg="2" md="2" sm="6">
                                <a href={datum.link}>
                                    <img src={datum.img} alt="" height="100px" />
                                </a>
                            </Col>
                        );
                    })
                    }
                </Row>
                <Row className="align-items-center">
                    { this.state.gambar1.map( ( datum, key ) => {
                        if (key%2==0){
                            return (
                                <Col lg="2" md="2" sm="6">
                                    <br />
                                    <a href={datum.link}>
                                        <img className="img-fluid" src={datum.img} alt="" />
                                    </a>
                                </Col>
                            );
                        } else {
                            return (
                                <Col lg="4" md="4" sm="6" height="100px">
                                    <br />
                                    <a href={datum.link}>
                                        <img className="img-fluid" src={datum.img} alt="" />
                                    </a>
                                </Col>
                            );
                        }
                    })}
                </Row>
            </Container>
        )
    }
}
