// filepath: src/data/services.ts
import type { ReactNode } from "react";
import {
  Globe,
  Video,
  TrendingUp,
  Mic2,
  PenTool,
} from "lucide-react";

export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServicePackage {
  name: string;
  price: string;
  delivery: string;
  features: string[];
  highlight?: boolean;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceHero {
  badge: string;
  headline: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  desc?: string; // Short description for Home page
  icon: ReactNode;
  hero: ServiceHero;
  targetUsers: string[];
  features: ServiceFeature[];
  packages: ServicePackage[];
  faq: ServiceFAQ[];
}

// Central service data - single source of truth
export const SERVICES: Service[] = [
  {
    id: "web-design",
    title: "🌐 Website Design & Development",
    desc: "একটি প্রফেশনাল ওয়েবসাইটই আপনার ব্র্যান্ডের প্রথম ইমপ্রেশন। আমরা এমন একটি প্ল্যাটফর্ম তৈরি করি যেখানে ডিজাইন, স্পিড ও কনভার্সন একসাথে কাজ করে আপনার ব্যবসাকে পরবর্তী লেভেলে নিয়ে যেতে।",
    icon: <Globe />,
    hero: {
      badge: "Website Design & Development",
      headline: "ওয়েবসাইট নয় একটি সেলস মেশিন তৈরি করুন",
      description: "একটি প্রফেশনাল ওয়েবসাইটই আপনার ব্র্যান্ডের প্রথম ইমপ্রেশন। আমরা এমন একটি প্ল্যাটফর্ম তৈরি করি যেখানে ডিজাইন, স্পিড ও কনভার্সন একসাথে কাজ করে আপনার ব্যবসাকে পরবর্তী লেভেলে নিয়ে যেতে।",
    },
    targetUsers: [
      "ই-কমার্স ব্যবসা যারা একটি প্রফেশনাল ওয়েবসাইটের মাধ্যমে অর্ডার ও সেল বাড়াতে চায়।",
      "সার্ভিস-বেসড বিজনেস যারা ওয়েবসাইটের মাধ্যমে client, lead ও credibility বাড়াতে চায়।",
      "ব্র্যান্ড ও কোম্পানি যারা তাদের অনলাইন উপস্থিতিকে প্রিমিয়াম ও বিশ্বাসযোগ্য করতে চায়।",
      "স্টার্টআপ ও নতুন উদ্যোক্তা যারা শুরু থেকেই একটি strong online foundation গড়তে চায়।",
      "যারা শুধু Facebook-এ নির্ভরশীল এখন নিজেদের একটি নিজস্ব platform তৈরি করতে চায়।",
    ],
    features: [
      { title: "High-Performance Website", desc: "দ্রুত লোডিং, স্মুথ ইউজার এক্সপেরিয়েন্স, যাতে ভিজিটর আসে, থাকে, এবং অ্যাকশন নেয়।" },
      { title: "Conversion-Focused Design", desc: "শুধু সুন্দর না প্রতিটি সেকশন এমনভাবে ডিজাইন করা যাতে ভিজিটর সহজেই কাস্টমারে পরিণত হয়।" },
      { title: "SEO-Friendly Structure", desc: "গুগলে সহজে র‍্যাংক করার জন্য সঠিক স্ট্রাকচার ও অপ্টিমাইজেশন নিশ্চিত করি।" },
      { title: "Fully Responsive Design", desc: "মোবাইল, ট্যাব, ডেস্কটপ সব ডিভাইসে নিখুঁত পারফরম্যান্স।" },
      { title: "Secure & Reliable System", desc: "আপনার ওয়েবসাইট থাকবে সুরক্ষিত, দ্রুত ও নির্ভরযোগ্য সার্ভারে।" },
      { title: "Smart Business Integration", desc: "পেমেন্ট, অর্ডার, লিড কালেকশন সবকিছু এক জায়গা থেকে ম্যানেজ করা যায়।" },
      { title: "Growth-Ready Setup", desc: "আপনার ব্যবসা বড় হওয়ার সাথে সাথে ওয়েবসাইটও স্কেল করার জন্য প্রস্তুত।" },
    ],
    packages: [
      { name: "Basic", price: "৳১৯,৯৯৯", delivery: "৫ দিন", features: ["৫ পেজ ওয়েবসাইট", "মোবাইল রেসপনসিভ", "বেসিক SEO", "১টি রিভিশন"] },
      { name: "Standard", price: "৳৩৯,৯৯৯", delivery: "৭ দিন", features: ["১০+ পেজ", "Advanced UI/UX", "Speed Optimization", "৩টি রিভিশন"], highlight: true },
      { name: "Premium", price: "৳৭৯,৯৯৯", delivery: "১০ দিন", features: ["Custom Web App", "Full SEO সেটআপ", "Conversion Funnel", "Unlimited Revision"] },
    ],
    faq: [
      { q: "একটি ওয়েবসাইট তৈরি করতে কতদিন সময় লাগে?", a: "আপনার প্রজেক্টের ধরন অনুযায়ী সাধারণত ৫–১০ দিনের মধ্যেই আমরা একটি সম্পূর্ণ functional ও visually stunning ওয়েবসাইট ডেলিভারি করি।" },
      { q: "ওয়েবসাইটটি কি মোবাইল ও সব ডিভাইসে ভালোভাবে কাজ করবে?", a: "অবশ্যই। আমরা fully responsive design ব্যবহার করি, যাতে আপনার ওয়েবসাইট মোবাইল, ট্যাব ও ডেস্কটপ—সব জায়গায় smooth ও professional দেখায়।" },
      { q: "আমি কি নিজে ওয়েবসাইটের কন্টেন্ট আপডেট করতে পারবো?", a: "হ্যাঁ, আমরা সহজ CMS (Content Management System) দিয়ে থাকি, যাতে আপনি কোনো coding knowledge ছাড়াই নিজেই content update করতে পারেন।" },
    ],
  },
  {
    id: "ai-video",
    title: "🤖 AI-Powered Video Production",
    desc: "আমরা AI প্রযুক্তি ব্যবহার করে তৈরি করি high-converting video content. যা শুধু সুন্দর না, বরং আপনার business-এর জন্য attention, engagement ও real sales নিয়ে আসে। Fast production, কম খরচ এবং premium quality সব একসাথে।",
    icon: <Video />,
    hero: {
      badge: "AI-Powered Video Production",
      headline: "AI দিয়ে ভিডিও, দ্রুত ও সস্তায়",
      description: "আমরা AI প্রযুক্তি ব্যবহার করে তৈরি করি high-converting video content. যা শুধু সুন্দর না, বরং আপনার business-এর জন্য attention, engagement ও real sales নিয়ে আসে।",
    },
    targetUsers: [
      "যারা দ্রুত ও সাশ্রয়ী মূল্যে প্রোফেশনাল ভিডিও কন্টেন্ট চান।",
      "যারা বেশি সময় না লাগিয়ে প্রচুর ভিডিও তৈরি করতে চান।",
      "সোশ্যাল মিডিয়া মার্কেটার যারা নিয়মিত ভিডিও কন্টেন্ট প্রয়োজন।",
      "এসএমই ব্যবসায়ী যারা ছোট বাজেটে ব্র্যান্ড প্রমোশন চান।",
    ],
    features: [
      { title: "AI-Powered Creation", desc: "আধুনিক AI টুলস দিয়ে দ্রুত ও মানসম্মত ভিডিও তৈরি।" },
      { title: "Fast Turnaround", desc: "ঐতিহ্যবাহী প্রোডাকশনের তুলনায় অনেক দ্রুত।" },
      { title: "Cost-Effective", desc: "কম বাজেটে বেশি ভিডিও — ব্যবসার জন্য সাশ্রয়ী।" },
      { title: "Professional Quality", desc: "প্রোফেশনাল লুক ও ফিল যা ব্র্যান্ডের মান বাড়ায়।" },
      { title: "Multi-Platform Ready", desc: "সোশ্যাল মিডিয়া, ইউটিউব, ওয়েবসাইট সব জায়গায় ব্যবহারযোগ্য।" },
    ],
    packages: [
      { name: "Starter", price: "৳৫,৯৯৯", delivery: "২ দিন", features: ["৩টি AI ভিডিও", "Basic স্ক্রিপ্ট", "২টি রিভিশন", "ইমেইল সাপোর্ট"] },
      { name: "Growth", price: "৳১৪,৯৯৯", delivery: "৫ দিন", features: ["১০টি AI ভিডিও", "Advanced স্ক্রিপ্ট", "কাস্টম ভয়েস", "Priority সাপোর্ট"], highlight: true },
      { name: "Business", price: "৳২৯,৯৯৯", delivery: "৭ দিন", features: ["আনলিমিটেড ভিডিও", "Full ব্র্যান্ডিং", "Dedicated Manager", "২৪/৭ সাপোর্ট"] },
    ],
    faq: [
      { q: "AI দিয়ে তৈরি ভিডিও কতটা প্রোফেশনাল?", a: "আমাদের AI টুলস প্রোফেশনাল গ্রেডের, যা ম্যানুয়ালি তৈরি ভিডিওর মানের কাছাকাছি।" },
      { q: "কতদিনে ভিডিও পাব?", a: "প্যাকেজ অনুযায়ী ২-৭ দিনের মধ্যে ডেলিভারি করি।" },
    ],
  },
  {
    id: "marketing",
    title: "📊 Meta Ads & Digital Marketing",
    desc: "আপনার ব্যবসার জন্য শুধু বিজ্ঞাপন চালানো নয়,আমরা তৈরি করি এমন স্ট্র্যাটেজি যা সঠিক অডিয়েন্সে পৌঁছে, লিড আনে এবং সেলসে রূপ নেয়। Data-driven decision ও smart targeting দিয়ে আপনার প্রতিটি টাকাকে করি profitable।",
    icon: <TrendingUp />,
    hero: {
      badge: "Meta Ads & Digital Marketing",
      headline: "আপনার বিজ্ঞাপন থেকে সেলস আনুন",
      description: "আপনার ব্যবসার জন্য শুধু বিজ্ঞাপন চালানো নয়,আমরা তৈরি করি এমন স্ট্র্যাটেজি যা সঠিক অডিয়েন্সে পৌঁছে, লিড আনে এবং সেলসে রূপ নেয়।",
    },
    targetUsers: [
      "ই-কমার্স ব্যবসা যারা অনলাইনে প্রোডাক্ট বিক্রি বাড়াতে চান।",
      "সার্ভিস ব্যবসা যারা নতুন ক্লায়েন্ট পেতে চান।",
      "ব্র্যান্ড যারা অডিয়েন্স বিল্ড করতে চায়।",
    ],
    features: [
      { title: "Targeted Campaigns", desc: "সঠিক অডিয়েন্স টার্গেট করে বিজ্ঞাপন চালানো।" },
      { title: "A/B Testing", desc: "বিভিন্ন অ্যাড ভার্সন টেস্ট করে সেরা পারফরম্যান্স বের করা।" },
      { title: "Conversion Tracking", desc: "প্রতিটি ক্লিক ও কনভার্সন ট্র্যাক করা।" },
      { title: "Retargeting", desc: "আগের ভিজিটরদের টার্গেট করে রি-এঙ্গেজ করা।" },
    ],
    packages: [
      { name: "Basic", price: "৳১৫,০০০", delivery: "৩ দিন", features: ["১টি ক্যাম্পেইন", "Audience Setup", "Basic রিপোর্ট", "এক মাস সাপোর্ট"] },
      { name: "Pro", price: "৳৩০,০০০", delivery: "৫ দিন", features: ["৩টি ক্যাম্পেইন", "A/B Testing", "Advanced রিপোর্ট", "তিন মাস সাপোর্ট"], highlight: true },
      { name: "Enterprise", price: "৫০,০০০", delivery: "৭ দিন", features: ["আনলিমিটেড ক্যাম্পেইন", "Full Funnel", "Dedicated Manager", "৬ মাস সাপোর্ট"] },
    ],
    faq: [
      { q: "কতদিনে রেজাল্ট দেখতে পাব?", a: "সাধারণত ৭-১৪ দিনের মধ্যে প্রথম রেজাল্ট দেখা যায়।" },
    ],
  },
  {
    id: "branding",
    title: "🎨 Branding & Content Creation",
    desc: "আপনার ব্র্যান্ডের জন্য আমরা তৈরি করি creative, engaging এবং conversion-focused video ads যা প্রথম ৩ সেকেন্ডেই attention ধরে এবং দর্শককে কাস্টমারে পরিণত করে। Storytelling, strategy এবং marketing psychology সব একসাথে।",
    icon: <Mic2 />,
    hero: {
      badge: "Branding & Content Creation",
      headline: "আপনার ব্র্যান্ডকে অনন্য করুন",
      description: "আপনার ব্র্যান্ডের জন্য আমরা তৈরি করি creative, engaging এবং conversion-focused video ads যা প্রথম ৩ সেকেন্ডেই attention ধরে।",
    },
    targetUsers: [
      "নতুন ব্র্যান্ড যারা মার্কেটে আলাদা পরিচয় তৈরি করতে চায়।",
      "এক্সিস্টিং ব্র্যান্ড যারা রিব্র্যান্ডিং চান।",
      "কন্টেন্ট ক্রিয়েটর যারা প্রোফেশনাল কন্টেন্ট চান।",
    ],
    features: [
      { title: "Brand Identity", desc: "সম্পূর্ণ ব্র্যান্ড আইডেন্টিটি তৈরি।" },
      { title: "Visual Consistency", desc: "সব প্ল্যাটফর্মে ভিজ্যুয়াল সামঞ্জস্য।" },
      { title: "Content Strategy", desc: "দীর্ঘমেয়াদী কন্টেন্ট প্ল্যান।" },
    ],
    packages: [
      { name: "Startup", price: "২০,০০০", delivery: "৫ দিন", features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"] },
      { name: "Growth", price: "৪০,০০০", delivery: "৭ দিন", features: ["Full Brand Kit", "Social Media Kit", "Brand Strategy", "৩ মাস সাপোর্ট"], highlight: true },
      { name: "Premium", price: "৭৫,০০০", delivery: "১০ দিন", features: ["Complete Identity", "Motion Graphics", "Content Calendar", "৬ মাস সাপোর্ট"] },
    ],
    faq: [],
  },
  {
    id: "creative-video",
    title: "🎥 Creative Video & Ad Production",
    desc: "কাস্টম কনটেন্ট ও স্টোরিটেলিং এর মাধ্যমে আমরা আপনার ব্র্যান্ডকে ইউনিক করে তুলি।",
    icon: <PenTool />,
    hero: {
      badge: "Creative Video & Ad Production",
      headline: "ক্রিয়েটিভ ভিডিও দিয়ে ব্র্যান্ড প্রমোশন",
      description: "কাস্টম কনটেন্ট ও স্টোরিটেলিং এর মাধ্যমে আমরা আপনার ব্র্যান্ডকে ইউনিক করে তুলি।",
    },
    targetUsers: [
      "যারা প্রোফেশনাল ভিডিও অ্যাড চান।",
      "ব্র্যান্ড প্রমোশনের জন্য ক্রিয়েটিভ কন্টেন্ট প্রয়োজন।",
    ],
    features: [
      { title: "Custom Production", desc: "পুরোপুরি কাস্টম ভিডিও প্রোডাকশন।" },
      { title: "Script Writing", desc: "প্রোফেশনাল স্ক্রিপ্ট রাইটিং।" },
      { title: "Professional Editing", desc: "এডিটিং ও পোস্ট প্রোডাকশন।" },
    ],
    packages: [
      { name: "Basic", price: "১০,০০০", delivery: "৩ দিন", features: ["১টি ভিডিও", "Basic স্ক্রিপ্ট", "২টি রিভিশন"] },
      { name: "Standard", price: "২৫,০০০", delivery: "৫ দিন", features: ["৩টি ভিডিও", "প্রো স্ক্রিপ্ট", "কাস্টম এডিটিং"], highlight: true },
      { name: "Premium", price: "৫০,০০০", delivery: "৭ দিন", features: ["৫টি ভিডিও", "Full Production", "Unlimited রিভিশন"] },
    ],
    faq: [],
  },
];

// Helper function to find service by ID with robust matching
export const findServiceById = (id: string | undefined): Service | undefined => {
  if (!id) return undefined;
  return SERVICES.find(service => String(service.id) === String(id));
};

// Export SERVICES_DATA for backward compatibility
export const SERVICES_DATA = SERVICES;