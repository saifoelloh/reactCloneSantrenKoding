import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './custom.css'
import Aux from './hoc/Auxilary.jsx'
import NavBar from './component/Navbar.jsx'
import JumboTron from './component/Jumbotron.jsx'
import KajianKoding from './component/KajianKoding.jsx'
import SantrenKilat from './component/SantrenKilat.jsx'
import KegiatanMondok from './component/KegiatanMondok.jsx'
import Mondok from './component/Mondok.jsx'
import SponsorPartner from './component/SpoonsorPartner.jsx'
import Kontak from './component/Kontak.jsx'
import Footer from './component/Footer.jsx'

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
                <KegiatanMondok />
                <hr />
                <Mondok />
                <hr />
                <SponsorPartner />
                <hr />
                <Kontak />
                <hr />
                <Footer />
            </Aux>
        )
    }
}

export default App;
