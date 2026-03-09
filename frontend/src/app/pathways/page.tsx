"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Code,
  Cloud,
  Megaphone,
  Coins,
  Gamepad2,
  Palette,
  Shield,
  Users,
  Search,
  Filter,
  type LucideIcon,
} from "lucide-react";
import { PATHWAYS_DATA } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Cloud,
  Megaphone,
  Coins,
  Gamepad2,
  Palette,
  Shield,
  Users,
};

const categories = ["All", "Technical", "Non-Technical"];

export default function PathwaysPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPathways = PATHWAYS_DATA.filter((pathway) => {
    const matchesSearch =
      pathway.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pathway.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || pathway.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Learning Pathways
          </h1>
          <p className="text-gray-400 text-lg">
            Explore curated learning paths across Web3 skills, created by
            experts and the community.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pathways..."
              className="w-full bg-gray-900 border border-gray-800 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-500" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Pathways Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPathways.map((pathway) => {
            const Icon = iconMap[pathway.icon] || Code;
            return (
              <Link
                key={pathway._id}
                href={`/pathways/${pathway._id}`}
                className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors flex-shrink-0">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-400 mb-1">
                      {pathway.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {pathway.name}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {pathway.description}
                </p>

                <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-800">
                  <span className="text-gray-500">
                    {pathway.resourceCount} resources
                  </span>
                  <span className="text-purple-400 font-medium">
                    {pathway.subscriberCount.toLocaleString()} learners
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredPathways.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No pathways found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
