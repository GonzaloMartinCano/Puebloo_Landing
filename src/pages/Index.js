import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

/** Components */
import Hero from '../components/index/hero/Hero'
import Info from '../components/index/info/Info'

import './Index.css'

const Index = () => {
    return (
        <div className="index" >
            <Hero/>
            <Info />
        </div>
    );
};

export default Index
