import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LogoutBtn from "../component/LogoutBtn";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const { status, userData } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItem = [
    { name: "Home", slug: "/", active: true },
    { name: "Post", slug: "/post", active: status },
    { name: "All Post", slug: "/all-post", active: status },
    { name: "Contact", slug: "/contact", active: true },
    { name: "About", slug: "/about", active: true },
  ];

  useEffect(() => {
    setMenuOpen(false); // Close on route change
  }, [location]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="sticky top-0 z-50 w-full bg-black shadow-md shadow-lime-400/10 text-green-400 font-[Poppins] overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo + Slogan */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="ZYRA Logo"
            className="w-10 h-10 object-contain animate-pulse drop-shadow-lg"
          />
          <span className="text-lime-400 text-sm italic hidden sm:block">
            create. connect. chronical.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold items-center">
          {navItem
            .filter((item) => item.active)
            .map((item) => (
              <Link key={item.name} to={item.slug} className="relative group">
                <span className="transition-colors hover:text-white">
                  {item.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-lime-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
        </nav>

        {/* Auth + Avatar + Hamburger */}
        <div className="flex items-center gap-3">
          {status && userData?.name && (
            <div
              title={userData.name}
              className="bg-green-700/30 border border-green-500/20 w-9 h-9 rounded-full flex items-center justify-center font-bold text-lime-300 text-sm shadow"
            >
              {userData.name.slice(0, 2).toUpperCase()}
            </div>
          )}
          {status ? (
            <LogoutBtn />
          ) : (
            <Link to="/login">
              <button className="bg-green-600 text-black px-4 py-1 rounded hover:bg-green-700 transition-all font-semibold">
                Login
              </button>
            </Link>
          )}

          {/* Hamburger */}
          <button
            className="md:hidden text-xl ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4 md:hidden px-6 pb-6 text-sm font-semibold bg-black text-green-300 overflow-x-hidden"
          >
            {navItem
              .filter((item) => item.active)
              .map((item) => (
                <Link
                  key={item.name}
                  to={item.slug}
                  className="border-b border-green-800 py-1 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
