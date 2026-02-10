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
    bgColor: "bg-blue-200"
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Election Official",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "The real-time analytics helped us monitor the election progress effectively.",
    bgColor: "bg-yellow-300"
  },
  {
    id: 3,
    name: "Rohan Gupta",
    role: "Voter",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 4,
    comment: "Transparent and reliable. I felt confident that my vote counted.",
     bgColor: "bg-red-200"
  }
];

const ClientReviews = () => {
  return (
    <section className="py-20 bg-white border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">
                Trusted by <span className="bg-yellow-300 px-2 inline-block border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">Thousands</span>
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
          {reviews.map((review, index) => (
             <div 
                key={review.id} 
                className={`relative group p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${review.bgColor}`}
             >
                {/* Avatar & Info */}
                <div className="flex items-center gap-4 mb-6 border-b-4 border-black pb-4">
                    <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-16 h-16 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                    />
                    <div>
                        <h4 className="font-black text-lg text-black uppercase">{review.name}</h4>
                        <span className="text-xs font-bold text-black border-2 border-black px-2 py-0.5 bg-white uppercase">{review.role}</span>
                    </div>
                </div>

                {/* Stars */}
                <div className="flex mb-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                         <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < review.rating ? 'text-black fill-black' : 'text-gray-400'}`} 
                            strokeWidth={3}
                        />
                    ))}
                </div>

                {/* Comment */}
                <p className="text-black font-bold text-lg leading-tight relative z-10">
                    "{review.comment}"
                </p>

                {/* Decorative Quote Mark */}
                <div className="absolute top-4 right-4 text-6xl font-black text-black opacity-10 font-serif leading-none">"</div>
             </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
