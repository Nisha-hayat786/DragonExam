import React, { useState } from "react";
import WhereYouStand_Background from "../assets/images/WhereYouStand_Background.png";
import satellite from "../assets/images/Sattelite.gif";

export default function WhereYouStandSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentSections = [
    {
      title: "Know",
      highlighted: "Where",
      subtitle: "You Stand",
      description: "Nyra helps you measure what matters — not just your effort, but your real improvement. Every step you take is tracked, visualized, and turned into insights to help you reach your IELTS goals with confidence."
    },
    {
      title: "Track Your",
      highlighted: "Progress",
      subtitle: "Daily",
      description: "Monitor your improvement with detailed analytics and insights. See exactly how you're progressing across all IELTS skills and identify areas that need more focus."
    },
    {
      title: "Get",
      highlighted: "Personalized",
      subtitle: "Feedback",
      description: "Receive instant, AI-powered feedback tailored to your specific mistakes. Learn from every error and improve faster with targeted recommendations."
    },
    {
      title: "Stay",
      highlighted: "Motivated",
      subtitle: "Always",
      description: "Daily challenges, streaks, and achievements keep you engaged and on track. Build consistent study habits that lead to real IELTS success."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === contentSections.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contentSections.length - 1 : prevIndex - 1
    );
  };

  const currentContent = contentSections[currentIndex];

  return (
    <section
      className="relative py-8 sm:py-16 px-4 sm:px-6"
      style={{
        backgroundImage: `url(${WhereYouStand_Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '150vh'
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-10 px-3 sm:px-4 md:px-6">
        {/* Left Side - Text Content */}
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-4 sm:mb-6 transition-all duration-500">
            {currentContent.title}{" "}
            <span className="text-[#D100FF]">{currentContent.highlighted}</span>{" "}
            {currentContent.subtitle}
          </h2>
          <p className="text-gray-300 text-md leading-tight mb-6 sm:mb-8 transition-all duration-500 text-justify tracking-tight">
            {currentContent.description}
          </p>

                     {/* Navigation Arrows */}
           <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start lg:mt-20">
             <button
               onClick={prevSlide}
               className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors shadow-inner"
             >
               <span className="text-xl sm:text-2xl md:text-3xl">&lt;</span>
             </button>
             <button
               onClick={nextSlide}
               className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
             >
               <span className="text-xl sm:text-2xl md:text-3xl">&gt;</span>
             </button>
           </div>

        </div>

        {/* Right Side - Satellite GIF */}
        <div className="relative flex-shrink-0">
          <div className="relative">
            {/* GIF Frame with Glow */}
            <div className="relative w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] rounded-2xl sm:rounded-3xl p-3 shadow-2xl">
              <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden relative">
                {/* Satellite GIF */}
                <img
                  src={satellite}
                  alt="Satellite Animation"
                  className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                />
                
                {/* GIF Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl sm:rounded-3xl pointer-events-none"></div>
              </div>
            </div>

            {/* White Glow Effect */}
            <div className="absolute inset-0 w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] rounded-2xl sm:rounded-3xl bg-white/10 blur-xl -z-10"></div>
            
            {/* Purple Glow Effect */}
            <div className="absolute inset-0 w-80 sm:w-96 md:w-[28rem] lg:w-[32rem] h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] rounded-2xl sm:rounded-3xl bg-purple-500/20 blur-xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
