import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLaunchIDE = () => {
    navigate("/Home");
  };

  return (
    <section className="w-full flex justify-center px-4 mt-10">
      <div className="bg-gradient-to-br from-[#c9b49a] to-[#b5987c] text-white rounded-3xl px-6 py-20 md:py-24 text-center shadow-2xl max-w-6xl w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
          CodeSanctum — The Ultimate DSA Preparation Hub
        </h1>
        <p className="text-base md:text-lg text-white/90 mb-10 font-medium max-w-3xl mx-auto">
          All the essential DSA questions from LeetCode, GFG, Striver, and more—curated, structured, and paired with a powerful multi-language IDE built for serious coders.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl shadow-md hover:shadow-xl hover:ring-2 hover:ring-offset-2 hover:ring-white transition duration-300 ease-in-out transform hover:scale-105">
            Explore Questions
          </button>
          <button
            onClick={handleLaunchIDE}
            className="px-6 py-3 bg-black text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Launch IDE
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
