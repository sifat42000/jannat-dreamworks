import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronRight, MessageCircle, Sparkles, Globe, TrendingUp, PenTool, Video, Mic2 } from "lucide-react";
import { SERVICES_DATA } from "./servicesData";

export default function HomePage() {
  const getIcon = (id: string) => {
    switch (id) {
      case "web-design":
        return <Globe className="w-7 h-7" />;
      case "ai-video":
        return <Video className="w-7 h-7" />;
      case "marketing":
        return <TrendingUp className="w-7 h-7" />;
      case "branding":
        return <Mic2 className="w-7 h-7" />;
      case "creative-video":
        return <PenTool className="w-7 h-7" />;
      default:
        return <Globe className="w-7 h-7" />;
    }
  };

  return (
    <div className="animate-in fade-in duration-700">
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
              <Link
                to="/contact"
                className="btn-primary text-base px-10 h-14 min-w-[200px] flex items-center justify-center gap-2"
              >
                যোগাযোগ করুন <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/+8801903771813"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-10 h-14 min-w-[200px] flex items-center justify-center gap-2 text-white"
              >
                <MessageCircle className="w-5 h-5 text-agency-purple" />
                WhatsApp-এ কথা বলুন
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-text-dim text-xs font-bold uppercase tracking-[0.3em] mb-10">আমাদের ওপর যারা আস্থা রেখেছে</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {[
              "Chuadanga Event Planner",
              "Rongdhonu Gift Garden",
              "Fit Up Chuadanga",
              "MR Enterprise",
              "Smart Husiyari",
            ].map((name) => (
              <div key={name} className="flex items-center gap-2 font-extrabold text-2xl tracking-tighter italic text-[#f8fafc]">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

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

          <Link
            to="/service"
            className="btn-secondary flex items-center gap-2"
          >
            সবগুলো দেখুন <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((s, i) => (
            <motion.div
              key={s.id}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group border-white/5 hover:border-agency-purple/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-agency-purple">
                {getIcon(s.id)}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-base text-text-dim leading-relaxed mb-6">{s.hero.description.slice(0, 100)}...</p>
            <Link
  to={`/service/${s.id}`}
  className="mt-auto inline-flex w-fit min-w-[150px] items-center justify-center gap-2 rounded-xl bg-white/5 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-agency-purple"
>
  বিস্তারিত দেখুন <ChevronRight className="w-4 h-4" />
</Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">কেন আমরা আলাদা?</h2>
            <p className="text-text-dim mb-12 font-medium">
              কারণ আমরা সার্ভিস প্রদান করি না — আমরা আপনার ব্র্যান্ডের গল্পকে জীবন্ত করে তুলি।
            </p>
            <div className="space-y-8">
              {[
                { icon: <Sparkles />, title: "ইনোভেটিভ ডিজিটাল সলিউশন", desc: "আমরা আধুনিক ট্রেন্ড ও ক্রিয়েটিভিটির মাধ্যমে আপনার ব্র্যান্ডকে আলাদা করে তুলে ধরি।" },
                { icon: <ChevronRight className="w-5 h-5" />, title: "ফলাফলমুখী মেথড", desc: "আমাদের প্রতিটি কাজ সেলস এবং ইউজার এঙ্গেজমেন্ট বাড়ানোর কথা মাথায় রেখে করা হয়।" },
                { icon: <Sparkles className="w-5 h-5" />, title: "অভিজ্ঞ ও দক্ষ টিম", desc: "আমাদের রয়েছে দক্ষ এবং ক্রিয়েটিভ ডিজাইনারদের একটি সমন্বিত টিম।" },
                { icon: <Sparkles className="w-5 h-5" />, title: "২৪/৭ গ্রাহক সাপোর্ট", desc: "প্রজেক্ট পরবর্তী যেকোনো প্রয়োজনে আমাদের টিম সার্বক্ষণিক আপনার সেবায় নিয়োজিত।" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-agency-purple/10 flex items-center justify-center text-agency-purple group-hover:bg-agency-purple group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-lg">{item.title}</h4>
                    <p className="text-base text-text-dim leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group pt-12 md:pt-0">
            <div className="aspect-square glass-card rotate-3 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gradient-to-tr from-agency-purple/20 to-agency-blue/20 rounded-full blur-3xl animate-pulse" />
              <img src="https://i.ibb.co.com/PS7VTtn/spark.png" width={240} height={240} decoding="async" loading="eager" fetchpriority="high" className="absolute w-1/2 h-1/2 object-contain" alt="Spark visual" />
              <p className="text-white/10 font-bold text-4xl sm:text-6xl md:text-7xl absolute select-none tracking-tighter">Jannat-Dreamwork</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-16">কাজের ধাপসমূহ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          {[
            { step: "০১", title: "প্রথম আলোচনা", desc: "আপনার ব্রান্ড ভিশন এবং প্রজেক্টের গোলগুলো আমরা বিস্তারিত বুঝে নেই।" },
            { step: "০২", title: "আইডিয়া ও স্ক্রিপ্ট", desc: "আপনার জন্য কাস্টম স্ক্রিপ্ট এবং আধুনিক ভিজ্যুয়াল স্টোরিবোর্ড তৈরি করি।" },
            { step: "০৩", title: "ক্রিয়েটিভ প্রোডাকশন", desc: "আপনার ব্র্যান্ডের জন্য আমরা পরিকল্পনা থেকে বাস্তবায়ন—সবকিছু একসাথে করি, যেখানে প্রতিটি ডিটেইলে থাকে স্ট্র্যাটেজি, ক্রিয়েটিভিটি ও পারফেকশন।" },
            { step: "০৪", title: "সন্তুষ্টি ও ডেলিভারি", desc: "আপনার ফিডব্যাক অনুযায়ী ফাইনাল টাচ দিয়ে প্রজেক্ট সফলভাবে হস্তান্তর করি।" },
          ].map((p) => (
            <div key={p.step} className="relative group">
              <div className="w-16 h-16 rounded-full bg-agency-black border border-white/10 flex items-center justify-center mx-auto mb-6 text-xl font-bold text-agency-purple group-hover:border-agency-purple transition-all relative z-10">
                {p.step}
              </div>
              <h4 className="text-2xl font-extrabold mb-3">{p.title}</h4>
              <p className="text-base text-text-dim leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 text-center relative overflow-hidden border-agency-purple/30">
          <div className="glow-purple w-[400px] h-[400px] absolute -top-40 -right-40 opacity-20" />
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 relative z-10 leading-[1.1]">
            আপনার ব্যবসাকে ডিজিটাল বিপ্লবের <br /> <span className="highlight">সাথী করতে প্রস্তুত?</span>
          </h2>
          <p className="text-text-dim text-xl mb-12 max-w-2xl mx-auto relative z-10 font-medium">
            ডেটা, অভিজ্ঞতা ও মার্কেট ইনসাইটের মাধ্যমে
            আমরা আপনাকে সঠিক পথে এগিয়ে যেতে সাহায্য করি।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="btn-primary h-14 px-10 flex items-center gap-3"
            >
              <Sparkles className="w-5 h-5" /> যোগাযোগ করুন
            </Link>
            <a
              href="https://wa.me/+8801903771813"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary h-14 px-10 flex items-center gap-3 text-white"
            >
              <MessageCircle className="w-5 h-5 text-agency-purple" /> সরাসরি কথা বলুন
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
