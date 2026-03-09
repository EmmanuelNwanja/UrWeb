"use client";

import {
  Wallet,
  Star,
  Coins,
  Shield,
  Zap,
  Activity,
  BrainCircuit,
  Eye,
  Swords,
  Heart,
  Sparkles,
} from "lucide-react";

export default function ProfilePage() {
  // Demo data - will be replaced with real API data
  const user = {
    name: "Web3 Learner",
    email: "learner@gmail.com",
    walletAddress: "7xKX...9mPq",
    role: "learner" as const,
    rxp: 2450,
    tokenBalance: 156.8,
    joinedDate: "January 2024",
  };

  const weberNFT = {
    tier: 1 as const,
    level: 12,
    pathway: "Smart Contract Development",
    durability: 78,
    energy: 4,
    energyCapacity: 6,
    mintCount: 0,
    stats: {
      smartness: 15,
      vitality: 12,
      dexterity: 18,
      curiosity: 14,
      grace: 10,
    },
    runes: [
      { name: "Knight's Rune", type: "knight", rarity: "common", boost: 0.3 },
    ],
  };

  const statItems = [
    {
      name: "Smartness",
      value: weberNFT.stats.smartness,
      icon: BrainCircuit,
      color: "text-yellow-400",
      description: "Daily Reward Cap",
    },
    {
      name: "Vitality",
      value: weberNFT.stats.vitality,
      icon: Heart,
      color: "text-red-400",
      description: "Stamina",
    },
    {
      name: "Dexterity",
      value: weberNFT.stats.dexterity,
      icon: Swords,
      color: "text-green-400",
      description: "Earning Speed",
    },
    {
      name: "Curiosity",
      value: weberNFT.stats.curiosity,
      icon: Eye,
      color: "text-blue-400",
      description: "RXP Rate",
    },
    {
      name: "Grace",
      value: weberNFT.stats.grace,
      icon: Sparkles,
      color: "text-purple-400",
      description: "Probability",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center">
              <span className="text-3xl font-bold text-purple-400">
                {user.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-1">
                {user.name}
              </h1>
              <p className="text-gray-400 text-sm mb-2">{user.email}</p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1 text-sm">
                  <Wallet className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-400 font-mono">
                    {user.walletAddress}
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-purple-500/10 rounded-full text-xs text-purple-300 capitalize">
                  {user.role}
                </span>
                <span className="text-gray-500 text-xs">
                  Joined {user.joinedDate}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">
                {user.rxp.toLocaleString()}
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center gap-1">
                <Star className="h-3 w-3 text-yellow-400" />
                RXP Points
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">
                {user.tokenBalance}
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center gap-1">
                <Coins className="h-3 w-3 text-purple-400" />
                $URWEB
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">Tier {weberNFT.tier}</p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center gap-1">
                <Shield className="h-3 w-3 text-blue-400" />
                Weber NFT
              </p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">
                Lv. {weberNFT.level}
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center gap-1">
                <Activity className="h-3 w-3 text-green-400" />
                Level
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weber NFT Details */}
          <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Weber NFT</h2>
              <Zap className="h-5 w-5 text-yellow-400" />
            </div>

            {/* NFT Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Pathway</span>
                <span className="text-purple-400 font-medium text-sm">
                  {weberNFT.pathway}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Durability</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full transition-all"
                      style={{ width: `${weberNFT.durability}%` }}
                    />
                  </div>
                  <span className="text-white text-sm">
                    {weberNFT.durability}/100
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Energy</span>
                <span className="text-white text-sm">
                  {weberNFT.energy}/{weberNFT.energyCapacity}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Mint Count</span>
                <span className="text-white text-sm">{weberNFT.mintCount}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl text-sm font-medium transition-colors">
                Repair NFT
              </button>
              <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-xl text-sm font-medium transition-colors">
                Level Up
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white mb-6">
              Weber Stats
            </h2>
            <div className="space-y-4">
              {statItems.map((stat) => {
                const Icon = stat.icon;
                const maxStat = 50;
                const percentage = (stat.value / maxStat) * 100;
                return (
                  <div key={stat.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <Icon className={`h-4 w-4 ${stat.color}`} />
                        <span className="text-gray-300 text-sm">
                          {stat.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 text-xs">
                          {stat.description}
                        </span>
                        <span className="text-white text-sm font-medium">
                          {stat.value}
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Runes */}
            {weberNFT.runes.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h3 className="text-sm font-medium text-gray-300 mb-3">
                  Equipped Runes
                </h3>
                {weberNFT.runes.map((rune, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-yellow-400" />
                      <span className="text-white text-sm">{rune.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-gray-700 rounded-full text-xs text-gray-300 capitalize">
                        {rune.rarity}
                      </span>
                      <span className="text-green-400 text-sm font-medium">
                        +{rune.boost}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
