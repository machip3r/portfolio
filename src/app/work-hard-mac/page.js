"use client"

import React from "react";
import Image from "next/image";

import { alts, language, work } from "@/util/translations";

import MacFire from "../../../public/assets/image/MacFire.png";

const Work = () => {
    return (
        <main>
            <div className="container-page container-work">
                <div className="flex">
                    <h1>{work[ language ][ "title" ]}</h1>
                    <span>
                        <Image
                            className="ml-10 emoji"
                            src={MacFire}
                            alt={alts[ language ][ "fire" ]}
                        />
                    </span>
                </div>
                <div className="container-projects mt-5 flex justify-center items-center gap-10 w-full">
                    <div className="project">
                        <div className="project-images">
                            <Image
                                className="image"
                                src={MacFire}
                                alt={alts[ language ][ "fire" ]}
                            />
                        </div>
                        <div className="project-title">
                            <h3>jajaaj</h3>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-images">
                            <Image
                                className="image"
                                src={MacFire}
                                alt={alts[ language ][ "fire" ]}
                            />
                        </div>
                        <div className="project-title">
                            <h3>jajaaj</h3>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-images">
                            <Image
                                className="image"
                                src={MacFire}
                                alt={alts[ language ][ "fire" ]}
                            />
                        </div>
                        <div className="project-title">
                            <h3>jajaaj</h3>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-images">
                            <Image
                                className="image"
                                src={MacFire}
                                alt={alts[ language ][ "fire" ]}
                            />
                        </div>
                        <div className="project-title">
                            <h3>jajaaj</h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Work;