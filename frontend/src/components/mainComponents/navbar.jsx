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
                    <Link className="animated-btn">
                        About
                    </Link>
                </div>
                <div className="link-1">
                    <div className="text">
                        2
                    </div>
                    <Link className="animated-btn">
                        Work
                    </Link>
                </div>
                <div className="link-1">
                    <div className="text">
                        3
                    </div>
                    <Link className="animated-btn">
                        Team
                    </Link>
                </div>
                <div className="link-1">
                    <div className="text">
                        4
                    </div>
                    <Link className="animated-btn">
                        Get in touch
                    </Link>
                </div>
                <div className="link-1">
                    <div className="text">
                        5
                    </div>
                    <Link className="animated-btn">
                        FAQs
                    </Link>
                </div>
            </nav>
        </>
    )
}