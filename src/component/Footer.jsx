import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Aux from '../hoc/Auxilary.jsx'

export default class Footer extends React.Component {
    render() {
        return (
            <Container>
                <p className="text-left text-secondary">Copyright © Santren Koding 2018. All rights reserved.</p>
            </Container>
        )
    }
}
