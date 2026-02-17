import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div>
      <nav className=" w-full h-[10%] bg-white mb-20 flex items-center justify-between  py-4">
        <div className="flex flex-shrink-0 items-center ml-2">
          <img
            src="../public/image/Logo.png"
            alt=""
            className="w-20 h-20 object-cover"
          />{" "}
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaFacebook />
        </div>
      </nav>
    </div>
  );
}
