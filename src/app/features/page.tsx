'use client';

import Image from "next/image";
import FeaturesAnalysis from "../components/features/FeaturesAnalysis";

export default function Home() {
    return (
        <main className="min-h-screen p-8 bg-gradient-to-b from-blue-200 to-white text-gray-800">
            <h1 className="text-6xl font-bold text-center mb-20 mt-16 text-blue-900">
                Features
            </h1>
            <FeaturesAnalysis />
        </main>
    )
}