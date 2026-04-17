import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Video, 
  PenTool, 
  Globe, 
  TrendingUp, 
  Mic2, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  HeartHandshake,
  MessageCircle,
  Sparkles,
  Search
} from 'lucide-react';

const SERVICE_DETAILS = [
  {
    id: 1,
    category: 'video',
    title: 'এআই ভিডিও বিজ্ঞাপন',
    desc: 'ফেসবুক, ইউটিউব এবং ইনস্টাগ্রামের জন্য হাই-কনভার্টিং এআই ভিডিও বিজ্ঞাপন যা আপনার ব্রান্ডকে সবার থেকে এগিয়ে রাখবে।',
    benefits: ['দ্রুত প্রোডাকশন', 'হাই এঙ্গেজমেন্ট', 'সেলস বৃদ্ধিতে কার্যকর'],
    price: '৳৯,৯৯৯ থেকে শুরু',
    icon: <Video className="w-8 h-8" />
  },
  {
    id: 2,
    category: 'content',
    title: 'ক্রিয়েটিভ স্ক্রিপ্ট রাইটিং',
    desc: 'গ্রাহকের মনোবিজ্ঞান বিশ্লেষণ করে নিঁখুত এবং আকর্ষণীয় কাহিনী তৈরি করি যা আপনার পণ্যের আবেদন বাড়িয়ে দিবে।',
    benefits: ['ব্যবসায়িক লক্ষ্য অনুযায়ী স্ক্রিপ্ট', '১০০% ইউনিক রিচার্স', 'একাধিক রিভিশন সুবিধা'],
    price: '৳২,৯৯৯ থেকে শুরু',
    icon: <PenTool className="w-8 h-8" />
  },
  {
    id: 3,
    category: 'web',
    title: 'ওয়েবসাইট ডেভেলপমেন্ট',
    desc: 'আধুনিক, রেসপনসিভ এবং অত্যন্ত দ্রুতগতির ওয়েবসাইট যা আপনার ব্যবসার অনলাইন উপস্থিতিকে পেশাদার করে তুলবে।',
    benefits: ['আধুনিক ইউআই/ইউএক্স', 'এসইও অপ্টিমাইজড', 'মোবাইল ফ্রেন্ডলি ডিজাইন'],
    price: '৳১৯,৯৯৯ থেকে শুরু',
    icon: <Globe className="w-8 h-8" />
  },
  {
    id: 4,
    category: 'marketing',
    title: 'ডিজিটাল মার্কেটিং',
    desc: 'টার্গেটেড অডিয়েন্স এবং ডেটা অ্যানালাইটিক্স ব্যবহার করে আপনার ব্যবসার সেলস ও ট্রাফিক বাড়ানোর জন্য পূর্ণাঙ্গ সলিউশন।',
    benefits: ['সোশ্যাল মিডিয়া ম্যানেজমেন্ট', 'অ্যাড ক্যাম্পেইন অপ্টিমাইজেশন', 'সাপ্তাহিক রিপোর্ট'],
    price: '৳১৪,৯৯৯ থেকে শুরু',
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    id: 5,
    category: 'content',
    title: 'প্রফেশনাল এআই ভয়েস ওভার',
    desc: 'মানুষের মতোই স্বাভাবিক এবং প্রফেশনাল ভয়েস ওভার, যা ভিডিওর মান এবং প্রফেশনালিজমকে অনন্য করে তুলবে।',
    benefits: ['বহুভাষিক সাপোর্ট', 'স্বাভাবিক টোন ও এক্সপ্রেশন', 'দ্রুত ডেলিভারি'],
    price: '৳১,৯৯৯ থেকে শুরু',
    icon: <Mic2 className="w-8 h-8" />
  }
];

const CATEGORIES = [
  { label: 'সবগুলো', value: 'all' },
  { label: 'ভিডিও অ্যাড', value: 'video' },
  { label: 'ওয়েব ডেভেলপমেন্ট', value: 'web' },
  { label: 'মার্কেটিং', value: 'marketing' },
  { label: 'কন্টেন্ট', value: 'content' }
];

