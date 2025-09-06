import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Building,
  Users,
  Award,
  MapPin,
} from "lucide-react";

const HeaderHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Background images array
  const images = [
    "https://images.unsplash.com/photo-1756180818564-97d9d8afa7af?q=80&w=1170&auto=format&fit=crop",
    "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1170&auto=format&fit=crop",
  ];

  // ✅ Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const navigation = [
    { name: "Home", href: "/", active: true },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Downloads", href: "/downloads" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "Member Portal", href: "/portal" },
  ];

  const stats = [
    { icon: Building, value: "25+", label: "Years Experience" },
    { icon: Users, value: "50K+", label: "Happy Families" },
    { icon: Award, value: "100+", label: "Projects Delivered" },
    { icon: MapPin, value: "15+", label: "Prime Locations" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* === Background with fade === */}
      <div className="absolute inset-0 z-0 transition-all duration-1000">
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* === Header === */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
              <Building className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold text-white">FAISALTOWN</h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 text-sm">
            {navigation.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={`${
                  item.active
                    ? "text-amber-400"
                    : "text-white hover:text-amber-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* === Hero Section === */}
      <main className="relative z-10 flex items-center justify-center min-h-screen text-center px-6">
        <div className="max-w-3xl">
          <p className="text-amber-400 text-sm font-medium mb-2">
            🏆 Pakistan's Leading Real Estate Developer
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold text-white leading-snug">
            Faisal Town{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text">
              Group
            </span>
          </h1>

          <p className="text-base text-gray-300 mt-4">
            Faisal Town stands as a beacon of innovation and excellence in
            Pakistan's real estate industry. Under the visionary leadership of
            Chaudhry Abdul Majeed, the company has emerged as one of the
            fastest-growing enterprises.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setActiveBtn("learn")}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
                activeBtn === "learn"
                  ? "bg-yellow-400 text-black"
                  : "bg-amber-500 text-white hover:bg-amber-600"
              }`}
            >
              Learn More
            </button>

            <button
              onClick={() => setActiveBtn("portal")}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
                activeBtn === "portal"
                  ? "bg-yellow-400 text-black"
                  : "border border-white/40 text-white hover:bg-white/10"
              }`}
            >
              Member Portal
            </button>
          </div>

          {/* Stats Below Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <Icon className="w-6 h-6 mx-auto text-amber-400" />
                  <div className="text-lg font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeaderHero;
