"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { language, nav } from "@/util/translations";

import { FaAngleDown, FaHammer, FaHome, FaLink, FaPeopleArrows, FaPeopleCarry, FaPersonBooth, FaUser } from "react-icons/fa";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="container-nav w-full px-5 fixed bottom-10">
            <div className="flex justify-center items-center">
                <nav className="px-10 py-10 h-10">
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex justify-center items-center h-full">
                            <ul className="flex gap-10">
                                <li>
                                    <Link className="flex flex-col justify-center items-center" href="/">
                                        <span className={"icon-selector" + ((pathname === "/") ? " active" : "")}>
                                            <FaAngleDown size={25} />
                                        </span>
                                        <p className={"text-nav" + ((pathname === "/") ? " active" : "")}>
                                            {nav[ language ][ "home" ][ "text" ]}
                                        </p>
                                        <FaHome className="icon-nav" size={(pathname === "/") ? 35 : 30} />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex flex-col justify-center items-center" href="/who-is-mac">
                                        <span className={"icon-selector" + ((pathname === "/who-is-mac") ? " active" : "")}>
                                            <FaAngleDown size={25} />
                                        </span>
                                        <p className={"text-nav" + ((pathname === "/who-is-mac") ? " active" : "")}>
                                            {nav[ language ][ "who" ][ "text" ]}
                                        </p>
                                        <FaUser className="icon-nav" size={(pathname === "/who-is-mac") ? 33 : 28} />
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link className="flex flex-col justify-center items-center" href="/work-hard-mac">
                                        <span className={"icon-selector" + ((pathname === "/work-hard-mac") ? " active" : "")}>
                                            <FaAngleDown size={25} />
                                        </span>
                                        <p className={"text-nav" + ((pathname === "/work-hard-mac") ? " active" : "")}>
                                            {nav[ language ][ "work" ][ "text" ]}
                                        </p>
                                        <FaHammer className="icon-nav" size={(pathname === "/work-hard-mac") ? 35 : 30} />
                                    </Link>
                                </li> */}
                                <li>
                                    <Link className="flex flex-col justify-center items-center" href="/better-call-mac">
                                        <span className={"icon-selector" + ((pathname === "/better-call-mac") ? " active" : "")}>
                                            <FaAngleDown size={25} />
                                        </span>
                                        <p className={"text-nav" + ((pathname === "/better-call-mac") ? " active" : "")}>
                                            {nav[ language ][ "contact" ][ "text" ]}
                                        </p>
                                        <FaLink className="icon-nav" size={(pathname === "/better-call-mac") ? 33 : 28} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;