import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
import logo_puebloo from './../../img/logo.png'

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-custom-2" variant="light">
            <Navbar.Brand as={'a'} href='#' ><Navbar className="title"><img src={logo_puebloo} alt="logo_Puebloo" /></Navbar></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={'a'} href="/" className="links"><h1>Inicio</h1></Nav.Link>
                    <Nav.Link as={'a'} href="#nosotros" className="links"><h1>Nosotros</h1></Nav.Link>
                    <Nav.Link as={'a'} href="#contacto" className="links"><h1>Contacto</h1></Nav.Link>
                    <Nav.Link as={'a'} href="/privacidad" className="links"><h1>Politica de privacidad</h1></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default MyNavbar