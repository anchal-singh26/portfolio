import React, { useState } from "react";
import { experiences } from "../../constants"; // Ensure this path is correct

const Experience = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-skills-gradient font-sans relative"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          A collection of real-world projects, personal initiatives, and collaborative builds that demonstrate my skills and practical development experience.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative flex flex-col items-center">
        <div className="absolute left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-1 bg-purple-500 z-0 h-full"></div>

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;
          const isExpanded = expanded[experience.id];

          return (
            <div
              key={experience.id}
              className={`relative flex flex-col items-end sm:flex-row sm:items-center w-full 
                        ${isLeft ? "sm:justify-start" : "sm:justify-end"}
                        ${index !== experiences.length - 1 ? "mb-20" : ""}`}
            >
              <div
                className={`w-[90%] sm:w-[45%] bg-[#111111] border border-[#333] p-6 sm:p-8 rounded-2xl relative z-10 
                            shadow-lg hover:shadow-purple-500/40 transition-transform hover:scale-[1.02] 
                            ${isLeft ? "sm:ml-0 sm:mr-auto" : "sm:mr-0 sm:ml-auto"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <p className="text-sm text-gray-400">{experience.company}</p>
                    {experience.date && (
                      <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-300 leading-relaxed text-justify">
                  {isExpanded
                    ? experience.desc
                    : `${experience.desc.slice(0, 300)}...`}
                </p>
                {experience.desc.length > 300 && (
                  <button
                    onClick={() => toggleReadMore(experience.id)}
                    className="mt-1 text-purple-400 hover:underline text-sm"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white mb-2">Skills:</h5>
                  <ul className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-white px-3 py-1 text-xs rounded-full"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Node */}
              <div
                className={`absolute left-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-20 sm:left-1/2 sm:transform sm:-translate-x-1/2`}
              >
                <div className="w-16 h-16 bg-[#0a0a0a] border-[6px] border-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-8 h-8 object-contain rounded-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
