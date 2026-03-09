"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  useCallback,
  type ReactNode,
} from "react";
import type { User, AuthState } from "@/types";
import { api } from "@/lib/api";

interface AuthContextType extends AuthState {
  login: (idToken: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Module-level auth store (singleton)
let authState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  walletAddress: null,
};
const authListeners = new Set<() => void>();

function emitAuthChange() {
  authListeners.forEach((l) => l());
}

function getAuthSnapshot() {
  return authState;
}

function subscribeAuth(listener: () => void) {
  authListeners.add(listener);
  return () => authListeners.delete(listener);
}

function updateAuth(newState: AuthState) {
  authState = newState;
  emitAuthChange();
}

// Initialize: check for existing token
if (typeof window !== "undefined") {
  const token = localStorage.getItem("urweb_token");
  if (token) {
    authState = { ...authState, isLoading: true };
    api
      .getMe(token)
      .then((user: User) => {
        updateAuth({
          user,
          isAuthenticated: true,
          isLoading: false,
          walletAddress: user.walletAddress,
        });
      })
      .catch(() => {
        localStorage.removeItem("urweb_token");
        updateAuth({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          walletAddress: null,
        });
      });
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const state = useSyncExternalStore(
    subscribeAuth,
    getAuthSnapshot,
    getAuthSnapshot,
  );

  const login = useCallback(async (idToken: string) => {
    updateAuth({ ...getAuthSnapshot(), isLoading: true });
    try {
      const { access_token, user } = await api.login(idToken);
      localStorage.setItem("urweb_token", access_token);
      updateAuth({
        user,
        isAuthenticated: true,
        isLoading: false,
        walletAddress: user.walletAddress,
      });
    } catch (error) {
      updateAuth({ ...getAuthSnapshot(), isLoading: false });
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("urweb_token");
    updateAuth({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      walletAddress: null,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
