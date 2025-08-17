import React from "react";
import { FaXTwitter, FaLinkedinIn, FaGithub, FaGlobe } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-6 sm:space-y-12">
        
        {/* Top Row - Logo (left) + Links (right) */}
        <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-12">
          
          {/* Logo */}
          <div className="flex items-start">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#0088FF] to-[#D100FF] shadow-lg shadow-purple-500/30" />
              <span className="text-white font-semibold text-base">
                Dragon Exam
              </span>
            </div>
          </div>

                     {/* Links (3 columns) */}
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-[15rem] text-left lg:me-3">

                         {[1, 2, 3].map((i) => (
               <div key={i} className="space-y-2 sm:space-y-3">
                 <h3 className="text-white text-sm font-semibold">Useful Links</h3>
                 <ul className="space-y-1 sm:space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-xs text-gray-400 hover:text-white transition"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs text-gray-400 hover:text-white transition"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-xs text-gray-400 hover:text-white transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

                 {/* Bottom Row */}
         <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-6">
           
           {/* Left: Copyright */}
           <p className="text-xs sm:text-sm text-gray-400">© DragonExam 2025</p>

                     {/* Right: Social Icons */}
           <div className="flex gap-2 sm:gap-4">
            {[FaXTwitter, FaLinkedinIn, FaGithub, FaGlobe].map((Icon, idx) => (
                             <a
                 key={idx}
                 href="#"
                 className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full border border-[#292929] bg-[#000000] flex items-center justify-center hover:bg-white hover:text-black transition"
               >
                 <Icon className="text-white text-xs sm:text-sm" />
               </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
