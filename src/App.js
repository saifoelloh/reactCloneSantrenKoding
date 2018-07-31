import React, { Component } from 'react';
import NavBar from './component/Navbar.jsx'
import JumboTron from './component/Jumbotron.jsx'
import { Container, Row, Col } from 'reactstrap';
import Aux from './hoc/Auxilary.jsx'
import KajianKoding from './component/KajianKoding.jsx'
import SantrenKilat from './component/SantrenKilat.jsx'

class App extends Component {
    render() {
        return (
            <Aux>
                <NavBar />
                <JumboTron />
                <KajianKoding />
                <hr />
                <SantrenKilat />
                <hr />
            </Aux>
        )
    }
}

export default App;
