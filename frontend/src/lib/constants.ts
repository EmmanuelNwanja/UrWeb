export const PATHWAYS_DATA = [
  {
    _id: "1",
    name: "Smart Contract Development",
    description:
      "Learn to build, deploy, and audit smart contracts on Solana and other blockchains. From Rust basics to advanced program design.",
    icon: "Code",
    category: "Technical",
    resourceCount: 24,
    subscriberCount: 1250,
    createdBy: "system",
    status: "active" as const,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    _id: "2",
    name: "Cloud Engineering",
    description:
      "Master cloud infrastructure, DevOps pipelines, and distributed systems used in Web3 backend services.",
    icon: "Cloud",
    category: "Technical",
    resourceCount: 18,
    subscriberCount: 890,
    createdBy: "system",
    status: "active" as const,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    _id: "3",
    name: "Digital Marketing",
    description:
      "Learn Web3 marketing strategies, community building, social media campaigns, and growth hacking for blockchain projects.",
    icon: "Megaphone",
    category: "Non-Technical",
    resourceCount: 15,
    subscriberCount: 720,
    createdBy: "system",
    status: "active" as const,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    _id: "4",
    name: "DeFi & Tokenomics",
    description:
      "Understand decentralized finance protocols, token economics, liquidity pools, and yield farming strategies.",
    icon: "Coins",
    category: "Technical",
    resourceCount: 21,
    subscriberCount: 1100,
    createdBy: "system",
    status: "active" as const,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    _id: "5",
    name: "GameFi & Metaverse",
    description:
      "Explore blockchain gaming, play-to-earn models, virtual worlds, and NFT integration in gaming ecosystems.",
    icon: "Gamepad2",
    category: "Technical",
    resourceCount: 12,
    subscriberCount: 650,
    createdBy: "system",
    status: "active" as const,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    _id: "6",
    name: "Web3 Product Design",
    description:
      "Design user-centric dApps and blockchain interfaces. Learn UX patterns for wallets, DAOs, and token interactions.",
    icon: "Palette",
    category: "Non-Technical",
    resourceCount: 14,
    subscriberCount: 540,
    createdBy: "system",
    status: "active" as const,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    _id: "7",
    name: "Blockchain Security",
    description:
      "Learn to identify and prevent common smart contract vulnerabilities, audit protocols, and secure Web3 applications.",
    icon: "Shield",
    category: "Technical",
    resourceCount: 16,
    subscriberCount: 780,
    createdBy: "system",
    status: "active" as const,
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    _id: "8",
    name: "DAO Governance",
    description:
      "Understand decentralized governance, proposal systems, voting mechanisms, and community management for DAOs.",
    icon: "Users",
    category: "Non-Technical",
    resourceCount: 10,
    subscriberCount: 430,
    createdBy: "system",
    status: "active" as const,
    createdAt: "2024-01-15T00:00:00Z",
  },
];

export const RESOURCES_DATA = [
  {
    _id: "r1",
    title: "Solana Program Development: From Zero to Hero",
    description:
      "A comprehensive guide to building programs on Solana using the Anchor framework and Rust.",
    url: "https://example.com/solana-dev",
    type: "tutorial" as const,
    pathway: "1",
    topics: ["Solana", "Anchor", "Rust"],
    author: "system",
    votes: 245,
    score: 89,
    createdAt: "2024-02-10T00:00:00Z",
  },
  {
    _id: "r2",
    title: "Understanding Solana Token Economics",
    description:
      "Deep dive into how tokens work on Solana, SPL token standard, and creating your own token.",
    url: "https://example.com/solana-tokens",
    type: "article" as const,
    pathway: "1",
    topics: ["Solana", "SPL Tokens", "Tokenomics"],
    author: "system",
    votes: 178,
    score: 76,
    createdAt: "2024-02-15T00:00:00Z",
  },
  {
    _id: "r3",
    title: "Web3 Marketing Masterclass",
    description:
      "Learn proven strategies for marketing blockchain projects, community building, and viral growth.",
    url: "https://example.com/web3-marketing",
    type: "program" as const,
    pathway: "3",
    topics: ["Marketing", "Community", "Growth"],
    author: "system",
    votes: 134,
    score: 72,
    createdAt: "2024-03-01T00:00:00Z",
  },
  {
    _id: "r4",
    title: "Introduction to DeFi Protocols",
    description:
      "Understand how decentralized exchanges, lending platforms, and yield aggregators work under the hood.",
    url: "https://example.com/defi-intro",
    type: "video" as const,
    pathway: "4",
    topics: ["DeFi", "AMM", "Lending"],
    author: "system",
    votes: 312,
    score: 94,
    createdAt: "2024-01-20T00:00:00Z",
  },
  {
    _id: "r5",
    title: "AWS for Web3: Building Scalable dApp Backends",
    description:
      "Deploy and manage Web3 infrastructure on AWS including RPC nodes, indexers, and API gateways.",
    url: "https://example.com/aws-web3",
    type: "tutorial" as const,
    pathway: "2",
    topics: ["AWS", "DevOps", "Infrastructure"],
    author: "system",
    votes: 156,
    score: 81,
    createdAt: "2024-02-25T00:00:00Z",
  },
  {
    _id: "r6",
    title: "Smart Contract Auditing Best Practices",
    description:
      "Learn the methodology used by top auditing firms to find and report vulnerabilities in smart contracts.",
    url: "https://example.com/audit-guide",
    type: "analysis" as const,
    pathway: "7",
    topics: ["Security", "Auditing", "Best Practices"],
    author: "system",
    votes: 201,
    score: 88,
    createdAt: "2024-03-05T00:00:00Z",
  },
];

export const FEATURES = [
  {
    title: "Open Doors",
    description:
      "A Web3-focused but Web2-interfacing platform that catalyzes the onboarding and education of Web2-groomed youths to acquire Web3-relevant skills.",
    icon: "DoorOpen",
  },
  {
    title: "Knowledge Contract",
    description:
      "A public contract dedicated to learning resources so that all relevant content can be indexed, curated, and assigned to its real owner.",
    icon: "FileText",
  },
  {
    title: "Ed-Fi Economy",
    description:
      "A knowledge ecosystem with flexible incentive and governance systems where institutions, tutors, curators, and learners all participate.",
    icon: "Coins",
  },
  {
    title: "Decentralized Assessment",
    description:
      "AI and blockchain-powered skill assessment that enables personalized post-assessment recommendations for the best paths forward.",
    icon: "BrainCircuit",
  },
];
