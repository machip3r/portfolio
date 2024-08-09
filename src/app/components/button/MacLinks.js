import Link from "next/link";

import { links } from "@/util/links";

import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const MacLinks = ({ className }) => {
    return (
        <div className={"mac-links " + className}>
            <Link href={links[ "gh" ]} target="_blank">
                <FaGithub className="icon primary brightness" size={50} />
            </Link>
            <Link href={links[ "ig" ]} target="_blank">
                <FaInstagram className="icon primary brightness" size={50} />
            </Link>
            <Link href={links[ "in" ]} target="_blank">
                <FaLinkedin className="icon primary brightness" size={50} />
            </Link>
            <Link href={links[ "tg" ]} target="_blank">
                <FaTelegram className="icon primary brightness" size={50} />
            </Link>
        </div>
    );
};

export default MacLinks;