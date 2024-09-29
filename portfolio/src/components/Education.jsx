import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaGraduationCap } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

// Keyframes for the animated gradient
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Keyframes for bubble animation
const bubbleAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
  100% {
    transform: translateY(0) scale(1);
  }
`;

// Styled component for the animated background with light colors
const AnimatedBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(270deg, #a1c4fd, #fbc2eb, #fff9c4); // Light pastel colors
  background-size: 300% 300%;
  animation: ${gradientAnimation} 15s ease infinite;
  opacity: 0.9;
  overflow: hidden; // Prevent bubbles from overflowing
`;

// Styled bubble component
const Bubble = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  opacity: 0.6;
  animation: ${bubbleAnimation} 4s ease-in-out infinite;
  filter: blur(3px);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);

  // Random size and position
  width: ${(props) => `${Math.random() * 40 + 20}px`}; // Size between 20px and 60px
  height: ${(props) => `${Math.random() * 40 + 20}px`}; // Size between 20px and 60px
  left: ${(props) => `${Math.random() * 100}vw`}; // Random horizontal position
  bottom: ${(props) => `${Math.random() * 100}vh`}; // Random vertical position

  // Animation delay for each bubble
  animation-delay: ${(props) => `${Math.random() * 2}s`};
`;

const Card = styled.div`
  position: relative;
  padding: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  border-radius: 10px;
  background: ${({ gradient }) => gradient}; // Apply gradient from props
  background-size: 300% 300%;
  animation: ${gradientAnimation} 15s ease infinite; // Add animation to the card
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px) scale(1.02); // Lift and slightly scale up
    background: rgba(255, 255, 255, 0.9); // Slight background transition on hover
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled(FaGraduationCap)`
  animation: bounce 1s infinite; // Bouncing animation for the icon
  color: #4a90e2; // Icon color
  margin-right: 1rem;
`;
 
const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      period: "2019 - 2023",
      institution: "Malla Reddy Institute Of Technology And Science, Hyderabad, Telangana, India",
      cgpa: "CGPA: 7.0/10",
      gradient: "linear-gradient(to right, #3B82F6, #60A5FA)", // Gradient for the card
    },
    {
      degree: "Intermediate",
      period: "2017 - 2019",
      institution: "Narayana Junior College, Hyderabad, Telangana, India",
      cgpa: "CGPA: 8.8/10",
      gradient: "linear-gradient(to right, #10B981, #6EE7B7)", // Gradient for the card
    },
    {
      degree: "High School",
      period: "2016 - 2017",
      institution: "ST Mary’s High School, Narsampet, Telangana, India",
      cgpa: "CGPA: 8.8/10",
      gradient: "linear-gradient( #3B82F6, #60A5FA)", // Gradient for the card
    },
  ];

  return (
    <div id="sectionEducation" className="relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      {/* Render Bubbles */}
      {[...Array(20)].map((_, index) => (
        <Bubble key={index} />
      ))}
      <div className="mx-auto my-8 p-8 rounded-lg shadow-lg relative z-10 max-w-4xl">
        <Fade cascade damping={0.2}>
          <h3 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Education</h3>
        </Fade>
        <div className="relative">
          <div className="absolute left-1/2 border-l-4 border-gray-300 h-full transform -translate-x-1/2" />
          <div className="space-y-10">
            {educationData.map(({ degree, period, institution, cgpa, gradient }, index) => (
              <Card key={degree} gradient={gradient}> {/* Pass gradient to the Card */}
                <div className="flex items-center mb-4">
                  <Icon size={40} color="black"/> {/* Using styled icon */}
                  <h4 className="text-2xl font-bold ">{degree}</h4>
                </div>
                <h5 className="text-lg italic mb-2">{period}</h5>
                <p className="mb-1">
                  <em>{institution}</em>
                </p>
                <p>{cgpa}</p>
                <div
                  className={`absolute top-0 left-[-15px] w-3 h-3 rounded-full ${
                    index % 3 === 0
                      ? "bg-blue-500"
                      : index % 3 === 1
                      ? "bg-green-500"
                      : "bg-indigo-500"
                  } transform translate-y-1/2`}
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
