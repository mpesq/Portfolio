import React from "react";
import "./PersonCard2.css"; // or .PersonCard2.css
import yo from "./yo1.jpg";

/**
 * @returns {JSX.Element}
 * @constructor
 */
const PersonCard2 = () => {

    return (
        <div className="card-container">
            <div>
                <img src={yo} alt="yo" className="yo"/>
            </div>
            <div className="card-text">
                <div className="text-header">
                    <div className="name-person">
                        <h3>Marc Pesquera</h3>
                        <p>FullStack developer</p>
                    </div>
                    <div className="mail-phone">
                        <div className="mail"><span className="material-symbols-outlined">mail</span> <div>billy@example.com</div></div>
                        <div className="phone"><span className="material-symbols-outlined">phone</span> <div>(+603) 546 624 342</div></div>
                    </div>
                </div>
                <div className="text-body">
                    <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
                </div>
            </div>
        </div>
    );
}

export default PersonCard2;