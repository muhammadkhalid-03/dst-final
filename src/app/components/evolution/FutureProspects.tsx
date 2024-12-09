'use client';

import Image from "next/image";

export default function FutureProspects() {
  const prospects = [
    {
      title: "Generative AI",
      description:
        "Future Apple AI could enable users to automate their lives, communicate with other devices, and so much more...",
      image: "/appleai.jpeg",
    },
    {
      title: "Health Advancements",
      description:
        "Apple's AI may integrate with wearable devices to monitor glucose levels, mental health, or even detect early signs of illness using predictive analytics & Generative AI.",
      image: "/applehealth.jpeg",
    },
    {
      title: "Spatial Computing",
      description:
        "With LiDAR technology and advanced AR capabilities, the iPhone enables immersive experiences, from AI powered photography to enhanced productivity in apps like Measure and Maps. Apple's continued advancements in spatial computing with the help of AI are exciting to think about and might change how we view the digital world in our reality.",
      image: "/applephotos.jpeg",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-blue-100 to-white">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Future Prospects of Apple AI
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col space-y-16 p-6">
        {prospects.map((prospect, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Content */}
            <div className="md:w-1/2 p-6">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                {prospect.title}
              </h3>
              <p className="text-gray-600 text-lg">{prospect.description}</p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={prospect.image}
                alt={prospect.title}
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
