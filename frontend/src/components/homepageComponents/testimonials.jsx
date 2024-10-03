import React from "react";
import Testimonial from "./testimonial";
import moveBtn from "../../static/svgs/next.svg";
import ScrollAnimation from "react-animate-on-scroll";

export default function Testimonials() {
  return (
    <>
      <div className="testimonials-wrapper">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <div className="top-border-element"></div>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <h1 className="testimonials-title">What Our Clients Say</h1>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
          <div className="testimonials-desc">
            Don’t just take our word for it – here’s what our clients have to
            say about working with us. We’re proud to have helped businesses
            achieve their digital goals.
          </div>
        </ScrollAnimation>
        <div className="testimonials-container">
          <Testimonial />
        </div>

        <div className="move-btns">
          <button className="prev-btn move-btn">
            <img src={moveBtn} alt="" />
          </button>
          <button className="next-btn move-btn">
            <img src={moveBtn} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
