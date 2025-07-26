import React from "react";

const resources = [
  {
    title: "YouTube Playlists",
    description:
      "Explore curated YouTube playlists from top educators and channels, covering various DSA topics with detailed explanations and examples.",
    button: "Explore",
    image: "/images/youtube-icon.png", // replace with your actual path
  },
  {
    title: "PDF Notes",
    description:
      "Access downloadable PDF notes and cheat sheets summarizing key DSA concepts, algorithms, and data structures for quick reference.",
    button: "Download",
    image: "/images/pdf-icon.png",
  },
  {
    title: "GitHub Repos",
    description:
      "Browse GitHub repositories with well-documented code implementations, solutions, and explanations for a wide range of DSA problems.",
    button: "Explore",
    image: "/images/github-icon.png",
  },
  {
    title: "DSA Roadmaps",
    description:
      "Follow structured DSA roadmaps designed to guide you through the learning process, from basic concepts to advanced topics, with recommended resources and practice sets.",
    button: "View Roadmap",
    image: "/images/roadmap-icon.png",
  },
];

const DSAResources = () => {
  return (
    <div className="bg-[#0f1117] py-12 text-white flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
        Free Learning Resources
      </h2>

      <div className="space-y-6 w-full max-w-5xl px-4">
        {resources.map((res, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between bg-[#181b23] rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="md:w-2/3 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">{res.title}</h3>
              <p className="text-sm mt-2 text-gray-300">{res.description}</p>
              <button className="mt-4 px-4 py-2 bg-[#2c2f36] text-white rounded-md hover:bg-[#3c4048] text-sm">
                {res.button}
              </button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src={res.image}
                alt={res.title}
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="mt-12 px-6 py-3 bg-[#2c2f36] text-white rounded-full hover:bg-[#3c4048] text-sm font-semibold">
        Join Our DSA Discord
      </button>
    </div>
  );
};

export default DSAResources;
