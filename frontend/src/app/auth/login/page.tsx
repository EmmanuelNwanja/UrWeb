"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { GraduationCap, Mail, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGmailLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Web3Auth integration will be connected here
      // For now, simulate a demo login
      await login("demo_token");
      router.push("/dashboard");
    } catch {
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/10 to-gray-950" />

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-purple-400" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Welcome to UrWeb
            </h1>
            <p className="text-gray-400">
              Sign in to start your Web3 learning journey
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          {/* Gmail Login Button */}
          <button
            onClick={handleGmailLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Mail className="h-5 w-5" />
            )}
            {isLoading ? "Connecting..." : "Continue with Gmail"}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-gray-900 px-4 text-gray-500">
                Powered by Web3Auth
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="bg-purple-500/5 border border-purple-500/10 rounded-xl p-4 mb-6">
            <p className="text-purple-300 text-sm text-center">
              Signing in with Gmail automatically creates a Solana wallet for
              you. No crypto experience needed!
            </p>
          </div>

          {/* Footer links */}
          <div className="text-center text-sm">
            <p className="text-gray-500">
              New to UrWeb?{" "}
              <Link
                href="/auth/register"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
