import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../img/logo.png';
import styled from 'styled-components';

const Logo = styled.img`
    max-height: 50px;
`;

function Navigation(){
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/"><Logo src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;