import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Docs from "./pages/docs.jsx";
import Dashboard from "./pages/dashboard.jsx";
import SingleCategory from "./pages/single-category.jsx";
import MiddleNavbar from "./components/middle-navbar.jsx";
import BottomNavbar from "./components/bottom-navbar.jsx";
import TopNavbar from "./components/top-navbar.jsx";
import Footer from "./components/footer.jsx";
import Shop from "./pages/shop.jsx";
import Stores from "./pages/stores.jsx";
import MegaMenu from "./pages/mega-menu.jsx";
import Pages from "./pages/pages.jsx";
import ProductDescription from "./pages/product-description.jsx";
import SignIn from "./pages/sign-in.jsx";
import SignUp from "./pages/sign-up.jsx";
import Reset_Password from "./components/forget-password.jsx";


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <div className="space-y-6">
//         <TopNavbar />
//         <MiddleNavbar />
//         <BottomNavbar />
//         <hr className="text-gray-200" />
//       </div>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/stores" element={<Stores />} />
//         <Route path="/megamenu" element={<MegaMenu />} />
//         <Route path="/pages" element={<Pages />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/docs" element={<Docs />} />
//         <Route path="/categories/:id" element={<SingleCategory />} />

//         <Route path="/shop/:id" element={<ProductDescription />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   </StrictMode>
// );

export function Root(){
  const location = useLocation();
  
  return (
    <StrictMode>
     {location.pathname !== "/sign_in" && location.pathname !== "/sign_up" && location.pathname !== "/reset_password" && <div className="space-y-4"> 
        <TopNavbar />
        <MiddleNavbar />
        <BottomNavbar />
        <hr className="text-gray-200" />
      </div>}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/megamenu" element={<MegaMenu />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/categories/:id" element={<SingleCategory />} />
        <Route path="/shop/:id" element={<ProductDescription />} />
        <Route path="/sign_in" element={<SignIn/>} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/reset_password" element={<Reset_Password />} />
      </Routes>
      <Footer />
  </StrictMode>
  )

}
createRoot(document.getElementById("root")).render(
   <BrowserRouter>  <Root /> </BrowserRouter>);