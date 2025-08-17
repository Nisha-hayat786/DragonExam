import React from "react";
import PrimaryButton from "../assets/images/PrimaryButton.png"
import PrimaryButton1 from "../assets/images/PrimaryButton_1.png"
import PrimaryButton2 from "../assets/images/PrimaryButton_2.png"

const features = [
  {
    img: PrimaryButton,
    title: "Real Exam Simulation",
    desc: "Practice under real IELTS conditions with AI scoring that mirrors the official test",
  },
  {
    img: PrimaryButton1,
    title: "Personalized Feedback",
    desc: "Get instant tips tailored to your mistakes, so you improve faster",
  },
  {
    img: PrimaryButton2,
    title: "Motivation That Sticks",
    desc: "Daily challenges and streaks keep you on track until test day",
  },
];

export default function IELTSFeatures() {
  return (
    <section className="bg-[#0D0B10] text-white py-6 sm:py-8 md:py-16 ">
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12 px-3 sm:px-4 flex justify-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold w-lg leading-snug">
          Why <span className="text-[#D100FF]">Nyra</span> is Your IELTS{" "}
          <span className="block sm:inline">Secret Weapon</span>
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-3 sm:px-4 md:px-6 lg:mb-12">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-24 sm:h-32 md:h-48 object-cover rounded-lg"
            />
            <h3 className="text-base sm:text-lg md:text-xl m-0 font-bold text-white text-left">{item.title}</h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-left mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
