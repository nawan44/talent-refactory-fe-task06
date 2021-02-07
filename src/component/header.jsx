import React from "react";
import "./style/header.css";
import { Container, Row } from "reactstrap";
import logo from "../assets/logo/logo.png";
import Navmenu from "./navmenu";

const arrow = {
  textAlign: "center",
  margin: " 0 auto",
  marginTop: 50,
};
const containerHeader = {
  marginTop: "50px",
};
class Header extends React.Component {
  render() {
    return (
      <div>
        <Navmenu />
        <div className="header">
          <Container>
            <Row className="row-header">
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
                  <i class="fas fa-arrow-circle-down"></i>
                </a>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Header;
