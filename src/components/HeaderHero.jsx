import React, { useState, useEffect } from "react";
import { Building, Users, Award, MapPin } from "lucide-react";

const HeaderHero = () => {
  const [activeBtn, setActiveBtn] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Background images array
  const images = [
    "https://images.unsplash.com/photo-1756180818564-97d9d8afa7af?q=80&w=1170&auto=format&fit=crop",
    "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg",
    "https://media.istockphoto.com/id/2213635605/photo/toronto-condominiums-in-a-trendy-middle-and-upper-class-district-near-yonge-and-eglinton.jpg?s=1024x1024&w=is&k=20&c=7XmCAZxr2zTp8vxIwbS_4DlAr8DFIkb9csWvaDB15oU=",
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const stats = [
    { icon: Building, value: "25+", label: "Years Experience" },
    { icon: Users, value: "50K+", label: "Happy Families" },
    { icon: Award, value: "100+", label: "Projects Delivered" },
    { icon: MapPin, value: "15+", label: "Prime Locations" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full Screen Background Slider */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImage === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
      </div>

      {/* Hero Content */}
      {/* 👇 added pt-24 to push hero below fixed header */}
      <main className="relative z-10 flex items-center justify-center min-h-screen text-center px-4 sm:px-6 pt-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-xs font-medium mb-4 tracking-wide">
            Pakistan's Leading Real Estate Developer
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Faisal Town{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text">
              Group
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Faisal Town stands as a beacon of innovation and excellence in
            Pakistan's real estate industry. Under the visionary leadership of
            Chaudhry Abdul Majeed, the company has emerged as one of the
            fastest-growing enterprises.
          </p>

{/* Buttons */}
<div className="flex justify-between sm:justify-center gap-4 mb-12 max-w-xs mx-auto w-full">
  <button
    onClick={() => setActiveBtn("learn")}
    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
      activeBtn === "learn"
        ? "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg scale-105"
        : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg hover:scale-105"
    }`}
  >
    Learn More
  </button>

  <button
    onClick={() => setActiveBtn("portal")}
    className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
      activeBtn === "portal"
        ? "bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg scale-105"
        : "border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm"
    }`}
  >
    Member Portal
  </button>
</div>


          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group text-center">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-xl lg:text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
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
