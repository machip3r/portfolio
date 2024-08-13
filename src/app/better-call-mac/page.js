"use client"

import React, { useState } from "react";
import Image from "next/image";

import MacLinks from "../components/button/MacLinks";

import { alts, contact, language } from "@/util/translations";

import MacCoding from "../../../public/assets/image/MacCoding.png";

const Contact = () => {
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ responseMessage, setResponseMessage ] = useState("");

    const handleChange = (e) =>
        setFormData({
            ...formData,
            [ e.target.name ]: e.target.value,
        });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/" + process.env.FORMSPREE_ID, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (res.ok)
                setResponseMessage("Thank you! I'll text you ASAP. 🤪");
            else
                setResponseMessage("Something went wrong. ☹️ Please try again later.");
        } catch (error) {
            setResponseMessage("Something went wrong. ☹️ Please try again later.");
        } finally {
            setIsSubmitting(false);
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
    };

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
                <div className="container-mac-links mt-5">
                    <MacLinks className="flex items-center justify-between mb-5" />
                </div>
                <div className="container-form mt-10">
                    <form onSubmit={handleSubmit}>
                        <input className="mb-3" type="text" name="name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                        <input className="mb-3" type="text" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        <textarea className="mb-3" name="message" id="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                        <br />
                        {responseMessage && <p className="mt-3">{responseMessage}</p>}
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Contact;