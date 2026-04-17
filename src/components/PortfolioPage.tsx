import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Video, 
  PenTool, 
  Globe, 
  TrendingUp, 
  Mic2, 
  ExternalLink,
  Smartphone,
  Layout,
  Play,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Zap,
  Star,
  Users
} from 'lucide-react';

const CATEGORIES = [
  { label: 'সবগুলো', value: 'all' },
  { label: 'এআই ভিডিও অ্যাড', value: 'video' },
  { label: 'ওয়েবসাইট ডিজাইন', value: 'web' },
  { label: 'ডিজিটাল মার্কেটিং', value: 'marketing' },
  { label: 'স্ক্রিপ্ট ও কন্টেন্ট', value: 'content' }
];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "ই-কমার্স ব্র্যান্ড প্রমো ভিডিও",
    desc: "একটি ফ্যাশন হাউসের জন্য তৈরি করা হাই-কনভার্টিং এআই ভিডিও বিজ্ঞাপন।",
    category: "video",
    icon: <Video className="w-6 h-6" />,
    stats: "৩০০% সেলস বৃদ্ধি"
  },
  {
    id: 2,
    title: "রেস্টুরেন্ট ল্যান্ডিং পেজ",
    desc: "আধুনিক এবং রেসপনসিভ ওয়েবসাইট ডিজাইন যা ইউজার এঙ্গেজমেন্ট বাড়ায়।",
    category: "web",
    icon: <Globe className="w-6 h-6" />,
    stats: "৪৫% বাউন্স রেট হ্রাস"
  },
  {
    id: 3,
    title: "অর্গানিক গ্রোথ স্ট্র্যাটেজি",
    desc: "সঠিক টার্গেটেড মার্কেটিংয়ের মাধ্যমে ব্র্যান্ডের রিচ অর্ধেকের বেশি বৃদ্ধি।",
    category: "marketing",
    icon: <TrendingUp className="w-6 h-6" />,
    stats: "৫০০+ নতুন কাস্টমার"
  },
  {
    id: 4,
    title: "প্রোডাক্ট অ্যানিমেশন অ্যাড",
    desc: "এআই টেকনোলজি ব্যবহার করে ৩ডি ফিল দেওয়া আকর্ষণীয় প্রোডাক্ট ভিডিও।",
    category: "video",
    icon: <Video className="w-6 h-6" />,
    stats: "১.২ মিলিয়ন ভিউস"
  },
  {
    id: 5,
    title: "কর্পোরেট রি-ব্র্যান্ডিং কন্টেন্ট",
    desc: "স্ক্রিপ্ট থেকে শুরু করে ভয়েস ওভার — টোটাল এআই কন্টেন্ট সলিউশন।",
    category: "content",
    icon: <PenTool className="w-6 h-6" />,
    stats: "১০০% পজিটিভ ফিডব্যাক"
  },
  {
    id: 6,
    title: "বিজনেজ ল্যান্ডিং পেজ",
    desc: "একটি লোকাল বিজনেসের জন্য প্রফেশনাল এবং সেলস ওরিয়েন্টেড পেজ।",
    category: "web",
    icon: <Layout className="w-6 h-6" />,
    stats: "২০টি নতুন লিড প্রতিদিন"
  },
  {
    id: 7,
    title: "এআই ভয়েস ওভার ক্যাম্পেইন",
    desc: "রেডিও এবং সোশ্যাল মিডিয়ার জন্য মাল্টি-ল্যাঙ্গুয়েজ ভয়েস অ্যাড।",
    category: "content",
    icon: <Mic2 className="w-6 h-6" />,
    stats: "সাশ্রয়ী ও দ্রুত"
  },
  {
    id: 8,
    title: "সোশ্যাল মিডিয়া ক্যাম্পেইন",
    desc: "ডিজিটাল প্রোডাক্ট লঞ্চের জন্য পূর্ণাঙ্গ মার্কেটিং ও কন্টেন্ট সেটআপ।",
    category: "marketing",
    icon: <Smartphone className="w-6 h-6" />,
    stats: "৮০% আরও আরও সেলস"
  },
  {
    id: 9,
    title: "ট্রাভেল এজেন্সী ভিডিও অ্যাড",
    desc: "স্বপ্নের মতো লোকেশন এবং ভিউ ফুটিয়ে তোলা এআই ট্রাভেল ভিডিও।",
    category: "video",
    icon: <Play className="w-6 h-6" />,
    stats: "অভূতপূর্ব সাড়া"
  },
  {
    id: 10,
    title: "স্কুল ম্যানেজমেন্ট ড্যাশবোর্ড",
    desc: "শিক্ষাপ্রতিষ্ঠানের জন্য ইউজার-ফ্রেন্ডলি ওয়েব ইন্টারফেস ডিজাইন।",
    category: "web",
    icon: <Globe className="w-6 h-6" />,
    stats: "সহজ ইউজেবিলিটি"
  }
];

