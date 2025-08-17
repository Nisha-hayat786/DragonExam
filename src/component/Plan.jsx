import React from "react";
import bgImage from "../assets/images/Plan.png";
import { TbCircleCheckFilled } from "react-icons/tb";

const plans = [
  {
    name: "Basic Plan",
    labelColor: "bg-[#AE83FF]",
    originalPrice: "$24/mo",
    price: "$4.99",
    description:
      "Good for those looking to improve their speaking and listening abilities with a mix of native English speakers and other accents. For adults 21+.",
    buttonText: "Get Basic Plan",
    features: [
      "AI-powered pronunciation coach",
      "Daily bite-sized practice challenges",
      "Vocabulary builder with 1,000+ IELTS words",
      "Weekly progress snapshots",
      "Access on mobile & desktop",
    ],
  },
  {
    name: "Pro Plan",
    labelColor: "bg-[#F3DD4D]",
    originalPrice: "$24/mo",
    price: "$9.99",
    description:
      "Good for those looking to improve their speaking and listening abilities with a mix of native English speakers and other accents. For adults 21+.",
    buttonText: "Get Pro Plan",
    features: [
      "Unlimited full-length IELTS mock tests",
      "Detailed skill-by-skill performance reports",
      "Advanced speaking & writing AI feedback",
      "Priority email & chat support",
    ],
  },
  {
    name: "Pro+ Plan",
    labelColor: "bg-[#42A5F5]",
    originalPrice: "$24/mo",
    price: "$19.99",
    description:
      "Good for those looking to improve their speaking and listening abilities with a mix of native English speakers and other accents. For adults 21+.",
    buttonText: "Get Pro Plan",
    features: [
      "Unlimited full-length IELTS mock tests",
      "Detailed skill-by-skill performance reports",
      "Advanced speaking & writing AI feedback",
      "Smart study plan tailored to your weaknesses",
    ],
  },
];

export default function Plan() {
  return (
    <div
      className="relative w-full items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "200vh",
      }}
    >
      <section className="py-16 px-3 sm:px-10 lg:pb-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 sm:mb-20">
            <h3 className="text-[#D100FF] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-4">
              Pricing
            </h3>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Choose Your Power Level
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-10 lg:px-15 lg:pt-10">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl py-4 px-6 sm:py-10 text-left relative ${
                  index === 2
                    ? "bg-gradient-to-br from-[#1B1333] via-[#1C173F] to-[#1D193F] border border-[#B493F6] shadow-[0_0_30px_#B493F640]"
                    : "bg-[#141A2C] border border-[#8a8a8a] shadow-[0_0_40px_#00000060]"
                }`}
              >
                {/* Plan Label */}
                <div
                  className={`${plan.labelColor} text-white text-xs font-semibold px-3 py-1 rounded-md inline-block sm:mb-4`}
                >
                  {plan.name}
                </div>

                {/* Pricing */}
                <div className="">
                  <p className="text-[#B0B0B0] text-xs sm:text-sm ">
                    Starting from
                  </p>
                  <div className="text-sm sm:text-md text-[#9CA3AF] line-through ">
                    {plan.originalPrice}
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-white text-4xl sm:text-5xl font-extrabold mt-10 mb-2">
                      {plan.price}
                    </span>
                    <span className="text-[#B0B0B0] text-xs sm:text-sm mb-2">
                      per month
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#C4C4C4] text-[10px] sm:text-xs mb-10 sm:mb-10 mt-4">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <button
                  className={`w-full ${
                    index === 2
                      ? "bg-gradient-to-r from-[#B26FFF] to-[#D591FF] hover:from-[#C46BFF] hover:to-[#E2AAFF]"
                      : "bg-gradient-to-r from-[#7E4FFF] to-[#B26FFF] hover:from-[#B26FFF] hover:to-[#D591FF]"
                  } text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-[30px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mb-6 sm:mb-8 text-xs sm:text-base`}
                >
                  {plan.buttonText}
                </button>

                {/* Features */}
                <div className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-1 sm:gap-2"
                    >
                      <TbCircleCheckFilled
                        color={index === 2 ? "#B493F6" : "#79D5FF"}
                        size={18}
                      />
                      <span
                        className={`${
                          index === 2 ? "text-[#D2BBFF]" : "text-[#C4C4C4]"
                        } text-sm sm:text-xs`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
