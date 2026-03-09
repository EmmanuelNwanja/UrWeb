"use client";

import Link from "next/link";
import {
  BookOpen,
  TrendingUp,
  Coins,
  Zap,
  ArrowRight,
  Star,
  Trophy,
  Clock,
} from "lucide-react";

export default function DashboardPage() {
  // Demo data - will be replaced with real data from API
  const stats = {
    rxp: 2450,
    tokenBalance: 156.8,
    pathwaysEnrolled: 3,
    resourcesCompleted: 42,
  };

  const recentActivity = [
    {
      id: "1",
      action: "Completed resource",
      resource: "Solana Program Development: From Zero to Hero",
      pathway: "Smart Contract Development",
      rxpEarned: 45,
      time: "2 hours ago",
    },
    {
      id: "2",
      action: "Earned tokens",
      resource: "Understanding Solana Token Economics",
      pathway: "Smart Contract Development",
      rxpEarned: 30,
      time: "5 hours ago",
    },
    {
      id: "3",
      action: "Voted on resource",
      resource: "Web3 Marketing Masterclass",
      pathway: "Digital Marketing",
      rxpEarned: 5,
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">
            Track your learning progress and earnings
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-400" />
              </div>
              <span className="text-sm text-gray-400">RXP Points</span>
            </div>
            <p className="text-2xl font-bold text-white">
              {stats.rxp.toLocaleString()}
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Coins className="h-5 w-5 text-purple-400" />
              </div>
              <span className="text-sm text-gray-400">$URWEB Tokens</span>
            </div>
            <p className="text-2xl font-bold text-white">
              {stats.tokenBalance}
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-blue-400" />
              </div>
              <span className="text-sm text-gray-400">Pathways</span>
            </div>
            <p className="text-2xl font-bold text-white">
              {stats.pathwaysEnrolled}
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Trophy className="h-5 w-5 text-green-400" />
              </div>
              <span className="text-sm text-gray-400">Completed</span>
            </div>
            <p className="text-2xl font-bold text-white">
              {stats.resourcesCompleted}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weber NFT Card */}
          <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Weber NFT</h2>
              <Zap className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="bg-gray-900/50 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Tier</span>
                <span className="text-white font-medium">1</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Level</span>
                <span className="text-white font-medium">12</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Pathway</span>
                <span className="text-purple-400 font-medium text-sm">
                  Smart Contract Dev
                </span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Durability</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                  <span className="text-white text-sm">78%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Energy</span>
                <span className="text-white font-medium">4/6</span>
              </div>
            </div>
            <Link
              href="/profile"
              className="flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
            >
              View Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">
                Recent Activity
              </h2>
              <TrendingUp className="h-5 w-5 text-gray-500" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start gap-4 p-3 bg-gray-800/30 rounded-xl"
                >
                  <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      {activity.resource}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      {activity.pathway}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-green-400 text-sm font-medium">
                      +{activity.rxpEarned} RXP
                    </p>
                    <p className="text-gray-500 text-xs mt-1 flex items-center gap-1 justify-end">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/pathways"
            className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 rounded-xl p-4 transition-colors group"
          >
            <BookOpen className="h-5 w-5 text-purple-400" />
            <span className="text-gray-300 group-hover:text-white text-sm font-medium">
              Explore Pathways
            </span>
            <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-purple-400 ml-auto" />
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 rounded-xl p-4 transition-colors group"
          >
            <Zap className="h-5 w-5 text-yellow-400" />
            <span className="text-gray-300 group-hover:text-white text-sm font-medium">
              Manage Weber NFT
            </span>
            <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-purple-400 ml-auto" />
          </Link>
          <Link
            href="/pathways"
            className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 rounded-xl p-4 transition-colors group"
          >
            <TrendingUp className="h-5 w-5 text-green-400" />
            <span className="text-gray-300 group-hover:text-white text-sm font-medium">
              Continue Learning
            </span>
            <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-purple-400 ml-auto" />
          </Link>
        </div>
      </div>
    </div>
  );
}
