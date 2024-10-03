import React from "react";
import webServicesGIF from "../../static/gifs/Web.gif";
import appServiceGIF from "../../static/gifs/App.gif";
import uiServiceGIF from "../../static/gifs/ui_ux.gif";
import ScrollAnimation from "react-animate-on-scroll";
export default function ServicesComponent() {

  return (

    <>
      <div id="services" className="services-wrapper">
        <ScrollAnimation animateOnce={true}  animateIn="fadeIn">
        <div className="services-title-wrapper">
          <h1>Services</h1>
        </div>
        </ScrollAnimation>
        <div className="my-services">
                
          <div className="first-column-services">
            <ScrollAnimation animateOnce={true}  animateIn="fadeIn">
            <div className="my-service">
                <img src={webServicesGIF} alt="" className="svg" />
              <div className="service-title">Web Design & Development</div>
              <div className="service-desc">
                From responsive websites to custom web applications, we build
                visually stunning and technically sound platforms. Our designs
                are tailored to meet your business goals and provide an
                exceptional user experience.
              </div>
              .
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true}  animateIn="fadeIn">

            <div className="my-service">
              <img src={appServiceGIF} alt="" className="svg" />
              <div className="service-title">Web Design & Development</div>
              <div className="service-desc">
                From responsive websites to custom web applications, we build
                visually stunning and technically sound platforms. Our designs
                are tailored to meet your business goals and provide an
                exceptional user experience.
              </div>
              .
            </div>
            </ScrollAnimation>
          </div>
        <div className="second-column-services">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">

          <div className="my-service">
            <img src={uiServiceGIF} alt="" className="svg" />
            <div className="service-title">Web Design & Development</div>
            <div className="service-desc">
              From responsive websites to custom web applications, we build
              visually stunning and technically sound platforms. Our designs are
              tailored to meet your business goals and provide an exceptional
              user experience.
            </div>
          </div>
        </ScrollAnimation>
        </div>
        </div>
      </div>
    </>
  );
}
