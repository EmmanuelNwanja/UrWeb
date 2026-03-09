import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold text-white">UrWeb</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              A Web3-based decentralized educational platform providing
              accessible, quality education and career development opportunities
              for underserved populations and Web3 enthusiasts.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pathways"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Pathways
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 text-sm">Discord (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Twitter (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Blog (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} UrWeb. Powered by Solana. Built
            for the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
