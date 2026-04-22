import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { trackPageView } from "./Utils/pixel";
import {
  Sparkles,
  Home,
  Briefcase,
  Image,
  CreditCard,
  Video,
  PenTool,
  Globe,
  TrendingUp,
  Mic2,
  ChevronRight,
  CheckCircle2,
  Users,
  MessageSquare,
  Zap,
  Star,
  Phone,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Youtube,
} from "lucide-react";

// Pages
import ServicesPage from "./components/ServicesPage";
import ServiceDetailPage from "./components/ServiceDetailPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

import PortfolioPage from "./components/PortfolioPage";
import PricingPage from "./components/PricingPage";

// Full Agency Data
const SERVICES = [
   {
    id: "web-design",
    title: "🌐 Website Design & Development",
    desc: "একটি প্রফেশনাল ওয়েবসাইটই আপনার ব্র্যান্ডের প্রথম ইমপ্রেশন। আমরা এমন একটি প্ল্যাটফর্ম তৈরি করি যেখানে ডিজাইন, স্পিড ও কনভার্সন একসাথে কাজ করে আপনার ব্যবসাকে পরবর্তী লেভেলে নিয়ে যেতে।",
    icon: <Globe />
  },
  {
    id: "ai-video",
    title: "🤖 AI-Powered Video Production",
    desc: "আমরা AI প্রযুক্তি ব্যবহার করে তৈরি করি high-converting video content. যা শুধু সুন্দর না, বরং আপনার business-এর জন্য attention, engagement ও real sales নিয়ে আসে। Fast production, কম খরচ এবং premium quality সব একসাথে।",
    icon: <Video />
  },
   {
    id: "marketing",
    title: "📊 Meta Ads & Digital Marketing",
    desc: "আপনার ব্যবসার জন্য শুধু বিজ্ঞাপন চালানো নয়,আমরা তৈরি করি এমন স্ট্র্যাটেজি যা সঠিক অডিয়েন্সে পৌঁছে, লিড আনে এবং সেলসে রূপ নেয়। Data-driven decision ও smart targeting দিয়ে আপনার প্রতিটি টাকাকে করি profitable।",
    icon: <TrendingUp />
  },
  {
    id: "voice-over",
    title: "🎨 Branding & Content Creation",
    desc: "আপনার ব্র্যান্ডের জন্য আমরা তৈরি করি creative, engaging এবং conversion-focused video ads যা প্রথম ৩ সেকেন্ডেই attention ধরে এবং দর্শককে কাস্টমারে পরিণত করে। Storytelling, strategy এবং marketing psychology সব একসাথে।",
    icon: <Mic2 />
  },
  {
    id: "script-writing",
    title: "🎥 Creative Video & Ad Production",
    desc: "কাস্টম কনটেন্ট ও স্টোরিটেলিং এর মাধ্যমে আমরা আপনার ব্র্যান্ডকে ইউনিক করে তুলি।",
    icon: <PenTool />
  },
 
 
  
];

const PRICING = [
  {
    name: "বেসিক প্যাকেজ",
    price: "৳৯,৯৯৯",
    features: ["৫টি এআই ভিডিও অ্যাড", "বেসিক স্ক্রিপ্ট রাইটিং", "৩টি রিভিশন", "ইমেইল সাপোর্ট"],
    desc: "নতুন উদ্যোক্তাদের জন্য পারফেক্ট।"
  },
  {
    name: "প্রফেশনাল প্ল্যান",
    price: "৳২৪,৯৯৯",
    features: ["১৫টি এআই ভিডিও অ্যাড", "প্রিমিয়াম স্ক্রিপ্ট ও স্টোরিবোর্ড", "এআই ভয়েস ওভার", "প্রায়োরিটি সাপোর্ট", "১০টি রিভিশন"],
    featured: true,
    desc: "দ্রুত গ্রোথ পেতে যারা চাচ্ছেন।"
  },
  {
    name: "এন্টারপ্রাইজ সলিউশন",
    price: "৳৪৯,৯৯৯",
    features: ["আনলিমিটেড ভিডিও অ্যাড", "ফুল ব্র্যান্ডিং স্ট্র্যাটেজি", "কাস্টম এআই টুলস সেটআপ", "২৪/৭ ডিরেক্ট কল সাপোর্ট", "আনলিমিটেড রিভিশন"],
    desc: "বড় ব্র্যান্ডের পূর্ণাঙ্গ সলিউশন।"
  }
];

