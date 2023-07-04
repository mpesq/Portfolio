import React from "react";
import './hobbies2.css';
import gaming from './gaming.png';
import cooking from './cooking.png';
import biking from './biking.png';

const Hobbies2 = () => {
    return (
        <div className="container-hobbies">
            <h3>Experiences</h3>
            <div className="grid-hobbies">
                <div className="hobby">
                    <img src={gaming} alt="biking"/>
                    <div>
                        <h4>Gaming</h4>
                        <p className="text">Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>
                <div className="hobby">
                    <img src={cooking} alt="cooking"/>
                    <div>
                        <h4>Cooking</h4>
                        <p className="text">Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>
                <div className="hobby">
                    <img src={biking} alt="biking"/>
                    <div>
                        <h4>Biking</h4>
                        <p className="text">Quisque feugiat malesuada molestie.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hobbies2;