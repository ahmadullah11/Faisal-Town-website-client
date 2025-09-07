import React, { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Home,
  DollarSign,
  Settings,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Questions = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const categories = [
    { id: "General", name: "General", icon: Home },
    { id: "Buying", name: "Buying", icon: DollarSign },
    { id: "Renting", name: "Renting", icon: Settings },
    { id: "For Agents", name: "For Agents", icon: Users },
  ];

  const faqs = {
    General: [
      {
        id: 1,
        question: "How do I search for properties?",
        answer:
          "Use our advanced search filters to narrow down properties by location, price range, bedrooms, and amenities. Save your searches to get notified when new matching listings appear.",
      },
      {
        id: 2,
        question: "Is there a mobile app?",
        answer:
          "Yes, we have mobile apps available for both iOS and Android. Download them from the App Store or Google Play to search properties, save favorites, and get instant notifications on the go.",
      },
      {
        id: 3,
        question: "How do I save favorite properties?",
        answer:
          "Simply click the heart icon on any property listing to save it to your favorites. You can access all your saved properties from your account dashboard and share them with family or friends.",
      },
    ],
    Buying: [
      {
        id: 4,
        question: "What documents do I need for buying?",
        answer:
          "You'll typically need proof of income, bank statements, ID verification, and pre-approval letter from your lender. We provide a complete checklist to help you prepare all necessary documentation.",
      },
      {
        id: 5,
        question: "How long does the buying process take?",
        answer:
          "The typical buying process takes 30-45 days from offer acceptance to closing, though this can vary based on financing, inspections, and other factors.",
      },
    ],
    Renting: [
      {
        id: 6,
        question: "What are the rental requirements?",
        answer:
          "Most landlords require proof of income (typically 3x monthly rent), credit check, references from previous landlords, and a security deposit equal to 1-2 months rent.",
      },
      {
        id: 7,
        question: "Can I view properties virtually?",
        answer:
          "Yes! We offer virtual tours for most properties, including 3D walkthroughs and live video calls with our agents for remote viewing.",
      },
    ],
    "For Agents": [
      {
        id: 8,
        question: "How do I list a property?",
        answer:
          "Agent partners can list properties through our agent portal. Upload photos, add detailed descriptions, set pricing, and manage showings all in one place.",
      },
      {
        id: 9,
        question: "What are the commission rates?",
        answer:
          "Our competitive commission structure varies by property type and location. Contact our agent relations team for detailed pricing information and partnership benefits.",
      },
    ],
  };

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const CategoryButton = ({ category, isActive, onClick }) => {
    const Icon = category.icon;
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg"
            : "bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600 border border-gray-200 hover:border-amber-200"
        }`}
      >
        <Icon className="w-4 h-4" />
        <span>{category.name}</span>
      </motion.button>
    );
  };

  const FAQItem = ({ faq, isExpanded, onToggle }) => (
    <motion.div
      layout
      className="bg-white rounded-xl border border-gray-200 hover:border-amber-200 transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-amber-50 transition-all duration-300 group"
      >
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
          {faq.question}
        </h3>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
          <ChevronDown className="w-5 h-5 text-amber-500" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="px-6 pb-6"
          >
            <div className="border-t border-gray-100 pt-4">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-xs font-medium mb-4 tracking-wide"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            FAQ
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">
              Frequently Asked Questions
            </span>
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Quick answers to common questions about buying, renting, and selling.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={{ hidden: { scale: 0.9, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
            >
              <CategoryButton
                category={category}
                isActive={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-4xl mx-auto space-y-4 mb-12"
          layout
        >
          {faqs[activeCategory]?.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isExpanded={expandedFAQ === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <motion.button
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-medium"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(251, 191, 36, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>

          <motion.button
            className="group bg-white text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-200 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All FAQs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Questions;
