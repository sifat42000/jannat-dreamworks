import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  const element = useRoutes(routes);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {element}
    </Suspense>
  );
}
