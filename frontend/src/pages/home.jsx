import React, { useEffect } from "react";
import Header from "../components/homepageComponents/header";
import Navbar from "../components/mainComponents/navbar";
import AboutSection from "../components/homepageComponents/aboutSection";
import ServicesComponent from "../components/homepageComponents/servicesComponent";
import Stats from "../components/homepageComponents/stats";
import OurWork from "../components/homepageComponents/ourWork";
import Testimonials from "../components/homepageComponents/testimonials";
import OurTeam from "../components/homepageComponents/ourTeam";
import GetInTouch from "../components/homepageComponents/getInTouch";
import FAQs from "../components/homepageComponents/faqs";
import Footer from "../components/homepageComponents/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ChatWidget from "../components/homepageComponents/chatWidget";



export default function Homepage() {


    useEffect(() => {
        document.querySelector('.navbar-btn').addEventListener("click", e => {
            e.preventDefault();

            if (            document.querySelector('.small-screen-navbar-wrapper').style.left == '0%') {
                document.querySelector('.small-screen-navbar-wrapper').style.left = '-100%';
            } else {

                document.querySelector('.small-screen-navbar-wrapper').style.left = '0%';
                document.querySelector('.small-screen-navbar-wrapper').style.transition = '0.3s';
            };
        })
    }, [])

    return (
        <>
            <div className="home-wrapper">
                <div className="navbar-btn">
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ChatWidget />
                <Navbar />
                <Header />
                <AboutSection />
                <ServicesComponent />
                <Stats />
                <OurWork />
                <Testimonials />
                <OurTeam />
                <GetInTouch />
                <FAQs />
                <Footer />
            </div>
        </>
    );
};