"use client"

import React from "react";

import { language, work } from "@/util/translations";

const Work = () => {
    return (
        <main>
            <div className="container-page container-work">
                <h1>{work[ language ][ "title" ]}</h1>
            </div>
        </main>
    );
};

export default Work;