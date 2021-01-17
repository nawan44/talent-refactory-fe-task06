import React, { useState } from 'react';
import {
  NavbarToggler, Collapse, NavbarBrand,
  Nav, Navbar, NavbarText, NavLink
} from 'reactstrap';
import './style/navmenu.css';
import logoNav from './img/logo/logo-nav.png';

const navLink = {
  color: 'white',
  fontSize: '16px',
  margin: '0 20px 10px 30px',

}

const Navmenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Nav">
      <Navbar light expand="md" className="Navbar">
        <NavbarBrand href="/" >
          <img src={logoNav} className="logoNavbar" alt=" " />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2 bg-white" />
        <Collapse isOpen={isOpen} navbar style={navLink}>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavbarText>

            <Nav className="mr-auto" navbar>
              <NavLink style={navLink} href="#about">About</NavLink>
              <NavLink style={navLink} href="#services">Services</NavLink>
              <NavLink style={navLink} href="#work">Work</NavLink>
              <NavLink style={navLink} href="#contact">Contact</NavLink>

            </Nav>

          </NavbarText>


        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navmenu;