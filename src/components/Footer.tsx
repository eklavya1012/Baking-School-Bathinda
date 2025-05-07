import React from 'react';
import { ChefHat, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 text-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <ChefHat className="text-accent-500" size={32} />
              <span className="font-display text-2xl font-bold">The Baking School</span>
            </div>
            <p className="text-gray-400 mb-6">
              Punjab's premier culinary education institute specializing in baking and pastry arts, founded by Mrs. Sneha Mittal in 2017.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-900 hover:bg-primary-800 text-white p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-primary-900 hover:bg-primary-800 text-white p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-primary-900 hover:bg-primary-800 text-white p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-primary-900 hover:bg-primary-800 text-white p-2 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#courses" className="text-gray-400 hover:text-white transition-colors">Our Courses</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Fundamentals of Baking</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Artisan Bread Making</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cake Decoration Masterclass</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Pastry Essentials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Indian Sweets & Desserts</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-accent-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Baking Street, Model Town<br />
                  Bathinda, Punjab 151001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-accent-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-accent-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@thebakingschool.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="mt-12 border-primary-800" />
        
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} The Baking School. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
        
        <div className="pb-6 text-center text-xs text-gray-600">
          <p>Website developed by Mr. Eklavya Aggarwal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;