import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Zap, 
  Star, 
  Crown, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  Clock,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

const PRICING_PLANS = [
  {
    name: "বেসিক প্যাকেজ",
    id: "basic",
    price: "৳৯,৯৯৯",
    period: "শুরু",
    desc: "নতুন উদ্যোক্তা বা ছোট ব্যবসার জন্য উপযুক্ত শুরু।",
    icon: <Zap className="w-8 h-8" />,
    features: [
      { t: "১টি এআই ভিডিও অ্যাড", v: true },
      { t: "বেসিক স্ক্রিপ্ট রাইটিং", v: true },
      { t: "বেসিক ভিডিও এডিটিং", v: true },
      { t: "এআই ভয়েস ওভার (১টি ভাষা)", v: true },
      { t: "ডেলিভারি সময়: ৩-৫ দিন", v: true },
      { t: "রিভিশন: ২ বার", v: true },
      { t: "মার্কেটিং স্ট্র্যাটেজি", v: false },
      { t: "প্রিমিয়াম সাপোর্ট", v: false },
    ],
    cta: "অর্ডার করুন",
    featured: false
  },
  {
    name: "স্ট্যান্ডার্ড প্যাকেজ",
    id: "standard",
    price: "৳২৪,৯৯৯",
    period: "জনপ্রিয়",
    desc: "বাড়ন্ত ব্যবসার জন্য প্রফেশনাল মার্কেটিং সলিউশন।",
    icon: <Star className="w-8 h-8" />,
    features: [
      { t: "৫টি এআই ভিডিও অ্যাড", v: true },
      { t: "প্রফেশনাল স্ক্রিপ্ট রাইটিং", v: true },
      { t: "উন্নত এআই এডিটিং", v: true },
      { t: "মাল্টি-ল্যাঙ্গুয়েজ ভয়েস ওভার", v: true },
      { t: "ডেলিভারি সময়: ২-৩ দিন", v: true },
      { t: "রিভিশন: আনলিমিটেড", v: true },
      { t: "মার্কেটিং সাজেশন", v: true },
      { t: "প্রায়োরিটি সাপোর্ট", v: true },
    ],
    cta: "অর্ডার করুন",
    featured: true
  },
  {
    name: "প্রিমিয়াম প্যাকেজ",
    id: "premium",
    price: "৳৪৯,৯৯৯",
    period: "ব্র্যান্ডিং",
    desc: "বড় ব্র্যান্ড এবং সিরিয়াস বিজনেসের জন্য পূর্ণাঙ্গ সলিউশন।",
    icon: <Crown className="w-8 h-8" />,
    features: [
      { t: "১০+ হাই-কোয়ালিটি ভিডিও", v: true },
      { t: "ফুল ব্র্যান্ডিং কন্টেন্ট সেট", v: true },
      { t: "সুপার প্রিমিয়াম এডিটিং", v: true },
      { t: "ফুল মার্কেটিং স্ট্র্যাটেজি", v: true },
      { t: "ডেলিভারি সময়: ২৪-৪৮ ঘণ্টা", v: true },
      { t: "ভিডিও অ্যাড এআই টুলস সেটআপ", v: true },
      { t: "২৪/৭ ডিরেক্ট কল সাপোর্ট", v: true },
      { t: "ডেডিকেটেড একাউন্ট ম্যানেজার", v: true },
    ],
    cta: "অর্ডার করুন",
    featured: false
  }
];

const COMPARISON_DATA = [
  { feature: "ভিডিওর সংখ্যা", basic: "১টি", standard: "৫টি", premium: "১০+ টি" },
  { feature: "স্ক্রিপ্ট রাইটিং", basic: "বেসিক", standard: "প্রফেশনাল", premium: "অ্যাডভান্সড" },
  { feature: "ডেলিভারি সময়", basic: "৩-৫ দিন", standard: "২-৩ দিন", premium: "২৪-৪৮ ঘণ্টা" },
  { feature: "রিভিশন", basic: "২ বার", standard: "আনলিমিটেড", premium: "আনলিমিটেড" },
  { feature: "সাপোর্ট", basic: "ইমেইল", standard: "প্রায়োরিটি", premium: "২৪/৭ ডিরেক্ট কল" },
  { feature: "মার্কেটিং কনসালটেশন", basic: "❌", standard: "✅", premium: "✅ (ফুল)" },
];

