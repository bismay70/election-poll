import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Aarav Patel",
    role: "Voter",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    comment: "This platform made voting so easy! I could cast my vote from home securely.",
    color: "bg-blue-100" 
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Election Official",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "The real-time analytics helped us monitor the election progress effectively.",
    color: "bg-purple-100"
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Voter",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 4,
    comment: "Transparent and reliable. I felt confident that my vote counted.",
     color: "bg-yellow-100"
  }
];

const ClientReviews = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Trusted by <span className="text-blue-500">Thousands</span>
        </h2>
        
        <div className="relative flex flex-wrap justify-center gap-8 md:gap-12">
            
            {/* Decorative Elements */}
             <div className="absolute top-0 left-10 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
             <div className="absolute top-0 right-10 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>


          {reviews.map((review, index) => (
             <div 
                key={review.id} 
                className={`relative group bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-sm flex-1 min-w-[300px] transform transition duration-500 hover:scale-105 hover:-translate-y-2`}
             >
                <div className={`absolute top-0 right-0 w-24 h-24 ${review.color} rounded-bl-full -z-10 opacity-50 transition-all group-hover:scale-150 group-hover:opacity-100`}></div>
                
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                        <img 
                            src={review.avatar} 
                            alt={review.name} 
                            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                        />
                         <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                             <Star className="w-3 h-3 text-yellow-500 fill-current" />
                         </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{review.role}</p>
                    </div>
                </div>

                <div className="flex mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                         <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed italic">
                    "{review.comment}"
                </p>
             </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
