import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex justify-evenly items-center flex-wrap overflow-visible">
      <Fade direction="left">
        <img
          className="bg_image shadow-lg w-full max-w-sm rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          src="https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691335319/IMG_8906_kxemkg.jpg"
          alt="Vinay's Photo"
        />
      </Fade>
      <Fade direction="right">
        <div className="text-center mt-6 md:mt-0 md:ml-8 p-6 bg-white bg-opacity-80 rounded-lg shadow-md">
          <h1 className="text-heading text-4xl font-extrabold text-gray-800">Hi! I'M VINAY</h1>
          <h5 className="text-muted text-xl text-gray-600">AND THIS IS MY RESUME</h5>
          <div className="mt-6">
            <a
              className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              href="#sectionAboutMe"
              aria-label="More About Me"
              style={{ textDecoration: 'none' }}
            >
              More About Me
              <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
