// src/components/SectionAboutMe.js
import React, { useEffect } from 'react';

const AboutMe = () => {
  useEffect(() => {
    const listContainerElement = document.getElementById("listContainer");
    const liItems = [
      { item1: "Name: ", item2: "Amma Vinay" },
      { item1: "Birthday: ", item2: "27/10/2001" },
      { item1: "Age:", item2: "22" },
      { item1: "Degree: ", item2: "Bachelor of Technology" },
      { item1: "Email: ", item2: "ammavinay2486@gmail.com" },
      { item1: "Phone: ", item2: "+919391183207" },
      { item1: "Address: ", item2: "Warangal, Telangana, India" }
    ];
    
    for (let item of liItems) {
      let liElement = document.createElement("li");

      let strongElement = document.createElement("strong");
      strongElement.textContent = item.item1;
      liElement.appendChild(strongElement);

      let textNode = document.createTextNode(item.item2);
      liElement.appendChild(textNode);

      listContainerElement.appendChild(liElement);
    }
  }, []);

  return (
    <div id="sectionAboutMe" className="container mx-auto bg-white shadow-lg p-5 mb-5 rounded-lg">
      <h3 className="text-2xl font-bold text-blue-600">Web Developer.</h3>
      <div className="flex flex-wrap justify-evenly">
        <img className="w-full max-w-sm rounded-lg" src="https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691335319/IMG_8906_kxemkg.jpg" alt="About Me" />
        <div>
          <ul id="listContainer" className="list-none pl-0"></ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
