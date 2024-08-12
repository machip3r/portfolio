import React from "react";
import Image from "next/image";

import MacChip from "../components/button/MacChip";

import { alts, language, who } from "@/util/translations";

import MacSurfing from "../../../public/assets/image/MacSurfing.png";
import MacFire from "../../../public/assets/image/MacFire.png";
import MacBasketball from "../../../public/assets/image/MacBasketball.png";

const Who = () => {
    return (
        <main>
            <div className="container-page container-who">
                <div className="left">
                    <h1>{who[ language ][ "title" ]}</h1>
                    <div className="right-2 my-5">
                        <Image
                            className="emoji selfie-surfing"
                            src={MacSurfing}
                            alt={alts[ language ][ "surfing" ]}
                        />
                        <Image
                            className="emoji selfie-basketball"
                            src={MacBasketball}
                            alt={alts[ language ][ "basketball" ]}
                        />
                        <Image
                            className="emoji selfie-fire"
                            src={MacFire}
                            alt={alts[ language ][ "fire" ]}
                        />
                    </div>
                    <div className="adjectives">
                        <div className="words rotate">
                            {who[ language ][ "subtitles" ].map((e, i) => (<span key={i} className="active">{e}</span>))}
                        </div>
                    </div>
                    <div className="short-description">
                        <p>{who[ language ][ "description" ]}</p>
                    </div>
                    <div className="skills">
                        <h3>{who[ language ][ "skills" ][ "title" ]}</h3>
                        <div className="container-skills">
                            {
                                who[ language ][ "skills" ][ "elements" ].sort().map((s, index) => (
                                    <MacChip key={index} name={s} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="right mt-10">
                    <Image
                        className="emoji selfie-surfing"
                        src={MacSurfing}
                        alt={alts[ language ][ "surfing" ]}
                    />
                    <Image
                        className="emoji selfie-basketball"
                        src={MacBasketball}
                        alt={alts[ language ][ "basketball" ]}
                    />
                    <Image
                        className="emoji selfie-fire"
                        src={MacFire}
                        alt={alts[ language ][ "fire" ]}
                    />
                </div>
            </div>
        </main>
    );
};

export default Who;