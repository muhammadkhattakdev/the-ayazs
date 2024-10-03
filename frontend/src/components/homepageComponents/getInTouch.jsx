import React from "react";
import ScrollAnimation from "react-animate-on-scroll";


export default function GetInTouch() {

    return (
        <>
            <div id="contact" className="contact-wrapper">
            <ScrollAnimation animateOnce={true} animateIn="fadeIn">


                <div className="top-border-element"></div>
            </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">


                <h1 className="contact-title">
                    Get in Touch
                </h1>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">


                <div className="contact-desc">
                    Have a project in mind or just want to chat? We’re here to help you turn your ideas into reality. Reach out to us, and let's start building something amazing together.
                </div>
        </ScrollAnimation>


                <form className="contact-form" action="">
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">
                    <input type="text" placeholder="Name" className="contact-input-1" />
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">


                    <input placeholder="Email Address" type="text" className="contact-input-1" />
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">


                    
                    <input placeholder="Phone number" type="text" className="contact-input-1" />
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">


                    <textarea placeholder="Message(Tell us about your project or inquiry)" name="" id="" className="contact-input-1" rows={7}></textarea>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} animateIn="fadeIn">


                    <button type="submit" className="contact-btn">Send Message</button>
        </ScrollAnimation>
                </form>
            </div>
        </>
    )
}