import React, { useEffect } from "react";
import linesSVG from "../../static/svgs/5.svg";
import Aos from "aos";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutSection() {
  useEffect(() => {}, []);

  return (
    <>
      <div id="about" className="about-wrapper">
        <ScrollAnimation  animateOnce={true} animateIn="fadeIn">
          <div className="center-text">
            <div className="small-center-text">We are</div>
            <div className="name-center-text">The Ayazs</div>
            <div data-aos="fade-up" className="d-center-text">
              Elevating Digital <br />
              Experiences
            </div>
          </div>
        </ScrollAnimation>
        <div className="specs">
          <ScrollAnimation animateOnce={true}  animateIn="fadeIn">
            <div className="center-spec">
              We specialize in crafting innovative digital experiences that
              blend design and functionality.
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateOnce={true}  animateIn="fadeIn">
            <div className="bordered-element"></div>
          </ScrollAnimation>
          <ScrollAnimation  animateOnce={true} animateIn="fadeIn">
            <div className="center-spec">
              Our services are tailored to help businesses stand out and thrive
              in today’s digital landscape.
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateOnce={true}  animateIn="fadeIn">
          <div className="border-bottom-element"></div>
        </ScrollAnimation>
      </div>
    </>
  );
}
