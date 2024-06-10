import React from "react";
import { Fade } from 'react-awesome-reveal';

const Education = () => {
  return (
    <div id="sectionEducation" className="container mx-auto my-8 p-8 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-lg">
      <div className="mb-8">
        <Fade cascade damping={0.2}>
          <h3 className="text-3xl font-bold text-blue-600 mb-4">Summary</h3>
          <p className="text-lg text-gray-700 leading-relaxed">I am eager to take on new opportunities and to grow with the industry. I believe I have the skills and determination to succeed, and I'm ready for the journey ahead.</p>
        </Fade>
      </div>
      <div>
        <Fade cascade damping={0.2}>
          <h3 className="text-3xl font-bold text-blue-600 mb-8">Education</h3>
          {[
            { degree: "Bachelor of Technology", period: "2019 - 2023", institution: "Malla Reddy Institute Of Technology And Science, Hyderabad, Telangana, India", cgpa: "CGPA: 7.0/10", border: "border-blue-500" },
            { degree: "Intermediate", period: "2017 - 2019", institution: "Narayana Junior College, Hyderabad, Telangana, India", cgpa: "CGPA: 8.8 /10", border: "border-green-500" },
            { degree: "High School", period: "2016 - 2017", institution: "ST Mary’s High School, Narsampet, Telangana, India", cgpa: "CGPA: 8.8/10", border: "border-indigo-500" }
          ].map(({ degree, period, institution, cgpa, border }) => (
            <div key={degree} className={`shadow-md p-6 mb-8 bg-white rounded-lg border-l-4 ${border}`}>
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">{degree}</h4>
              <h5 className="text-lg italic text-gray-600 mb-2">{period}</h5>
              <p className="text-gray-700 mb-1"><em>{institution}</em></p>
              <p className="text-gray-700">{cgpa}</p>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Education;
