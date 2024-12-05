'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [visibleElements, setVisibleElements] = useState({
    image: false,
    text: false,
  });
  

  useEffect(() => {
    // Initial animations
    const timeouts = [
      setTimeout(() => {
        setVisibleElements(prev => ({ ...prev, image: true }));
      }, 100),
      setTimeout(() => {
        setVisibleElements(prev => ({ ...prev, text: true }));
      }, 300)
    ];

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <div className="font-mono bg-gradient-to-b from-blue-200 to-white text-gray-600">
      {/* First section */}
      <section className="flex flex-row min-h-screen justify-evenly items-center p-4 overflow-hidden">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            visibleElements.image 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-full opacity-0'
          }`}
        >
          <Image
            src="/iphone-1-removebg-preview.png"
            alt="iPhone"
            width={400}
            height={400}
          />
        </div>

        <div
          className={`flex flex-col items-center space-y-8 max-w-xl transform transition-all duration-1000 ease-out ${
            visibleElements.text 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-full opacity-0'
          }`}
        >
          <p className="text-5xl text-center">The iPhone</p>
          <ul className="text-xl break-words text-justify space-y-2 leading-relaxed list-disc pl-8">
            <li>First produced in 2007</li>
            <li>Introduced ground-breaking features:</li>
            <ul className="text-lg list-[circle] pl-12">
              <li>Touch-sensitive multi sensor interface</li>
              <li>Email, Internet, Maps, Music all-in-one</li>
              <li>Lightweight, slim design</li>
            </ul>
          </ul>
        </div>
      </section>

      {/* Second section */}
      <section 
        className="flex flex-row min-h-screen justify-evenly items-center p-4 overflow-hidden"
      >
        <div
          className='flex flex-col items-center space-y-8 max-w-xl'>
          <p className="text-5xl text-center">Over the years</p>
          <ul className="text-xl break-words text-justify space-y-2 leading-relaxed list-disc pl-8">
            <li>Voice-controlled assistant</li>
            <li>Predictive text</li>
            <li>Wireless Charging</li>
            <li>Larger displays</li>
            <li>Facial & touch ID</li>
          </ul>
        </div>

        <div>
          <Image
            src="/iphone-x-removebg-preview.png"
            alt="iPhone Design"
            width={400}
            height={400}
          />
        </div>
      </section>

      {/* Third section */}
      <section 
        className="flex flex-row min-h-screen justify-evenly items-center p-4 overflow-hidden"
      >
        <div
          className='transform transition-all duration-1000 ease-out delay-500'>
          <Image
            src="/iphone16-removebg-preview.png"
            alt="iPhone Design"
            width={400}
            height={400}
          />
        </div>
        <div
          className='flex flex-col items-center space-y-8 max-w-xl transform transition-all duration-1000 ease-out delay-500'>
          <p className="text-5xl text-center">The iPhone Now</p>
          <ul className="text-xl break-words text-justify space-y-2 leading-relaxed list-disc pl-8">
            <li>Apple Intelligence</li>
            <li>New 'Camera' buttons</li>
            <li>Edge-to-edge display technology</li>
            <li>Premium materials</li>
            <li>Top-of the line Processing power</li>
          </ul>
        </div>
      </section>
    </div>
  );
}