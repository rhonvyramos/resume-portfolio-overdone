import React from "react";
import "./index.css";

// importing Link
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <section id="component_navbar">
            <div id="navbar_contents">
                <div className="navbar_button">
                    <p>About Me</p>
                </div>
                <div className="navbar_button">
                    <p>Software Skills</p>
                </div>
                <div className="navbar_button">
                    <p>Martial Arts Journey</p>
                </div>
            </div>
        </section>
    )
};