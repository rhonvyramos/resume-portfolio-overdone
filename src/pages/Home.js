import React from "react";
import "../assets/home.css"

// importing components
import NavBar from "../components/NavBar/index.js";

// importing browserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
                                <Route path="about" element={<div>HOME</div>}/>
                                <Route path="software" element={<div>SOFTWARE</div>}/>
                                <Route path="martialarts" element={<div>MARTIAL ARTS</div>}/>
                                <Route path="*" element={<div>NULL PAGE</div>}/>
                            </Routes>
                        </div>
                        <div id="home_footer" className="home_element"></div>
                    </div>
                </div>
            </section>
        </Router>

    )
}