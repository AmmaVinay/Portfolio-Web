import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="sectionContact">
      <footer className="bg-gray-800 text-white ">
        <div className="pt-12 sm:pt-16 lg:pt-20 pb-8 ">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Contact Section */}
            <div className="flex flex-col items-center text-center md:text-left">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Contact Me</h4>
              <p className="flex items-center mb-4">
                <FiMail className="mr-3 text-2xl text-blue-400" />
                <a
                  href="mailto:ammavinay2486@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition duration-200"
                >
                  ammavinay2486@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <FiPhone className="mr-3 text-2xl text-blue-400" />
                <a
                  href="tel:+919391183207"
                  className="text-gray-300 hover:text-blue-400 transition duration-200"
                >
                  +91 9391183207
                </a>
              </p>
            </div>

            {/* Visit Section */}
            <div className="flex flex-col items-center text-center md:text-left">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Visit Me</h4>
              <p className="flex items-center">
                <FiMapPin className="mr-3 text-2xl text-blue-400" />
                <span className="text-gray-300">3-52 Thogarrai, Warangal, Telangana, India</span>
              </p>
            </div>

            {/* Connect Section */}
            <div className="flex flex-col items-center text-center md:text-left">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6">Connect With Me</h4>
              <ul className="flex justify-center gap-6 md:justify-start">
                {[
                  { icon: FaLinkedin, url: "https://www.linkedin.com/in/ammavinay/", color: "#0077B5" }, // LinkedIn color
                  { icon: FaInstagram, url: "https://www.instagram.com/amma__vinay/", color: "#C13584" }, // Instagram color
                  { icon: FaGithub, url: "https://github.com/AmmaVinay", color: "#181717" }, // GitHub color
                  { icon: FaTwitter, url: "https://twitter.com/amma__vinay", color: "#1DA1F2" }, // Twitter color
                ].map(({ icon: Icon, url, color }) => (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-blue-400 transition duration-200"
                    >
                      <Icon className="text-3xl" style={{ color }} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
          <hr className="border-gray-700 my-8" />
            <p className="text-sm sm:text-base text-gray-400">&copy; {new Date().getFullYear()} AmmaVinay. All rights reserved.</p>
          </div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
