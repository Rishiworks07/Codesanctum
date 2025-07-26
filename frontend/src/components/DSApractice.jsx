import React from "react";

const practiceSets = [
  {
    title: "Top 200 DSA Questions",
    description:
      "A comprehensive collection of the most frequently asked Data Structures and Algorithms questions in technical interviews. Master these to ace your next coding challenge.",
    image: "/images/dsa1.png",
  },
  {
    title: "GFG 160 Must-Do Questions",
    description:
      "GeeksforGeeks’ curated list of 160 essential DSA problems, covering all fundamental concepts. A perfect starting point for beginners.",
    image: "/images/dsa2.png",
  },
  {
    title: "LeetCode 75",
    description:
      "LeetCode’s top 75 interview questions, focusing on core DSA concepts. Ideal for focused practice and quick revision.",
    image: "/images/dsa3.png",
  },
  {
    title: "Striver’s SDE Sheet",
    description:
      "Striver’s comprehensive sheet for Software Development Engineer interviews, covering all essential DSA topics with a structured approach.",
    image: "/images/dsa4.png",
  },
    {
    title: "Love Babbar’s 450 DSA Questions",
    description:
      "A collection of 450 must-solve DSA problems by Love Babbar, designed to build a strong foundation in data structures and algorithms.",
    image: "/images/dsa4.png",
  },
];

const DSApractice = () => {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-16 bg-[#0f0f10] text-white">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
        Popular Practice Sets
      </h2>
      <div className="space-y-6">
        {practiceSets.map((set, index) => (
          <div
            key={index}
            className="bg-[#1a1a1c] rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-lg transition-all"
          >
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {set.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 md:mb-0">
                {set.description}
              </p>
              <button className="mt-2 bg-[#2e2e33] hover:bg-[#3a3a40] px-4 py-2 text-sm rounded-md transition-all">
                Start Solving
              </button>
            </div>
            <div className="w-full md:w-40 h-28 shrink-0">
              <img
                src={set.image}
                alt={set.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DSApractice;
