import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <div className="flex items-center space-x-2">
            <div className="bg-black p-1 rounded transform rotate-12">
              <div className="text-white font-bold text-xl">E</div>
            </div>
            <span className="text-2xl font-bold text-black">ElectSecure</span>
          </div>

        
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
            <Link to="/admin" className="text-gray-700 hover:text-black font-medium">Admin Panel</Link>
            <Link to="/voter" className="text-gray-700 hover:text-black font-medium">Voter Dashboard</Link>
            <Link to="/voter_id" className="text-gray-700 hover:text-black font-medium">Voter ID</Link>
            <a href="#" className="text-gray-700 hover:text-black font-medium">About Us</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">Contact Us</a>
          </nav>

        
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition">
              Login
            </button>

           
            <button 
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

       
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
              <a href="#" className="text-gray-700 hover:text-black font-medium">About Us</a>
              <a href="#" className="text-gray-700 hover:text-black font-medium">Mobile Voting</a>
              <Link to="/admin" className="text-gray-700 hover:text-black font-medium">Admin Panel</Link>
            <Link to="/voter" className="text-gray-700 hover:text-black font-medium">Voter Dashboard</Link>
            <Link to="/voter_id" className="text-gray-700 hover:text-black font-medium">Voter ID</Link>
              <a href="#" className="text-gray-700 hover:text-black font-medium">Contact Us</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

