import { FaUserAlt, FaCode, FaComments, FaUsers, FaMobileAlt, FaTrophy } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserAlt className="text-2xl text-white" />,
    title: "User Accounts with Cloud Sync",
  },
  {
    icon: <FaCode className="text-2xl text-white" />,
    title: "Code History & Auto-Save",
  },
  {
    icon: <FaComments className="text-2xl text-white" />,
    title: "Solution Discussions",
  },
  {
    icon: <FaUsers className="text-2xl text-white" />,
    title: "Community Doubt Support",
  },
  {
    icon: <FaMobileAlt className="text-2xl text-white" />,
    title: "Mobile-Optimized Interface",
  },
  {
    icon: <FaTrophy className="text-2xl text-white" />,
    title: "Weekly and Monthly Contests",
  },
];

const UpcomingFeatures = () => {
  return (
    <div className="bg-gradient-to-br from-[#000000] via-[#101010] to-[#000000] py-16 px-4 md:px-20 text-white text-center shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10 rounded-xl backdrop-blur-sm max-w-8xl mx-auto">

      <h2 className="text-xl font-semibold mb-10">Upcoming Features</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-[270px] h-[120px] bg-[#161B22] border border-[#2c2f35] hover:border-white rounded-lg p-5 flex items-center gap-4 transition-all duration-200"
          >
            {feature.icon}
            <p className="text-sm font-medium text-left">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingFeatures;
