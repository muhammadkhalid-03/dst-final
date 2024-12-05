'use client';

import React from "react";
import HistoricalEvolution from "../components/evolution/HistoricalEvolution";
import CurrentApplications from "../components/evolution/CurrentApplications";
import FutureProspects from "../components/evolution/FutureProspects";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-200 to-white text-gray-800">
      <h1 className="text-6xl font-bold text-center mb-20 mt-16 text-blue-900">
        Apple AI
      </h1>

      <HistoricalEvolution />
      <div className="w-full border-t border-gray-300 my-12"></div>
      <CurrentApplications />
      <div className="w-full border-t border-gray-300 my-12"></div>
      <FutureProspects />
    </main>
  );
}
