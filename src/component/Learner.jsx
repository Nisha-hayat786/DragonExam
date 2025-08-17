import React, { useEffect, useState ,useRef} from "react";
import learner from "../assets/images/learner.png";

const testimonials = [
  {
    name: "Mathilde Lewis",
    rating: 5,
    testimonial: "I improved my speaking band from 6.0 to 7.5 in 5 weeks. Nyra's feedback was a game-changer!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Sarah Chen",
    rating: 5,
    testimonial: "The personalized feedback helped me identify my weak areas. My writing improved dramatically!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Ahmed Hassan",
    rating: 5,
    testimonial: "Nyra's daily challenges kept me motivated. I achieved my target band score in just 3 months!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Emma Rodriguez",
    rating: 5,
    testimonial: "The real exam simulation was incredibly helpful. I felt so confident on test day!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "David Kim",
    rating: 5,
    testimonial: "Progress tracking helped me stay focused. I could see my improvement week by week!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Lisa Thompson",
    rating: 5,
    testimonial: "The AI feedback was spot-on. It helped me understand exactly what I needed to improve!",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
  }
];

export default function Learner() {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    let width1 = row1Ref.current?.scrollWidth / 3 || 0; // width of one full set
    let width2 = row2Ref.current?.scrollWidth / 3 || 0;

    const interval1 = setInterval(() => {
      setScrollPosition1(prev => {
        const next = prev + 1;
        return next >= 0 ? -width1 : next; // reset when fully shown
      });
      
    }, 70); // Speed for first row (moving right)

    const interval2 = setInterval(() => {
      setScrollPosition2(prev => {
        const next = prev - 1;
        return Math.abs(next) >= width2 ? 0 : next;  // reset after one full width
      });

    }, 70); // Speed for second row (moving left)

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  // Duplicate testimonials for seamless scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section 
      className="relative w-full py-8 sm:py-16 px-4 sm:px-6"
      style={{
        backgroundImage: `url(${learner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '170vh',
        
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 flex flex-col justify-center items-center w-full">
          <h3 className="text-[#0088FF] text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-4">
            User Testimonials
          </h3>
          <div className="max-w-2xl mx-auto lg:mb-5">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white px-2 sm:px-0">
              Our Learners Speak for Themselves
            </h2>
          </div>
       
{/* Auto-scrolling Testimonial Cards */}
<div className="container px-4 space-y-8 sm:space-y-8 relative mt-15">
  {/* First Row - Moving Right */}
  <div className="relative overflow-hidden w-full">
    {/* Gradient overlays */}
    <div className="absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-[#0B0F1C] to-transparent z-10 pointer-events-none"></div>
    <div className="absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-[#0B0F1C] to-transparent z-10 pointer-events-none"></div>

    <div
      ref={row1Ref}
      className="flex gap-4"
      style={{
        transform: `translateX(${scrollPosition1}px)`,
        transition: "transform 0.02s linear",
      }}
    >
      {duplicatedTestimonials.map((testimonial, index) => (
        <div
          key={`row1-${index}`}
          className="bg-[#101629] backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-4xl p-3 sm:p-4 md:p-6 border border-gray-800 flex-shrink-0 w-56 sm:w-64 md:w-80"
        >
          {/* Profile Section */}
          <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover mr-2 sm:mr-3 md:mr-4 flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-white font-normal text-xs sm:text-sm truncate text-left">
                {testimonial.name}
              </h4>
              <div className="flex items-center mt-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-[#0088FF] text-xs sm:text-sm"
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-300 text-xs sm:text-sm text-left leading-relaxed line-clamp-4 sm:line-clamp-none">
            "{testimonial.testimonial}"
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Second Row - Moving Left */}
  <div className="relative overflow-hidden w-full">
    {/* Gradient overlays */}
    <div className="absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-[#0B0F1C] to-transparent z-10 pointer-events-none"></div>
    <div className="absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-[#0B0F1C] to-transparent z-10 pointer-events-none"></div>

    <div
      ref={row2Ref}
      className="flex gap-4"
      style={{
        transform: `translateX(${scrollPosition2}px)`,
        transition: "transform 0.02s linear",
      }}
    >
      {duplicatedTestimonials.map((testimonial, index) => (
        <div
          key={`row2-${index}`}
          className="bg-[#101629] backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-4xl p-3 sm:p-4 md:p-6 border border-gray-800 flex-shrink-0 w-56 sm:w-64 md:w-80"
        >
          {/* Profile Section */}
          <div className="flex items-center mb-2 sm:mb-3 md:mb-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover mr-2 sm:mr-3 md:mr-4 flex-shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h4 className="text-white font-normal text-xs sm:text-sm truncate text-left">
                {testimonial.name}
              </h4>
              <div className="flex items-center mt-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className="text-[#0088FF] text-xs sm:text-sm"
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-300 text-xs sm:text-sm text-left leading-relaxed line-clamp-4 sm:line-clamp-none">
            "{testimonial.testimonial}"
          </p>
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
      </div>

    </section>
  );
}