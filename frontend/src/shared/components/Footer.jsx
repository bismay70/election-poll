import { Link } from "react-router-dom";
import { Linkedin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent">
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-indigo-600 w-9 h-9 flex items-center justify-center rounded-md font-bold text-white">
                E
              </div>
              <span className="text-xl font-bold text-white">
                ElectPoll
              </span>
            </div>

            <p className="text-sm leading-relaxed">
              A secure and highly scalable digital election platform designed
              for transparent and real-time voting.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How it Works</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="https://eci.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Voting Rights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Developers
            </h3>

            <div className="space-y-2 text-sm">
              <div>
                <p className="text-white font-medium">Shreya Mishra</p>

                <div className="flex items-center gap-2 mt-1">
                  <Phone size={14}/>
                  <span>+91 63724 91151</span>
                </div>

                <a
                  href="https://www.linkedin.com/in/shreya-mishra-developer"
                  className="flex items-center gap-2 mt-1 hover:text-white"
                >
                  <Linkedin size={14}/> LinkedIn
                </a>
              </div>

              <div>
                <p className="text-white font-medium">Bismay Samal</p>

                <div className="flex items-center gap-2 mt-1">
                  <Phone size={14}/>
                  <span>+91 94393 17514</span>
                </div>

                <a
                  href="https://www.linkedin.com/in/bismay-samal-134b75312"
                  className="flex items-center gap-2 mt-1 hover:text-white"
                >
                  <Linkedin size={14}/> LinkedIn
                </a>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Get in Touch
            </h3>

            <p className="text-sm">
              Have questions or feedback about ElectPoll? We'd love to hear from you.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
            >
              Contact Us
            </Link>
          </div>
        </div> 
        <div className="mt-14 pt-8 flex flex-col items-center text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/90 to-transparent mb-6"></div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} ElectPoll. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Disclaimer:</span> ElectPoll is an independent project and is not affiliated with any government election authority.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;