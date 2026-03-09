const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

interface RequestOptions {
  method?: string;
  body?: unknown;
  token?: string;
}

async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { method = "GET", body, token } = options;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Request failed" }));
    throw new Error(error.message || `HTTP ${res.status}`);
  }

  return res.json();
}

export const api = {
  // Auth
  login: (idToken: string) =>
    request<{ access_token: string; user: import("@/types").User }>("/auth/login", {
      method: "POST",
      body: { idToken },
    }),

  getMe: (token: string) =>
    request<import("@/types").User>("/auth/me", { token }),

  // Users
  getUser: (id: string, token: string) =>
    request<import("@/types").User>(`/users/${id}`, { token }),

  updateUser: (id: string, data: Partial<import("@/types").User>, token: string) =>
    request<import("@/types").User>(`/users/${id}`, {
      method: "PATCH",
      body: data,
      token,
    }),

  // Pathways
  getPathways: () =>
    request<import("@/types").Pathway[]>("/pathways"),

  getPathway: (id: string) =>
    request<import("@/types").Pathway>(`/pathways/${id}`),

  // Resources
  getResources: (pathwayId?: string) => {
    const query = pathwayId ? `?pathway=${pathwayId}` : "";
    return request<import("@/types").Resource[]>(`/resources${query}`);
  },

  getResource: (id: string) =>
    request<import("@/types").Resource>(`/resources/${id}`),

  voteResource: (id: string, token: string) =>
    request<import("@/types").Resource>(`/resources/${id}/vote`, {
      method: "POST",
      token,
    }),

  // Weber NFTs
  getUserNFTs: (userId: string, token: string) =>
    request<import("@/types").WeberNFT[]>(`/nfts/user/${userId}`, { token }),

  getNFT: (id: string, token: string) =>
    request<import("@/types").WeberNFT>(`/nfts/${id}`, { token }),

  repairNFT: (id: string, token: string) =>
    request<import("@/types").WeberNFT>(`/nfts/${id}/repair`, {
      method: "POST",
      token,
    }),
};
