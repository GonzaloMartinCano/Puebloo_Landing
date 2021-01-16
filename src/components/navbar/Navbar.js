import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'
import logo_puebloo from './../../img/logo.png'

export default class MyNavbar extends Component {

    render() {
  
        return (
            <Navbar collapseOnSelect expand="lg" className="bg-custom-2"  variant="light">
              <Navbar.Brand href='/' ><Link to="/"><Navbar className="title"><img src={logo_puebloo}/> </Navbar></Link></Navbar.Brand>  
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" href="/" className="links"><h1>Inicio</h1></Nav.Link>
                        <Nav.Link as={Link} to="/Puebloo/Nosotros" href="/Puebloo/resume" className="links"><h1>Nosotros</h1></Nav.Link>
                        <Nav.Link as={Link} to="/Puebloo/Proyectos" href="/Puebloo/Proyectos"  className="links"><h1>Proyectos</h1></Nav.Link>
                        <Nav.Link as={Link} to="/Puebloo/Contacto" href="/Puebloo/Contacto"  className="links"><h1>Contacto</h1></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
