import React from "react";
import { useSelector } from "react-redux";
import LogoutBtn from "../component/LogoutBtn";
import { Link } from "react-router-dom";

function Header() {
  const { status } = useSelector((state) => state.auth);

  const navItem = [
    { name: "Home", slug: "/", active: true },
    { name: "Post", slug: "/post", active: status },
    { name: "All Post", slug: "/all-post", active: status },
    { name: "Contact", slug: "/contact", active: true },
    { name: "About", slug: "/about", active: true },
  ];

  return (
    <header className="bg-black shadow-lg shadow-green-700/30 py-4 px-40 flex flex-col md:flex-row justify-between items-center text-green-400">
      {/* Logo + Slogan */}
      <div className="flex flex-col md:flex-row items-center gap-2">
        <h1 className="text-xl font-bold text-green-500">
          <Link>
            <img
              src="/logo.png"
              alt="ZYRA Logo"
              className="w-10 h-10 object-contain animate-pulse drop-shadow-lg"
            />
          </Link>
        </h1>
        <p className="text-sm text-green-300 md:ml-4 italic tracking-wide">
          create. connect. chronical.
        </p>
      </div>

      {/* Navigation Menu */}
      <nav className="mt-3 md:mt-0">
        <ul className="flex gap-4 text-sm">
          {navItem
            .filter((item) => item.active)
            .map((item) => (
              <li key={item.name}>
                <Link
                  to={item.slug}
                  className="hover:text-white transition-colors duration-200 font-semibold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      {/* Login / Logout Button */}
      <div className="mt-3 md:mt-0">
        {status ? (
          <LogoutBtn />
        ) : (
          <Link to="/login">
            <button className="bg-green-600 text-black px-4 py-1 rounded hover:bg-green-700 transition-all font-semibold">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
