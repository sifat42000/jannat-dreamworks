// filepath: src/pages/NotFound.tsx
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-agency-black flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-[150px] md:text-[200px] font-extrabold text-white/5 leading-none select-none">
          404
        </h1>
        <div className="relative -mt-20 md:-mt-28">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">পেজ খুঁজে পাওয়া যায়নি</h2>
          <p className="text-text-dim text-lg mb-12 max-w-md mx-auto">
            আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে বা কখনোই ছিল না।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="btn-primary h-14 px-10 flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              হোম পেজে ফিরে যান
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary h-14 px-10 flex items-center gap-2 text-white"
            >
              <ArrowLeft className="w-5 h-5" />
              আগের পেজে ফিরে যান
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}