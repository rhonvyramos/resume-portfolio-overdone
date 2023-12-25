import React from "react";
import FadeIn from "../components/FadeIn";
import "../assets/software.css"

// importing images
import character_creator_prev from "../assets/character_creator_prev.png"

export default function Software() {
    return(
        <FadeIn inProp={true}>
            <section id="page_software">
                <div id="software_contents">
                    <div id="software_title">
                        <p>Below are my most recent projects.</p>
                    </div>
                    <div id="software_projects">
                        <div className="project_box">
                            <div className="project_image">
                                <img src={character_creator_prev} alt="apollo" height={"96px"} width={"96px"} />
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
                        <div className="project_box">
                            <div className="project_image">
                                
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
                        <div className="project_box">
                            <div className="project_image">
                                
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
                    </div>
                </div>
            </section>
        </FadeIn>
    )
}