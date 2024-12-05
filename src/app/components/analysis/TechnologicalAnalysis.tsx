'use client';

import Link from "next/link";

export default function TechnologicalAnalysis() {
  const analyses = [
    {
      title: "Technological Determinism",
      description:
        "Technological determinism explores the idea that technology affects society in predetermined ways. This concept begs us to consider whether the iPhone, as a technological artifact, has steered communication and cultural norms, or if it is simply a reflection of society's existing needs. When the iPhone was first introduced in 2007, it shook the world by blending a phone, an iPod, and an internet communicator into a signle device. It redefined what a phone could be and what it meant to be \"connected\".  This innovation had cascading effects on the social, economic and cultural parts of society. It was a catalyst to bringing us toward a digital age where convenience, on-demand access to information and multimedia communication became the norm. Social media platforms like Facebook, which were already emerging, found a natural home on devices like the iPhone, fundamentally changing how we connect with others and consume information. Thus, the iPhone's influence extended beyond individual users. Industries reshaped themselves to cater to smartphone users. The global economy started to rely more around mobile ecosystems with the things like the App store which revolutionized software monetization. In light of the advancements the iPhone brought, it's also crucial to reflect on the question about whether technology truly drives social changes or whether these changes stem from social needs and desires. While the theory of technological determinism dictates that artifacts shape society in predictable ways, the reality is slightly different. Society's embrace of the iPhone wasn't just rooted in its reaction to the device's features, but a response to broader cultural desires that valued connectivity and digitization. As such, the iPhone can be viewed as both a product of social needs and a force that actively shaped those needs in return.",
      link: "https://www.communicationtheory.org/technological-determinism/",
    },
    {
      title: "Affordances",
      description:
        "The iPhone's design and features, such as its touchscreen interface and app ecosystem, portray affordances that shape how users interact with technology. The touchscreen, for instance, offers a direct way to interact with content using fingers. These affordances extend beyond individual use howwever, influencing industries like entertainment, healthcare, and education. For the entertainment industry, for example, the iPhone supports streaming, gaming, and content creation. In healthcare, apps and features empower users to track their fitness and give them immediate access to crucial information and so on. Users are able to perform complex tasks including everything from watching movies to taking professional-grade photos with the click of a button. The iPhone presents interfaces that suggest and guide user actions through visual and tactile cues, making complicated tasks feel natural and accessible.",
        link: "https://www.jennyldavis.com/how-artifacts-afford-the-power-and-politics-of-everyday-things",
    },
    {
      title: "Articulation, Assemblage, and Politics",
      description:
        "The iPhone serves as a central element of the Apple ecosystem. Its role in this ecosystem - connecting devices like iPads, MacBooks, and Apple Watches - demonstrates articulation through standardized interfaces that facilitate communication within these devices. This assemblage transforms devices from acting as individual artifacts to a network of artifacts that allows for improved user interactions and more convenience. Within these devices we can also see how different technologies (Siri, iCloud, and the App Store) are unified to enhance user experience. These assemblages have changed the way we think about and use personal technology by creating an ecosystem exclusive to Apple users. This assemblage, with regard to the iPhone and other Apple products and services, is also linked to Langdon Winner's theory that artifacts have politics. The high cost of the iPhone and its exclusive ecosystem unlike Android, highlight issues with technological accessibility and economic inequality. The iPhone, though a single device, is designed to be a gateway to a broader system involving other Apple products. Apple's success with the iPhone and the Apple ecosystem has gone to such a large extent that it's difficult refrain from more apple products due to the convenience and seamless integration with all the devices in the network. By embedding these politics within its design and functionality, the iPhone serves as a powerful reminder of how even the smallest pieces of technology can influence society.",
      link: "http://claireshannon317.blogspot.com/2014/06/articulation-assemblage.html",
    },
    {
      title: "Social Construction of Technology",
      description:
        "The development of the iPhone created multiple relevant social groups (e.g., consumers, designers) that influenced its evolution. In a broader social and economic context, the iPhone had ripple effects on users, industries, and government. For example, consumers' demands for convenience and connectivity led to the development of features like iMessage and the App Store, while designers prioritized sleek aesthetics and usability to cater to market trends. Digital Entrepreneurs started creating applications for the App store which led to the formation of a whole new industry: Software Engineering. As a part of large-scale economic activity driven by the iPhone, governments put into place regulatory policies to control competitive market strategies and privacy issues. Interpretive flexibility is also evident in how different groups use the same device for varying purposes such as games and sending emails. This evolution between technology and society underscores how the iPhone is not just a technological artifact but also a reflection of society's needs that drive its development.",
      link: "https://www.alice.id.tue.nl/references/pinch-bijker-1984.pdf",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl">
      <div className="max-w-7xl mx-auto space-y-12 gap-8 p-6">
        {analyses.map((analysis, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-white p-8 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4 no-underline hover:underline">
              <Link href={analysis.link} target="_blank" passHref>{analysis.title}</Link>
            </h3>
            <div className="items-center justify-center">
                {/* <Image
                src={analysis.image}
                alt={analysis.title}
                width={150}
                height={150}
                className="mb-4"
                /> */}
                <p className="text-gray-600">{analysis.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
