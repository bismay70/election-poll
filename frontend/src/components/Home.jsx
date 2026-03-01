import React from "react";
import { useNavigate } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Scale } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/images/Screenshot 2025-08-16 131130.png"
          alt="Election Icon"
          className="w-20 h-20 rounded-lg shadow-2xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-orange-400 via-gray-200 to-green-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          ONLINE ELECTION PLATFORM
        </motion.h1>
    <motion.p
      className="mt-6 max-w-3xl text-lg sm:text-xl text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <span className="font-bold text-white">ElectPoll</span> enables secure,
      transparent and efficient elections anytime, anywhere.
      Experience real-time results, voter authentication, and a simple
      interface designed to make digital elections reliable and trustworthy.
    </motion.p>

    <motion.div
      className="mt-10"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      <motion.button
        onClick={() => navigate("/register")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-indigo-600 to-blue-600 
        hover:from-indigo-700 hover:to-blue-700 
        text-white px-10 py-4 rounded-xl 
        font-semibold text-lg 
        shadow-lg hover:shadow-2xl 
        transition-all duration-300"
      >
        Vote Now
      </motion.button>
    </motion.div>

    </motion.div>
  </section>

  <section className="relative z-10 py-24 bg-transparent">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 -z-10" />
  <div className="max-w-6xl mx-auto px-6">

    <motion.h2
      className="text-3xl sm:text-4xl font-bold text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Why Choose ElectPoll?
    </motion.h2>

    <motion.div
      className="grid sm:grid-cols-3 gap-10 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="p-8 bg-white border border-gray-100 rounded-2xl shadow-md 
        hover:shadow-2xl hover:-translate-y-2 
        transition-all duration-300"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-xl bg-indigo-50 text-indigo-600">
            <ShieldCheck size={32} strokeWidth={1.8} />
          </div>
        </div>

        <h3 className="font-semibold text-lg">
          Secure Authentication
        </h3>

        <p className="text-gray-600 mt-3">
          Advanced security measures ensure every vote is verified and protected.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="p-8 bg-white border border-gray-100 rounded-2xl shadow-md 
        hover:shadow-2xl hover:-translate-y-2 
        transition-all duration-300"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-xl bg-indigo-50 text-indigo-600">
            <BarChart3 size={32} strokeWidth={1.8} />
          </div>
        </div>

        <h3 className="font-semibold text-lg">
          Real-Time Results
        </h3>

        <p className="text-gray-600 mt-3">
          Watch live vote counts update instantly for full transparency.
        </p>
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="p-8 bg-white border border-gray-100 rounded-2xl shadow-md 
        hover:shadow-2xl hover:-translate-y-2 
        transition-all duration-300"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-xl bg-indigo-50 text-indigo-600">
            <Scale size={32} strokeWidth={1.8} />
          </div>
        </div>

        <h3 className="font-semibold text-lg">
          Fair & Transparent
        </h3>

        <p className="text-gray-600 mt-3">
          One person, one vote system to ensure fairness and integrity.
        </p>
      </motion.div>

      </motion.div>
    </div>
  </section>

  <section className="relative z-10 py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      
      <h2 className="text-3xl sm:text-4xl font-bold mb-16">
        How It Works
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-12">
        <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full
                      bg-indigo-50 text-indigo-600 font-bold text-xl shadow-sm
                      transition-all duration-300
                      group-hover:shadow-md
                      group-hover:ring-4 group-hover:ring-indigo-100"
          >
            1
          </div>
          <p className="mt-3 font-medium text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
            Register
          </p>
        </div>

        <MoveRight className="hidden sm:block text-gray-300 w-10 h-6 transition-all duration-300 group-hover:text-indigo-300" />

        <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full
                      bg-indigo-50 text-indigo-600 font-bold text-xl shadow-sm
                      transition-all duration-300
                      group-hover:shadow-md
                      group-hover:ring-4 group-hover:ring-indigo-100"
          >
            2
          </div>
          <p className="mt-3 font-medium text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
            Login
          </p>
        </div>

        <MoveRight className="hidden sm:block text-gray-300 w-10 h-6" />

        <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full
                      bg-indigo-50 text-indigo-600 font-bold text-xl shadow-sm
                      transition-all duration-300
                      group-hover:shadow-md
                      group-hover:ring-4 group-hover:ring-indigo-100"
          >
            3
          </div>
          <p className="mt-3 font-medium text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
            Cast Vote
          </p>
        </div>

        <MoveRight className="hidden sm:block text-gray-300 w-10 h-6" />

        <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
          <div
            className="w-14 h-14 flex items-center justify-center rounded-full
                      bg-indigo-50 text-indigo-600 font-bold text-xl shadow-sm
                      transition-all duration-300
                      group-hover:shadow-md
                      group-hover:ring-4 group-hover:ring-indigo-100"
          >
            4
          </div>
          <p className="mt-3 font-medium text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
            View Results
          </p>
        </div>

      </div>
    </div>
  </section>
  </main>
  );
}
