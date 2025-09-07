// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown, Building } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // all items now redirect to "/"
  const navigation = [
    { name: "Home", href: "/", active: true },
    { name: "About Us", href: "/" },
    {
      name: "Projects",
      href: "/",
      dropdown: [
        { name: "Faisal Town", href: "/" },
        { name: "Faisal Hills", href: "/" },
        { name: "Faisal Margalla City", href: "/" },
        { name: "All Projects", href: "/" },
      ],
    },
    { name: "Downloads", href: "/" },
    { name: "Contact Us", href: "/" },
    { name: "Blogs", href: "/" },
    { name: "Member Portal", href: "/" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg py-2"
          : "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <Building className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">
                FAISALTOWN
              </h1>
              <p className="text-[10px] text-amber-400 font-medium">
                Building Better Futures
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            {navigation.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() =>
                  setActiveDropdown(item.dropdown ? index : null)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href="/"
                  className={`flex items-center space-x-1 px-2 py-1 rounded-md text-sm transition-all duration-300 ${
                    item.active
                      ? "text-amber-400 bg-amber-400/10"
                      : "text-gray-300 hover:text-amber-400 hover:bg-slate-800/70"
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </a>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-slate-700 py-2">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href="/"
                        className="block px-4 py-2 text-gray-300 hover:text-amber-400 hover:bg-slate-700/60 transition-all text-sm"
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center">
            <button className="p-2 text-gray-300 hover:text-amber-400 hover:bg-slate-800/70 rounded-md transition-all">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:bg-slate-800/70 rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-blue-100 border-t border-blue-300 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className={`block px-3 py-2 rounded-md text-sm transition-all ${
                    item.active
                      ? "text-blue-700 bg-blue-200"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-200"
                  }`}
                  onClick={() => setIsMenuOpen(false)} // close menu after click
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
