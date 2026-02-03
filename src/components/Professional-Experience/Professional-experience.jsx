import React, { useState } from 'react';
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
      className="py-28 px-[6vw] lg:px-[14vw] font-sans relative bg-skills-gradient clip-path-custom-3"
    >
      {/* Title */}
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold text-white">
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          My professional journey presented in a modern ladder-style layout.
        </p>
      </div>

      {/* Ladder Container */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-purple-500/30 -translate-x-1/2"></div>

        {/* Experience Items */}
        <div className="flex flex-col gap-20">
          {professionalExperience.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 top-10 w-5 h-5 bg-purple-500 rounded-full -translate-x-1/2 z-10 shadow-lg"></div>

                {/* Card */}
                <div
                  className={`w-full md:w-[46%] bg-[#0f0b1e]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-purple-500/40 ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  {/* Logo */}
                  <div className="flex justify-center mb-6">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="max-h-20 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-purple-400 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {exp.date} • {exp.location}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 text-justify leading-relaxed mb-3">
                    {expanded[exp.id]
                      ? exp.desc
                      : `${exp.desc.slice(0, 220)}...`}
                  </p>

                  <button
                    onClick={() => toggleReadMore(exp.id)}
                    className="text-sm text-purple-400 underline underline-offset-4 hover:text-purple-300"
                  >
                    {expanded[exp.id] ? 'Read Less' : 'Read More'}
                  </button>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
