import React from "react";
import FadeIn from "../components/FadeIn";
import "../assets/software.css"

// importing images
import character_creator_prev from "../assets/character_creator_prev.png"
import ufree_prev from "../assets/ufree_prev.png"
import libelnews_prev from "../assets/libelnews_prev.png"

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