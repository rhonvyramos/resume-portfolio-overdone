import React from "react";
import FadeIn from "../components/FadeIn";
import "../assets/software.css"

// importing images
import character_creator_prev from "../assets/character_creator_prev.png"
import ufree_prev from "../assets/ufree_prev.png"
import libelnews_prev from "../assets/libelnews_prev.png"

import html_icon from "../assets/html_icon.png";
import css_icon from "../assets/css3_icon.png";
import js_icon from "../assets/js_icon.png";
import rest_icon from "../assets/rest_icon.png"
import mysql_icon from "../assets/mysql_icon.png"
import mongodb_icon from "../assets/mongodb_icon.png"
import apollo_icon from "../assets/apollo_icon.png"

export default function Software() {
    return(
        <FadeIn inProp={true}>
            <section id="page_software">
                <div id="software_contents">
                    <div id="software_title">
                        <p>Below are my most recent projects. These were developed in-collaboration with other well-experienced developers.</p>
                    </div>
                    <div id="software_projects">
                        <a href="https://github.com/hafsah1976/uFree" target="_blank" rel="noopener noreferrer">
                            <div className="project_box">
                                <div className="project_image">
                                    <img src={ufree_prev} alt="ufree" height={"96px"} width={"96px"} />
                                    <div id="project_tech">
                                        <img src={html_icon} alt="html" height={"30%"} width={"30%"} />
                                        <img src={css_icon} alt="css" height={"30%"} width={"30%"} />
                                        <img src={js_icon} alt="js" height={"30%"} width={"30%"} />
                                        <img src={mongodb_icon} alt="mongodb" height={"30%"} width={"30%"} />
                                        <img src={apollo_icon} alt="apollo" height={"30%"} width={"30%"} />
                                    </div>
                                </div>
                                <div className="project_text">
                                    <p className="project_title">
                                        uFree: Personal Schedule and Events Timing Matcher
                                    </p>
                                    <p className="project_description">
                                        An event schedule planner that emphasizes compromise between participants' personal schedules.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/Z-Alfadl/Character-Creator" target="_blank" rel="noopener noreferrer">
                            <div className="project_box">
                                <div className="project_image">
                                    <img src={character_creator_prev} alt="charactercreate" height={"96px"} width={"96px"} />
                                    <div id="project_tech">
                                        <img src={html_icon} alt="html" height={"30%"} width={"30%"} />
                                        <img src={css_icon} alt="css" height={"30%"} width={"30%"} />
                                        <img src={js_icon} alt="js" height={"30%"} width={"30%"} />
                                        <img src={mysql_icon} alt="mysql" height={"30%"} width={"30%"} />
                                    </div>
                                </div>
                                <div className="project_text">
                                    <p className="project_title">
                                        Selectable Character Creator
                                    </p>
                                    <p className="project_description">
                                        A character creator that allows users to customize and save character appearances and biographies.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="https://github.com/rhonvyramos/libel_news_reports" target="_blank" rel="noopener noreferrer">
                            <div className="project_box">
                                <div className="project_image">
                                    <img src={libelnews_prev} alt="libel" height={"96px"} width={"96px"} />
                                    <div id="project_tech">
                                        <img src={html_icon} alt="html" height={"30%"} width={"30%"} />
                                        <img src={css_icon} alt="css" height={"30%"} width={"30%"} />
                                        <img src={js_icon} alt="js" height={"30%"} width={"30%"} />
                                        <img src={rest_icon} alt="rest" height={"30%"} width={"30%"} />
                                    </div>
                                </div>
                                <div className="project_text">
                                    <p className="project_title">
                                        Libel News Network: Notebook and News Search Engine
                                    </p>
                                    <p className="project_description">
                                        A notebook-slash-search engine that allows users to search news articles and decide for themselves how useful these articles are without biases.
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </FadeIn>
    )
}