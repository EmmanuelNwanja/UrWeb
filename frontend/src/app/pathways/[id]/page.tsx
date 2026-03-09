"use client";

import { use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  ThumbsUp,
  BookOpen,
  Video,
  FileText,
  Code,
  Users,
} from "lucide-react";
import { PATHWAYS_DATA, RESOURCES_DATA } from "@/lib/constants";

const typeIcons: Record<string, typeof BookOpen> = {
  article: FileText,
  tutorial: Code,
  video: Video,
  program: BookOpen,
  analysis: FileText,
};

const typeColors: Record<string, string> = {
  article: "bg-blue-500/10 text-blue-400",
  tutorial: "bg-green-500/10 text-green-400",
  video: "bg-red-500/10 text-red-400",
  program: "bg-yellow-500/10 text-yellow-400",
  analysis: "bg-purple-500/10 text-purple-400",
};

export default function PathwayDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const pathway = PATHWAYS_DATA.find((p) => p._id === id);
  const resources = RESOURCES_DATA.filter((r) => r.pathway === id);

  if (!pathway) {
    return (
      <div className="min-h-screen bg-gray-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Pathway Not Found
          </h1>
          <Link
            href="/pathways"
            className="text-purple-400 hover:text-purple-300"
          >
            Back to Pathways
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          href="/pathways"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Pathways
        </Link>

        {/* Pathway Header */}
        <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-2xl p-8 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-purple-500/10 rounded-full text-xs text-purple-300 mb-3">
                {pathway.category}
              </span>
              <h1 className="text-3xl font-bold text-white mb-3">
                {pathway.name}
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl">
                {pathway.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-700/50">
            <div className="flex items-center gap-2 text-gray-400">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm">
                {pathway.resourceCount} resources
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="h-4 w-4" />
              <span className="text-sm">
                {pathway.subscriberCount.toLocaleString()} learners
              </span>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-6">
            Resources ({resources.length})
          </h2>

          {resources.length > 0 ? (
            <div className="space-y-4">
              {resources.map((resource) => {
                const TypeIcon = typeIcons[resource.type] || FileText;
                const typeColor =
                  typeColors[resource.type] || "bg-gray-500/10 text-gray-400";

                return (
                  <div
                    key={resource._id}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${typeColor}`}
                      >
                        <TypeIcon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-medium text-white truncate">
                            {resource.title}
                          </h3>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-purple-400 flex-shrink-0"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">
                          {resource.description}
                        </p>
                        <div className="flex items-center gap-3 flex-wrap">
                          {resource.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-0.5 bg-gray-800 rounded-full text-xs text-gray-400"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            {resource.votes}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-900/30 border border-gray-800 rounded-xl">
              <BookOpen className="h-12 w-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No resources available yet for this pathway.
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Resources will be added by verified contributors.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
