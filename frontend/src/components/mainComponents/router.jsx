import React from "react";
import {Routes, Route} from "react-router-dom"
import Homepage from "../../pages/home";


export default function Router() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </>
    );
};