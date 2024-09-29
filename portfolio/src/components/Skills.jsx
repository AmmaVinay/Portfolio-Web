import React, { useState } from "react";
import ReactLogo from '../components/Logo/ReactLogo.png';   
import VSCode from '../components/Logo/VSCode.png';   

const skillsData = {
  Skills: [
    {
      src: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256",
      alt: "HTML",
      url: "https://certificates.ccbp.in/intensive/static-website?id=NGPMYPERXD",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDwBd9LoQzBAZigXXxzQ0kKn6TwyrE0Y7Rg&s",
      alt: "CSS",
      url: "https://certificates.ccbp.in/intensive/responsive-website?id=HRWBTTHGVN",
    },
    {
      src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1696314070/database_ppebqu.png",
      alt: "SQL",
      url: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=CGKPIKGSTF",
    },
    {
      src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691338251/js_zxz0dc.png",
      alt: "JavaScript",
      url: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=FRQQTZTJYV",
    },
    {
      src: ReactLogo,
      alt: "React JS",
      url: "https://certificates.ccbp.in/intensive/react-js?id=EXEVRUDYJW", 
    },
    {
      src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691340121/mongo_mbiv7k.png",
      alt: "MongoDB",
      url: "#", // Add a link if available
    },
  ],
  Tools: [
    {
      src: "https://git-scm.com/images/logos/logomark-orange@2x.png", 
      name: "Git",
    },
    {
      src: VSCode, 
      name: "VS Code",
    },
  ],
};

const SectionSkills = () => {
  const [activeTab, setActiveTab] = useState("Skills");
  
  // Define tabs
  const tabs = ["Skills", "Tools"];

  return (
    <section id="sectionSkills" className="container mx-auto   p-10 bg-gradient-to-b from-gray-50 to-gray-200 rounded-xl shadow-lg relative overflow-hidden">
      <h2 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Skills & Tools</h2>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 rounded-xl"></div>

      <div className="flex justify-center mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative py-2 px-4 rounded-lg  text-lg font-semibold transition-all duration-300 ease-in-out shadow-md focus:outline-none ${
              activeTab === tab   
                ? "bg-gradient-to-br from-blue-300 to-purple-400 text-white"
                : "bg-gray-200 text-blue-600"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-lg transform translate-y-1/2" />
            )}
          </button>
        ))}
      </div>

      {/* Skills and Tools Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData[activeTab].map(({ src, alt, url, name }) => (
          <div key={alt || name} className="group relative p-6 bg-white rounded-lg border border-gray-300 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-purple-400 opacity-20 rounded-lg transition-all duration-300 transform group-hover:opacity-30"></div>
            <img src={src} alt={alt || name} className="w-28 h-28 mx-auto mb-4 transition-transform duration-300 transform group-hover:scale-110 relative z-10" />
            <a href={url} target="_blank" rel="noopener noreferrer" className="block text-center font-semibold text-gray-800 hover:underline group-hover:text-blue-600 text-xl relative z-10" aria-label={alt || name}>
              {alt || name}
            </a>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transition-all duration-300 transform group-hover:h-2"></div>
           </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSkills;
