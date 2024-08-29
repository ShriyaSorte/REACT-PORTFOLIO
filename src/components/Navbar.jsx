import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaChevronUp,
} from "react-icons/fa";
import logo from "../assets/ss_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const handleScroll = () => {
    // Show scroll-to-top button when scrolled 200px down
    if (window.scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav className="mb-3 flex items-center justify-between" id="home">
        {/* logo */}
        <div className="flex flex-shrink-0 items-center ml-2">
          <a href="#home">
            <img className="h-12 w-12 md:h-[100px] md:w-[100px] mt-3" src={logo} alt="logo" />
          </a>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="block md:hidden ">
          <button onClick={toggleMenu} className="text-3xl z-50">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* navigation links */}
        <div
          className={`fixed inset-0 bg-gray-800 text-white transition-transform transform text-center ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:relative md:w-auto md:max-w-none md:flex md:items-center md:gap-6 md:bg-transparent md:translate-x-0 md:h-auto md:overflow-visible`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 sm:mr-8">
            <a
              className="block py-2 px-4 hover:bg-gray-700 rounded font-semibold"
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              className="block py-2 px-4 hover:bg-gray-700 rounded font-semibold"
              href="#technologies"
              onClick={closeMenu}
            >
              Technologies
            </a>
            <a
              className="block py-2 px-4 hover:bg-gray-700 rounded font-semibold"
              href="#experience"
              onClick={closeMenu}
            >
              Experience
            </a>
            <a
              className="block py-2 px-4 hover:bg-gray-700 rounded font-semibold"
              href="#projects"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              className="block py-2 px-4 hover:bg-gray-700 rounded font-semibold"
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>

          {/* icons */}
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end gap-4 text-xl">
            <a
              className="hover:bg-gray-700 p-2"
              href="https://www.linkedin.com/in/shriya-sorte/"
            >
              <FaLinkedin />
            </a>
            <a
              className="hover:bg-gray-700 p-2"
              href="https://github.com/ShriyaSorte"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </nav>
      {/* Scroll-to-Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-gray-700 text-white rounded-full shadow-md hover:bg-gray-600 transition duration-300"
        >
          <FaChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
