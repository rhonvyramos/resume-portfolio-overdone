import React from "react";
import "../assets/home.css"

// importing components
import NavBar from "../components/NavBar/index.js";

// importing browserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
    return (
        <section id="page_home">
            <div id="home_contents">
                <div id="home_margin">
                    <div id="home_header" className="home_element">
                        <NavBar />
                    </div>
                    <div id="home_main" className="home_element"></div>
                    <div id="home_footer" className="home_element"></div>
                </div>
            </div>
        </section>
    )
}