import React from 'react'

import {Row, Col, Container} from "react-bootstrap"

/** Media */
import video from '../../../video/Puebloo-video-promocional.mp4'
import entity from '../../../img/iconos/entitys.svg'
import search from '../../../img/iconos/search.svg'
import home from '../../../img/iconos/home.svg'


const Info = () => {
    return (
        <Container>
        {/** Video */}
            <Row style={{ margin: "0px" }}>
                <Col md={{ span: 6, offset: 3 }} >
                    <video width="100%" controls  src={video} type="video/mp4" className="video"/>
                </Col>
            </Row>
            <div id='nosotros' className="bienvenido laredsocial">
                <h2>La Red Social Rural</h2>
            </div>
            <Row className="nosotros">
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
            <Row className="nosotros">
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
        </Container>
    )
}

export default Info