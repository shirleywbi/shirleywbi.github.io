import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import "../styles/Navigation.css"

const Navigation = () => {
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">
            <Image
                className={"nav-logo"} 
                src={require("../assets/images/logo.png")} 
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={"ml-auto"}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#workexp">Work Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Navigation;