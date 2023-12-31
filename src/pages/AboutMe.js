import React, { useState } from "react";
import "../assets/aboutme.css"
import rv_photo from "../assets/Ramos_RhonVincent.JPG"
import html_icon from "../assets/html_icon.png";
import css_icon from "../assets/css3_icon.png";
import js_icon from "../assets/js_icon.png";
import mysql_icon from "../assets/mysql_icon.png"
import mongodb_icon from "../assets/mongodb_icon.png"
import apollo_icon from "../assets/apollo_icon.png"
import swift_icon from "../assets/swift_icon.png"
import react_icon from "../assets/react_icon.png"

import FadeIn from "../components/FadeIn";

export default function AboutMe() {

    const [altText, setAltText] = useState('');

    const handleMouseOver = (e) => {
        const alt = e.target.alt;
        setAltText("This is " + alt + ".");
    }

    const handleMouseLeave = (e) => {
        setAltText('');
    }

    return(
        <FadeIn inProp={true}>
            <section id="page_aboutme">
                <div id="aboutme_contents">
                    <div id="aboutme_images" className="aboutme_content">
                        <div id="image_profile">
                            <img src={rv_photo} alt="me" height={"250px"} width={"420px"} />
                        </div>
                        <div id="image_software">
                            <img src={html_icon} alt="HTML" height={"60px"} width={"60px"}
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} />
                            <img src={css_icon} alt="CSS" height={"60px"} width={"60px"}
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} />
                            <img src={js_icon} alt="Javascript" height={"60px"} width={"60px"} 
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} />
                            <img src={react_icon} alt="React" height={"60px"} width={"60px"} 
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} />
                            <img src={mysql_icon} alt="MySql" height={"60px"} width={"60px"} 
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} />
                            <img src={mongodb_icon} alt="MongoDB" height={"60px"} width={"60px"}
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} />
                            <img src={apollo_icon} alt="Apollo" height={"60px"} width={"60px"} 
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} />
                            <img src={swift_icon} alt="Swift" height={"60px"} width={"60px"} 
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave} />
                        </div>
                        <div id="image_software_name">
                            <p>{altText}</p>
                        </div>
                    </div>
                    <div id="aboutme_text" className="aboutme_content">
                        <div id="text_description">
                            Welcome to my profile! 
                            My name is Rhon Vincent Ramos. I am an iOS Developer, 
                            a holder of a Bachelor's Degree in Information Science 
                            from the University of Maryland,
                            and a graduate of the George Washington 
                            Full Stack Web Developer Coding Bootcamp.<br/><br/>
                            You can take a look around my profile by selecting the tabs above
                            or exploring the links in the footer below.
                        </div>
                    </div>
                </div>
                <script>
                    
                </script>
            </section>
        </FadeIn>
    )
}