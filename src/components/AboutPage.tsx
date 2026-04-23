import React from 'react';
import { motion } from 'motion/react';
import {
  Users,
  Target,
  Eye,
  Award,
  ShieldCheck,
  UserPlus,
  Sparkles,
  MessageCircle,
  TrendingUp,
  Heart,
  Globe
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-10">
      {/* 1. Page Header */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="glow-purple w-[600px] h-[600px] -top-[200px] -right-[100px] opacity-20" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="tag mb-6 inline-block tracking-[0.2em] bg-agency-purple/10 text-agency-purple px-4 py-1.5 rounded-full">আমাদের সম্পর্কে</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-display leading-[1.1]">
              ভবিষ্যতের ডিজিটাল বিপ্লবে <br />
              আপনার <span className="highlight">বিশ্বস্ত সঙ্গী</span>
            </h1>
            <p className="text-text-dim text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              Jannat Dreamwork শুধু একটি এজেন্সি নয়, এটি একটি ভিশন। আমরা বিশ্বাস করি—সঠিক স্ট্র্যাটেজি, ক্রিয়েটিভিটি এবং ইনোভেশনের মাধ্যমে যেকোনো ব্যবসাকে অভাবনীয় উচ্চতায় নিয়ে যাওয়া সম্ভব।
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story Sections */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-extrabold font-display">আমাদের যাত্রা শুরু যেভাবে...</h2>
              <div className="space-y-6 text-text-dim text-lg leading-relaxed font-medium">
                <p>
                  আমাদের পথচলা শুরু হয়েছিল একটি ছোট স্বপ্ন নিয়ে—প্রযুক্তির জটিলতাকে সহজ করে বাংলাদেশি উদ্যোক্তাদের জন্য নতুন সুযোগ তৈরি করা। আমরা বুঝেছি, ভালো আইডিয়া থাকলেই যথেষ্ট নয়—সঠিক দিকনির্দেশনা ও ডিজিটাল শক্তি না থাকলে একটি ব্র্যান্ড তার সম্ভাবনায় পৌঁছাতে পারে না।

                </p>
                <p>
                  তাই ২০২৪ সালে, পরিবর্তনশীল ডিজিটাল বিশ্বের সাথে তাল মিলিয়ে আমরা তৈরি করি একটি প্ল্যাটফর্ম—যেখানে ব্যবসা পায় সহজ, স্মার্ট এবং কার্যকর সমাধান। আর সেখান থেকেই যাত্রা শুরু হয় জান্নাত ড্রিমওয়ার্ক এর<span className="text-white font-bold"> (Jannat-Dreamwork)</span>

                </p>
              </div>
            </div>
            {/* <div className="flex-1 w-full lg:w-auto">
              <div className="aspect-video glass-card overflow-hidden relative group border-agency-purple/20">
                <img
                  src="https://picsum.photos/seed/agency-story/1200/800"
                  alt="Aura AI Story"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agency-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-agency-purple rounded-full flex items-center justify-center text-white">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xl font-bold">১০০+ সফল প্রজেক্ট</p>
                      <p className="text-xs text-text-dim uppercase tracking-widest">বিগত এক বছরে আমাদের অর্জন</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-32 bg-white/[0.01] border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-12 hover:border-agency-purple/30 transition-all duration-500 relative overflow-hidden group">
            <div className="glow-purple w-40 h-40 -top-20 -right-20 opacity-0 group-hover:opacity-40 transition-opacity" />
            <div className="w-14 h-14 bg-agency-purple/10 rounded-2xl flex items-center justify-center text-agency-purple mb-8">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-extrabold mb-6">আমাদের লক্ষ্য (Mission)</h3>
            <p className="text-text-dim text-lg leading-relaxed">
              উন্নত প্রযুক্তি ও কৌশলগত উদ্ভাবনের মাধ্যমে প্রতিটি ব্যবসাকে নতুন উচ্চতায় পৌঁছে দেওয়া—এবং এমন একটি ইকোসিস্টেম নির্মাণ, যেখানে ক্রিয়েটিভিটি ও টেকনোলজি একসাথে বাস্তব ফলাফল তৈরি করে।
            </p>
          </div>
          <div className="glass-card p-12 hover:border-agency-blue/30 transition-all duration-500 relative overflow-hidden group">
            <div className="glow-blue w-40 h-40 -top-20 -right-20 opacity-0 group-hover:opacity-40 transition-opacity" />
            <div className="w-14 h-14 bg-agency-blue/10 rounded-2xl flex items-center justify-center text-agency-blue mb-8">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-extrabold mb-6">আমাদের রূপকল্প (Vision)</h3>
            <p className="text-text-dim text-lg leading-relaxed">
              আগামী ৩ বছরের মধ্যে বাংলাদেশের শীর্ষস্থানীয় ডিজিটাল এজেন্সি হিসেবে নিজেদের প্রতিষ্ঠিত করা এবং উদ্ভাবনী স্ট্র্যাটেজি ও কার্যকর এক্সিকিউশনের মাধ্যমে হাজারো ব্র্যান্ডের প্রবৃদ্ধিতে সক্রিয় ভূমিকা রাখা।
            </p>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">আমাদের মূলনীতিসমূহ</h2>
            <p className="text-text-dim text-lg max-w-2xl mx-auto font-medium">আমরা কিছু আদর্শ এবং মূল্যবোধের ওপর ভিত্তি করে আমাদের এজেন্সী পরিচালনা করি যা আমাদের কাজের মানে প্রতিফলিত হয়।</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles />, title: "উদ্ভাবন (Innovation)", desc: "আমরা নতুন প্রযুক্তি, টুলস ও কৌশল নিয়ে নিরবচ্ছিন্ন গবেষণা ও উন্নয়ন করি, যাতে প্রতিটি সমাধান হয় আরও কার্যকর, স্মার্ট এবং ফলপ্রসূ " },
              { icon: <ShieldCheck />, title: "স্বচ্ছতা (Integrity)", desc: "ক্লায়েন্টের সাথে প্রতিটি ধাপে স্বচ্ছ যোগাযোগ বজায় রাখি।" },
              { icon: <Award />, title: "কোয়ালিটি (Quality)", desc: "কাজের মানের ক্ষেত্রে আমরা কোনো আপস করি না।" },
              { icon: <Heart />, title: "প্যাশন (Passion)", desc: "প্রতিটি প্রজেক্টকে আমরা নিজের মনে করে সর্বোচ্চ যত্ন নেই।" }
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 border-white/5 hover:-translate-y-2 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-agency-purple mb-6 group-hover:bg-agency-purple group-hover:text-white transition-all duration-300">{v.icon}</div>
                <h4 className="font-bold text-xl mb-3">{v.title}</h4>
                <p className="text-base text-text-dim leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trust Section */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
            <div className="glow-blue w-64 h-64 -top-32 -left-32 opacity-20" />
            <h2 className="text-4xl font-extrabold mb-12">কেন জান্নাত ড্রিমওয়ার্ক (Jannat-Dreamwork)-কে বেছে নেবেন?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
              {[
                { t: "অভিজ্ঞ ডিজিটাল ও ওয়েব এক্সপার্ট টিম", d: "আমাদের টিম গঠিত হয়েছে দক্ষ ওয়েব ডেভেলপার, প্রযুক্তি বিশেষজ্ঞ ও মার্কেটিং স্ট্র্যাটেজিস্টদের নিয়ে, যারা ব্র্যান্ডকে নতুন উচ্চতায় নিয়ে যেতে কাজ করেন।" },
                { t: "ফলাফলমুখী মেথড", d: "আমরা শুধু ভিউ নয়, বরং ব্যবসার সরাসরি সেলস বাড়াতে সাহায্য করি।" },
                { t: "আধুনিক টেক স্ট্যাক", d: "লেটেস্ট জেনারেটিভ এআই মডেল ব্যবহার করে আমরা কাজ সম্পন্ন করি।" },
                { t: "সার্বক্ষণিক সাপোর্ট", d: "যেকোনো সমস্যায় আমাদের সাপোর্ট টিম সব সময় আপনার পাশে থাকবে।" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-agency-purple/20 flex items-center justify-center mt-1 shrink-0">
                    <div className="w-2 h-2 bg-agency-purple rounded-full" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2">{item.t}</h5>
                    <p className="text-base text-text-dim leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Human Touch / Team Intro (Short) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-agency-purple/20 rounded-full blur-2xl" />
              <div className="w-40 h-40 rounded-full glass-card border-4 border-agency-purple/30 overflow-hidden relative">
                <img
                  src="https://i.ibb.co.com/9krV2pMP/team-2.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-2xl font-extrabold mb-1">জান্নাত ড্রিমওয়ার্ক টিম</h4>
              <p className="text-agency-purple font-bold uppercase tracking-widest text-xs">টেকনোলজি ও ক্রিয়েটিভিটির মেলবন্ধন</p>
            </div>
          </div>
          <div className="flex-[2]">
            <h2 className="text-4xl font-extrabold mb-8">আমরা স্বপ্ন দেখি ডিজিটাল আগামীর</h2>
            <p className="text-text-dim text-lg leading-relaxed mb-6">
              আমরা শুধু কোড বা ভিডিও নির্মাতা নই; আমরা প্রতিটি ব্যবসার নির্ভরযোগ্য সহযাত্রী। আপনার সাফল্যই আমাদের অর্জন। আমাদের দক্ষ টিম প্রতিটি প্রজেক্টে আধুনিক প্রযুক্তি ও কৌশলগত এক্সিকিউশনের সর্বোচ্চ ব্যবহার নিশ্চিত করে, যাতে আপনি প্রতিযোগিতার দুনিয়ায় এগিয়ে থাকেন।
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-extrabold text-white">১২৪+</p>
                <p className="text-xs text-text-dim uppercase tracking-widest">হ্যাপি ক্লায়েন্টস</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">১১+</p>
                <p className="text-xs text-text-dim uppercase tracking-widest">এক্সপার্ট মেম্বার্স</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Page CTA */}
      <section className="py-32 px-6 bg-gradient-to-t from-agency-purple/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8">আপনার ব্যবসার পরবর্তী ধাপটি কী?</h2>
          <p className="text-text-dim text-lg mb-12 font-medium">আসুন একসাথে আপনার ব্র্যান্ডকে আধুনিক ডিজিটাল প্রযুক্তির মাধ্যমে নতুনভাবে গড়ে তুলি। একটি ছোট আলোচনা হতে পারে আপনার বড় সাফল্যের সূচনা। </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* <a href="https://wa.me/01833282575" target="_blank" rel="noopener noreferrer" className="btn-primary h-14 px-12 flex items-center justify-center gap-3">
              যোগাযোগ করুন <ArrowRight className="w-5 h-5" />
            </a> */}
            <a
              href="https://wa.me/+8801903771813"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if ((window as any).fbq) {
                  (window as any).fbq("track", "Contact");
                }
              }}
              className="btn-secondary h-14 px-12 text-white flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 text-agency-purple" />
              WhatsApp আলোচনা
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}
