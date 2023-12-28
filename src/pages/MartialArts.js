import React from "react";
import FadeIn from "../components/FadeIn";
import "../assets/martialarts.css"
import onekickma from "../assets/onekickma.jpg"
import vamai from "../assets/vamai.jpg"
import andrewgause from "../assets/andrewgause.png"

export default function MartialArts() {
    return(
        <FadeIn inProp={true}>
            <section id="page_martialarts">
                <div id="martialarts_contents">
                    <div id="martialarts_image">
                        <img src={onekickma} alt="onekickma" height={"200px"} width={"200px"} />
                        <img src={vamai} alt="vamai" height={"128px"} width={"128px"} />
                        <img src={andrewgause} alt="andrewgause" height={"140px"} width={"200px"} />
                    </div>
                    <div id="martialarts_text">
                        <p>
                            I have over nine years of martial arts teaching experience in Taekwondom with twelve years of learning underneath. 
                            I also have about a year of class experience in Muai Thai and another two years in Karate.<br/><br/>

                            The students I teach of course learn the curriculum, but I find it much more important
                            to establish discipline and self-confidence. Either they can do the techiques or they cannot. 
                            In my opinion, the student having the drive to learn the techniques and to maintain their skill is
                            much more important than simply knowing how to do the techniques themselves. The end goal I give myself
                            when teaching students is to have them perform the curriculum much better than I to the point that they
                            can teach others. After all, the best way to learn is to be a teacher ourselves!<br/><br/>

                            I started my martial arts journey when I was around six, 
                            joining Kim's Karate back before Springfield Mall was 
                            completely renovated. I think I was the smallest one in 
                            the classes! I made it to the Karate brown belt before my family and I
                            moved.<br/><br/>
                            I was then enrolled into a school named the Virginia Martial Arts Institute. 
                            It was a very competition-centric school and there I learned how to really train myself.
                            I went into several tournaments under their tutelage... unfortunately never getting gold. 
                            Even better, since my belt came from Karate, I had to re-learn the curriculum from the start.
                            And there... I got my first black belt! It wasn't an official Taekwondo Federation black belt, but
                            I was trained to be one anyways.<br/><br/>
                            After middle school, my family and I moved north into Maryland, where fourteen year-old me was hired
                            as a teaching assistant at the grand opening of Onekick Martial Arts. 
                            It was a completely different hurdle getting myself acclimated to the teaching life, dealing with students of all ages and all behaviors. 
                            But, I still took martial arts classes whenever I could. And so after two years of their classes, I got my first and second degree black
                            belts! I stayed with the school up until the end of college when my family and I moved back south to Virginia to pursue a job
                            in software.<br/><br/>
                            For the past year, I've been hired into Andrew Gause Martial Arts, acting as a part-time after school and camp counselor, and teaching assistant.
                            You can find me there working with the after school program and as part of the evening classes! If I happen to see you there, or come across
                            any of the schools I have mentioned here, hit me up! I can probably tell you some personal history I have with that school.
                        </p>
                    </div>
                </div>

            </section>
        </FadeIn>
    )
}