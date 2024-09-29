import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 flex justify-center items-center flex-col-reverse md:flex-row-reverse flex-wrap min-h-screen relative">
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-72 h-72 bg-pink-400 rounded-full absolute top-10 left-10 opacity-30 blur-3xl animate-pulse"></div>
        <div className="w-96 h-96 bg-blue-400 rounded-full absolute bottom-20 right-10 opacity-40 blur-3xl animate-pulse"></div>
      </div>

      {/* Profile Image with Hover and Lazy Loading */}
      <Fade direction="left" triggerOnce>
        <div className="relative z-10">
          <img
            className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-full shadow-2xl transform hover:scale-105 hover:rotate-6 transition-all duration-700 ease-in-out hover:shadow-[0px_0px_30px_5px_rgba(255,255,255,0.2)]"
            src="https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691335319/IMG_8906_kxemkg.jpg"
            alt="Vinay Amma's Profile"
            loading="lazy"
          />
        </div>
      </Fade>

      {/* Text Section */}
      <Fade direction="right" triggerOnce>
        <div className="relative z-10 mt-8 md:mt-0 md:mr-12 p-8 bg-white bg-opacity-90 rounded-3xl shadow-2xl text-center md:text-left max-w-2xl transform hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-in-out">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 leading-tight mb-4">
            Hi, I'm <span className="text-blue-500">Vinay Amma</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            I’m a passionate <strong>Frontend Developer</strong>, specializing in building modern, interactive web experiences with <strong>React.js</strong> and cutting-edge technologies.
          </p>

          {/* Skill Highlights with Iconography */}
          <div className="text-gray-600 mb-8 space-y-2">
            <p className="flex items-center space-x-3 text-lg">
              <i className="fas fa-code text-blue-500"></i>
              <span><strong>Skills:</strong> React.js, JavaScript, HTML, CSS, Tailwind CSS</span>
            </p>
            <p className="flex items-center space-x-3 text-lg">
              <i className="fas fa-cloud text-green-500"></i>
              <span><strong>Focus:</strong> DevOps and Cloud Solutions</span>
            </p>
          </div>

          {/* Animated CTA Button */}
          <a
            className="inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 hover:bg-gradient-to-l text-white font-semibold py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            href="AboutMe"
            aria-label="Learn more about Vinay Amma"
          >
            More About Me
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
