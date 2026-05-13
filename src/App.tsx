import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

export default function App() {
  const element = useRoutes(routes);

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-agency-black text-white flex items-center justify-center">
          লোড হচ্ছে...
        </div>
      }
    >
      {element}
    </Suspense>
  );
}
