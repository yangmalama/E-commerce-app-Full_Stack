import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Docs from "./pages/docs.jsx";
import Dashboard from "./pages/dashboard.jsx";
import SingleCategory from "./pages/single-category.jsx";
import MiddleNavbar from "./components/middle-navbar.jsx";
import BottomNavbar from "./components/bottom-navbar.jsx";
import TopNavbar from "./components/top-navbar.jsx";
import Footer from "./components/footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="space-y-6">
        <TopNavbar />
        <MiddleNavbar />
        <BottomNavbar />
        <hr className="text-gray-200" />
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories/:id" element={<SingleCategory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
