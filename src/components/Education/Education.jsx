import React, { useState } from 'react';
import { education } from '../../constants';

const Education = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleReadMore = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and qualifications.
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-default hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4 flex justify-center items-center h-48">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-gray-500 text-lg mb-2">{edu.school}</p>
              <p className="text-gray-500 text-sm mb-2">{edu.date}</p>

              {/* Description with Read More toggle */}
              <p className="text-gray-400 mb-2">
                {expandedCards[edu.id]
                  ? edu.desc
                  : `${edu.desc.slice(0, 80)}...`}
              </p>
              <button
                onClick={() => toggleReadMore(edu.id)}
                className="text-sm text-purple-400 underline focus:outline-none"
              >
                {expandedCards[edu.id] ? 'Read Less' : 'Read More'}
              </button>

              <div className="mt-4">
                <span className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2">
                  Grade: {edu.grade}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
