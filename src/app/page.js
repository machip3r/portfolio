import React from "react";
import Image from "next/image";

import MacLinks from "./components/button/MacLinks";

import { alts, home, language } from "@/util/translations";

import MacSurfing from "../../public/assets/image/MacSurfing.png";

const Home = () => {
  return (
    <main>
      <div className="container-page container-home">
        <span className="pretitle">{home[ language ][ "expression" ]}</span>
        <h1>{home[ language ][ "title" ]}</h1>
        <div className="aka">
          <span>
            {home[ language ][ "subtitle" ]}
          </span>
          <span className="active">
            &nbsp;&nbsp;{home[ language ][ "akas" ][ 0 ]},
            <Image
              className="emoji inline-block mx-5"
              src={MacSurfing}
              alt={alts[ language ][ "surfing" ]}
              width={80}
            />
          </span>
        </div>

        <ul className="mt-5 flex flex-col">
          {
            home[ language ][ "positions" ].map((p, index) => (
              <li key={index}>
                {p}
              </li>
            ))
          }
        </ul>

        <MacLinks className="mt-8 flex justify-start items-center gap-7" />

        <div className="triangles">
          <div className="triangle triangle-1"></div>
          <div className="triangle triangle-2"></div>
          <div className="triangle triangle-3"></div>
        </div>
      </div>
    </main>
  );
}

export default Home;
