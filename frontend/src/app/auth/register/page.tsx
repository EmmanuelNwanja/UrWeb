"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { GraduationCap, Mail, User, Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<"info" | "connect">("info");

  const handleNext = () => {
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    setError(null);
    setStep("connect");
  };

  const handleGmailRegister = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Web3Auth integration will be connected here
      await login("demo_token");
      router.push("/dashboard");
    } catch {
      setError("Registration failed. Please try again.");
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
              Join UrWeb
            </h1>
            <p className="text-gray-400">
              Create your account and start earning while learning
            </p>
          </div>

          {/* Steps Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div
              className={`w-8 h-1 rounded-full ${
                step === "info" ? "bg-purple-500" : "bg-purple-500/30"
              }`}
            />
            <div
              className={`w-8 h-1 rounded-full ${
                step === "connect" ? "bg-purple-500" : "bg-purple-500/30"
              }`}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          {step === "info" ? (
            <>
              {/* Name Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Display Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
              >
                Continue
              </button>
            </>
          ) : (
            <>
              {/* Gmail Connect */}
              <div className="mb-6 text-center">
                <p className="text-gray-400 text-sm mb-4">
                  Welcome, <span className="text-white font-medium">{name}</span>! Connect your Gmail to create your Solana wallet automatically.
                </p>
              </div>

              <button
                onClick={handleGmailRegister}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-4 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Mail className="h-5 w-5" />
                )}
                {isLoading ? "Creating wallet..." : "Connect with Gmail"}
              </button>

              <button
                onClick={() => setStep("info")}
                className="w-full text-gray-400 hover:text-gray-300 text-sm py-2 transition-colors"
              >
                Go back
              </button>
            </>
          )}

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700" />
            </div>
          </div>

          {/* Footer links */}
          <div className="text-center text-sm">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-purple-400 hover:text-purple-300 font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
