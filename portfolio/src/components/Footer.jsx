import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="sectionContact">
      <footer className="container-fluid bg-gray-900 text-white py-12 sm:py-16 lg:py-20">
        <div className="flex justify-evenly">
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Contact Me</h4>
            <p className="flex items-center mb-3"><FiMail className="mr-3 text-2xl text-blue-500" /> <a href="mailto:contact@example.com" className="text-gray-300 hover:text-white">ammavinay2486@gmail.com</a></p>
            <p className="flex items-center mb-3"><FiPhone className="mr-3 text-2xl text-blue-500" /> <a href="tel:+1234567890" className="text-gray-300 hover:text-white">+91 9391183207</a></p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Visit Me</h4>
            <p className="flex items-center mb-3"><FiMapPin className="mr-3 text-2xl text-blue-500" /> 3-52 Thogarrai<br />Warangal, Telangana, India</p>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">Connect With Me</h4>
            <ul className="list-none flex gap-8">
              {[
                { icon: FaLinkedin, url: "https://www.linkedin.com/in/ammavinay/", color: "#0077B5" },
                { icon: FaInstagram, url: "https://www.instagram.com/amma__vinay/", color: "#C13584" },
                { icon: FaGithub, url: "https://github.com/AmmaVinay", color: "#6e5494" },
                { icon: FaTwitter, url: "https://twitter.com/amma__vinay", color: "#1DA1F2" },
                { icon: FiMail, url: "mailto:ammavinay2486@gmail.com", color: "#EA4335" }
              ].map(({ icon: Icon, url, color }) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
                    <Icon className="text-4xl hover:text-white" style={{ color }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-gray-700" />
        <div className="text-center mt-6">
          <p className="text-sm sm:text-base text-gray-400">&copy; {new Date().getFullYear()} AmmaVinay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
