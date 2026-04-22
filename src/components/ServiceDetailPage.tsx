import React from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  BarChart3,
  HelpCircle,
  Star,
  Phone,
  Zap,
} from "lucide-react";

import { SERVICES_DATA } from "./servicesData";

interface Props {
  serviceId: string | null;
  onBack: () => void;
}

export default function ServiceDetailPage({ serviceId, onBack }: Props) {
  // 🔥 SAFE FIND (no crash)
  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <p className="text-text-dim mb-6">
          আপনি যে সার্ভিসটি খুঁজছেন সেটি পাওয়া যায়নি।
        </p>

        <button
          onClick={onBack}
          className="btn-primary px-6 py-3 flex items-center gap-2"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          সার্ভিস লিস্টে ফিরে যান
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-10">

      {/* BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-text-dim hover:text-white transition"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
            <ArrowRight className="w-4 h-4 rotate-180" />
          </div>
          সার্ভিস লিস্টে ফিরে যান
        </button>
      </div>

      {/* HERO */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <div className="tag mb-6 inline-block bg-agency-purple/10 text-agency-purple px-4 py-1.5 rounded-full">
              {service.hero.badge}
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.2]">
              {service.hero.headline}
            </h1>

            <p className="text-text-dim text-lg max-w-2xl mb-10">
              {service.hero.description}
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://wa.me/01833282575"
                target="_blank"
                className="btn-primary px-8 h-12 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                অর্ডার করুন
              </a>

              <a
                href="tel:01833282575"
                className="btn-secondary px-8 h-12 flex items-center gap-2 text-white"
              >
                <Phone className="w-4 h-4 text-agency-purple" />
                কল করুন
              </a>

            </div>

          </motion.div>

        </div>
      </section>

      {/* TARGET USERS */}
      {service.targetUsers && (
        <section className="py-20 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">
              সার্ভিসটি কাদের জন্য?
            </h2>

            <div className="space-y-4">
              {service.targetUsers.map((item: string, i: number) => (
                <div key={i} className="flex gap-3">
                  <Zap className="w-4 h-4 text-agency-purple mt-1" />
                  <p className="text-text-dim">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FEATURES */}
      {service.features && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">

            <h2 className="text-3xl font-bold mb-10">
              আমরা যা যা নিশ্চিত করি
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((f: any, i: number) => (
                <div key={i} className="glass-card p-6">
                  <div className="text-agency-purple mb-3">
                    <BarChart3 />
                  </div>
                  <h4 className="font-bold mb-2">{f.title}</h4>
                  <p className="text-text-dim text-sm">{f.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* PRICING */}
      {/* {service.packages && (
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold">
              প্রাইসিং প্ল্যান
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {service.packages.map((pkg: any, i: number) => (
              <div
                key={i}
                className={`glass-card p-10 flex flex-col ${
                  pkg.highlight ? "border-agency-purple scale-105" : ""
                }`}
              >
                <h4 className="text-xl font-bold mb-3">{pkg.name}</h4>
                <p className="text-3xl font-extrabold mb-2">{pkg.price}</p>

                <p className="text-xs mb-6 flex items-center gap-2 text-agency-purple">
                  <Clock className="w-3 h-3" />
                  {pkg.delivery}
                </p>

                <div className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((f: string, idx: number) => (
                    <div key={idx} className="flex gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-agency-purple" />
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/01833282575"
                  className="btn-primary text-center py-3"
                >
                  অর্ডার করুন
                </a>
              </div>
            ))}
          </div>
        </section>
      )} */}

      {/* FAQ */}
      {service.faq && (
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-3xl font-bold mb-10 flex gap-2 items-center">
              <HelpCircle /> FAQ
            </h2>

            <div className="space-y-6">
              {service.faq.map((f: any, i: number) => (
                <div key={i} className="glass-card p-6">
                  <h4 className="font-bold mb-2">Q: {f.q}</h4>
                  <p className="text-text-dim text-sm">A: {f.a}</p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          এখনই শুরু করবেন?
        </h2>

        <p className="text-text-dim mb-8">
          আপনার ব্যবসার জন্য সেরা সলিউশন নিতে আমাদের সাথে যোগাযোগ করুন।
        </p>

        <a
          href="https://wa.me/+8801903771813"
          onClick={() => {
            if ((window as any).fbq) {
              (window as any).fbq("track", "Lead");
            }
          }}
          className="btn-primary px-10 py-4"
        >
          অর্ডার কনফার্ম করুন
        </a>
      </section>

    </div>
  );
}