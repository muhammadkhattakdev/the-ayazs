import React from "react";
import { Link } from "react-router-dom";
import linkedinSVG from "../../static/svgs/in.svg";
import behanceSVG from "../../static/svgs/be.svg";
import { faLinkedin, faBehance, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import brand icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {

    return (
        <>
            <footer>
                <div className="con">
                    Building 123, Street XYZ, Pakistan
                </div>
                <div className="con">
                    +923325874430
                </div>
                <div className="con">
                    ayazkhattakupwork@gmail.com
                </div>
                <Link className="con">
                    Privacy Policy
                </Link>
                <div className="con">
                    <Link>
                    <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                    </Link>
                    <Link>
                    <FontAwesomeIcon className="social-icon" icon={faBehance} />
                    </Link>
                    <Link>
                    <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                    </Link>
                    <Link>
                    <FontAwesomeIcon className="social-icon" icon={faWhatsapp} />
                    </Link>
                </div>
            </footer>
        </>
    )
}