import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Vote } from 'lucide-react'; 

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
         
          <div className="flex items-center gap-2">
            <Vote className="h-8 w-8 text-black" /> 
            <div className="font-extrabold text-2xl text-black tracking-wide">
              ElectPoll
            </div>
          </div>

         
          <div className="hidden md:flex gap-6 text-sm font-semibold">
            <Link to="/" className="hover:text-black transition">Home</Link>
            <Link to="/voter" className="hover:text-black transition">Voter</Link>
            <Link to="/admin" className="hover:text-black transition">Admin</Link>
            <Link to="/dashboard" className="hover:text-black transition">Dashboard</Link>
            <Link to="/new-election" className="hover:text-black transition">New Election</Link>
          </div>

        
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition">
              Login
            </button>

         
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

      
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-black font-medium">Home</Link>
              <Link to="/voter" className="text-gray-700 hover:text-black font-medium">Voter</Link>
              <Link to="/admin" className="text-gray-700 hover:text-black font-medium">Admin</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-black font-medium">Dashboard</Link>
              <Link to="/new-election" className="text-gray-700 hover:text-black font-medium">New Election</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
