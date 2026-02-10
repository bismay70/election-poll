import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react'; // Assuming lucide-react is available, else use text 'X'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend
    console.log('Form Submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-blue-50 text-gray-800 py-12 border-t-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Get in Touch */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-black uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
                <li className="hover:text-blue-500 cursor-pointer">Other Policies</li>
                <li className="hover:text-blue-500 cursor-pointer">Notifications</li>
                <li className="hover:text-blue-500 cursor-pointer">Time2Justice</li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-black uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-blue-500 cursor-pointer">Terms of Service</li>
              <li className="hover:text-blue-500 cursor-pointer">App Permission</li>
              <li className="hover:text-blue-500 cursor-pointer">Time2Justice</li>
            </ul>
          </div>
        
          {/* Column 3: Service */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-black uppercase tracking-wider">Service</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-blue-500 cursor-pointer">eVoting</li>
              <li className="hover:text-blue-500 cursor-pointer">eAuction</li>
              <li className="hover:text-blue-500 cursor-pointer">Time2Justice</li>
              <li className="hover:text-blue-500 cursor-pointer">Our Customers</li>
            </ul>
          </div>
          
          {/* Column 4: Brand & Contact Trigger */}
          <div>
             <h3 className="text-sm font-bold mb-4 text-black uppercase tracking-wider">ElectPoll</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
             India’s most trusted online voting solution. Secure, transparent, and efficient.
            </p>
             
             <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all font-bold text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
             >
                <MessageCircle size={18} />
                Contact Support
             </button>

             <div className="flex items-center gap-2 mt-6">
               <div className="bg-black p-1 rounded-sm transform -rotate-6">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-lg font-black text-gray-900 uppercase tracking-tighter">ElectPoll</span>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
                &copy; {new Date().getFullYear()} ElectPoll. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 relative">
                {/* Close Button */}
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Modal Header */}
                <div className="p-8 pb-0 text-center">
                    <h3 className="text-3xl font-black text-gray-900 mb-2">Contact Us</h3>
                    <p className="text-gray-500 text-sm">
                        Have questions? We'll get back to you shortly.
                    </p>
                </div>

                {/* Modal Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all bg-gray-50 resize-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white font-bold py-3.5 rounded-lg hover:bg-gray-800 transition-transform active:scale-95 shadow-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      )}

    </footer>
  );
};

export default Footer;
