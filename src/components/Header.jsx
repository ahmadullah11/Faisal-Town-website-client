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

  const navigation = [
    { name: "Home", href: "/", active: true },
    { name: "About Us", href: "/about" },
    {
      name: "Projects",
      href: "/projects",
      dropdown: [
        { name: "Faisal Town", href: "/projects/faisal-town" },
        { name: "Faisal Hills", href: "/projects/faisal-hills" },
        { name: "Faisal Margalla City", href: "/projects/faisal-margalla-city" },
        { name: "All Projects", href: "/projects" },
      ],
    },
    { name: "Downloads", href: "/downloads" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "Member Portal", href: "/portal" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl backdrop-blur-md py-3"
          : "bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo - Enhanced with consistent styling */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-amber-500/25 transition-all duration-300">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white leading-tight tracking-wide">
                FAISAL<span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text">TOWN</span>
              </h1>
              <p className="text-[10px] text-amber-400 font-medium tracking-wider">
                Building Better Futures
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.dropdown ? index : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    item.active
                      ? "text-amber-400 bg-amber-400/10 shadow-md"
                      : "text-gray-300 hover:text-amber-400 hover:bg-slate-800/70 hover:shadow-md"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>

                {/* Enhanced Dropdown */}
                {item.dropdown && activeDropdown === index && (
                  <div className="absolute top-full left-0 mt-3 w-60 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-slate-700/50 py-2 opacity-0 animate-fade-in">
                    <div className="absolute -top-1 left-6 w-2 h-2 bg-slate-800 border-l border-t border-slate-700/50 rotate-45"></div>
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href={dropItem.href}
                        className="block px-4 py-3 text-sm text-gray-300 hover:text-amber-400 hover:bg-slate-700/60 transition-all duration-200 border-l-2 border-transparent hover:border-amber-400"
                      >
                        {dropItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Search - Enhanced */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative group">
              <button className="p-3 text-gray-300 hover:text-amber-400 hover:bg-slate-800/70 rounded-lg transition-all duration-300 hover:shadow-lg">
                <Search className="w-4 h-4" />
              </button>
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 text-gray-300 hover:text-amber-400 hover:bg-slate-800/70 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-slate-900/98 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden">
            <div className="px-4 py-6 space-y-1">
              {navigation.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      item.active
                        ? "text-amber-400 bg-amber-400/10"
                        : "text-gray-300 hover:text-amber-400 hover:bg-slate-800/70"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-amber-400 rounded-lg transition-all duration-200"
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Search */}
              <div className="pt-4 border-t border-slate-700/50">
                <button className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-amber-400 rounded-lg transition-all duration-200 w-full">
                  <Search className="w-4 h-4" />
                  <span className="text-sm">Search</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;