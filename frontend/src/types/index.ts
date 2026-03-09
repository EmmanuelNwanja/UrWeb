// UrWeb Type Definitions

export interface User {
  _id: string;
  walletAddress: string;
  email: string;
  name: string;
  avatar?: string;
  role: "learner" | "contributor" | "manager" | "admin";
  rxp: number;
  tokenBalance: number;
  createdAt: string;
  updatedAt: string;
}

export interface Pathway {
  _id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  resourceCount: number;
  subscriberCount: number;
  createdBy: string;
  status: "active" | "pending" | "archived";
  createdAt: string;
}

export interface Resource {
  _id: string;
  title: string;
  description: string;
  url: string;
  type: "article" | "tutorial" | "video" | "program" | "analysis";
  pathway: string | Pathway;
  topics: string[];
  author: string | User;
  votes: number;
  score: number;
  createdAt: string;
}

export interface WeberNFTStats {
  smartness: number;
  vitality: number;
  dexterity: number;
  curiosity: number;
  grace: number;
}

export interface Rune {
  _id: string;
  name: string;
  type: "knight" | "sorcerer" | "queen";
  rarity: "common" | "uncommon" | "rare" | "super_rare";
  boost: number;
  energyCost: number;
}

export interface WeberNFT {
  _id: string;
  owner: string | User;
  pathway: string | Pathway;
  tier: 1 | 2 | 3;
  level: number;
  stats: WeberNFTStats;
  durability: number;
  energy: number;
  energyCapacity: number;
  mintCount: number;
  runes: Rune[];
  mintAddress: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  walletAddress: string | null;
}

export interface PathwayWithResources extends Pathway {
  resources: Resource[];
}
