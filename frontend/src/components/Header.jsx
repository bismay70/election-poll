import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Vote } from 'lucide-react'; 

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-100 border-b-4 border-black px-4 py-4 shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
         
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-black p-2 rounded-none transform -rotate-6 transition-transform group-hover:rotate-0">
                <span className="text-blue-400 font-bold text-xl">E</span>
            </div>
            <div className="font-black text-2xl text-black tracking-tighter uppercase relative">
              Elect<span className="text-white" style={{WebkitTextStroke: '1px black'}}>Poll</span>
            </div>
          </div>

         
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wide">
            <Link to="/" className="text-black hover:bg-black hover:text-blue-400 px-3 py-1 transition-colors border-2 border-transparent hover:border-black rounded-sm">Home</Link>
            <Link to="/voter" className="text-black hover:bg-black hover:text-blue-400 px-3 py-1 transition-colors border-2 border-transparent hover:border-black rounded-sm">Voter</Link>
            <Link to="/admin" className="text-black hover:bg-black hover:text-blue-400 px-3 py-1 transition-colors border-2 border-transparent hover:border-black rounded-sm">Admin</Link>
            <Link to="/dashboard" className="text-black hover:bg-black hover:text-blue-400 px-3 py-1 transition-colors border-2 border-transparent hover:border-black rounded-sm">Dashboard</Link>
            <Link to="/new-election" className="text-black hover:bg-black hover:text-blue-400 px-3 py-1 transition-colors border-2 border-transparent hover:border-black rounded-sm">New Election</Link>
          </div>

        
          <div className="flex items-center space-x-4">
            <Link to="/login" className="bg-black text-white px-6 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-white">
              Login
            </Link>

         
            <button
              className="md:hidden p-2 rounded-md text-black hover:bg-black hover:text-blue-400 border-2 border-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

      
        {isMobileMenuOpen && (
          <div className="md:hidden border-t-2 border-black mt-4 py-4 bg-blue-100">
            <nav className="flex flex-col space-y-2 px-2">
              <Link to="/" className="text-black font-bold hover:bg-black hover:text-blue-400 p-2 border-2 border-transparent hover:border-black">Home</Link>
              <Link to="/voter" className="text-black font-bold hover:bg-black hover:text-blue-400 p-2 border-2 border-transparent hover:border-black">Voter</Link>
              <Link to="/admin" className="text-black font-bold hover:bg-black hover:text-blue-400 p-2 border-2 border-transparent hover:border-black">Admin</Link>
              <Link to="/dashboard" className="text-black font-bold hover:bg-black hover:text-blue-400 p-2 border-2 border-transparent hover:border-black">Dashboard</Link>
              <Link to="/new-election" className="text-black font-bold hover:bg-black hover:text-blue-400 p-2 border-2 border-transparent hover:border-black">New Election</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

