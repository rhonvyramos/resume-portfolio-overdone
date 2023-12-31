import React from "react";
import "./index.css";
import rvr_pdf from "../../assets/RVRamos_Resume.pdf"

export default function Footer() {
    return (
        <section id="component_footer">
            <div id="footer_contents">
                <div id="contact_elements">
                    <a href="https://github.com/rhonvyramos" target="_blank" rel="noopener noreferrer">
                        <p>GitHub</p>
                    </a>
                    <a href={rvr_pdf} target="_blank" rel="noopener noreferrer">
                        <p>Resume</p>
                    </a>
                    <p>rhonvyramos@gmail.com</p>
                    <p>571-243-9236</p>
                </div>
            </div>
        </section>
    )
};