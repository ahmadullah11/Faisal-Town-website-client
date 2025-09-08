import React from "react";
import { ArrowRight, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Found my dream home through Faisal Town. The process was seamless and their team was incredibly helpful throughout the entire journey.",
      name: "Yasin",
      location: "Batkhila",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      quote: "Exceptional service! Their attention to detail and understanding of our needs made house hunting a breeze. They found us the perfect property in a competitive market.",
      name: "Suliman",
      location: "Temargara",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      quote: "Professional team that goes above and beyond. They helped us find the perfect property within our budget and negotiated a better price than we expected.",
      name: "Aamir",
      location: "Swat",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      quote: "Faisal Town property recommendations were spot-on! I found exactly what I was looking for in half the time I expected. Their technology is truly impressive.",
      name: "David",
      location: "Swat, Pary",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 5,
      quote: "The virtual tours saved me so much time. I was relocating from another state, and Faisal Town made the entire process stress-free with their detailed property insights.",
      name: "Angela",
      location: "Swat, Bankot",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 6,
      quote: "What impressed me most was how transparent they were about every property. No surprises at all, and their support team was always available to answer my questions.",
      name: "Abbas",
      location: "Islamabad, G12",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  const TestimonialCard = ({ testimonial }) => (
    <motion.div 
      className="group bg-white rounded-xl p-4 lg:p-5 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-amber-200 relative overflow-hidden text-center"
      whileHover={{ scale: 1.03 }}
    >
      {/* Quote Icon */}
      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
        <Quote className="w-5 h-5 text-white" />
      </div>

      {/* Rating Stars */}
      <div className="flex justify-center space-x-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 leading-snug mb-4 text-sm lg:text-sm">
        "{testimonial.quote}"
      </blockquote>

      {/* User Info */}
      <div className="flex flex-col items-center space-y-1">
        <div className="relative">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-100"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 text-base">{testimonial.name}</h4>
          <p className="text-gray-600 text-xs">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-xs font-medium mb-4">
            TESTIMONIALS
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            What Our <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">Clients Say</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Discover why homeowners trust Faisal Town to find their perfect property
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm">
            <span>Share Your Experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
