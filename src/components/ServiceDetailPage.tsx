import React from 'react';
import { motion } from 'motion/react';
import { 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  Play, 
  Zap, 
  TrendingUp, 
  Clock, 
  BarChart3,
  HelpCircle,
  Star,
  Phone
} from 'lucide-react';

const PACKAGES = [
  {
    name: "বেসিক (Basic)",
    price: "৳৯,৯৯৯",
    delivery: "৪৮ ঘণ্টা",
    features: [
      "১টি হাই-কোয়ালিটি এআই ভিডিও",
      "১৫-৩০ সেকেন্ডের ডিউরেশন",
      "১টি সোশ্যাল মিডিয়া সাইজ",
      "বেসিক এআই ভয়েস ওভার",
      "২টি রিভিশন"
    ],
    cta: "অর্ডার করুন",
    highlight: false
  },
  {
    name: "স্ট্যান্ডার্ড (Standard)",
    price: "৳২৪,৯৯৯",
    delivery: "৪ দিন",
    features: [
      "৫টি প্রফেশনাল এআই ভিডিও",
      "ফুল স্ক্রিপ্ট রাইটিং",
      "কাস্টম ব্র্যান্ডেড মিউজিক",
      "ভয়েস ওভার (Premium Quality)",
      "৩টি ভিন্ন সাইজ (Square, Reel, Wide)",
      "আনলিমিটেড রিভিশন"
    ],
    cta: "জনপ্রিয় পছন্দ",
    highlight: true
  },
  {
    name: "প্রিমিয়াম (Premium)",
    price: "৳৪৯,৯৯৯",
    delivery: "৭ দিন",
    features: [
      "১৫টি প্রিমিয়াম এআই বিজ্ঞাপন",
      "ফুল মার্কেটিং স্ট্র্যাটেজি কনসালটেশন",
      "কাস্টম এআই ক্যারেক্টার প্রোডাকশন",
      "মাল্টি-ল্যাঙ্গুয়েজ ভয়েসওভার সাপোর্ট",
      "ডেডিকেটেড প্রজেক্ট ম্যানেজার",
      "লাইফটাইম স্টোরেজ সাপোর্ট"
    ],
    cta: "পূর্ণাঙ্গ সলিউশন",
    highlight: false
  }
];

const FAQS = [
  { 
    q: "এআই ভিডিও কি দেখতে রিয়েলিস্টিক হবে?", 
    a: "হ্যাঁ, আমরা আধুনিক এআই মডেল ব্যবহার করি যা মানুষের মতোই রিয়েলিস্টিক মুভমেন্ট এবং এক্সপ্রেশন তৈরি করতে সক্ষম।" 
  },
  { 
    q: "আমি কি নিজের স্ক্রিপ্ট ব্যবহার করতে পারব?", 
    a: "অবশ্যই! আপনি নিজের স্ক্রিপ্ট দিতে পারেন অথবা আমাদের টিম দিয়ে নতুন আকর্ষণীয় স্ক্রিপ্ট লিখিয়ে নিতে পারেন।" 
  },
  { 
    q: "ডেলিভারি পেতে কতদিন সময় লাগবে?", 
    a: "আপনার প্যাকেজ অনুযায়ী ৪৮ ঘণ্টা থেকে ৭ দিনের মধ্যে কাজ শেষ করে আমরা ডেলিভারি নিশ্চিত করি।" 
  },
  { 
    q: "ভিডিওর সাইজ কেমন হবে?", 
    a: "ফেসবুক ফিড, ইউটিউব, টিকটক বা ইনস্টাগ্রাম রিলস — প্রতিটি প্ল্যাটফর্মের জন্য আমরা আলাদা আলাদা সাইজে ভিডিও প্রদান করি।" 
  }
];

interface ServiceDetailPageProps {
  onBack: () => void;
}

