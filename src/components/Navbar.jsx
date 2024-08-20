import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/ss_logo.png";

const Navbar = () => {
  return (
    <nav className="mb-3 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center ml-2">
        <img
          className="h-[100px] w-[100px] mt-3"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/shriya-sorte/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ShriyaSorte">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