const IMPACTS = [
  { n: "৫০+", t: "সফল প্রজেক্ট", i: <Zap /> },
  { n: "১২০%", t: "গড় সেলস গ্রোথ", i: <TrendingUp /> },
  { n: "১৫+", t: "দেশের বাইরে ক্লায়েন্ট", i: <Globe /> },
  { n: "১০০%", t: "সন্তুষ্ট কাস্টমার", i: <Users /> }
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = activeTab === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeTab);

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
            <span className="tag mb-6 inline-block tracking-[0.2em]">Our Masterpieces</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-display leading-[1.1]">
              আমাদের <span className="highlight">কাজসমূহ</span>
            </h1>
            <p className="text-text-dim text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              আমরা শুধু স্বপ্ন দেখি না, সেটাকে এআই-এর মাধ্যমে বাস্তবে রূপ দিই। আমাদের সফল কিছু প্রজেক্ট এবং গ্রাহকদের সফলতার গল্প দেখুন।
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
                  ? 'bg-agency-purple text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] scale-105' 
                  : 'bg-white/5 text-text-dim hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Portfolio Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative h-full"
              >
                <div className="glass-card h-full p-0 overflow-hidden group hover:border-agency-purple/40 transition-all duration-500">
                  {/* Image/Placeholder */}
                  <div className="aspect-video bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-agency-purple/10 to-transparent group-hover:bg-agency-purple/20 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                       <div className="text-agency-purple opacity-20 group-hover:opacity-40">{item.icon}</div>
                       <Sparkles className="w-16 h-16 absolute animate-pulse text-white/5" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-agency-purple/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-agency-purple transition-colors">{item.title}</h3>
                    <p className="text-text-dim text-base mb-6 leading-relaxed">{item.desc}</p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                       <div className="flex items-center gap-2 text-agency-accent font-bold text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          {item.stats}
                       </div>
                       <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-agency-purple transition-all hover:scale-110">
                          <ExternalLink className="w-4 h-4" />
                       </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Results/Impact Section */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACTS.map((imp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 text-center border-white/5 group hover:border-agency-purple/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-agency-purple/10 flex items-center justify-center mx-auto mb-6 text-agency-purple group-hover:scale-110 transition-transform">
                  {imp.i}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tighter bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  {imp.n}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-text-dim">
                  {imp.t}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden border-agency-purple/30 text-white">
          <div className="glow-purple w-[400px] h-[400px] absolute -top-40 -left-40 opacity-20" />
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">আপনার প্রজেক্ট <br /> <span className="highlight">শুরু করতে চান?</span></h2>
          <p className="text-text-dim text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">এখনই আমাদের সাথে যোগাযোগ করুন এবং জানুন কীভাবে Jannat-Dreamwork আপনার ব্যবসাকে সাহায্য করতে পারে।</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/01833282575"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-14 px-10 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <Sparkles className="w-5 h-5" /> এখনই শুরু করুন
            </a>
            <a 
              href="https://wa.me/01833282575"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary h-14 px-10 flex items-center justify-center gap-3 w-full sm:w-auto text-[#f8fafc]"
            >
              <MessageCircle className="w-5 h-5 text-agency-purple" /> WhatsApp মেসেজ দিন
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
