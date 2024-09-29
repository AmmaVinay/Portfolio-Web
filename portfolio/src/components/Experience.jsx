import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Chrono } from "react-chrono";

const experienceData = [
  {
    title: "Graduate Engineer Trainee",
    company: "NPCI",
    duration: "October 2024 - Present",
    location: "Chennai, India",
    description: "Working on various projects to enhance payment systems and improve transaction efficiency. Focused on integrating innovative technologies for secure transactions.",
    date: "October 14 2024",
  },
  {
    title: "Project Trainee",
    company: "Payswiff Technologies Private Limited",
    duration: "July 2023 - September 2024",
    location: "Hyderabad, India",
    description: "Contributed to the development of user-friendly interfaces and participated in code reviews. Collaborated with cross-functional teams to design efficient solutions.",
    date: "July 1 2023",
  },
  {
    title: "Front-end Developer Intern",
    company: "AI CHEF MASTER",
    duration: "December 2023 - June 2023",
    location: "Remote",
    description: "Developed responsive web applications using React.js, HTML, CSS, and JavaScript. Implemented best practices for UI/UX design to enhance user experience.",
    date: "December 29 2023",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="mx-auto p-8 bg-gradient-to-r from-blue-400 to-green-400"
    >
      <h2 className="text-4xl font-semibold text-blue-700 mb-8 text-center">
        Experience
      </h2>
      <div className="relative">
        {/* Gradient Background with Opacity */}
        <div className="absolute inset-0 rounded-lg"></div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-gray-300 z-0" />
          <Chrono
            items={experienceData}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: "blue",
              secondary: "yellow",
              cardBgColor: "#f8f9fa",
              cardForeColor: "black",
              titleColor: "blue",
              titleBgColor: "#f0f8ff",
              arrowColor: "blue",
            }}
            slideShow={false}
            hideControls={true}
          >
            {experienceData.map((exp, index) => (
              <div className="chrono-card" key={index}>
                <h3 className="text-lg font-bold flex items-center mb-2">
                  <FaBriefcase className="mr-2" />
                  {exp.title} at {exp.company}
                </h3>
                <p className="flex items-center text-sm text-gray-600 mb-1">
                  <FaCalendarAlt className="mr-1" />
                  {exp.duration}
                </p>
                <p className="flex items-center text-sm text-gray-600 mb-1">
                  <FaMapMarkerAlt className="mr-1" />
                  {exp.location}
                </p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </Chrono>
        </div>
      </div>
    </section>
  );
};

export default Experience;
