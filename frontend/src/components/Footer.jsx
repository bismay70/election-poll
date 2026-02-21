import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              About
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Right to Vote</a></li>
              <li><a href="#" className="hover:text-white transition">Media</a></li>
              <li><a href="#" className="hover:text-white transition">Awards</a></li>
              <li><a href="#" className="hover:text-white transition">Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">eVoting</a></li>
              <li><a href="#" className="hover:text-white transition">eAuction</a></li>
              <li><a href="#" className="hover:text-white transition">Justice Portal</a></li>
              <li><a href="#" className="hover:text-white transition">Our Customers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">App Permissions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Notifications</a></li>
              <li><a href="#" className="hover:text-white transition">Other Policies</a></li>
            </ul>

            <Link
              to="/contact"
              className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">

          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 w-8 h-8 flex items-center justify-center rounded-md font-bold text-white">
              E
            </div>
            <span className="text-xl font-bold text-white">
              ElectPoll
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            © {new Date().getFullYear()} ElectPoll. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
