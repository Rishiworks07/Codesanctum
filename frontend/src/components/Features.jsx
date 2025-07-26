import React from "react";
import { ClipboardList, Code2, Compass, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Curated Problem Bank",
    description:
      "Access a structured list of top-tier DSA questions—organized by topic, difficulty, and source. No more scattered bookmarks or hunting through forums.",
    icon: <ClipboardList className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Integrated Multi-language IDE",
    description:
      "Write, compile, and test code directly within CodeSanctum. Full support for Python, C++, Java, JavaScript, and more—right inside the browser.",
    icon: <Code2 className="h-8 w-8 text-green-400" />,
  },
  {
    title: "Topic-Wise Roadmaps",
    description:
      "Progress through detailed learning paths for Arrays, Trees, Graphs, DP, and System Design—built from top educator blueprints.",
    icon: <Compass className="h-8 w-8 text-blue-400" />,
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your journey with visual insights, streaks, and performance metrics tailored to your growth.",
    icon: <TrendingUp className="h-8 w-8 text-pink-500" />,
  },
];

const Features = () => {
  return (
    <section className="bg-[#000000] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold text-gray-400 mb-2">
          What Makes CodeSanctum Different
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Built for Serious Learners
        </h2>
        <p className="text-gray-400 max-w-3xl mb-12">
          CodeSanctum isn’t just another coding platform—it’s a distraction-free space designed for
          focused preparation. With an elegant UI, dark-mode-first design, and smooth user experience,
          it feels as powerful as your local IDE, but runs fully in the cloud.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border border-gray-800 rounded-2xl p-6 bg-[#111111] hover:bg-[#1a1a1a] shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
