import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className="flex justify-between items-center px-8 py-4 relative w-full"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 50%, #8A2BE2 100%)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="w-4 h-4 rounded-full bg-white/20"></div>
        </div>
        <p className="text-white text-xl font-bold">Dragon Exam</p>
      </div>

      {/* Hamburger Menu Button - Only visible on small screens */}
      <button 
        className="lg:hidden text-white p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Center Menu - Hidden on small screens, visible on large screens */}
      <div 
        className="hidden lg:flex px-8 py-3 rounded-full gap-8"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        <a href="#" className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200">
          Home
        </a>
        <a href="#" className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200">
          Features
        </a>
        <a href="#" className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200">
          How it works
        </a>
        <a href="#" className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200">
          Testimonials
        </a>
      </div>

      {/* Right Side - Hidden on small screens, visible on large screens */}
      <div className="hidden lg:flex items-center gap-6">
        <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200">
          Contact
        </a>
        <button 
          className="px-6 py-2 text-white rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #8A2BE2 0%, #9370DB 100%)',
            boxShadow: '0 4px 15px rgba(138, 43, 226, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          Sign up
        </button>
      </div>

      {/* Mobile Menu - Only visible on small screens when menu is open */}
      {isMenuOpen && (
        <div 
          className="lg:hidden absolute top-full left-0 right-0 z-50"
          style={{
            background: 'linear-gradient(180deg, rgba(88, 28, 135, 0.95) 0%, rgba(59, 130, 246, 0.95) 100%)',
            backdropFilter: 'blur(15px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="flex flex-col px-8 py-6 space-y-4">
            <a href="#" className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200 py-2">
              Home
            </a>
            <a href="#" className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200 py-2">
              Features
            </a>
            <a href="#" className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200 py-2">
              How it works
            </a>
            <a href="#" className="text-gray-300 font-medium text-sm hover:text-white transition-colors duration-200 py-2">
              Testimonials
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-600">
              <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition-colors duration-200">
                Contact
              </a>
              <button 
                className="px-6 py-2 text-white rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 w-fit mx-auto"
                style={{
                  background: 'linear-gradient(135deg, #8A2BE2 0%, #9370DB 100%)',
                  boxShadow: '0 4px 15px rgba(138, 43, 226, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


