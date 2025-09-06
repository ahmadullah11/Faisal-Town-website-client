import React from 'react';
import { Calendar, MessageCircle, User, ArrowRight, Clock, Tag } from 'lucide-react';

const OurRecentBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Computerized Balloting will be held on 6th Mar 2022",
      excerpt: "Event Computerized Balloting will be held on 6th Mar 2022 Author: admin Dear",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      category: "NEWS & EVENTS",
      date: "December 19, 2024",
      author: "Admin",
      comments: 0,
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "The Auto Car Show at Faisal Hills was a paradise for car enthusiasts.",
      excerpt: "On September 30, 2024, Faisal Town Management organized an exhilarating Auto Car Show at the",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
      category: "NEWS & EVENTS",
      date: "January 7, 2025",
      author: "Admin",
      comments: 0,
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Lighting Up the Sky with Patriotism! Spectacular Independence Day Fireworks at Faisal Hills",
      excerpt: "On this 14th August, Faisal Town management proudly celebrated Pakistan's Independence Day with a spectacular",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      category: "NEWS & EVENTS",
      date: "January 7, 2025",
      author: "Admin",
      comments: 0,
      readTime: "4 min read"
    }
  ];

  const BlogCard = ({ blog }) => (
    <article className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden text-center">
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2 py-1 bg-amber-500 text-white text-[10px] font-medium rounded-full">
            <Tag className="w-3 h-3 mr-1" />
            {blog.category}
          </span>
        </div>

        {/* Read Time */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2 py-1 bg-white/70 text-gray-700 text-[10px] font-medium rounded-full">
            <Clock className="w-3 h-3 mr-1" />
            {blog.readTime}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-4">
        {/* Meta */}
        <div className="flex justify-center flex-wrap gap-3 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3 h-3" />
            <span>{blog.comments === 0 ? 'No Comments' : `${blog.comments} Comments`}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Read More */}
        <button className="inline-flex items-center space-x-1 text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors">
          <span>READ MORE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-xs font-medium mb-3">
            📝 LATEST BLOG
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Our Recent <span className="text-transparent bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text">Blogs</span>
          </h2>
          
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Our Recent Blogs at Faisal Town cover the latest updates on real estate trends, 
            investment tips, and in-depth insights into housing projects.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className="text-xs mb-4">
            Subscribe to get the latest updates on real estate trends and investment tips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-gray-900 text-sm focus:outline-none"
            />
            <button className="bg-white text-amber-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <button className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-black transition-all">
            <span>View All Blogs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurRecentBlogs;
