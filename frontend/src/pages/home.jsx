import React from "react";
import Header from "../components/homepageComponents/header";
import Navbar from "../components/mainComponents/navbar";
import AboutSection from "../components/homepageComponents/aboutSection";



export default function Homepage() {


    return (
        <>
            <div className="home-wrapper">
                <Navbar />
                <Header />
                <AboutSection />
            </div>
        </>
    );
};