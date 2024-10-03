import React from "react";
import work1 from "../../../static/images/work1.png";
import logo1 from "../../../static/images/logo1.svg";
export default function MyWorkSample() {


    return (
        <>  
                <div className="my-work-sample">
                    <img src={work1} alt="" className="work-img" />
                    <img src={logo1} alt="" className="logo" />
                </div>
        </>
    )
}