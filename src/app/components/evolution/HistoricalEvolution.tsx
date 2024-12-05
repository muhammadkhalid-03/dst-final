'use client';

import React from 'react';

export default function HistoricalEvolution() {
  const milestones = [
    {
      year: "2009",
      title: "Voice Control Introduced",
      description: "Apple introduced basic voice control, laying the foundation for AI-driven interactions.",
    },
    {
      year: "2011",
      title: "Siri Revolutionizes AI",
      description: "The launch of Siri brought natural language processing to mainstream devices.",
    },
    {
      year: "2017",
      title: "Core ML Introduced",
      description: "Developers gained access to machine learning capabilities directly on iOS devices.",
    },
    {
      year: "2020",
      title: "On-Device Siri",
      description: "Apple moved Siri processing on-device, enhancing privacy and speed.",
    },
    {
      year: "2023",
      title: "Vision Pro Integration",
      description: "AI-powered spatial computing introduced with Vision Pro redefined user interactions.",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-100 to-white rounded-2xl">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Historical Evolution of Apple AI</h2>

      <div className="relative max-w-5xl mx-auto p-6">
        {/* Timeline Line */}
        <div className="absolute w-1 bg-blue-300 left-1/2 transform -translate-x-1/2 h-full"></div>

        {/* Timeline Items */}
        <div className="flex flex-col space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } items-center`}
            >
              {/* Connector Dot */}
              <div className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white left-1/2 transform -translate-x-1/2"></div>

              {/* Milestone Content */}
              <div
                className={`w-1/2 p-6 bg-white border border-blue-200 rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'ml-auto text-right' : 'mr-auto text-left'
                }`}
              >
                <h3 className="text-xl font-semibold text-blue-700">{milestone.year}</h3>
                <h4 className="text-lg font-bold text-gray-800">{milestone.title}</h4>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
