import React from "react";
import { Home, Globe, Headphones, List } from "lucide-react"; // icons

const WhyChoose = () => {
  const features = [
    {
      icon: <Home className="w-7 h-7 text-white" />,
      title: "Verified Properties",
      description:
        "Every plot and property is carefully verified, ensuring transparency and peace of mind.",
    },
    {
      icon: <Globe className="w-7 h-7 text-white" />,
      title: "Prime Location",
      description:
        "Located near New Islamabad International Airport with direct motorway access for convenience.",
    },
    {
      icon: <Headphones className="w-7 h-7 text-white" />,
      title: "24/7 Support",
      description:
        "Our dedicated team is always available to guide and assist you at every step.",
    },
    {
      icon: <List className="w-7 h-7 text-white" />,
      title: "Modern Infrastructure",
      description:
        "Wide roads, underground electricity, gas, and water supply ensure a modern lifestyle.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-xs font-medium mb-4">
            🌟 Why Choose Us
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Why Choose{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">
              Faisal Town
            </span>
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Faisal Town Islamabad is more than just a housing society – it’s a
            complete lifestyle destination offering comfort, convenience, and
            investment opportunities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
