import React from "react";
import Hero_Section from "../assets/images/Hero_Section.png";
import Owl from "../assets/images/owl.png";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${Hero_Section})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
           minHeight: '130vh'
        }}
      >
        <div className="w-full mx-auto px-4 sm:px-8 md:px-16 py-6 sm:py-8 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left md:mt-0 mt-20 sm:mt-28 lg:w-xl sm:max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white">
              Unleash Your English Power with{" "}
              <span className="text-[#D100FF]">Nyra</span>
            </h1>
            <p className="mt-3 sm:mt-4 md:mt-6 text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Master IELTS Speaking, Writing, Listening & Reading with
              AI-powered daily challenges, instant feedback, and smart
              strategies — so you can crush your exam with confidence.
            </p>
            <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-4 justify-center md:justify-start">
              <button className="!bg-[#0088FF] px-4 sm:px-6 md:px-6 h-12 sm:h-14 md:h-12 rounded-full font-semibold text-white hover:bg-[#0070d6] transition text-sm sm:text-base md:text-sm">
                Start My Free Trial
              </button>
              <button 
                className="px-4 sm:px-6 md:px-10 h-12 sm:h-14 md:h-12 rounded-full font-medium text-gray-300 transition-all duration-300 text-sm sm:text-base md:text-sm relative overflow-hidden bg-opacity-10"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.1)',
                  boxShadow: 'inset 0 2px 4px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 8px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2), 0 6px 12px rgba(0, 0, 0, 0.4)';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'inset 0 2px 4px rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 8px rgba(0, 0, 0, 0.3)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={Owl}
              alt="Nyra Owl"
              className="w-40 sm:w-48 md:w-64 lg:w-80 xl:w-[28rem] object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
