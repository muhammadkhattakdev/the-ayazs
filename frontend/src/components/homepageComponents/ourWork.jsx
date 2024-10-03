import React from "react";
import AllWorks from "./workSampleComponents/allWorks";
import ScrollAnimation from "react-animate-on-scroll";


export default function OurWork() {


    return (
        <>
            <div id="our-work" className="our-work-wrapper">
                <ScrollAnimation  animateOnce={true} animateIn="fadeIn">
                    <div className="top-border-element"></div>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true}  animateIn="fadeIn">
                    <h1 className="work-title">
                        Our Work
                    </h1>
                </ScrollAnimation>
                <ScrollAnimation animateOnce={true}  animateIn="fadeIn">
                    <div className="work-desc">
                        Take a look at some of our latest projects where we blend creativity with smart design. From crafting intuitive UI/UX experiences to building full web and mobile solutions, we’re all about helping our clients achieve success through thoughtful digital design.
                    </div>
                </ScrollAnimation>
                <AllWorks />
            </div>  
        </>
    )
}