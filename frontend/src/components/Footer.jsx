import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t-8 border-blue-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
                <li>Other Policies</li>
                <li>Notifications</li>
                <li>Contact us</li>
                <li>Time2Justice</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>App Permission</li>
              <li>Time2Justice</li>
            </ul>
          </div>
        
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400 uppercase tracking-wider">Service</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>eVoting</li>
              <li>eAuction</li>
              <li>Time2Justice</li>
              <li>Our Customers</li>
            </ul>
          </div>
          
          <div>
             <h3 className="text-xl font-bold mb-4 text-blue-400 uppercase tracking-wider">ElectPoll Setup</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
             ElectPoll is India’s most trusted online voting solution, enabling citizens and organizations to conduct secure, transparent, and efficient elections anytime, anywhere.
            </p>
          </div>

        </div>

     
        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
               <div className="bg-blue-400 p-1 rounded-sm transform -rotate-6">
                <span className="text-black font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-black text-white uppercase tracking-tighter">ElectPoll</span>
            </div>
            
            <p className="text-gray-500 text-xs">
                &copy; {new Date().getFullYear()} ElectPoll. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
