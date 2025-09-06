import React from "react";
import { Phone } from "lucide-react"; // modern phone icon

const ContactSection = () => {
  return (
    <section className="relative py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center text-center lg:text-left">
        {/* Left Side - Contact Info */}
        <div className="text-white">
          <div className="flex flex-col items-center lg:items-start gap-3 mb-6">
            <div className="bg-yellow-600 p-3 rounded-lg shadow-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium">For Further Inquiries Call</p>
              <h2 className="text-xl md:text-2xl font-bold text-yellow-400">
                051-111-324-725
              </h2>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
            For further inquiries, feel free to contact us directly. Our team is
            available to assist you with any questions or concerns regarding our
            projects, booking procedures, or services.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Phone No
              </label>
              <input
                type="text"
                placeholder="+923003331124"
                className="w-full mt-1 p-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Type your message"
                className="w-full mt-1 p-2 text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium py-2 rounded-md shadow-md transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
