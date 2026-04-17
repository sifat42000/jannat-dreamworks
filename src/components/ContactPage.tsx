import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Facebook, 
  MapPin, 
  Send, 
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      value: "01833282575",
      desc: "দ্রুত উত্তরের জন্য এখনই মেসেজ দিন",
      action: "মেসেজ পাঠান",
      link: "https://wa.me/01833282575",
      color: "bg-green-500/10 text-green-500",
      primary: true
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "সরাসরি কল",
      value: "01833282575",
      desc: "সকাল ১০টা - রাত ৮টা পর্যন্ত",
      action: "কল করুন",
      link: "tel:01833282575",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "ইমেইল",
      value: "jannatdreamwork@gmail.com",
      desc: "যেকোনো প্রপোজাল বা তথ্যের জন্য",
      action: "মেইল পাঠান",
      link: "mailto:jannatdreamwork@gmail.com",
      color: "bg-agency-purple/10 text-agency-purple"
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "ফেসবুক পেজ",
      value: "Jannat-Dreamwork",
      desc: "আমাদের আপডেটগুলো জানতে ফলো করুন",
      action: "পেজে যান",
      link: "https://www.facebook.com/profile.php?id=61581602565099",
      color: "bg-[#1877F2]/10 text-[#1877F2]"
    }
  ];

  return (
    <div className="min-h-screen pt-10 pb-20">
      {/* 1. Page Header */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="glow-blue w-[500px] h-[500px] -top-[200px] -left-40 opacity-20" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag mb-6 inline-block tracking-[0.2em] bg-agency-purple/10 text-agency-purple px-4 py-1.5 rounded-full">কানেক্ট করুন</span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 font-display leading-[1.1]">
              আপনার প্রজেক্ট নিয়ে <br /> 
              <span className="highlight">আলোচনা শুরু করি</span>
            </h1>
            <p className="text-text-dim text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              আপনার ব্যবসার প্রবৃদ্ধি নিশ্চিত করতে আমরা প্রস্তুত। যেকোনো প্রয়োজনে সরাসরি আমাদের সাথে যোগাযোগ করুন।
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* 2. Contact Options - 7 Cols */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`glass-card p-8 border-white/5 relative group transition-all duration-300 ${method.primary ? 'border-green-500/20 bg-green-500/[0.02]' : ''}`}
            >
              {method.primary && (
                <div className="absolute top-4 right-4 animate-pulse">
                   <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                </div>
              )}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${method.color}`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-white font-medium mb-1 text-lg">{method.value}</p>
              <p className="text-sm text-text-dim mb-6 leading-relaxed">{method.desc}</p>
              <button 
                onClick={() => window.open(method.link, '_blank')}
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-100 ${method.primary ? 'text-green-500 opacity-100' : 'text-[#f8fafc]/50'}`}
              >
                {method.action} <ArrowRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}

          {/* Location Card */}
          <div className="sm:col-span-2 glass-card p-8 border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-white/[0.01]">
             <div className="flex gap-6 items-center">
                <div className="w-14 h-14 rounded-2xl bg-agency-accent/10 flex items-center justify-center text-agency-accent">
                   <MapPin className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-xl font-bold mb-1">আমাদের অফিস</h3>
                   <p className="text-sm text-text-dim">Jackfruit House, চুয়াডাঙ্গা, বাংলাদেশ</p>
                </div>
             </div>
             <button 
                onClick={() => window.open('https://www.google.com/maps/search/Jackfruit+House+Chuadanga', '_blank')}
                className="text-sm font-bold border-b border-agency-accent text-agency-accent pb-1 hover:text-white hover:border-white transition-all"
             >
                Google Maps-এ দেখুন
             </button>
          </div>
        </div>

        {/* 3. Contact Form - 5 Cols */}
        <div className="lg:col-span-5">
           <div className="glass-card p-10 border-agency-purple/20 bg-agency-purple/[0.02] relative">
              <div className="absolute -top-10 -right-10 pointer-events-none opacity-20">
                 <Sparkles className="w-24 h-24 text-agency-purple" />
              </div>
              <h3 className="text-2xl font-extrabold mb-8">সরাসরি মেসেজ দিন</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#f8fafc]/50 mb-3 ml-1">আপনার নাম</label>
                    <input 
                      type="text" 
                      placeholder="যেমন: আসিফ জামান"
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-6 outline-none focus:border-agency-purple focus:bg-white/[0.08] transition-all"
                    />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#f8fafc]/50 mb-3 ml-1">ফোন বা ইমেইল</label>
                    <input 
                      type="text" 
                      placeholder="যেমন: example@mail.com"
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-6 outline-none focus:border-agency-purple focus:bg-white/[0.08] transition-all"
                    />
                 </div>
                 <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#f8fafc]/50 mb-3 ml-1">আপনার মেসেজ</label>
                    <textarea 
                      rows={4}
                      placeholder="আপনি কী নিয়ে আলোচনা করতে চান?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-6 outline-none focus:border-agency-purple focus:bg-white/[0.08] transition-all resize-none"
                    />
                 </div>
                 <button className="btn-primary w-full h-16 text-lg flex items-center justify-center gap-3 group">
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> মেসেজ পাঠান
                 </button>
              </form>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-4 text-xs text-text-dim">
                 <Clock className="w-4 h-4 text-agency-purple" />
                 গড় রেসপন্স টাইম: <span className="text-white font-bold underline decoration-agency-purple">১৫ মিনিট</span>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Support Hours Section */}
      <section className="py-32 px-6">
         <div className="max-w-4xl mx-auto glass-card p-12 bg-white/[0.01] border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
               <h4 className="text-3xl font-extrabold mb-2">সাপোর্ট সেন্টার খোলা আছে</h4>
               <p className="text-text-dim text-lg">আমরা সপ্তাহে ৭ দিনই আপনার প্রশ্নের উত্তর দিতে প্রস্তুত।</p>
            </div>
            <div className="flex gap-10">
               <div>
                  <p className="text-3xl font-bold text-white leading-none mb-2">২৪/৭</p>
                  <p className="text-[10px] uppercase tracking-widest text-text-dim">WhatsApp সাপোর্ট</p>
               </div>
               <div className="w-px h-10 bg-white/10" />
               <div>
                  <p className="text-3xl font-bold text-white leading-none mb-2">১০-০৮</p>
                  <p className="text-[10px] uppercase tracking-widest text-text-dim">সরাসরি অফিস টাইম</p>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-extrabold mb-12">সময় নষ্ট না করে আজই শুরু করুন আপনার ডিজিটাল যাত্রা!</h2>
           <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://wa.me/01833282575" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary h-14 px-10 flex items-center gap-3"
              >
                 <MessageCircle className="w-5 h-5" /> WhatsApp-এ যোগাযোগ
              </a>
              <a 
                href="tel:01833282575"
                className="btn-secondary h-14 px-10 flex items-center gap-3 text-white border-white/20"
              >
                 <Phone className="w-5 h-5 text-agency-purple" /> এখনই কল করুন
              </a>
           </div>
        </div>
      </section>
    </div>
  );
}
