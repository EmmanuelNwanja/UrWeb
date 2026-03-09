"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  GraduationCap,
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  User,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold text-white">UrWeb</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/pathways"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Pathways
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <User className="h-4 w-4" />
                  {user?.name || "Profile"}
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-400 hover:text-red-400 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/pathways"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="h-4 w-4 inline mr-2" />
              Pathways
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LayoutDashboard className="h-4 w-4 inline mr-2" />
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-4 w-4 inline mr-2" />
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded-lg text-sm"
                >
                  <LogOut className="h-4 w-4 inline mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="block px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
