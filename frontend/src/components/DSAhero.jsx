import React from 'react';

const DSAhero = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-100 to-white rounded-xl overflow-hidden shadow-md min-h-[80vh]">
      {/* Background blobs */}
      <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-gradient-to-br from-blue-500 to-purple-700 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-full opacity-30 blur-3xl"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Master DSA with Curated Practice Sets & Free Resources
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Embark on your <strong>Data Structures and Algorithms</strong> journey with our expertly curated practice sets and a wealth of free learning resources. Start solving today and level up your coding skills!
        </p>
        {/* Centered Button */}
        <div className="flex justify-center">
          <a
            href="#practice-sets"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Start Solving
          </a>
        </div>
      </div>
    </section>
  );
};

export default DSAhero;
