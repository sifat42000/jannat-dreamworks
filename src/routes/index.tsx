import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Layout = lazy(() => import("../components/Layout"));
const HomePage = lazy(() => import("../components/HomePage"));
const ServicesPage = lazy(() => import("../components/ServicesPage"));
const ServiceDetailPage = lazy(() => import("../components/ServiceDetailPage"));
const AboutPage = lazy(() => import("../components/AboutPage"));
const ContactPage = lazy(() => import("../components/ContactPage"));
const PortfolioPage = lazy(() => import("../components/PortfolioPage"));
const PricingPage = lazy(() => import("../components/PricingPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "service", element: <ServicesPage /> },
      { path: "service/:serviceId", element: <ServiceDetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "services",
    element: <Navigate to="/service" replace />,
  },
];
