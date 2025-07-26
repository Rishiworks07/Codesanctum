import React, { useState } from "react";
import { FaCode } from "react-icons/fa";

const Footer = () => {
  const [showEffect, setShowEffect] = useState(false);

  const triggerEffect = () => {
    setShowEffect(true);
    setTimeout(() => setShowEffect(false), 1200);
  };

  return (
    <div className="bg-[#070707] py-10 text-white text-center relative overflow-hidden">
      {/* Links */}
      <div className="flex justify-center gap-28 text-sm mb-4 font-medium tracking-wide">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Roadmap</a>
        <a href="#">Contact</a>
      </div>

      {/* Coding Icon */}
      <div className="relative mt-6">
        <div
          className="text-2xl mx-auto w-fit text-white cursor-pointer relative"
          onClick={triggerEffect}
        >
          <FaCode className="hover:text-[#00FFD1] transition-colors duration-200" />
          {showEffect && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              {Array(8)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full absolute animate-cracker"
                    style={{
                      backgroundColor: getColor(i),
                      transform: `rotate(${45 * i}deg) translateY(-50px)`,
                      animationDelay: `${i * 0.05}s`,
                    }}
                  ></div>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-xs text-gray-400 mt-6">
        © 2025 CodeSanctum. Built with vision by Rishi.
      </p>

      {/* Animations */}
      <style>{`
        @keyframes cracker {
          0% { transform: scale(1) translateY(0); opacity: 1; }
          100% { transform: scale(0.3) translateY(-100px); opacity: 0; }
        }

        .animate-cracker {
          animation: cracker 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// Color for each burst
function getColor(index) {
  const colors = [
    "#FF007F",
    "#FFD700",
    "#00FFD1",
    "#FF4500",
    "#00BFFF",
    "#7CFC00",
    "#FF69B4",
    "#ADFF2F",
  ];
  return colors[index % colors.length];
}

export default Footer;
