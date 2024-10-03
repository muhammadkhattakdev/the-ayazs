import React from "react";
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



export default function Homepage() {


    return (
        <>
            <div className="home-wrapper">
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