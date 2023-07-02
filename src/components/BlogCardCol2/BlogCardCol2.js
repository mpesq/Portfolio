import React from "react";
import "./BlogCardCol2.css"
import mac from "./maccoffee.png"

const BlogCardCol2 = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">
                    <h4>Blog</h4>
                    <h3>How to organize your CSS</h3>
                </div>
                <div className="image">
                    <img src={mac} alt="maccoffee"/>
                </div>
            </div>
            <p>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non
                volutpat nisl, a luctus mi.</p>

            <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
            <h5>dev.to</h5>
        </div>
    );
}

export default BlogCardCol2;