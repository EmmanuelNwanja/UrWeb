"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-8">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-purple-300 text-sm font-medium">
            Powered by Solana Blockchain
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Learn. Earn. Build.
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            The Web3 Way.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          UrWeb is a decentralized education platform where community-curated
          knowledge meets blockchain incentives. Acquire Web3 skills, earn
          $URWEB tokens, and shape the future of education.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/login"
            className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-xl text-lg font-semibold transition-all hover:scale-105"
          >
            Start Learning
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/pathways"
            className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3.5 rounded-xl text-lg font-medium transition-colors"
          >
            Explore Pathways
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Pathways", value: "8+" },
            { label: "Resources", value: "130+" },
            { label: "Learners", value: "2,500+" },
            { label: "Contributors", value: "150+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
