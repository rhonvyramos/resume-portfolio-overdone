import React from "react";
import FadeIn from "../components/FadeIn";
import "../assets/software.css"

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

                        </div>
                        <div className="project_box">

                        </div>
                        <div className="project_box">

                        </div>
                    </div>
                </div>
            </section>
        </FadeIn>
    )
}