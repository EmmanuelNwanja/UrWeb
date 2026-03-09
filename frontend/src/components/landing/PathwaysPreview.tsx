import Link from "next/link";
import {
  Code,
  Cloud,
  Megaphone,
  Coins,
  Gamepad2,
  Palette,
  Shield,
  Users,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PATHWAYS_DATA } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Cloud,
  Megaphone,
  Coins,
  Gamepad2,
  Palette,
  Shield,
  Users,
};

export default function PathwaysPreview() {
  const featured = PATHWAYS_DATA.slice(0, 4);

  return (
    <section className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Learning Pathways
            </h2>
            <p className="text-gray-400 text-lg">
              Curated skill paths from Web3 experts and the community.
            </p>
          </div>
          <Link
            href="/pathways"
            className="mt-4 sm:mt-0 inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Pathway Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((pathway) => {
            const Icon = iconMap[pathway.icon] || Code;
            return (
              <Link
                key={pathway._id}
                href={`/pathways/${pathway._id}`}
                className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                  <Icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {pathway.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {pathway.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {pathway.resourceCount} resources
                  </span>
                  <span className="text-purple-400 font-medium">
                    {pathway.subscriberCount.toLocaleString()} learners
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
