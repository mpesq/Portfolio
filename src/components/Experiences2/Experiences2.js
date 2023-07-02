import React from "react";
import './Experiences2.css'
import adidas from './adidas.png';
import hm from './hm.png';
import nivea from './nivea.png'

const Experiences2 = () => {
    return (
        <div className="container-experiences2">
            <h3>Experiences</h3>
            <div className="grid-experiences2">
                <div className="experience2">
                    <img src={adidas} alt="adidas"/>
                    <div>
                        <p>Feb 2017 - Current</p>
                        <h4>Front-end developer</h4>
                        <p className="text">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>
                <div className="experience2">
                    <img src={hm} alt="hm"/>
                    <div>
                        <p>Aug 2016 - Feb 2018</p>
                        <h4>Full-stack developer</h4>
                        <p className="text">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>
                <div className="experience2">
                    <img src={nivea} alt="nivea"/>
                    <div>
                        <p>Jun 2015 - Aug 2016</p>
                        <h4>Junior front-end developer</h4>
                        <p className="text">Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Experiences2;