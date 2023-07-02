import React from "react";
import "./BlogCardCol.css";
import recipe from "./recipe.png"
import Button from "../Button/Button";

const BlogCardCol = () => {
    return (
        <div className="blog-card-row-container">
            <img src={recipe} alt="recipe" className="image"/>
            <div className="blog-card-row-text">
                <div className="hashtag">#HTML #CSS #responsive</div>
                <h3>Recipe Blog</h3>
                <p>In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. </p>
                <div className="button-group">
                    <Button color="primary">Demo</Button>
                    <Button variant="outline">Code</Button>
                </div>
            </div>
        </div>
    )
}

export default BlogCardCol;