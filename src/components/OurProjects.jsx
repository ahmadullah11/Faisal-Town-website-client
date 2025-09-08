import React from "react";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion"; // 👈 import

const OurProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Faisal Town Phase 1",
      location: "Islamabad",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      status: "Completed",
      description: "Premium residential community with modern infrastructure",
      category: "Residential",
    },
    {
      id: 2,
      name: "Faisal Town Phase 2",
      location: "Rawalpindi",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      status: "Under Development",
      description: "Contemporary living spaces with world-class amenities",
      category: "Residential",
    },
    {
      id: 3,
      name: "Faisal Margalla City",
      location: "Islamabad",
      image:
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
      status: "Launched",
      description: "Luxury development with scenic mountain views",
      category: "Premium",
    },
    {
      id: 4,
      name: "Faisal Hills Master Plan",
      location: "Islamabad Region",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&h=800&fit=crop",
      status: "Planning Phase",
      description: "Comprehensive master-planned community development",
      category: "Master Plan",
    },
  ];

  const ProjectCard = ({ project, isLarge = false }) => (
    <motion.div
      className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ${
        isLarge ? "col-span-2 row-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${
            isLarge ? "h-56 lg:h-72" : "h-60"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
              project.status === "Completed"
                ? "bg-green-500 text-white"
                : project.status === "Under Development"
                ? "bg-amber-500 text-white"
                : project.status === "Launched"
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Category */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-medium text-white border border-white/30">
            {project.category}
          </span>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <div className="flex items-center justify-center space-x-1 text-amber-400 mb-1">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{project.location}</span>
          </div>
          <h3 className="text-white font-semibold text-lg">{project.name}</h3>
          <p className="text-gray-300 text-xs leading-snug opacity-0 group-hover:opacity-100 transition-all duration-500">
            {project.description}
          </p>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg mb-3">
              {project.name}
            </h3>
            <button className="inline-flex items-center space-x-1 bg-amber-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition">
              <span>Read More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-xs font-medium mb-4">
            🏗️ Faisal Town
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">
              Projects
            </span>
          </h2>

           <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6 rounded-full"></div>

          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Faisal Town continues to grow with innovative developments,
            providing modern infrastructure and world-class amenities to
            thousands of happy families.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6 mb-8">
          <div className="w-full">
            <ProjectCard project={projects[3]} isLarge={true} />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            {
              icon: Users,
              value: "50,000+",
              label: "Happy Families",
            },
            {
              icon: Calendar,
              value: "25+",
              label: "Years Experience",
            },
            {
              icon: MapPin,
              value: "100+",
              label: "Projects Delivered",
            },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.6 }}
              >
                {/* 👇 Motion wrapper for icon rotation on hover */}
                <motion.div
                  className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3"
                  whileHover={{ rotate: 20 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="inline-flex items-center space-x-2 bg-amber-500 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-amber-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProjects;
