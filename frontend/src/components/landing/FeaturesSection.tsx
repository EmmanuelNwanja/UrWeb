import {
  DoorOpen,
  FileText,
  Coins,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  DoorOpen,
  FileText,
  Coins,
  BrainCircuit,
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Four pillars that sustain the UrWeb experience, each building upon
            the other.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon] || FileText;
            return (
              <div
                key={feature.title}
                className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <span className="text-purple-400 text-sm font-medium mb-1 block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
