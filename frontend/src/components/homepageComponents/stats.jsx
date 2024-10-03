import React from "react";
import svg100 from "../../static/svgs/100+.svg";
import svg150 from "../../static/svgs/150+.svg";
import svg10 from "../../static/svgs/10+.svg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Stats() {

    return (
        <>
            <div className="stats-wrapper">
            <ScrollAnimation animateOnce={true}  animateIn="bounceInLeft">


                <div className="stat">
                    <img src={svg100} alt="" />
                    <div className="stat-text">
                        Clients Served
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true}    animateIn="fadeIn">
                <div className="stat">
                    <img src={svg150} alt="" />
                    <div className="stat-text">
                        Projects Completed    
                    </div>
                </div>
            </ScrollAnimation>
            <ScrollAnimation  animateOnce={true}   animateIn="bounceInRight">
                <div className="stat">
                    <img src={svg10} alt="" />
                    <div className="stat-text">
                        Years Experience
                    </div>
                </div>
            </ScrollAnimation>
            </div>
        </>
    )
}