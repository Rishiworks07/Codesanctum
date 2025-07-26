import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home'); // Navigate to home page
  };

  return (
    <section className="bg-[#000000] text-white flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-3xl">
        <h2 className="text-3xl md:text-3xl font-semibold leading-snug md:leading-relaxed">
          Ready to sharpen your skills in a place built for <span className="text-[#00BFFF]">clarity</span>,{' '}
          <span className="text-[#00BFFF]">performance</span>, and <span className="text-[#00BFFF]">peace</span>?<br />
          Dive into <span className="font-bold text-white">CodeSanctum</span> and experience DSA prep like never before.
        </h2>

        <button
          onClick={handleClick}
          className="mt-10 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-full text-sm md:text-base font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Enter CodeSanctum
        </button>
      </div>
    </section>
  );
};

export default CTA;