export default function ServiceDetailPage({ onBack }: ServiceDetailPageProps) {
  return (
    <div className="min-h-screen pt-10">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold text-text-dim hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-agency-purple transition-all">
            <ArrowRight className="w-4 h-4 rotate-180" />
          </div>
          সার্ভিস লিস্টে ফিরে যান
        </button>
      </div>

      {/* 1. Hero Section */}
      <section className="relative px-6 pb-24 overflow-hidden">
        <div className="glow-accent w-[500px] h-[500px] absolute -top-40 -right-40 opacity-20" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="tag mb-6 inline-block bg-agency-purple/10 text-agency-purple px-4 py-1.5 rounded-full">এআই ভিডিও বিজ্ঞাপন</div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.15]">
                সেলস বাড়াতে ব্রান্ডকে দিন <br />
                <span className="highlight">এআই-এর জাদু</span>
              </h1>
              <p className="text-text-dim text-xl mb-12 max-w-xl leading-relaxed">
                আপনার প্রোডাক্ট অথবা সার্ভিসের জন্য তৈরি করুন এমন বিজ্ঞাপন যা গ্রাহকের মনোযোগ কেড়ে নিতে বাধ্য। আমাদের স্মার্ট এআই ডেলিভারি দিবে সুপার ফাস্ট এবং হাই-কোয়ালিটি আউটপুট।
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary flex items-center gap-3 h-14 px-10">
                  <Play className="w-5 h-5 fill-current" /> এখনই অর্ডার করুন
                </button>
                <button className="btn-secondary flex items-center gap-3 h-14 px-10 text-white">
                  <MessageCircle className="w-5 h-5 text-agency-purple" /> WhatsApp আলোচনা
                </button>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 w-full lg:w-auto relative">
            <div className="glass-card aspect-video w-full overflow-hidden relative group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/aivideo/1280/720" 
                alt="AI Video Ad Demo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card bg-black/40 border-white/5">
                <p className="text-xs font-bold uppercase tracking-widest text-[#f8fafc]/80">সফলতার গল্প</p>
                <p className="text-sm">কিভাবে একটি এআই ভিডিও একটি ব্র্যান্ডের সেলস ৫ গুণ বাড়িয়েছে!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-extrabold mb-8">সার্ভিসটি কাদের জন্য?</h2>
              <div className="space-y-6">
                {[
                  "ই-কমার্স ব্যবসা যারা সেলস বাড়াতে চান।",
                  "ফেসবুক ও ইনস্টাগ্রাম এডভার্টাইজার যারা কনভার্সন বাড়াতে চান।",
                  "নতুন উদ্যোক্তা যারা কম খরচে সেরা প্রমোশন চান।",
                  "পার্সোনাল ব্র্যান্ডিং করতে ইচ্ছুক কন্টেন্ট ক্রিয়েটররা।"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-agency-purple/20 flex items-center justify-center mt-1">
                      <Zap className="w-3 h-3 text-agency-purple" />
                    </div>
                    <p className="text-text-dim text-base font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold mb-8">আমরা যা যা নিশ্চিত করি</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: <TrendingUp />, title: "হাই এঙ্গেজমেন্ট", desc: "দর্শকদের মনোযোগ ধরে রাখার মতো ভিজ্যুয়াল।" },
                  { icon: <Clock />, title: "দ্রুত ডেলিভারি", desc: "৪৮ ঘণ্টার মধ্যে কাজ সম্পন্ন করার চ্যালেঞ্জ।" },
                  { icon: <Sparkles />, title: "ইউনিক কন্টেন্ট", desc: "প্রতিটি ব্রান্ডের জন্য কাস্টম স্ক্রিপ্ট ও ডিজাইন।" },
                  { icon: <BarChart3 />, title: "রিটার্ন অন ইনভেস্টমেন্ট", desc: "এমন ভিডিও যা সত্যি সেলস জেনারেট করে।" }
                ].map((feature, i) => (
                  <div key={i} className="glass-card p-6 border-white/5 bg-white/[0.02]">
                    <div className="text-agency-purple mb-4">{feature.icon}</div>
                    <h5 className="font-bold mb-2">{feature.title}</h5>
                    <p className="text-xs text-text-dim">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing Packages */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">সেরা প্রাইসিং প্ল্যান</h2>
            <p className="text-text-dim max-w-2xl mx-auto font-medium">আপনার বাজেট ও রিকোয়ারমেন্ট অনুযায়ী পছন্দের প্যাকেজটি বেছে নিন।</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <div 
                key={i} 
                className={`glass-card p-12 relative flex flex-col h-full transition-all duration-500 hover:-translate-y-2 ${pkg.highlight ? 'border-agency-purple/50 bg-agency-purple/[0.03] scale-105 z-10' : 'hover:border-white/20'}`}
              >
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-agency-purple px-6 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest shadow-xl shadow-agency-purple/30">
                    সেরা ডিল
                  </div>
                )}
                <div className="mb-10">
                  <h4 className="text-xl font-bold mb-4">{pkg.name}</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold">{pkg.price}</span>
                  </div>
                  <p className="text-xs text-agency-purple font-bold uppercase tracking-widest flex items-center gap-2">
                    <Clock className="w-3 h-3" /> ডেলিভারি: {pkg.delivery}
                  </p>
                </div>
                
                <div className="space-y-4 mb-12 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-3 text-base text-[#f8fafc]/80 items-start leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-agency-purple flex-shrink-0 mt-0.5" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${pkg.highlight ? 'btn-primary' : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white'}`}>
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Work Process */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-20 text-center">ডেলিভারি প্রসেস</h2>
          <div className="relative space-y-12">
             {/* Center line (Desktop) */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-agency-purple/0 via-agency-purple/40 to-agency-purple/0 hidden md:block" />
            
            {[
              { t: "প্যাকেজ নির্বাচন", d: "সহজে অনলাইনেই অর্ডার করুন এবং আপনার ব্যবসার ব্রিফ শেয়ার করুন।" },
              { t: "আইডিয়া ও স্টোরিবোর্ড", d: "আমাদের টিম এআই অ্যানালিসিস করে ভিডিওর জন্য সেরা স্ক্রিপ্ট তৈরি করবে।" },
              { t: "ভিডিও প্রোডাকশন", d: "অত্যাধুনিক এআই ল্যাবরেটরিতে বিজ্ঞাপনটি নিখুঁতভাবে রেন্ডারিং করা হবে।" },
              { t: "রিভিউ ও এডিট", d: "আমরা কাজ শেষ করে আপনাকে দেখাবো এবং প্রয়োজনে আপনার চাহিদা মতো পরিবর্তন করব।" },
              { t: "সফল লঞ্চ", d: "ফাইনাল হাই-কোয়ালিটি ভিডিও বুঝে নিন এবং আপনার সোশ্যাল মিডিয়ায় প্রচার শুরু করুন।" }
            ].map((step, i) => (
              <div key={i} className="relative flex gap-10 items-start">
                 <div className="w-8 h-8 rounded-full bg-agency-purple flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow-lg shadow-agency-purple/40">
                   {i + 1}
                 </div>
                 <div className="glass-card p-6 border-white/5 hover:border-agency-purple/20 transition-all flex-grow">
                   <h5 className="font-bold text-xl mb-2">{step.t}</h5>
                   <p className="text-base text-text-dim leading-relaxed">{step.d}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-16 flex items-center justify-center gap-4">
            <HelpCircle className="text-agency-purple" /> প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h2>
          <div className="space-y-6 text-left">
            {FAQS.map((faq, i) => (
              <div key={i} className="glass-card p-10 border-white/5 group transition-all">
                <h5 className="font-bold text-xl mb-4 flex gap-4 group-hover:text-agency-purple transition-colors">
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

      {/* 9. Testimonials */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-16">গ্রাহকদের অভিজ্ঞতা</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { n: "আসিফ জামান", r: "ই-কমার্স ব্যবসায়ী", c: "আগে একটি ভিডিও অ্যাড বানাতে অনেক টাকা ও সময় লাগত। Jannat-Dreamwork দিয়ে এখন অর্ধেকের কম খরচে দ্বিগুণ ভালো কোয়ালিটি পাচ্ছি!" },
               { n: "রিয়া মাহমুদ", r: "ডিজিটাল মার্কেটার", c: "তাদের এআই ভয়েস ওভার এবং ভিডিওর কোঅর্ডিনেশন অনেক চমৎকার। আমার ক্লায়েন্টরা খুবই হ্যাপি।" }
             ].map((t, i) => (
               <div key={i} className="glass-card p-10 text-left border-agency-purple/10">
                 <div className="flex gap-1 text-yellow-500 mb-6">
                   {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                 </div>
                 <p className="italic text-text-dim mb-8 text-base leading-relaxed">"{t.c}"</p>
                 <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-agency-purple to-agency-accent opacity-50" />
                    <div>
                      <h6 className="font-bold">{t.n}</h6>
                      <p className="text-[10px] text-text-dim uppercase tracking-widest">{t.r}</p>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="glow-purple w-[800px] h-[800px] absolute -bottom-[400px] -left-[200px] opacity-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">সবাই যখন এগিয়ে, আপনি কি <span className="highlight">পিছিয়ে থাকবেন?</span></h2>
          <p className="text-text-dim text-xl mb-12 max-w-2xl mx-auto font-medium">স্মার্ট এআই বিজ্ঞাপনের মাধ্যমে আপনার ব্যবসাকে এনে দিন অভাবনীয় সাফল্য। আমরা প্রস্তুত, আপনি কি প্রস্তুত?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <a href="https://wa.me/01833282575" target="_blank" rel="noopener noreferrer" className="btn-primary h-16 px-12 text-lg flex items-center justify-center">অর্ডার কনফার্ম করুন</a>
             <a href="tel:01833282575" className="btn-secondary h-16 px-12 text-lg text-white font-bold flex items-center justify-center gap-3">
               <Phone className="w-5 h-5 text-agency-purple" /> একটি ডেমো কল বুক করুন
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
