import React from "react";
import Image from "next/image";

import MacLinks from "../components/button/MacLinks";

import { alts, contact, language } from "@/util/translations";

import MacCoding from "../../../public/assets/image/MacCoding.png";

const Contact = () => {
    return (
        <main>
            <div className="container-page container-contact">
                <div className="flex">
                    <h1>{contact[ language ][ "title" ]}</h1>
                    <span>
                        <Image
                            className="ml-10 emoji"
                            src={MacCoding}
                            alt={alts[ language ][ "coding" ]}
                            width={140}
                        />
                    </span>
                </div>
                <div className="container-mac-links mt-20">
                    <MacLinks className="flex items-center justify-between mb-5" />
                </div>
                <div className="container-form mt-10">
                    <input className="mb-3" type="text" name="name" id="name" placeholder="Name" />
                    <input className="mb-3" type="text" name="name" id="name" placeholder="Email" />
                    <textarea className="mb-3" name="message" id="message" placeholder="Message"></textarea>
                    <button type="submit">We will be a good team!</button>
                </div>
            </div>
        </main>
    );
};

export default Contact;