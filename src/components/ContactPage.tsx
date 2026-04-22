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

import { trackContact, trackCTA } from "../Utils/pixel";

export default function ContactPage() {

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      value: "01903771813",
      desc: "দ্রুত উত্তরের জন্য এখনই মেসেজ দিন",
      action: "মেসেজ পাঠান",
      link: "https://wa.me/01903771813",
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
      value: "jannatdreamworks@gmail.com",
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

      {/* HEADER */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            আপনার প্রজেক্ট নিয়ে <span className="highlight">আলোচনা শুরু করি</span>
          </h1>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">

          {contactMethods.map((method, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`glass-card p-8 border-white/5 relative group transition-all duration-300 ${method.primary ? 'border-green-500/20 bg-green-500/[0.02]' : ''}`}
            >

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${method.color}`}>
                {method.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-white font-medium mb-1 text-lg">{method.value}</p>
              <p className="text-sm text-text-dim mb-6">{method.desc}</p>

              {/* 🔥 TRACKED BUTTON */}
              <button
                onClick={() => {
                  window.open(method.link, '_blank');

                  if (method.title === "WhatsApp") {
                    trackContact();
                    trackCTA("WhatsApp Click");
                  }

                  if (method.title === "সরাসরি কল") {
                    trackContact();
                    trackCTA("Phone Call Click");
                  }
                }}
                className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${method.primary ? 'text-green-500' : 'text-[#f8fafc]/50'}`}
              >
                {method.action} <ArrowRight className="w-3 h-3" />
              </button>

            </motion.div>
          ))}

          {/* LOCATION */}
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

        {/* FORM (unchanged) */}
        {/* <div className="lg:col-span-5">
          <div className="glass-card p-10">
            <h3 className="text-2xl font-extrabold mb-8">মেসেজ দিন</h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

              <input className="w-full h-14 bg-white/5 border rounded-xl px-6" placeholder="আপনার নাম" />
              <input className="w-full h-14 bg-white/5 border rounded-xl px-6" placeholder="ফোন বা ইমেইল" />
              <textarea className="w-full bg-white/5 border rounded-xl p-6" rows={4} placeholder="মেসেজ" />

              <button className="btn-primary w-full h-16 flex items-center justify-center gap-3">
                <Send className="w-5 h-5" /> পাঠান
              </button>

            </form>

          </div>
        </div> */}

      </section>

    </div>
  );
}