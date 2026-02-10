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
    <footer className="bg-blue-50 text-gray-800 py-16 border-t-4 border-black relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Get in Touch */}
          <div>
            <h3 className="text-sm font-black mb-6 text-black uppercase tracking-wider border-b-2 border-black pb-2 inline-block">Get in Touch</h3>
            <ul className="space-y-3 text-black text-sm font-bold">
                <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">Other Policies</li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">Notifications</li>
                <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">Time2Justice</li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h3 className="text-sm font-black mb-6 text-black uppercase tracking-wider border-b-2 border-black pb-2 inline-block">Legal</h3>
            <ul className="space-y-3 text-black text-sm font-bold">
              <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">Privacy Policy</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">Terms of Service</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">App Permission</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">Time2Justice</li>
            </ul>
          </div>
        
          {/* Column 3: Service */}
          <div>
            <h3 className="text-sm font-black mb-6 text-black uppercase tracking-wider border-b-2 border-black pb-2 inline-block">Service</h3>
            <ul className="space-y-3 text-black text-sm font-bold">
              <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">eVoting</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">eAuction</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">Time2Justice</li>
              <li className="hover:text-blue-600 hover:underline cursor-pointer transition-colors uppercase">Our Customers</li>
            </ul>
          </div>
          
          {/* Column 4: Brand & Contact Trigger */}
          <div>
             <h3 className="text-sm font-black mb-6 text-black uppercase tracking-wider border-b-2 border-black pb-2 inline-block">ElectPoll</h3>
            <p className="text-black text-sm leading-relaxed mb-6 font-bold">
             India’s most trusted online voting solution, enabling citizens and organizations to conduct secure, transparent, and efficient elections anytime, anywhere.
            </p>
             
             <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center w-full gap-2 bg-black text-white px-5 py-4 border-2 border-transparent hover:bg-white hover:text-black hover:border-black font-black text-sm uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform active:translate-y-1"
             >
                <MessageCircle size={18} />
                Contact Support
             </button>

             <div className="flex items-center gap-2 mt-8">
               <div className="bg-yellow-400 p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-3 hover:rotate-0 transition-transform">
                <span className="text-black font-black text-lg">E</span>
              </div>
              <span className="text-2xl font-black text-black uppercase tracking-tighter">ElectPoll</span>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t-4 border-black text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs font-black uppercase tracking-widest">
                &copy; {new Date().getFullYear()} ElectPoll. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
                {/* Decorative Strip */}
                <div className="h-4 bg-yellow-400 border-b-4 border-black"></div>

                {/* Close Button */}
                <button 
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 text-black hover:bg-red-500 hover:text-white border-2 border-transparent hover:border-black transition-all p-1 rounded-none z-10"
                >
                    <X size={24} strokeWidth={3} />
                </button>

                {/* Modal Header */}
                <div className="p-8 pb-0 text-center">
                    <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-2">Contact Us</h3>
                    <p className="text-gray-600 font-bold text-sm uppercase tracking-wide">
                        Have questions? We'll get back to you shortly.
                    </p>
                </div>

                {/* Modal Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="YOUR NAME"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-black placeholder-gray-400 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-white rounded-none"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="YOUR EMAIL"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-black placeholder-gray-400 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-white rounded-none"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="YOUR MESSAGE"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-black placeholder-gray-400 font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-white resize-none rounded-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white font-black uppercase tracking-widest py-4 border-2 border-transparent hover:bg-white hover:text-black hover:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform active:translate-y-1"
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
