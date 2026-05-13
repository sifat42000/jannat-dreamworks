export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-agency-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-agency-purple border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-agency-purple font-bold text-lg tracking-wide">
          লোড হচ্ছে...
        </p>
      </div>
    </div>
  );
}