import React from "react";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";


export default function FAQs() {


    return (
        <>
            <div id="faqs" className="faqs-wrapper">
                <div className="top-border-element"></div>
                <h1 className="faqs-title">
                    Frequently Asked Questions
                </h1>
                <div className="faqs-desc">
                    Got a question? We’ve got answers! Here are some of the most common questions we get asked. If you don’t find what you’re looking for, feel free to reach out.
                </div>
                <div className="qs">
                    <FrequentlyAskedQuestion />
                    <FrequentlyAskedQuestion />
                    <FrequentlyAskedQuestion />
                </div>
            </div>
        </>
    )
}