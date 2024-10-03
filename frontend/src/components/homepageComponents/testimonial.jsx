import React from "react";
import client1 from "../../static/images/client1.png";
import commaSVG from "../../static/svgs/comma.svg";


export default function Testimonial() {


    return (
        <>
            <div className="client-testimonial">
                <img src={commaSVG} alt="" className="comma-img" />
                <img src={commaSVG} alt="" className="comma-img-2" />
                <img src={client1} alt="" className="testimonial-client-img" />
                <div className="text-area">
                    <div className="client-name">
                        Muhammad Amine
                    </div>
                    <div className="position">
                        CEO at Nurtify
                    </div>
                    <div className="feedback">
                    “The Ayazs team truly understood our vision and delivered a website that exceeded our expectations. Their UI/UX expertise transformed our user experience, and their communication throughout the project was fantastic. Highly recommend!”
                    </div>
                </div>
            </div>
        </>
    )
}