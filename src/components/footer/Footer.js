import React from 'react'

import './Footer.css'

/** Bootstrap */
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

/** Icons */
import InstagramIcon from '@material-ui/icons/Instagram'
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
    return (
        <Row className="footer">
            <Col
                md={{ span: 6, offset: 3 }}
                xs={{ span: 4, offset: 4 }}
                className="footer_details contacto"
            >
                <p>Contáctanos</p>
            </Col>
            <Col
                md={{ span: 6, offset: 3 }}
                xs={{ span: 6, offset: 3 }}
                className="footer_details redes"
            >
                <a href="mailto:?subject=Quiero recibir información sobre el proyecto" style={{ color: 'white' }}><EmailIcon className="icono"/></a>
                <LinkedInIcon className="icono" />
                <TwitterIcon className="icono" />
                <InstagramIcon className="icono" />
            </Col>
            <Col
                md={{ span: 6, offset: 3 }}
                xs={{ span: 10, offset: 1 }}
                className="footer_details copyright"
            >
                <p>Todos los derechos reservados &copy; Puebloo 2021</p>
            </Col>
        </Row>
    )
}

export default Footer
