import React from "react";

/** Components */
import Hero from '../components/index/hero/Hero'
import Info from '../components/index/info/Info'

import './Index.css'

const Index = () => {
    return (
        <div className="index" >
            <Hero />
            <Info />
        </div>
    );
};

export default Index
