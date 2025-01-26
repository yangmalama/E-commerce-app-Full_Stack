import React from "react";
import { LayoutDashboard } from "lucide-react";

export default function BottomNavbar() {
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between">
      <div className="flex items-center gap-8">
        <button className="flex whitespace-nowrap px-4 py-2 text-white bg-green-500 rounded-lg">
          <LayoutDashboard /> All Departments
        </button>
        <p>Home</p>
        <p>Shop</p>
        <p>Store</p>
        <p>Mega Menu</p>
        <p>Pages</p>
        <p>Dashboard</p>
        <p>Docs</p>
      </div>
      <div> </div>
    </div>
  );
}
