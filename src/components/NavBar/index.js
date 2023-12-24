import React from "react";
import "./index.css";

// importing Link
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <section id="component_navbar">
            <div id="navbar_contents">
                <Link to="/about" className="navbar_button">
                    <div>
                        <p>About Me</p>
                    </div>
                </Link>
                <Link to="/software" className="navbar_button">
                    <div>
                        <p>Software Skills</p>
                    </div>
                </Link>
                <Link to="/martialarts" className="navbar_button">
                    <div>
                        <p>Martial Arts Journey</p>
                    </div>
                </Link>
            </div>
        </section>
    )
};