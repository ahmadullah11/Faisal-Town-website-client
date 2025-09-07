import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube, MessageCircle, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  // parent variant for stagger effect
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // child animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Contact Us Section */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400 mb-4 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-amber-400"></div>
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 leading-relaxed">
                  <p className="font-medium">Faisal Tower, Faisal Town</p>
                  <p>Main Fateh Jang Road N-80</p>
                  <p>Near Tarnol Interchange Motorway</p>
                  <p>M-1, Rawalpindi Pakistan</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 pt-3 border-t border-slate-700 text-xs text-gray-400">
              <p><span className="font-medium text-white">Head Office:</span> 051-111-324-725</p>
              <p><span className="font-medium text-white">Faisal Town:</span> 051-2720504-5</p>
              <p><span className="font-medium text-white">Faisal Hills:</span> 051-4500000-2</p>
              <p><span className="font-medium text-white">Faisal Margalla City:</span> 051-5443746-7</p>
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400 mb-4 relative">
              Contact Info
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-amber-400"></div>
            </h3>
            <div className="space-y-4 text-sm">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-amber-400/30 transition-all"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="font-medium">Give us a call</span>
                </div>
                <a href="tel:051-111-324-725" className="text-lg font-semibold text-amber-400 hover:text-amber-300 transition-colors">
                  051-111-324-725
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-amber-400/30 transition-all"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span className="font-medium">Have a project in mind?</span>
                </div>
                <a href="mailto:info@faisaltown.com.pk" className="text-amber-400 hover:text-amber-300 transition-colors text-sm">
                  info@faisaltown.com.pk
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Useful Links Section */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400 mb-4 relative">
              Useful Links
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-amber-400"></div>
            </h3>
            <div className="space-y-2 text-sm">
              {[
                { name: 'Home', href: '/' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'About Us', href: '/about' },
                { name: 'Downloads', href: '/downloads' }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 6 }}
                  className="block text-gray-300 hover:text-amber-400 transition-all py-0.5"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Our Company Section */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400 mb-4 relative">
              Our Company
              <div className="absolute -bottom-2 left-0 w-10 h-0.5 bg-amber-400"></div>
            </h3>
            <div className="space-y-2 text-sm">
              {[
                { name: 'News and Events', href: '/news' },
                { name: 'Projects', href: '/projects' },
                { name: 'Blogs', href: '/blogs' },
                { name: 'Our Projects', href: '/our-projects' }
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 6 }}
                  className="block text-gray-300 hover:text-amber-400 transition-all py-0.5"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            {/* Social Media */}
            <div className="pt-4 border-t border-slate-700">
              <h4 className="font-medium text-sm mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Youtube, href: '#', label: 'YouTube' },
                  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
                  { icon: Instagram, href: '#', label: 'Instagram' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-amber-400 transition-all"
                    >
                      <Icon className="w-4 h-4 text-gray-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-slate-700 bg-slate-900/80"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-xs">
              © Copyright 2025 Faisal Town. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-400">
              <a href="/privacy" className="hover:text-amber-400">Privacy Policy</a>
              <a href="/terms" className="hover:text-amber-400">Terms of Service</a>
              <a href="/sitemap" className="hover:text-amber-400">Sitemap</a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
