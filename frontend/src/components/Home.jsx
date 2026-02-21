import React from "react";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">

      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://akm-img-a-in.tosshub.com/businesstoday/images/story/201904/general-elections-2019-m_660_042919091753.jpg')`,
          }}
        />

        <div className="absolute inset-0 bg-white/80 backdrop-blur-s" />
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-30">
        
        <div className="flex flex-col items-center gap-6 animate-fade-in">
          <img
            src="/images/Screenshot 2025-08-16 131130.png"
            alt="Election Icon"
            className="w-20 h-20 rounded shadow-xl"
          />

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-orange-500 via-gray-500 to-green-500 bg-clip-text text-transparent"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            ONLINE ELECTION PLATFORM
          </h1>
        </div>

        <p className="mt-8 max-w-3xl text-lg sm:text-xl text-gray-800 leading-relaxed font-medium">
          <span className="font-extrabold text-black">ElectPoll</span> enables
          secure, transparent and efficient elections anytime, anywhere.
        </p>
        <p className="mt-2 max-w-3xl text-md sm:text-lg text-gray-700">
          Experience real-time results, voter authentication, and a simple
          interface designed to make digital elections reliable and trustworthy.
        </p>

        <div className="mt-10">
          <button
            onClick={() => navigate("/register")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-xl shadow-xl transition duration-300 transform hover:scale-105"
          >
            Vote Now
          </button>
        </div>
      </section>

      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose ElectPoll?
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="font-semibold text-lg">Secure Authentication</h3>
              <p className="text-gray-600 mt-2">
                Advanced security measures ensure every vote is verified and protected.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-lg">Real-Time Results</h3>
              <p className="text-gray-600 mt-2">
                Watch live vote counts update instantly for full transparency.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">🗳</div>
              <h3 className="font-semibold text-lg">Fair & Transparent</h3>
              <p className="text-gray-600 mt-2">
                One person, one vote system to ensure fairness and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">How It Works</h2>

    <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

      {/* Step 1 */}
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-indigo-600">1</div>
        <p className="mt-2 font-medium">Register</p>
      </div>

      {/* Arrow */}
      <MoveRight className="hidden sm:block text-gray-400 w-10 h-6" />

      {/* Step 2 */}
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-indigo-600">2</div>
        <p className="mt-2 font-medium">Login</p>
      </div>

      {/* Arrow */}
      <MoveRight className="hidden sm:block text-gray-400 w-10 h-6" />

      {/* Step 3 */}
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-indigo-600">3</div>
        <p className="mt-2 font-medium">Cast Vote</p>
      </div>

      {/* Arrow */}
      <MoveRight className="hidden sm:block text-gray-400 w-10 h-6" />

      {/* Step 4 */}
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-indigo-600">4</div>
        <p className="mt-2 font-medium">View Results</p>
      </div>

    </div>
  </div>
</section>

    </main>
  );
}
