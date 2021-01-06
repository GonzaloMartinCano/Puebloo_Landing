import { Component } from "react";

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import tablet from './../../img/tablet.png'
import './Index.css'
import Typing from 'react-typing-animation';

export default class Index extends Component {
    render() {
        return (
            <div>
                <div className="transition">
                    <div className="presentacion fondo">
                        <Typing loop={true} speed={100}>
                            <h1>Y tú,<br /> ¿de quien eres?</h1>
                            <Typing.Reset count={0} delay={1500} />
                        </Typing>   
                    </div>
                </div>
                

                <div className="bienvenido">
                    <h4>Conoce la aplicación para cuidar de nuestros pueblos: </h4><br/>
                    <h2> Bienvenidos a PUEBLOO  </h2>
                </div>
                <Row style={{margin: "0px"}}>
                    <Col  md={{ span: 6, offset: 3 }} >
                        <div className="embedResponsive embedResponsive16by9">
                            <iframe title="video" className="video" src="https://drive.google.com/file/d/1BjbGlKujQIbIVlvwPWJKVZYxX_ivn1IJ/preview"></iframe>
                        </div>
                    </Col>
                </Row>

                <Row className="nosotros" style={{margin: "0px"}}>
                    <Col md={6} style={{padding: "0px"}}>
                        <div className="nosotros_img" >
                            <img src={tablet} alt="nav_img"/>
                        </div>
                    </Col>
                    <Col md={6}  style={{padding: "0px"}}>
                        <div className="nosotros_texto">
                            <h1>Sobre Nosotros</h1>
                            <hr></hr>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        </div>
                    </Col>


                </Row>
                <Row className="footer" style={{margin: "0px"}}>
                    <Col md={{ span: 3, offset: 2 }} xs={{ span: 3, offset: 3 }} className="footer_details">
                        <p>Contacto</p>
                        <p>Contacto</p>
                        <p>Contacto</p>

                    </Col>
                    <Col md={{ span: 3}}  className="footer_details">
                        <p>Contacto</p>
                        <p>Contacto</p>
                        <p>Contacto</p>
                    </Col>
                    <Col md={{ span: 3}}  className="footer_details">
                        <p>There are many variations of passages of Lorem Ipsum available,</p>
                        <p>There are many variations of passages of Lorem Ipsum available,</p>
                        
                    </Col>
                </Row>
            </div>
        );
        
    }
};
