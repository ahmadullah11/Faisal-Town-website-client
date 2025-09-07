import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const OurClientReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Sonia Khan",
      designation: "Resident",
      location: "Faisal Town Phase 1",
      rating: 5,
      review:
        "The community is strong here. Last month, the park held a family event, and it was heartwarming to see everyone come together.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      joinedYear: "2022",
    },
    {
      id: 2,
      name: "Bilal Qureshi",
      designation: "Resident",
      location: "Faisal Hills",
      rating: 5,
      review:
        "It's not just about security guards at the gates; Faisal Town has CCTV everywhere. That kind of investment in safety is rare.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      joinedYear: "2023",
    },
  ];

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, reviews.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  const goToSlide = (i) => setCurrentSlide(i);

  const StarRating = ({ rating }) => (
    <div className="flex justify-center space-x-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-xs font-medium mb-3">
            ⭐ OUR TESTIMONIAL
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Client{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">
              Reviews
            </span>
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Client Reviews at Faisal Town highlight satisfaction with
            high-quality housing, modern amenities, and exceptional customer
            service.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="overflow-hidden rounded-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[currentSlide].id}
                className="w-full flex-shrink-0 px-2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-md mx-auto max-w-xl text-center">
                  {/* Quote */}
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Quote className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Review */}
                  <StarRating rating={reviews[currentSlide].rating} />
                  <blockquote className="text-base md:text-lg text-gray-700 italic mb-4">
                    "{reviews[currentSlide].review}"
                  </blockquote>

                  {/* Reviewer */}
                  <div className="flex flex-col items-center space-y-2">
                    <img
                      src={reviews[currentSlide].image}
                      alt={reviews[currentSlide].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-100"
                    />
                    <h4 className="text-base font-semibold text-gray-900">
                      {reviews[currentSlide].name}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {reviews[currentSlide].designation} • Since{" "}
                      {reviews[currentSlide].joinedYear}
                    </p>
                    <p className="text-xs text-amber-600 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />{" "}
                      {reviews[currentSlide].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-amber-600"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-amber-600"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-1 mt-4">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide ? "bg-amber-500 w-6" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "50K+", label: "Happy Clients" },
            { value: "100%", label: "Satisfaction" },
            { value: "25+", label: "Years of Excellence" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-4 bg-white rounded-xl shadow"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-lg font-bold text-amber-500">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">Join Our Happy Community</h3>
            <p className="text-xs mb-4 max-w-md mx-auto">
              Become part of Pakistan's most trusted real estate community.
            </p>
            <button className="bg-white text-amber-600 px-4 py-2 rounded-md text-sm font-medium">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurClientReviews;
