import React from "react";
import "../assets/aboutme.css"

import FadeIn from "../components/FadeIn";

export default function AboutMe() {
    return(
        <FadeIn inProp={true}>
            <section id="page_aboutme">
                ABOUT ME
            </section>
        </FadeIn>
    )
}