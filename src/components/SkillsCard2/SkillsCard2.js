import React from "react";
import './SkillsCard2.css';
import StatusBar from "../StatusBar/StatusBar";

const SkillsCard2 = () => {
    return (
        <div className="container-skills">
            <h3>FRONT END</h3>
            <div className="group-skills-box">
                <div className="group-skills">
                    <div className="skill">
                        <div className="skill-name">
                            React
                        </div>
                        <StatusBar level={60}></StatusBar>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            Javascript
                        </div>
                        <StatusBar level={80}></StatusBar>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            CSS
                        </div>
                        <StatusBar level={90}></StatusBar>
                    </div>
                </div>
                <div className="group skills">
                    <div className="skill">
                        <div className="skill-name">
                            Vue
                        </div>
                        <StatusBar level={60}></StatusBar>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            Redux
                        </div>
                        <StatusBar level={80}></StatusBar>
                    </div>
                    <div className="skill">
                        <div className="skill-name">
                            ReactNative
                        </div>
                        <StatusBar level={90}></StatusBar>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsCard2;