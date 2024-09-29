import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaGraduationCap, FaCertificate, FaCode, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section id="sectionAboutMe" className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-gray-100">
      <Fade triggerOnce>
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-5xl font-extrabold text-blue-800 mb-12 text-center tracking-wide">
            More About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Text About You */}
            <div className="text-lg leading-relaxed text-gray-700 space-y-6">
              <p>
                Hello, I’m <span className="font-bold text-gray-900">Vinay Amma</span>, a passionate <strong>Frontend Developer</strong> from Hyderabad, Telangana.
                I completed my BTech in Computer Science from Malla Reddy Institute of Technology and Science in 2023, and since then, I’ve been focused on perfecting my web development skills.
              </p>
              <p>
                My technical skillset includes <strong>HTML, CSS, JavaScript, React.js, Python,</strong> among others, allowing me to create dynamic, responsive, and user-friendly web applications.
                I take pride in delivering high-quality work, whether I’m collaborating in a team or working independently.
              </p>
              <p>
                Outside of web development, I am always eager to learn new things—currently diving into DevOps and cloud technologies. My aim is to contribute to impactful projects and grow within a collaborative environment.
              </p>
            </div>

            {/* Right Column: Personal Info and Highlights */}
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-800">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Quick Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaGraduationCap className="text-blue-600 w-6 h-6 mr-3" />
                  <div>
                    <strong>Education:</strong> BTech in Computer Science, Malla Reddy Institute of Technology and Science
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCertificate className="text-blue-600 w-6 h-6 mr-3" />
                  <div>
                    <strong>Certifications:</strong> Completed NXT Wave course in MERN Stack
                  </div>
                </li>
                <li className="flex items-start">
                  <FaCode className="text-blue-600 w-6 h-6 mr-3" />
                  <div>
                    <strong>Technical Skills:</strong> HTML, CSS, JavaScript, React.js, Tailwind CSS, Python, Git, GitHub
                  </div>
                </li>
                <li className="flex items-start">
                  <FaBriefcase className="text-blue-600 w-6 h-6 mr-3" />
                  <div>
                    <strong>Experience:</strong>
                    <ul className="ml-6 list-disc">
                      <li>Frontend Developer Intern at <mark>AI CHEF MASTER</mark></li>
                      <li>Project Trainee at <mark>Payswiff Technologies Private Limited</mark></li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 w-6 h-6 mr-3" />
                  <div>
                    <strong>Location:</strong> Hyderabad, Telangana, India
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default AboutMe;
