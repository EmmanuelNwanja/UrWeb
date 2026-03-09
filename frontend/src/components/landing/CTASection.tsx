import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/20 rounded-3xl p-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-1.5 mb-6">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-purple-300 text-sm font-medium">
              Learn-to-Earn with Weber NFTs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Web3 Journey?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of learners earning $URWEB tokens while mastering
            blockchain skills. Acquire a Weber NFT and begin your path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/login"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-xl text-lg font-semibold transition-all hover:scale-105"
            >
              Join UrWeb
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/pathways"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl text-lg font-medium transition-colors border border-white/10"
            >
              Browse Pathways
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