const FAQS = [
  {
    q: "প্যাকেজ কেনার পর কত দ্রুত কাজ শুরু হবে?",
    a: "পেমেন্ট কনফার্ম হওয়ার ২৪ ঘণ্টার মধ্যে আমাদের টিম আপনার সাথে যোগাযোগ করবে এবং প্রজেক্টের প্রাথমিক কাজ শুরু করবে।"
  },
  {
    q: "আমি কি কাস্টম প্যাকেজ তৈরি করতে পারি?",
    a: "অবশ্যই! আপনার যদি নির্দিষ্ট কোনো রিকোয়ারমেন্ট থাকে, তবে আমাদের সাথে হোয়াটসঅ্যাপে যোগাযোগ করুন। আমরা আপনার জন্য কাস্টম অফার তৈরি করে দেব।"
  },
  {
    q: "ভিডিও কি আমার পছন্দ অনুযায়ী পরিবর্তন করা যাবে?",
    a: "হ্যাঁ, প্যাকেজের ধরন অনুযায়ী আমরা নির্দিষ্ট বা আনলিমিটেড রিভিশন সুবিধা দিয়ে থাকি। আপনার সন্তুষ্টিই আমাদের প্রধান লক্ষ্য।"
  },
  {
    q: "পেমেন্ট মেথড কী কী আছে?",
    a: "আমরা বিকাশ, নগদ এবং যেকোনো লোকাল ও ইন্টারন্যাশনাল কার্ডের মাধ্যমে পেমেন্ট গ্রহণ করি।"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* 1. Page Header */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="glow-blue w-[600px] h-[600px] -top-[200px] -right-[100px] opacity-20" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag mb-6 inline-block tracking-[0.2em]">Transparent Pricing</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-display leading-[1.1]">
              আমাদের <span className="highlight">প্যাকেজসমূহ</span>
            </h1>
            <p className="text-text-dim text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              আপনার ব্যবসার পরিধি এবং বাজেট অনুযায়ী সেরা প্যাকেজটি বেছে নিন। আমরা সাশ্রয়ী মূল্যে প্রিমিয়াম এআই সলিউশন নিশ্চিত করি।
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Pricing Cards */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-10 flex flex-col relative transition-all duration-500 ${plan.featured ? 'border-agency-purple scale-105 z-10 shadow-[0_0_50px_rgba(139,92,246,0.1)]' : 'border-white/5'}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-agency-purple to-agency-accent text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-1.5 rounded-full shadow-lg">
                  বেস্ট সেলার
                </div>
              )}
              
              <div className="mb-10">
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-agency-purple`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-text-dim text-sm">{plan.desc}</p>
              </div>

              <div className="mb-10">
                <span className="text-5xl font-extrabold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">{plan.price}</span>
                <span className="text-sm font-medium text-text-dim ml-2 uppercase tracking-widest">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feat, i) => (
                  <div key={i} className={`flex items-center gap-3 text-base ${feat.v ? 'text-[#f8fafc]/90' : 'text-text-dim/40'}`}>
                    {feat.v ? (
                      <CheckCircle2 className="w-5 h-5 text-agency-purple flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    {feat.t}
                  </div>
                ))}
              </div>

              <a 
                href="https://wa.me/01833282575" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-5 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2 ${plan.featured ? 'btn-primary' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Comparison Table */}
      <section className="py-32 px-6 max-w-5xl mx-auto overflow-x-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4">বিস্তারিত তুলনা</h2>
          <p className="text-text-dim">আপনার জন্য সঠিক সিদ্ধান্ত নিতে সাহায্য করবে এই টেবিল।</p>
        </div>
        <div className="min-w-[600px] glass-card p-0 border-white/5 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-6 font-bold text-base">ফিচার</th>
                <th className="p-6 font-bold text-base text-center">বেসিক</th>
                <th className="p-6 font-bold text-base text-center text-agency-purple">স্ট্যান্ডার্ড</th>
                <th className="p-6 font-bold text-base text-center">প্রিমিয়াম</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 text-sm font-medium">{row.feature}</td>
                  <td className="p-6 text-sm text-center text-text-dim">{row.basic}</td>
                  <td className="p-6 text-sm text-center text-agency-purple font-bold">{row.standard}</td>
                  <td className="p-6 text-sm text-center text-text-dim">{row.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Pricing FAQ */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-16 text-center">প্রাইসিং সংক্রান্ত সাধারণ প্রশ্নাবলী</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="glass-card p-10 border-white/5 hover:border-agency-purple/20 transition-all">
                <h5 className="font-bold text-xl mb-4 flex gap-4">
                  <span className="text-agency-purple">Q.</span> {faq.q}
                </h5>
                <p className="text-text-dim text-base leading-relaxed pl-8">
                  <span className="font-bold text-[#f8fafc]/50">A.</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits Summary */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {[
             { i: <Clock />, t: "দ্রুত ডেলিভারি", d: "প্রতিটি প্রজেক্ট নির্ধারিত সময়ের মধ্যে সম্পন্ন করে গ্রাহকের হাতে তুলে দিই।" },
             { i: <ShieldCheck />, t: "নিরাপদ পেমেন্ট", d: "আমাদের সকল লেনদেন সুরক্ষিত এবং আমরা পেমেন্টের জন্য ট্রাস্টেড গেটওয়ে ব্যবহার করি।" },
             { i: <CreditCard />, t: "স্বচ্ছতা", d: "আমাদের কোনো হিডেন চার্জ নেই। আপনি যা দেখছেন, ঠিক তাই পে করবেন।" }
           ].map((b, i) => (
             <div key={i}>
                <div className="w-16 h-16 rounded-full bg-agency-purple/10 flex items-center justify-center mx-auto mb-6 text-agency-purple">
                  {b.i}
                </div>
                <h4 className="text-xl font-bold mb-3">{b.t}</h4>
                <p className="text-base text-text-dim leading-relaxed">{b.d}</p>
             </div>
           ))}
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden border-agency-purple/30 bg-gradient-to-br from-agency-midnight/60 to-agency-black">
          <div className="glow-accent w-[300px] h-[300px] absolute -bottom-20 -right-20 opacity-20" />
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.2]">সাফল্যের যাত্রা আজই <br /> <span className="highlight">শুরু হোক</span></h1>
          <p className="text-text-dim text-xl mb-12 max-w-2xl mx-auto font-medium">পছন্দের প্যাকেজটি নিয়ে আমাদের টিমের সাথে কথা বলুন। আমরা কথা দিচ্ছি, আপনার ইনভেস্টমেন্ট বৃথা যাবে না।</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
               href="https://wa.me/01833282575" 
               target="_blank" 
               rel="noopener noreferrer"
               className="btn-primary h-14 px-12 flex items-center justify-center gap-3 w-full sm:w-auto text-lg shadow-[0_10px_40px_rgba(139,92,246,0.3)]"
            >
               এখনই অর্ডার দিন
            </a>
            <a 
              href="https://wa.me/01833282575" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary h-14 px-12 flex items-center justify-center gap-3 w-full sm:w-auto text-[#f8fafc] text-lg"
            >
              <MessageCircle className="w-6 h-6 text-agency-purple" /> WhatsApp
            </a>
          </div>
          <p className="mt-12 text-sm text-text-dim flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-agency-purple" /> ১০০% মানি ব্যাক গ্যারান্টি (শর্ত প্রযোজ্য)
          </p>
        </div>
      </section>
    </div>
  );
}
