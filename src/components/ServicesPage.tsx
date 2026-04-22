import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { trackViewContent, trackCTA } from "../Utils/pixel";
import {
  Globe,
  TrendingUp,
  PenTool,
  Video,
  Mic2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { SERVICES_DATA } from "./servicesData";
import ServiceDetailPage from "./ServiceDetailPage";

const CATEGORIES = [
  { label: "সবগুলো", value: "all" },
  { label: "ভিডিও অ্যাড", value: "video" },
  { label: "ওয়েব ডেভেলপমেন্ট", value: "web" },
  { label: "মার্কেটিং", value: "marketing" },
  { label: "কন্টেন্ট", value: "content" },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // 👉 Detail Page Show
  if (selectedService) {
    return (
      <ServiceDetailPage
        serviceId={selectedService}
        onBack={() => setSelectedService(null)}
      />
    );
  }

  // 👉 Category Mapping (id → category)
  const categoryMap: Record<string, string> = {
    "web-design": "web",
    "ai-video": "video",
    "creative-video": "video",
    marketing: "marketing",
    branding: "content",
  };

  const filteredServices =
    activeTab === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter(
        (s) => categoryMap[s.id] === activeTab
      );

  // 👉 Icon Mapping
  const getIcon = (id: string) => {
    switch (id) {
      case "web-design":
        return <Globe className="w-8 h-8" />;
      case "ai-video":
        return <PenTool className="w-8 h-8" />;
      case "creative-video":
        return <Video className="w-8 h-8" />;
      case "marketing":
        return <TrendingUp className="w-8 h-8" />;
      case "branding":
        return <Mic2 className="w-8 h-8" />;
      default:
        return <Globe className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* 🔹 Header */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            আমাদের <span className="highlight">সার্ভিসসমূহ</span>
          </h1>
          <p className="text-text-dim text-lg">
            আপনার ব্যবসার জন্য সেরা ডিজিটাল সলিউশন এক জায়গায়।
          </p>
        </div>
      </section>

      {/* 🔹 Filter Tabs */}
      <section className="pb-12 px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === cat.value
                  ? "bg-agency-purple text-white"
                  : "bg-white/5 text-text-dim hover:bg-white/10"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 🔹 Services Grid */}
      <section className="px-6 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-8 flex flex-col h-full group hover:border-agency-purple/40 transition-all"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-agency-purple/10 flex items-center justify-center text-agency-purple mb-6 group-hover:bg-agency-purple group-hover:text-white transition">
                  {getIcon(service.id)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-text-dim text-sm mb-6 flex-grow">
                  {service.hero.description.slice(0, 110)}...
                </p>

                {/* Feature Preview */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-agency-purple" />
                      {f.title}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    setSelectedService(service.id);

                    // 🔥 Track service view
                    trackViewContent(service.id);

                    // (optional but recommended)
                    trackCTA("Service Details Click");
                  }}
                  className="mt-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-agency-purple text-white py-3 rounded-xl transition-all"
                >
                  বিস্তারিত দেখুন <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}