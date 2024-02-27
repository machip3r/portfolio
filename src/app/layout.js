import { Inter } from "next/font/google";

import Navbar from "./components/navbar/Navbar";

import "./effects.css";
import "./globals.css";

const inter = Inter({ subsets: [ "latin" ] });

export const metadata = {
  title: "MacHip3r",
  description: "Professional portfolio",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className={inter.className}>
        <Navbar />
        <div className="p-5">
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
