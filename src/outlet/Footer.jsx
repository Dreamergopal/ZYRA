import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-green-400 px-6 py-10 shadow-inner shadow-green-800/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-green-500 mb-3">ZYRA . . .</h2>
          <p className="text-base text-green-300 italic">
            create. connect. chronical.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-500">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-white transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white transition">
                About Us
              </NavLink>
            </li>
            <li>
              <a
                href="https://shree-atlas.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                Services
              </a>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white transition">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-500">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/all-post" className="hover:text-white transition">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="hover:text-white transition">
                Terms of Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white transition">
                Help Center
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 mx-4 text-green-500">
            Follow Us
          </h3>
          <div className="flex space-x-4 items-center">
            <a
              href="https://www.linkedin.com/in/gopal-kumar-burman-824aa4277"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/dreamergopal"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img src="/twitter.png" alt="Twitter" className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/dreamergopal"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Dreamergopal/"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <img src="/github.png" alt="GitHub" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800 mt-8 pt-4 text-sm text-center text-green-500">
        © 2025 ZYRA. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
