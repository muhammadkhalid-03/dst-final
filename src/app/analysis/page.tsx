'use client';

import React from "react";
import HistoricalEvolution from "../components/evolution/HistoricalEvolution";
import CurrentApplications from "../components/evolution/CurrentApplications";
import FutureProspects from "../components/evolution/FutureProspects";
import TechnologicalAnalysis from "../components/analysis/TechnologicalAnalysis";

export default function Home() {

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-200 to-white text-gray-800">
      <h1 className="text-6xl font-bold text-center mb-20 mt-16 text-blue-900">
        Technological Analysis
      </h1>
      <TechnologicalAnalysis />
    </main>
  );
}
