import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Particles from "react-tsparticles"; // Use particles.js for interactive background

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', { name, email, description });
      setMessage(response.data.message);
      setName('');
      setEmail('');
      setDescription('');
    } catch {
      setMessage('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 to-blue-500">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
            },
            opacity: { value: 0.5, random: false, anim: { enable: false } },
            size: { value: 4, random: true, anim: { enable: false } },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false },
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, div: {} },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full z-10 transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Get in Touch
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <FaUser className="mr-2 text-indigo-500" />
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              className="border-2 border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <FaEnvelope className="mr-2 text-indigo-500" />
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="border-2 border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <FaPaperPlane className="mr-2 text-indigo-500" />
              Message
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="message"
              name="message"
              className="border-2 border-gray-300 p-3 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              placeholder="Type your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white p-3 rounded-lg font-semibold w-full transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Send Message
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-center ${message.includes("error") ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
