import React, {useState, useEffect} from 'react'

/** <IMGS> */

import puebloVerde from '../../../img/Imágenes_Pueblos/pueblo-verde.jpg'
import tractor from '../../../img/Imágenes_Pueblos/tractor-landing.jpg'
import pueblo from '../../../img/Imágenes_Pueblos/casa-landing.jpg'

/** <IMGS/> */

import './Hero.css'


const Hero = () => {
    const images = [
        pueblo,
        tractor,
        puebloVerde,
    ]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((index + 1) % 3)
        }, 3000);
        return () => clearTimeout(timer);
    }, [index])


    return (
        <>
            <div className="presentacion fondo" >
                <div className="typing">
                    <h1 >Y tú,<br /> ¿de quién eres?</h1>
                </div>
                <img src={images[index]} alt="nav_img" />
            </div>
            <div className="bienvenido">
                <br />
                <h2> Bienvenidos a PUEBLOO  </h2>
            </div> 
        </>
    )
}

export default Hero
