import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
/** IMGS */
import puebloVerde from './../../img/Imágenes_Pueblos/pueblo-verde.jpg'
import tractor from './../../img/Imágenes_Pueblos/tractor-landing.jpg'
import pueblo from './../../img/Imágenes_Pueblos/casa-landing.jpg'
import entity from './../../img/iconos/entitys.svg'
import search from './../../img/iconos/search.svg'
import home from './../../img/iconos/home.svg'
import video from './../../img/puebloo-promocion.mp4'
import './Index.css'
import Typing from 'react-typing-animation';
import InstagramIcon from '@material-ui/icons/Instagram'

const Index = () => {
    const images = [
        pueblo,
        tractor,
        puebloVerde,
    ]
    const [index, setIndex] = useState(0)



    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((index + 1) % images.length)

        }, 3000);
        return () => clearTimeout(timer);
    }, [index])

    return (
        <div className="index">
            <div className="presentacion fondo">

                {/*                 <Typing speed={100} className="typing">
                    <h1>Y tú,<br /> ¿de quien eres?</h1>
                </Typing> */}

                <div className="typing">
                    <h1 >Y tú,<br /> ¿de quien eres?</h1>
                </div>
                <img src={images[index]} alt="nav_img" />
            </div>
            <div className="bienvenido">
                <br />
                <h2> Bienvenidos a PUEBLOO  </h2>
            </div>
            <Row style={{ margin: "0px" }}>
                <Col md={{ span: 6, offset: 3 }} >
                    <div className="embedResponsive embedResponsive16by9">
                        <video controls
                            className="video" src={video} type="video/mp4" />
                    </div>
                </Col>
            </Row>
            <div className="bienvenido laredsocial">

                <h2>La Red Social Rural</h2>
            </div>
            <Row className="nosotros" >
                <Col md={{ span: 10, offset: 1 }}>
                    <div className="nosotros_img" >
                        <img src={search} alt="nav_img" />
                    </div>
                </Col>
                <Col md={{ span: 4, offset: 4 }} >
                    <div className="nosotros_texto">
                        <h1>Encuentra tu pueblo</h1>

                        <p>Y tú, ¿de quién eres?. Utiliza nuestro buscador para encontrar cualquier aldea, pedanía o municipio de España. Busca un pueblo, consulta su información o síguelo para unirte a su comunidad, y comienza a disfrutar de todas las ventajas que te ofrecerá.</p>
                    </div>
                </Col>
            </Row>
            <Row className="nosotros">
                <Col md={{ span: 10, offset: 1 }}>
                    <div className="nosotros_img" >
                        <img src={entity} alt="nav_img" />
                    </div>
                </Col>
                <Col md={{ span: 4, offset: 4 }}   >
                    <div className="nosotros_texto">
                        <h1>Conecta con su gente</h1>

                        <p>Entérate de todo lo que ocurre en torno a tu pueblo. Busca a tus amigos de la infancia o haz nuevos amigos, da like a la foto de los kintos de tu madre, chatea sobre las últimas novedades, muestra al resto de pueblos cuáles eran las tradiciones de tus abuelos, usa el calendario para añadir eventos como las fiestas de tu pueblo o la semana cultural, o encuentra el trabajo de tus sueños.</p>
                    </div>
                </Col>
            </Row>
            <Row className="nosotros" >
                <Col md={{ span: 10, offset: 1 }} >
                    <div className="nosotros_img" >
                        <img src={home} alt="nav_img" />
                    </div>
                </Col>
                <Col md={{ span: 4, offset: 4 }}  >
                    <div className="nosotros_texto">
                        <h1>Escribe su historia</h1>
                        <p>Se parte de la historia de tu pueblo, participando y formando parte de su desarrollo. Como red social, nuestro objetivo es conectar a la población rural y facilitar la vida de los habitantes de los pueblos para frenar la despoblación. Desde Puebloo, pondremos las herramientas necesarias para que encuentres tu pueblo ideal e inicies una nueva vida… ¿Quieres saber cómo?</p>
                    </div>
                </Col>
            </Row>
            <Row className="footer" >
                <Col md={{ span: 6, offset: 3 }} xs={{ span: 4, offset: 4 }} className="footer_details redes">
                    <p>Contáctanos</p>
                </Col>
                <Col md={{ span: 6, offset: 3 }} xs={{ span: 4, offset: 4 }} className="footer_details redes">
                    <InstagramIcon></InstagramIcon>

                </Col>
                <Col md={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }} className="footer_details copyright">
                    <p>Todos los derechos reservados &copy; Puebloo 2021</p>
                </Col>
            </Row>
        </div>
    );
};

export default Index
