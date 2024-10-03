import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {


    return (
        <>
            <nav>
                <div className="link-1">
                    <div className="text">
                        1
                    </div>
                    <a href="#about" className="animated-btn">
                        About
                    </a>
                </div>
                <div className="link-1">
                    <div className="text">
                        2
                    </div>
                    <a href="#services" className="animated-btn">
                        Services
                    </a>
                </div>
                <div className="link-1">
                    <div className="text">
                        3
                    </div>
                    <a href="#our-work" className="animated-btn">
                        Work
                    </a>
                </div>
                <div className="link-1">
                    <div className="text">
                        4
                    </div>
                    <a href="#our-team"  className="animated-btn">
                        Team
                    </a>
                </div>
                <div className="link-1">
                    <div className="text">
                        5
                    </div>
                    <a href="#contact"  className="animated-btn">
                        Contact
                    </a>
                </div>
                <div className="link-1">
                    <div className="text">
                        6
                    </div>
                    <a href="#faqs"  className="animated-btn">
                        FAQs
                    </a>
                </div>
            </nav>
        </>
    )
}