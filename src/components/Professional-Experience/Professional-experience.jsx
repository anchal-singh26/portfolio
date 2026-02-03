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
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[14vw] font-sans relative bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white tracking-wide">
          PROFESSIONAL EXPERIENCE
        </h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
          A snapshot of my professional journey, responsibilities, and real-world project contributions.
        </p>
      </div>

      {/* Experience List */}
      <div className="flex flex-col gap-12">
        {professionalExperience.map((exp) => (
          <div
            key={exp.id}
            className="group grid grid-cols-1 md:grid-cols-[220px_1fr] bg-[#0f0b1e]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            {/* Left Logo Section */}
            <div className="flex items-center justify-center bg-[#140f2b] p-6">
              <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-auto max-h-28 object-contain"
              />
            </div>

            {/* Right Content Section */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <p className="text-purple-400 font-semibold">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {exp.date} • {exp.location}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-justify leading-relaxed mb-3">
                {expanded[exp.id]
                  ? exp.desc
                  : `${exp.desc.slice(0, 220)}...`}
              </p>

              <button
                onClick={() => toggleReadMore(exp.id)}
                className="text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4 transition"
              >
                {expanded[exp.id] ? 'Read Less' : 'Read More'}
              </button>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-6">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
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
