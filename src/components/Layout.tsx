import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { trackPageView } from "../Utils/pixel";
import {
  Sparkles,
  Home,
  Briefcase,
  CreditCard,
  MessageCircle,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "হোম", path: "/", icon: <Home className="w-5 h-5" /> },
  { label: "সার্ভিসসমূহ", path: "/service", icon: <Briefcase className="w-5 h-5" /> },
  { label: "আমাদের সম্পর্কে", path: "/about", icon: <CreditCard className="w-5 h-5" /> },
  { label: "যোগাযোগ", path: "/contact", icon: <MessageCircle className="w-5 h-5" /> },
];

const MOBILE_ITEMS = [
  { label: "হোম", path: "/", icon: <Home className="w-5 h-5" /> },
  { label: "সার্ভিস", path: "/service", icon: <Briefcase className="w-5 h-5" /> },
  { label: "আমাদের সম্পর্কে", path: "/about", icon: <CreditCard className="w-5 h-5" /> },
  { label: "যোগাযোগ", path: "/contact", icon: <MessageCircle className="w-5 h-5" /> },
];

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-agency-black selection:bg-agency-purple/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(217,70,239,0.1)_0%,transparent_50%),radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05)_0%,transparent_100%)]" />
        <div className="glow-purple w-[800px] h-[800px] -top-[400px] -left-[200px] opacity-10 animate-pulse" />
        <div className="glow-blue w-[700px] h-[700px] top-1/2 -right-[100px] opacity-10" />
      </div>

      <nav className="sticky top-0 z-[100] border-b border-white/5 bg-agency-black/60 backdrop-blur-[12px]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <NavLink to="/" end className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-tr from-agency-purple to-agency-accent rounded-lg flex items-center justify-center shadow-lg shadow-agency-purple/20">
              <img src="/logo/jannat-logo.jpeg" width={36} height={36} decoding="async" loading="eager" className="rounded-full" alt="Jannat-Dreamwork logo" />
            </div>
            <span className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-agency-purple to-agency-accent bg-clip-text text-transparent uppercase">
              Jannat-Dreamwork
            </span>
          </NavLink>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `nav-link text-sm uppercase tracking-widest font-bold transition-all ${isActive ? "text-[#f8fafc] highlight scale-105" : "hover:scale-105"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <NavLink to="/contact" className="hidden sm:flex btn-primary py-2.5 px-8 text-sm">
              যোগাযোগ করুন
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-agency-black/80 backdrop-blur-xl border-t border-white/5 pb-safe">
        <div className="flex items-center justify-around h-20 px-4">
          {MOBILE_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1.5 transition-all duration-300 relative ${isActive ? "text-agency-purple scale-110" : "text-text-dim hover:text-white"}`
              }
            >
              <div className={`p-2 rounded-xl transition-all ${location.pathname === item.path || (item.path === "/service" && location.pathname.startsWith("/service")) ? "bg-agency-purple/10" : ""}`}>
                {item.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
              {location.pathname === item.path || (item.path === "/service" && location.pathname.startsWith("/service")) ? (
                <motion.div layoutId="activeTabMobile" className="absolute -top-1 w-1 h-1 bg-agency-purple rounded-full" />
              ) : null}
            </NavLink>
          ))}
        </div>
      </div>

      <main className="relative z-10">
        <Outlet />
      </main>

      <footer className="pt-24 pb-12 bg-black/40 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            <div className="space-y-6">
              <NavLink to="/" end className="flex items-center gap-2">
                <div className="w-8 h-8 bg-agency-purple rounded-lg flex items-center justify-center">
                  <Sparkles className="text-white w-4 h-4" />
                </div>
                <span className="text-xl font-bold tracking-tight">Jannat-Dreamwork</span>
              </NavLink>
              <p className="text-base text-text-dim leading-relaxed">
                Jannat-Dreamwork — আগামী প্রজন্মের একটি ডিজিটাল এজেন্সি। আমরা ক্রিয়েটিভিটি এবং প্রযুক্তির সমন্বয়ে আপনার ব্যবসার দ্রুত প্রবৃদ্ধি নিশ্চিত করি।
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, link: "https://www.facebook.com/profile.php?id=61581602565099" },
                  { Icon: Instagram, link: "https://www.instagram.com/jannat_dreamworks/" },
                  { Icon: Youtube, link: "https://www.youtube.com/@JannatDreamworks" },
                ].map(({ Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-agency-purple/20 transition-all text-white/40 hover:text-agency-purple"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#f8fafc]/80">দ্রুত লিঙ্ক</h5>
              <ul className="space-y-4 text-sm text-text-dim">
                <li>
                  <NavLink to="/" end className="hover:text-agency-purple transition-colors block">
                    হোম
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/service" className="hover:text-agency-purple transition-colors block">
                    সার্ভিসসমূহ
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="hover:text-agency-purple transition-colors block">
                    আমাদের সম্পর্কে
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className="hover:text-agency-purple transition-colors block">
                    যোগাযোগ
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-[#f8fafc]/80">সার্ভিসসমূহ</h5>
              <ul className="space-y-4 text-sm text-text-dim">
                {[
                  "Website Design & Development",
                  "AI-Powered Video Production",
                  "Meta Ads & Digital Marketing",
                  "Branding & Content Creation",
                  "Creative Video & Ad Production",
                ].map((l) => (
                  <li key={l}>
                    <NavLink to="/service" className="hover:text-agency-purple transition-colors block">
                      {l}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 text-base uppercase tracking-widest text-[#f8fafc]/80">যোগাযোগ</h5>
              <ul className="space-y-4 text-base text-text-dim">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-agency-purple mt-1 flex-shrink-0" /> চুয়াডাঙ্গা, বাংলাদেশ
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-agency-purple flex-shrink-0" /> 01833282575
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-agency-purple flex-shrink-0" /> jannatdreamwork@gmail.com
                </li>
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

      <div className="fixed bottom-28 lg:bottom-6 right-6 z-[100] flex flex-col gap-4 items-end">
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
        <a
          href="https://wa.me/+8801903771813"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute right-full mr-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp মেসেজ দিন
          </span>
        </a>
      </div>
    </div>
  );
}
