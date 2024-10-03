import React from "react";
import member1 from "../../static/images/member1.png";

export default function TeamMember() {


    return (
        <>
            <div className="member">
                <div className="top-border-element"></div>
                <img src={member1} alt="" className="member-img" />
                <div className="member-text">
                    <div className="member-name">
                        Muhammad Ayaz
                    </div>
                    <div className="member-position">
                        Founder & CEO
                    </div>
                </div>
            </div>
        </>
    )
}