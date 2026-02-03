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
      className="py-32 px-[6vw] lg:px-[14vw] font-sans relative bg-skills-gradient clip-path-custom-3 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.12),transparent_60%)] pointer-events-none"></div>

      {/* Title */}
      <div className="relative text-center mb-28">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          Professional Experience
        </h2>
        <div className="w-24 h-[3px] bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-5 rounded-full"></div>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          A summary of my professional roles and industry-level project contributions.
        </p>
      </div>

      {/* Ladder */}
      <div className="relative">
        {/* Animated Center Spine */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 opacity-40 -translate-x-1/2"></div>

        <div className="flex flex-col gap-24">
          {professionalExperience.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Node */}
                <div className="absolute left-1/2 top-12 -translate-x-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_18px_rgba(168,85,247,0.9)]"></div>
                </div>

                {/* Card */}
                <div
                  className={`relative w-full md:w-[44%] p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-xl 
                  bg-gradient-to-br from-[#120c2e]/80 to-[#0a0718]/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]
                  hover:-translate-y-2 hover:shadow-purple-500/40 transition-all duration-500
                  ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
                >
                  {/* Floating Logo */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0a0718] p-4 rounded-2xl border border-white/10 shadow-lg">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="h-12 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-10">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 mb-5">
                      {exp.date} • {exp.location}
                    </p>

                    <p className="text-gray-400 leading-relaxed text-justify mb-3">
                      {expanded[exp.id]
                        ? exp.desc
                        : `${exp.desc.slice(0, 230)}...`}
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
                          className="px-3 py-1 text-xs font-medium rounded-full 
                          bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                          text-purple-300 border border-purple-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
