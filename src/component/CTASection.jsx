import React from "react";
import bgImage from '../assets/images/CTA.png'
export default function CTASection() {
  return (
    <div   className="relative w-full h-full items-center justify-center"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    }}>
    <section className="relative w-full min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-20 flex justify-center">
        {/* Frosted Glass Box */}
        <div className=" backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-12 lg:p-20 border border-[#0088FF]/30 shadow-2xl text-center w-full max-w-4xl sm:max-w-5xl mx-2 sm:mx-4 md:mx-0">
          {/* Headline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 leading-tight">
            Your Best IELTS Score Starts Today
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-3 sm:mb-4 md:mb-5 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto px-1 sm:px-2 md:px-0">
            Join thousands of learners who turned their IELTS dreams into reality with Nyra
          </p>

          {/* CTA Button */}
          <button className="bg-gradient-to-b from-[#0088FF] to-[#0066CC] hover:from-[#0066CC] hover:to-[#0052A3] text-white font-bold text-sm sm:text-base md:text-md px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto ">
            Start My Free Trial
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}
