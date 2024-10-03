import React from "react";
import TeamMember from "./teamMember";
import work1 from "../../static/images/work1.png";
import logo1 from "../../static/images/logo1.svg";
import ScrollAnimation from "react-animate-on-scroll";


export default function OurTeam() {

    return (
        <>
            <div id="our-team" className="our-team-wrapper">
                <div className="top-border-element"></div>
            <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                <h1 className="our-team-title">
                    Meet Our Team
                </h1>
            </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">


                <div className="our-team-desc">
                    We’re a passionate team of designers, developers, and problem-solvers, united by our love for creating digital experiences that make a difference. Get to know the minds behind The Ayazs
                </div>
        </ScrollAnimation>
                <div className="member-top-border"></div>
                <div className="members">
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                    <TeamMember />
                </div>
            </div>
        </>
    )
}