'use client';

import React, { useState } from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here, send the data to your server
  };

  return (
    <div className="bg-light text-dark font-Switzer pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-Shrikhand text-accent mb-8">Contact Us</h1>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Form Section */}
          <div>
            <h2 className="text-xl font-Shrikhand text-accent mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-accent text-white px-6 py-2 rounded hover:bg-opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div>
            <h2 className="text-xl font-Shrikhand text-accent mb-4">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="mr-2 h-5 w-5" /> +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-5 w-5" /> info@surfclub.com
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" /> 123 Beach Road, Surf City, CA 90000
              </p>
            </div>
            <h2 className="text-xl font-Shrikhand text-accent mt-6 mb-4">Social Media</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-pink-600">
                <Instagram className="h-6 w-6" />
              </a>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6 pt-4">
              <a
                href="https://wa.me/15551234567"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition duration-300"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7710702764135!2d-118.41353388478173!3d33.88120798065191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b3eca6743829%3A0x98448969b9b4373d!2sEl%20Porto%20Beach!5e0!3m2!1sen!2sus!4v1637710860547!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
