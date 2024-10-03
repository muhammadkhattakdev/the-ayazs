import React from "react";
import work1 from "../../../static/images/work1.png";
import logo1 from "../../../static/images/logo1.svg";
import ScrollAnimation from "react-animate-on-scroll";





export default function MyWorkSample2() {

  return (
    <>
        <div className="my-work-sample-2">
            <img src={work1} alt="" className="work-img" />
            <img src={logo1} alt="" className="logo" />
        </div>
    </>
  );
}
