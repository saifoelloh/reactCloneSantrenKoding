import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../custom.css'

const JumboTron = (props) => {
    return (
        <div>
            <Jumbotron className="jumboBack text-center" style={{color:'white'}}>
                <h1 className="display-3">Belajar Jadi Asik</h1>
                <p className="lead">Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren Koding.</p>
                <p className="lead">
                    <Button color="success" size="lg">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default JumboTron;
