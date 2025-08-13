import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">

          
          <div>
            <h3 className="text-xl font-semibold mb-4">About us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Right to Vote</a></li>
              <li><a href="#" className="hover:text-white transition-colors">In The Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Award & Recognition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Management Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Incubation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Indian National Elections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Customers</a></li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-xl font-semibold mb-4">Service</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">eVoting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">eAuction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">eAGM</a></li>
              <li><a href="#" className="hover:text-white transition-colors">eDataRoom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Time2Justice</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Other Policies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certificates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Notifications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App Permission</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold mb-4">Others</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Videos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Archives</a></li>
            </ul>
          </div>

        </div>

     
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-black p-1 rounded transform rotate-12">
                <div className="text-white font-bold text-xl">E</div>
              </div>
              <span className="text-2xl font-bold text-white">ElectSecure</span>
            </div>
            
            <div className="bg-white text-black px-6 py-2 rounded font-semibold">
              Contact Us
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
