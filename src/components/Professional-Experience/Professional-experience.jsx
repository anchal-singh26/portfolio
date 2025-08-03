import React, { useState } from 'react';
import nareshLogo from '../../assets/Professionalexp-logo/naresh_i_technologies_logo.jpg';
import keysoftwareLogo from '../../assets/company_logo/keysoftware.jpg';
import { professionalExperience } from '../../constants';

const ProfessionalExperience = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="professional-experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROFESSIONAL EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto text-justify">
          A summary of my professional roles and industry-level project contributions.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {professionalExperience.map((exp) => (
          <div
            key={exp.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4 flex justify-center items-center h-48">
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <p className="text-gray-500 text-lg mb-1">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-1">{exp.date}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.location}</p>

              {/* Read More Description */}
              <p className="text-gray-400 mb-2 text-justify">
                {expanded[exp.id]
                  ? exp.desc
                  : `${exp.desc.slice(0, 180)}...`}
              </p>
              <button
                onClick={() => toggleReadMore(exp.id)}
                className="text-sm text-purple-400 underline focus:outline-none"
              >
                {expanded[exp.id] ? 'Read Less' : 'Read More'}
              </button>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