const PROCESS = [
  { step: "০১", title: "প্রথম আলোচনা", desc: "আপনার ব্রান্ড ভিশন এবং প্রজেক্টের গোলগুলো আমরা বিস্তারিত বুঝে নেই।" },
  { step: "০২", title: "আইডিয়া ও স্ক্রিপ্ট", desc: "আপনার জন্য কাস্টম স্ক্রিপ্ট এবং আধুনিক ভিজ্যুয়াল স্টোরিবোর্ড তৈরি করি।" },
  { step: "০৩", title: "ক্রিয়েটিভ প্রোডাকশন", desc: "আপনার ব্র্যান্ডের জন্য আমরা পরিকল্পনা থেকে বাস্তবায়ন—সবকিছু একসাথে করি,যেখানে প্রতিটি ডিটেইলে থাকে স্ট্র্যাটেজি, ক্রিয়েটিভিটি ও পারফেকশন।" },
  { step: "০৪", title: "সন্তুষ্টি ও ডেলিভারি", desc: "আপনার ফিডব্যাক অনুযায়ী ফাইনাল টাচ দিয়ে প্রজেক্ট সফলভাবে হস্তান্তর করি।" }
];


export default function App() {

  //new
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView();
  }, [activePage]);

  const NAV_ITEMS = [
    { label: "হোম", id: "home" },
    { label: "সার্ভিসসমূহ", id: "services" },
    { label: "আমাদের সম্পর্কে", id: "about" },
    // { label: "পোর্টফোলিও", id: "portfolio" },
    // { label: "প্রাইসিং", id: "pricing" },
    { label: "যোগাযোগ", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-agency-black selection:bg-agency-purple/30 overflow-x-hidden">
      {/* Background Ambience - Immersive UI Style */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(217,70,239,0.1)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05)_0%,transparent_100%)]" />
        <div className="glow-purple w-[800px] h-[800px] -top-[400px] -left-[200px] opacity-10 animate-pulse" />
        <div className="glow-blue w-[700px] h-[700px] top-1/2 -right-[100px] opacity-10" />
      </div>

      {/* 1. Header & Navigation */}
      <nav className="sticky top-0 z-[100] border-b border-white/5 bg-agency-black/60 backdrop-blur-[12px]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="w-9 h-9 bg-gradient-to-tr from-agency-purple to-agency-accent rounded-lg flex items-center justify-center shadow-lg shadow-agency-purple/20">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-agency-purple to-agency-accent bg-clip-text text-transparent uppercase">Jannat-Dreamwork</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`nav-link text-sm uppercase tracking-widest font-bold transition-all ${activePage === item.id ? 'text-[#f8fafc] highlight scale-105' : 'hover:scale-105'}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActivePage('contact')}
              className="hidden sm:flex btn-primary py-2.5 px-8 text-sm"
            >
              যোগাযোগ করুন
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-agency-black/80 backdrop-blur-xl border-t border-white/5 pb-safe">
        <div className="flex items-center justify-around h-20 px-4">
          {[
            { label: "হোম", id: "home", icon: <Home className="w-5 h-5" /> },
            { label: "সার্ভিস", id: "services", icon: <Briefcase className="w-5 h-5" /> },
            // { label: "কাজ", id: "portfolio", icon: <Image className="w-5 h-5" /> },
            { label: "আমাদের সম্পর্কে", id: "about", icon: <CreditCard className="w-5 h-5" /> },
            { label: "যোগাযোগ", id: "contact", icon: <MessageCircle className="w-5 h-5" /> }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex flex-col items-center justify-center gap-1.5 transition-all duration-300 relative ${activePage === item.id
                ? 'text-agency-purple scale-110'
                : 'text-text-dim hover:text-white'
                }`}
            >
              <div className={`p-2 rounded-xl transition-all ${activePage === item.id ? 'bg-agency-purple/10' : ''}`}>
                {item.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
              {activePage === item.id && (
                <motion.div
                  layoutId="activeTabMobile"
                  className="absolute -top-1 w-1 h-1 bg-agency-purple rounded-full"
                />
              )}
            </button>

          ))}
        </div>
      </div>
       {/* main div */}
      <main className="relative z-10">
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-700">
            {/* 1. Hero Section */}
            <section className="relative px-6 pt-24 pb-32 max-w-7xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8 overflow-hidden"
                >
                  <div className="tag mb-6 inline-block tracking-[0.15em]">We turn your dreams into reality </div>
                  <h1 className="text-5xl md:text-[64px] font-extrabold tracking-tight mb-8 leading-[1.1] font-display">
                    আপনার ব্যবসাকে নিয়ে যান <br />
                    <span className="highlight">নতুন উচ্চতায়</span>
                  </h1>
                  <p className="text-text-dim text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
                    আমরা তৈরি করি এমন visual storytelling & web experience
                    যা আপনার brand-কে দেয় identity, trust এবং real sales
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <button
                      onClick={() => setActivePage('contact')}
                      className="btn-primary text-base px-10 h-14 min-w-[200px] flex items-center justify-center gap-2"
                    >
                      যোগাযোগ করুন <ChevronRight className="w-4 h-4" />
                    </button>
                    <a
                      href="https://wa.me/+8801903771813"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        if ((window as any).fbq) {
                          (window as any).fbq("track", "Contact");
                        }
                      }}
                      className="btn-secondary text-base px-10 h-14 min-w-[200px] flex items-center justify-center gap-2 text-white"
                    >
                      <MessageCircle className="w-5 h-5 text-agency-purple" />
                      WhatsApp-এ কথা বলুন
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* 2. Trusted / Social Proof */}
            <section className="py-12 border-y border-white/5 bg-white/[0.01]">
              <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-text-dim text-xs font-bold uppercase tracking-[0.3em] mb-10">আমাদের ওপর যারা আস্থা রেখেছেন</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                  {/* Logo Placeholders */}
                  {["Chuadanga Event Planner", "Rongdhonu Gift Garden", "Fit Up Chuadanga", "MR Enterprise", "Smart Husiyari"].map((i) => (
                    <div key={i} className="flex items-center gap-2 font-extrabold text-2xl tracking-tighter italic text-[#f8fafc]">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Services Overview */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <span className="text-agency-purple font-bold tracking-widest text-xs uppercase mb-4 block">
                    আমরা যা করি
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold font-display">
                    আমাদের সার্ভিসসমূহ
                  </h2>
                </div>

                <button
                  onClick={() => setActivePage('services')}
                  className="btn-secondary flex items-center gap-2"
                >
                  সবগুলো দেখুন <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICES.map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="glass-card p-8 group border-white/5 hover:border-agency-purple/30 transition-all cursor-pointer"

                  // ✅ IMPORTANT FIX

                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <div className="text-agency-purple w-7 h-7">{s.icon}</div>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{s.title}</h3>

                    <p className="text-base text-text-dim leading-relaxed mb-6">
                      {s.desc}
                    </p>

                    {/* <button
                      onClick={(e) => {
                        e.stopPropagation(); // 👈 parent click block করবে না
                        setSelectedService(s.id);
                        setActivePage('service-detail');
                      }}
                      className="text-xs font-bold uppercase tracking-widest text-[#f8fafc]/50 group-hover:text-agency-purple flex items-center gap-2 transition-colors"
                    >
                      বিস্তারিত দেখুন <ArrowRight className="w-3 h-3" />
                    </button> */}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 4. Portfolio Showcase */}
            {/* <section className="py-32 bg-white/[0.02] border-y border-white/5">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-extrabold mb-4">আমাদের সেরা কাজের প্রদর্শনী</h2>
                  <p className="text-text-dim text-lg max-w-2xl mx-auto">জান্নাত ড্রিমওয়ার্ক (Jannat-Dreamwork)-এর মাধ্যমে সম্পন্ন হওয়া কিছু সফল প্রজেক্টের এক ঝলক। আমরা প্রতিটি প্রজেক্টে ইনোভেশন এবং কোয়ালিটি নিশ্চিত করি।</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: "ই-কমার্স বিজ্ঞাপন", tag: "ভিডিও অ্যাড" },
                    { title: "ব্যান্ড প্রমোশন", tag: "স্ক্রিপ্ট ও ভয়েস" },
                    { title: "অ্যাপ ল্যান্ডিং পেজ", tag: "ওয়েব ডিজাইন" }
                  ].map((proj, i) => (
                    <div key={i} className="group relative rounded-3xl overflow-hidden aspect-video bg-white/5 border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute bottom-6 left-6">
                        <p className="text-agency-accent text-[10px] font-bold uppercase tracking-widest mb-1">{proj.tag}</p>
                        <h4 className="text-xl font-extrabold">{proj.title}</h4>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 scale-75 group-hover:scale-100 transition-transform">
                          <Video className="w-6 h-6 text-agency-purple" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section> */}

            {/* 5. Pricing Preview */}
            {/* <section className="py-32 px-6 max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 font-display">সাশ্রয়ী প্রাইসিং প্ল্যান</h2>
                <p className="text-text-dim">আপনার প্রয়োজন অনুযায়ী সঠিক প্যাকেজটি বেছে নিন।</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PRICING.map((plan, i) => (
                  <div key={i} className={`glass-card p-10 flex flex-col relative transition-all duration-500 ${plan.featured ? 'border-agency-purple scale-105 z-10 shadow-[0_0_50px_rgba(139,92,246,0.1)]' : 'border-white/5'}`}>
                    {plan.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-agency-purple to-agency-accent text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">জনপ্রিয়</div>}
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-extrabold mb-8">{plan.price}<span className="text-sm font-normal text-text-dim">/মাস</span></div>
                    <div className="space-y-4 mb-10 flex-grow">
                      {plan.features.map(f => (
                        <div key={f} className="flex items-center gap-3 text-sm text-text-dim">
                          <CheckCircle2 className="w-4 h-4 text-agency-purple" /> {f}
                        </div>
                      ))}
                    </div>
                    <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${plan.featured ? 'btn-primary' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}>প্যাকেজ কিনুন</button>
                  </div>
                ))}
              </div>
            </section> */}

            {/* 6. Why Choose Us */}
            <section className="py-32 bg-white/[0.01]">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">কেন আমরা আলাদা?</h2>
                  <p className="text-text-dim mb-12 font-medium">কারণ আমরা সার্ভিস প্রদান করি না —
                    আমরা আপনার ব্র্যান্ডের গল্পকে জীবন্ত করে তুলি।</p>

                  <div className="space-y-8">
                    {[
                      { icon: <Zap />, title: "ইনোভেটিভ ডিজিটাল সলিউশন", desc: "আমরা আধুনিক ট্রেন্ড ও ক্রিয়েটিভিটির মাধ্যমে আপনার ব্র্যান্ডকে আলাদা করে তুলে ধরি।" },
                      { icon: <TrendingUp />, title: "ফলাফলমুখী মেথড", desc: "আমাদের প্রতিটি কাজ সেলস এবং ইউজার এঙ্গেজমেন্ট বাড়ানোর কথা মাথায় রেখে করা হয়।" },
                      { icon: <Users />, title: "অভিজ্ঞ ও দক্ষ টিম", desc: "আমাদের রয়েছে দক্ষ এবং ক্রিয়েটিভ ডিজাইনারদের একটি সমন্বিত টিম। " },
                      { icon: <MessageSquare />, title: "২৪/৭ গ্রাহক সাপোর্ট", desc: "প্রজেক্ট পরবর্তী যেকোনো প্রয়োজনে আমাদের টিম সার্বক্ষণিক আপনার সেবায় নিয়োজিত।" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-agency-purple/10 flex items-center justify-center text-agency-purple group-hover:bg-agency-purple group-hover:text-white transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-extrabold mb-1 text-lg">{item.title}</h4>
                          <p className="text-base text-text-dim leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group pt-12 md:pt-0">
                  <div className="aspect-square glass-card rotate-3 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-gradient-to-tr from-agency-purple/20 to-agency-blue/20 rounded-full blur-3xl animate-pulse" />
                    <Sparkles className="w-32 h-32 text-agency-purple/20 absolute" />
                    <p className="text-white/10 font-bold text-4xl sm:text-6xl md:text-7xl absolute select-none tracking-tighter">Jannat-Dreamwork</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Process Section */}
            <section className="py-32 px-6 max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold mb-16">কাজের ধাপসমূহ</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                {/* Connection lines (Desktop only) */}
                <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {PROCESS.map((p, i) => (
                  <div key={i} className="relative group">
                    <div className="w-16 h-16 rounded-full bg-agency-black border border-white/10 flex items-center justify-center mx-auto mb-6 text-xl font-bold text-agency-purple group-hover:border-agency-purple transition-all relative z-10">
                      {p.step}
                    </div>
                    <h4 className="text-2xl font-extrabold mb-3">{p.title}</h4>
                    <p className="text-base text-text-dim leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. Testimonials */}
            {/* <section className="py-32 bg-white/[0.02]">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-extrabold text-center mb-16">গ্রাহকদের মন্তব্য</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: "আরিয়ান আহমেদ", role: "সিইও, ই-কমার্স বিডি", comment: "জান্নাত ড্রিমওয়ার্ক (Jannat-Dreamwork)-এর বিজ্ঞাপন আমাদের ফেসবুক ক্যাম্পেইনের সেলস ৩০০% বাড়িয়ে দিয়েছে। তাদের কাজের মান সত্যিই আধুনিক এবং অপ্রতিদ্বন্দ্বী!" },
                    { name: "সুমাইয়া তন্বী", role: "মার্কেটিং ম্যানেজার, ট্রেন্ডি ফ্যাশন", comment: "স্ক্রিপ্ট থেকে শুরু করে ভয়েস ওভার — সব কিছুই অত্যন্ত নিঁখুত। প্রফেশনাল এআই সার্ভিসের জন্য তাদের কোনো বিকল্প নেই।" },
                    { name: "রাকিব হোসেন", role: "প্রতিষ্ঠাতা, টেক সリューションস", comment: "আমাদের ল্যান্ডিং পেজটিকে তারা যে আধুনিক রূপ দিয়েছে, তা আমাদের ব্র্যান্ডের ট্রাস্ট অনেক বাড়িয়ে দিয়েছে। গ্রেট জব!" }
                  ].map((testi, i) => (
                    <div key={i} className="glass-card p-10 group hover:border-agency-purple/30 transition-all duration-300">
                      <div className="flex gap-1 text-yellow-500 mb-6">
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />)}
                      </div>
                      <p className="text-text-dim mb-8 italic text-base leading-relaxed">"{testi.comment}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-agency-purple/20 to-agency-accent/20 border border-white/10 flex items-center justify-center text-xs font-bold text-agency-purple">USER</div>
                        <div>
                          <h5 className="font-bold text-[#f8fafc]">{testi.name}</h5>
                          <p className="text-[10px] text-text-dim uppercase tracking-wider">{testi.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section> */}

            {/* 9. Final CTA */}
            <section className="py-32 px-6">
              <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden border-agency-purple/30">
                <div className="glow-purple w-[400px] h-[400px] absolute -top-40 -right-40 opacity-20" />
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10 leading-[1.1]">আপনার ব্যবসাকে ডিজিটাল বিপ্লবের <br /> <span className="highlight">সাথী করতে প্রস্তুত?</span></h2>
                <p className="text-text-dim text-xl mb-12 max-w-2xl mx-auto relative z-10 font-medium">ডেটা, অভিজ্ঞতা ও মার্কেট ইনসাইটের মাধ্যমে
                  আমরা আপনাকে সঠিক পথে এগিয়ে যেতে সাহায্য করি।</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                  <button
                    onClick={() => setActivePage('contact')}
                    className="btn-primary h-14 px-10 flex items-center gap-3"
                  >
                    <Sparkles className="w-5 h-5" /> যোগাযোগ করুন
                  </button>
                  <a
                    href="https://wa.me/+8801903771813"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if ((window as any).fbq) {
                        (window as any).fbq("track", "Contact");
                      }
                    }}
                    className="btn-secondary h-14 px-10 flex items-center gap-3 text-white"
                  >
                    <MessageCircle className="w-5 h-5 text-agency-purple" />
                    সরাসরি কথা বলুন
                  </a>
                </div>
              </div>
            </section>

          </div>
        )}

        {activePage === 'services' && (
          <div className="animate-in fade-in duration-500">
            <ServicesPage onViewDetail={() => setActivePage('service-detail')} />
          </div>
        )}

        {activePage === 'service-detail' && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <ServiceDetailPage onBack={() => setActivePage('services')} />
          </div>
        )}

        {activePage === 'about' && (
          <div className="animate-in fade-in duration-500">
            <AboutPage />
          </div>
        )}

        {activePage === 'portfolio' && (
          <div className="animate-in fade-in duration-500">
            <PortfolioPage />
          </div>
        )}

        {activePage === 'pricing' && (
          <div className="animate-in fade-in duration-500">
            <PricingPage />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="animate-in fade-in duration-500">
            <ContactPage />
          </div>
        )}

        {/* 10. Footer */}
        <footer className="pt-24 pb-12 bg-black/40 border-t border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
              <div className="space-y-6">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('home')}>
                  <div className="w-8 h-8 bg-agency-purple rounded-lg flex items-center justify-center">
                    <Sparkles className="text-white w-4 h-4" />
                  </div>
                  <span className="text-xl font-bold tracking-tight">Jannat-Dreamwork</span>
                </div>
                <p className="text-base text-text-dim leading-relaxed">Jannat-Dreamwork — আগামী প্রজন্মের এআই চালিত একটি ডিজিটাল এজেন্সি। আমরা ক্রিয়েটিভিটি এবং প্রযুক্তির সমন্বয়ে আপনার ব্যবসার দ্রুত প্রবৃদ্ধি নিশ্চিত করি।</p>
                <div className="flex gap-4">
                  {[
                    { Icon: Facebook, link: "https://www.facebook.com/profile.php?id=61581602565099" },
                    // { Icon: Twitter, link: "#" },
                    { Icon: Instagram, link: "https://www.instagram.com/jannat_dreamworks/" },
                    { Icon: Youtube, link: "https://www.youtube.com/@JannatDreamworks" }
                  ].map(({ Icon, link }, i) => (
                    <a key={i} href={link} target={link !== "#" ? "_blank" : undefined} rel={link !== "#" ? "noopener noreferrer" : undefined} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-agency-purple/20 transition-all text-white/40 hover:text-agency-purple">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#f8fafc]/80">দ্রুত লিঙ্ক</h5>
                <ul className="space-y-4 text-sm text-text-dim">
                  <li><button onClick={() => setActivePage('home')} className="hover:text-agency-purple transition-colors cursor-pointer text-left">হোম</button></li>
                  <li><button onClick={() => setActivePage('services')} className="hover:text-agency-purple transition-colors cursor-pointer text-left">সার্ভিসসমূহ</button></li>
                  <li><button onClick={() => setActivePage('about')} className="hover:text-agency-purple transition-colors cursor-pointer text-left">আমাদের সম্পর্কে</button></li>
                  <li><button onClick={() => setActivePage('contact')} className="hover:text-agency-purple transition-colors cursor-pointer text-left">যোগাযোগ</button></li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#f8fafc]/80">সার্ভিসসমূহ</h5>
                <ul className="space-y-4 text-sm text-text-dim">
                  {["এআই ভিডিও বিজ্ঞাপন", "ক্রিয়েটিভ স্ক্রিপ্ট", "ওয়েবসাইট ডিজাইন", "ডিজিটাল মার্কেটিং", "এআই ভয়েস ওভার"].map(l => (
                    <li key={l}><button onClick={() => setActivePage('services')} className="hover:text-agency-purple transition-colors cursor-pointer text-left">{l}</button></li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-bold mb-6 text-base uppercase tracking-widest text-[#f8fafc]/80">যোগাযোগ</h5>
                <ul className="space-y-4 text-base text-text-dim">
                  <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-agency-purple mt-1 flex-shrink-0" /> চুয়াডাঙ্গা, বাংলাদেশ</li>
                  <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-agency-purple flex-shrink-0" /> 01833282575</li>
                  <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-agency-purple flex-shrink-0" /> jannatdreamwork@gmail.com</li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-white/30 uppercase tracking-[0.2em] font-bold">
              <p>© ২০২৬ Jannat-Dreamwork এজেন্সী। সর্বস্বত্ব সংরক্ষিত।</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">প্রাইভেসি পলিসি</a>
                <a href="#" className="hover:text-white transition-colors">শর্তাবলী</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp CTA */}
        <div className="fixed bottom-28 lg:bottom-6 right-6 z-[100] flex flex-col gap-4 items-end">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl relative"
            >
              <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> অনলাইন (২৪/৭)
              </p>
              <p className="text-xs font-medium">যেকোনো প্রশ্ন থাকলে মেসেজ দিন!</p>
              <div className="absolute right-6 -bottom-2 w-4 h-4 bg-black/80 border-r border-b border-white/10 rotate-45" />
            </motion.div>
          </AnimatePresence>
          <a
            href="https://wa.me/+8801903771813"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if ((window as any).fbq) {
                (window as any).fbq("track", "Contact");
              }
            }}
            className="w-16 h-16 bg-green-500 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 relative group"
          >
            <MessageCircle className="w-8 h-8" />

            <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              WhatsApp মেসেজ দিন
            </span>
          </a>
        </div>
      </main>
    </div>
  );
}
