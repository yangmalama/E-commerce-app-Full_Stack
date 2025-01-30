import React from 'react'
import { Clock, Gift, Package, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <Clock size={36} className="text-green-600" />,
    title: "10-minute grocery now",
    description:
      "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
  },
  {
    icon: <Gift size={36} className="text-green-600" />,
    title: "Best Prices & Offers",
    description:
      "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.",
  },
  {
    icon: <Package size={36} className="text-green-600" />,
    title: "Wide Assortment",
    description:
      "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
  },
  {
    icon: <RefreshCw size={36} className="text-green-600" />,
    title: "Easy Returns",
    description:
      "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.",
  },
];

export default function PromotionSection() {
  return (
    <div className="w-10/12 mx-auto py-12 px-4 bg-gray-100/50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col p-4">
          <div className="mr-4 py-4">{feature.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}





