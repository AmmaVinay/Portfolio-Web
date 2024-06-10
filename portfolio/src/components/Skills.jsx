import React from "react";

const SectionSkills = () => {
  return (
    <section id="sectionSkills" className="container mx-auto my-8 p-8 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691337476/html-5_cj8evd.png", alt: "HTML", url: "https://certificates.ccbp.in/intensive/static-website?id=NGPMYPERXD", border: "border-blue-500" },
          { src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691338251/css-3_y7w153.png", alt: "CSS", url: "https://certificates.ccbp.in/intensive/responsive-website?id=HRWBTTHGVN", border: "border-green-500" },
          { src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691338251/bootstrap_wgeyqu.png", alt: "Bootstrap", url: "https://certificates.ccbp.in/intensive/responsive-website?id=HRWBTTHGVN", border: "border-green-500" },
          { src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1696314070/database_ppebqu.png", alt: "SQL", url: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=CGKPIKGSTF", border: "border-red-500" },
          { src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691338252/python_kgylol.png", alt: "Python", url: "https://certificates.ccbp.in/intensive/programming-foundations?id=QFYTCWWPAF", border: "border-green-500" },
          { src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691338251/js_zxz0dc.png", alt: "JavaScript", url: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=FRQQTZTJYV", border: "border-green-500" },
          { src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691340121/mongo_mbiv7k.png", alt: "Mongo DB", border: "border-blue-500" },
          { src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691340246/Express_tzb7ad.png", alt: "Express JS", border: "border-yellow-500" },
          { src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691338267/atom_pavlyp.png", alt: "React JS", border: "border-blue-500" },
          { src: "https://res.cloudinary.com/dmaw7zxmp/image/upload/v1691338267/nodejs_oylsmx.png", alt: "Node JS", border: "border-gray-500" }
        ].map(({ src, alt, url, border }) => (
          <div key={alt} className={`p-4 bg-white rounded-lg border ${border} shadow-md transition-transform hover:shadow-lg hover:scale-105`}>
            <img src={src} alt={alt} className="w-20 h-20 mx-auto mb-4" />
            <a href={url} target="_blank" rel="noopener noreferrer" className={`block text-center font-semibold text-gray-800 hover:text-blue-600`} aria-label={alt}>
              {alt}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSkills;
