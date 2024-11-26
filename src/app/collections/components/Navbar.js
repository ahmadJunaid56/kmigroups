"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState("");
  const [scrolling, setScrolling] = useState(false);

  const links = [
    { path: "/", label: "HOME" },
    { path: "/design-diaries", label: "DESIGN DIARIES" },
    { path: "/sheets", label: "SHEETS" },
    { path: "/collections", label: "COLLECTIONS" },
    { path: "/contact", label: "CONTACT US" },
  ];

  useEffect(() => {
    // Update active path on client side
    setActivePath(window.location.pathname);

    // Handle scroll to toggle navbar styling
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar bg-gray-100 fixed top-0 left-0 right-0 z-10 hidden sm:block">
        <div className="flex justify-between items-center py-2 px-8">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-green-600"
            >
              <FaFacebook className="w-3 h-3" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-green-600"
            >
              <FaTwitter className="w-3 h-3" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-800 hover:text-green-600"
            >
              <FaInstagram className="w-3 h-3" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-800 w-4 h-4" />
              <span className="text-sm">Near Sabz Mandi Jhang Road, Faisalabad.</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-green-800 w-4 h-4" />
              <span className="text-sm">+92 344 444 4446</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`bg-white fixed w-full z-50 transition-all duration-500 ${
          scrolling ? "top-0" : "top-9"
        }`}
      >
        <div className="flex justify-between items-center py-4 px-8">
          {/* Logo */}
          <div className="logo">
            <Link href="/" passHref>
              <Image
                src="/kmilogo.png"
                alt="KMI Groups Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-12">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`${
                  activePath === path
                    ? "text-green-800 font-semibold border-b-2 border-green-800"
                    : "text-green-800"
                } relative hover:text-green-800 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-green-800 after:left-0 after:-bottom-1 after:scale-x-0 after:transition-transform hover:after:scale-x-100`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <FiX className="w-6 h-6 text-green-800" />
              ) : (
                <FiMenu className="w-6 h-6 text-green-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8 p-4">
            <button
              className="absolute top-4 right-4 text-green-800 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <FiX className="w-8 h-8" />
            </button>
            {links.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={() => {
                  setActivePath(path);
                  setIsOpen(false);
                }}
                className={`${
                  activePath === path
                    ? "text-green-800 font-semibold border-b-2 border-green-800"
                    : "text-green-800"
                } text-xl relative hover:text-green-800 after:content-[''] after:absolute after:w-1/2 after:h-[2px] after:bg-green-800 after:left-1/4 after:-bottom-1 after:scale-x-0 after:transition-transform hover:after:scale-x-100`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
