'use client';

import Image from "next/image";

export default function FeaturesAnalysis() {
  const features = [
    {
      title: "Siri",
      description:
        "Siri enables hands-free interaction, shaping user behavior through task management and personalized assistance. By acting as an agent in the user's network, it reshapes user behavior by anticipating needs, managing tasks, and creating personalized interaction patterns. Siri reflects how AI technologies shape and are shaped by user practices.",
      image: "/siri.jpeg", // Replace with your image path
    },
    {
      title: "Face ID",
      description:
        "Face ID exemplifies the intersection between biometric technology, privacy, and social control. It transforms facial characteristics into digital credentials. This technology highlights the ongoing negotiation between technological convenience, personal privacy, a need to make our lives more convenient.",
      image: "/faceid.png", // Replace with your image path
    },
    {
      title: "Photography",
      description:
        "Features like Night Mode and Portrait Mode showcase how algorithms enhance creativity, enabling professional-grade photography accessible to everyone. These features influence how individuals perceive, capture, and share visual experiences in the digital age.",
      image: "/photography.jpeg", // Replace with your image path
    },
    {
      title: "Find my iPhone",
      description:
        "An example of technological mediation, Find My iPhone transforms device loss from an individual problem to a networked solution. It illustrates how technological systems create new forms of social coordination through distributed tracking with a vast network of iphones.",
      image: "/find-my-iphone.jpeg", // Replace with your image path
    },
    {
      title: "Apple Ecosystem Integration",
      description:
        "The Apple ecosystem demonstrates articulation through standardized interfaces where devices communicate seamlessly. As an assemblage, it transforms individual technologies into a dynamic network where MacBooks, iPhones, and iPads become nodes that are connected to each other, creating a technological environment that adapts to user interactions.",      
        image: "/ecosystem.jpeg", // Replace with your image path
    },
    {
      title: "Exclusivity",
      description:
        "Apple's closed ecosystem, showcased by apps like iMessage and Airdrop, demonstrates social stratification by creating 2 distinct categories of smartphone users called 'iPhone users' and 'Android users'. These platforms reinforce user loyalty through technological differentiation, illustrating how technological systems evolve to maintain competitive advantage.",
      image: "/exclusivity.jpeg", // Replace with your image path
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-100 rounded-2xl">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={150}
              height={150}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
