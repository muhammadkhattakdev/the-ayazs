import React from "react";
import linesSVG from "../../static/svgs/5.svg";


export default function AboutSection() {


    return (
        <>
            <div className="about-wrapper">
                <img src={linesSVG} alt="" className="background-lines-img" />
                <div className="center-text">
                    <div className="small-center-text">
                        We are
                    </div>
                    <div className="name-center-text">
                        The Ayazs
                    </div>
                    <div className="d-center-text">
                        Elevating Digital <br />
                        Experiences
                    </div>
                </div>
                <div className="specs">
                        <div className="center-spec">
                            We specialize in crafting innovative digital experiences that blend design and functionality.
                        </div>
                        <div className="bordered-element">
                            
                        </div>
                        <div className="center-spec">
                            Our services are tailored to help businesses stand out and thrive in today’s digital landscape.
                        </div>
                    </div>
            </div>
        </>
    )
}