import React from "react";
import ProgressTracking from "../assets/images/ProgresTracking.png";

export default function ProgressTrackingSection() {
  return (
    <section 
      className="relative py-6 sm:py-8 md:py-16 px-4 sm:px-6 items-center flex justify-left"
      style={{
        backgroundImage: `url(${ProgressTracking})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '160vh'
      }}
    >
             <div className="w-9xl flex items-center justify-left h-screen lg:ps-15">
         {/* Centered Text Content */}
         <div className="max-w-sm sm:max-w-lg text-left">
           <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
             See Your{" "}
             <span className="text-[#0088FF]">IELTS</span>{" "}
             <span className="text-[#0088FF]">Progress</span>{" "}
             Like Never Before
           </h2>
         </div>

       </div>
    </section>
  );
}