export default function ServicesPage({ onViewDetail }: { onViewDetail: () => void }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICE_DETAILS 
    : SERVICE_DETAILS.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen pt-20">
      {/* 1. Page Header */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="glow-purple w-[600px] h-[600px] -top-[200px] -left-[100px] opacity-20" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag mb-6 inline-block tracking-[0.2em]">Jannat-Dreamwork Solutions</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-display leading-[1.1]">
              আমাদের <span className="highlight">সার্ভিসসমূহ</span>
            </h1>
            <p className="text-text-dim text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              আপনার ব্যবসার ডিজিটাল রূপান্তরে আমরা নিয়ে এসেছি অত্যাধুনিক এআই প্রযুক্তি। ভিডিও বিজ্ঞাপন থেকে শুরু করে ওয়েব ডেভেলপমেন্ট — সব পাবেন এক জায়গায়।
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Filter Tabs */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === cat.value 
                  ? 'bg-agency-purple text-white shadow-[0_0_20px_rgba(139,92,246,0.2)]' 
                  : 'bg-white/5 text-text-dim hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Services List */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
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
                className="glass-card p-10 group hover:border-agency-purple/40 transition-all duration-500 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-agency-purple/10 flex items-center justify-center text-agency-purple mb-8 group-hover:bg-agency-purple group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-dim text-base leading-relaxed mb-8 flex-grow">
                  {service.desc}
                </p>
                <div className="space-y-3 mb-10">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-[#f8fafc]/80">
                      <CheckCircle2 className="w-4 h-4 text-agency-purple" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div className="text-xs uppercase tracking-widest font-bold text-text-dim">
                    {service.price}
                  </div>
                  <button 
                    onClick={onViewDetail}
                    className="p-3 rounded-full bg-white/5 hover:bg-agency-purple text-white transition-all group-hover:scale-110"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Why Our Services Are Better */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="glow-accent w-[400px] h-[400px] absolute -bottom-40 -left-40 opacity-20" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">কেন আমাদের সেবাই <span className="highlight">সেরা?</span></h2>
            <p className="text-text-dim max-w-2xl mx-auto font-medium text-lg leading-relaxed">আমরা শুধু কাজ করি না, বরং আপনার ব্যবসার ব্রান্ড ভ্যালু বাড়ানোর কথা মাথায় রেখে সেরা কোয়ালিটি নিশ্চিত করি।</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            {[
              { 
                icon: <Zap />, 
                title: "অবিশ্বাস্য দ্রুতগতি", 
                desc: "এআই প্রযুক্তির মাধ্যমে আমরা যেকোনো জটিল কাজ অনেক কম সময়ে এবং নিখুঁতভাবে শেষ করতে পারি।" 
              },
              { 
                icon: <ShieldCheck />, 
                title: "নিখুঁত কোয়ালিটি", 
                desc: "প্রতিটি প্রজেক্টে আমরা মাল্টিপল কোয়ালিটি চেক এবং এআই অ্যানালাইসিস ব্যবহার করি।" 
              },
              { 
                icon: <HeartHandshake />, 
                title: "গ্রাহক সন্তুষ্টি", 
                desc: "আপনার ১০০% সন্তুষ্টি না হওয়া পর্যন্ত আমরা প্রজেক্টের রিভিশন ও সাপোর্ট দিয়ে থাকি।" 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-tr from-agency-purple/10 to-agency-blue/10 rounded-3xl flex items-center justify-center mx-auto text-agency-purple border border-white/5 shadow-xl shadow-agency-purple/5 transition-all group-hover:scale-110 group-hover:rotate-3 duration-500 mb-8">
                  <div className="scale-125">{item.icon}</div>
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-text-dim text-base leading-relaxed tracking-wide font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Overview (Simplified) */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">সহজ ৩ টি ধাপ</h2>
              <p className="text-text-dim text-lg mb-10 font-medium">আমরা আপনার মূল্যবান সময়ের মূল্য দিই। তাই আমাদের প্রসেস অত্যন্ত স্মার্ট এবং সহজ।</p>
              <div className="space-y-8">
                {[
                  { n: "১", t: "অর্ডার করুন", d: "সহজে আমাদের ওয়েবসাইটে বা হোয়াটসঅ্যাপে অর্ডার কনফার্ম করুন।" },
                  { n: "২", t: "আমরা কাজ শুরু করি", d: "আপনার রিকোয়ারমেন্ট অনুযায়ী আমাদের টিম প্রোডাকশন শুরু করবে।" },
                  { n: "৩", t: "ডেলিভারি নিন", d: "নির্ধারিত সময়ের মধ্যে সেরা আউটপুটটি বুঝে নিন আপনার হাতে।" }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full bg-agency-purple flex-shrink-0 flex items-center justify-center text-sm font-bold shadow-lg shadow-agency-purple/30">{s.n}</div>
                    <div>
                      <h5 className="font-bold text-xl mb-1">{s.t}</h5>
                      <p className="text-base text-text-dim leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-agency-purple/20 to-agency-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="aspect-square glass-card flex flex-col items-center justify-center relative p-12 overflow-hidden">
                <Sparkles className="w-24 h-24 text-agency-purple/30 mb-8 animate-pulse" />
                <div className="text-center">
                  <p className="text-2xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent italic">"স্মার্ট এআই, স্মার্ট বিজনেস"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 px-6 mb-20">
        <div className="max-w-4xl mx-auto glass-card p-12 text-center border-agency-purple/30 bg-gradient-to-br from-agency-midnight/80 to-agency-black relative overflow-hidden">
           <div className="glow-blue w-64 h-64 -top-32 -right-32 opacity-20" />
           <h2 className="text-3xl md:text-4xl font-extrabold mb-8">এখনই আপনার প্রজেক্ট শুরু করুন!</h2>
           <p className="text-text-dim mb-10 max-w-xl mx-auto text-lg leading-relaxed">আপনার ব্যবসার জন্য সঠিক এআই সার্ভিসটি বেছে নিন এবং সফলতার পথে যাত্রা শুরু করুন।</p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <button className="btn-primary h-14 px-10 flex items-center gap-3 w-full sm:w-auto">
               <ArrowRight className="w-5 h-5" /> এখন অর্ডার করুন
             </button>
             <button className="btn-secondary h-14 px-10 flex items-center gap-3 w-full sm:w-auto text-[#f8fafc]">
               <MessageCircle className="w-5 h-5 text-agency-purple" /> WhatsApp-এ কথা বলুন
             </button>
           </div>
        </div>
      </section>
    </div>
  );
}
