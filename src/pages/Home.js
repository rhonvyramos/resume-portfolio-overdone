import React from "react";
import "../assets/home.css"

// importing components
import NavBar from "../components/NavBar/index.js";

// importing browserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import AboutMe from "./AboutMe.js";
import Software from "./Software.js";
import MartialArts from "./MartialArts.js";

export default function Home() {
    return (
        <Router>
            <section id="page_home">
                <div id="home_contents">
                    <div id="home_margin">
                        <div id="home_header" className="home_element">
                            <NavBar />
                        </div>
                        <div id="home_main" className="home_element">
                            <Routes>
                                <Route exact path="/" element={<AboutMe />}/>
                                <Route path="software" element={<Software />}/>
                                <Route path="martialarts" element={<MartialArts />}/>
                                <Route element={<div>You have reached an unknown page, somehow...</div>}/>
                            </Routes>
                        </div>
                        <div id="home_footer" className="home_element"></div>
                    </div>
                </div>
            </section>
        </Router>

    )
}