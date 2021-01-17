import React from 'react';
import './style/header.css';
import Navmenu from './navmenu.jsx';
import { Container, Row } from 'reactstrap';
import logo from './img/logo/logo.png';


const arrow = {
    textAlign: 'center',
    margin: ' 0 auto',
    marginTop: 50,
}

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Navmenu />

                <Container>

                    <Row>
                        <img src={logo} className="logo-header" />
                    </Row>
                    <Row>
                        <h1 className="brand-name">Rachwan</h1>
                    </Row>
                    <Row>
                        <hr className="line-header" />
                    </Row>
                    <Row>
                        <hr className="line-header" />
                    </Row>
                    <Row>
                        <h2 className="tag-line">Reach Your Global</h2>
                    </Row>
                    <Row>
                        <div style={arrow}>
                            <a className="btn-arrow" href="#about">
                                <i class='fas fa-arrow-circle-down'></i>

                            </a>
                        </div>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default Header;