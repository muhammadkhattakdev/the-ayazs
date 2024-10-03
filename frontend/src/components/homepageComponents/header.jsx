import React from "react";
import logoSvg from "../../static/svgs/logo.svg";
import circlesSVG from "../../static/svgs/2.svg";
import linesSVG from "../../static/svgs/1.svg";
import sDownSVG from "../../static/svgs/s_down.svg";
import rightLinesSVG from "../../static/svgs/3.svg";
import straightLine from "../../static/svgs/4.svg";
import linkedinSVG from "../../static/svgs/in.svg";
import behanceSVG from "../../static/svgs/be.svg";
import ballSVG from "../../static/svgs/socialBallSVG.svg";
import {Link} from "react-router-dom";

export default function Header() {


    return (
        <>
            <header>
                <div className="left-svgs">
                    <img src={linesSVG} alt="" className="lines-svg" />
                    <img className="two-circle-svg" src={circlesSVG} alt="" />
                </div>
                <div className="center">
                    <div className="logo">
                        <img src={circlesSVG} alt="" />
                        <img src={logoSvg} alt="" />
                    </div>
                    <div className="scroll-arrow-svg">
                        <img src={sDownSVG} alt="" />
                        <span className="scroll-text">
                            explore
                        </span>
                    </div>
                </div>
                <div className="right-svgs">
                    <img src={rightLinesSVG} alt="" />
                </div>
                <div className="social-links">
                    <img src={straightLine} alt="" className="social-links-line" />
                    <div className="links">
                        <Link className="social-link-img">
                            <img className="link-img" src={behanceSVG} alt="" />
                            <img src={ballSVG} alt="" className="ball-img" />
                        </Link>
                        <Link className="social-link-img">
                            <img className="link-img"  src={linkedinSVG} alt="" />
                            <img src={ballSVG} alt="" className="ball-img" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}