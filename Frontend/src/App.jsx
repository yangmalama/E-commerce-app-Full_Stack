import React from "react";
import "./App.CSS";
import TopNavbar from "./components/top-navbar";
import MiddleNavbar from "./components/middle-navbar";
import BottomNavbar from "./components/bottom-navbar";
import HeroSectionSlider from "./components/hero-section-slider";
import FeatureCategoriesSection from "./components/feature-categories-section";
import BannerSection from "./components/banner-section";
import PopularProductSection from "./components/popular-product-section";

export default function App() {
  return (
    <div className="space-y-4">
      <TopNavbar />
      <MiddleNavbar />
      <BottomNavbar/>
      <hr className="text-gray-200"/>
      <HeroSectionSlider/>
      <FeatureCategoriesSection/>
      <BannerSection/>
      <PopularProductSection/>
        
    </div>
  );
}
