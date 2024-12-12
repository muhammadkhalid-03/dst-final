'use client';

import Image from "next/image";

export default function CurrentApplications() {
  const applications = [
    {
      title: "Personalization",
      description:
        "Apple AI powers features like Siri, photo memories, and personalized playlists in Apple Music, creating a tailored experience for every user.",
      d: "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    },
    {
      title: "Convenience",
      description:
        "AI is ingrained into Apple Maps, Mail, iMessage, Notes, and many others. Users are able to get directions, automatically proofread emails, summarize notifications etc.",
      d: "M12 4.5v15m7.5-7.5h-15",
    },
    {
      title: "Privacy-Centric AI",
      description:
        "With on-device intelligence and differential privacy, Apple ensures user data stays secure while delivering intelligent features.",
      d: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88",
    },
  ];

  const affordances = [
    {
      title: "Request",
      sub: "Predictive Text",
      description: "AI requests the user to consider auto-suggestions for faster typing by displaying word predictions.",
      img: "/predictive-text.jpeg",
      source: "reddit"
    },
    {
      title: "Demand",
      sub: "Crash Detection",
      description: "The iPhone, through AI, demands a user response by default after detecting a potential crash to confirm if emergency services are required. This can be switched off in settings.",
      img: "/crash.jpeg",
      source: "macrumors"
    },
    {
      title: "Allow",
      sub: "Text Extraction",
      description:"AI allows users to extract text from images without requiring manual copying.",
      img: "/extraction.jpeg",
      source: "cnbc"
    },
    {
      title: "Encourage",
      sub: "Edge Glow",
      description:"The iPhone encourages using its AI assistant for automation through the border light.",
      img: "/glow.jpeg",
      source: "reddit"
    },
    {
      title: "Discourage",
      sub: "Third-party Assistant",
      description:"Apple refuses to let the user utilize other AI assistants like Alexa or Google Assistant by integrating Siri deeply into its ecosystem and not allowing alternative defaults.",
      img: "/settings.jpeg",
      source: "macrumors"
    },
    {
      title: "Refuse",
      sub: "Default Apps",
      description:"Apple's siri discourages the use of non-Apple apps such as making Apple Music a default app compared to spotify.",
      img: "/apple-music.jpeg",
      source: "apple"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-blue-100">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Current Applications of Apple AI
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 p-6">
        {applications.map((app, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 space-y-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-16">
                <path strokeLinecap="round" strokeLinejoin="round" d={app.d} />
            </svg>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              {app.title}
            </h3>
            <p className="text-gray-600">{app.description}</p>
          </div>
        ))}
      </div>
      <h3 className="text-3xl font-bold text-center text-blue-900 mt-12 mb-12">
        Affordances
      </h3>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 p-6">
        {affordances.map((app, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 flex-1 space-y-4 justify-between"
          >
            <span className="text-xl text-blue-700 font-bold">{app.sub}</span>
        <Image
          src={app.img}
          alt={app.title}
          width={300}
          height={300}
          className="rounded-xl shadow-lg"
          />
          <p className="text-gray-400 text-sm">Source: {app.source}</p>
          <p className="flex justify-center items-center space-x-2">
            <span className="text-gray-600">{app.description}</span>
          </p>          
          </div>
        ))}
      </div>
    </section>
  );
}
