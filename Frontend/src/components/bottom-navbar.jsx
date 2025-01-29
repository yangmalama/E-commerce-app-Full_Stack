import React from "react";
import { LayoutDashboard, Menu } from "lucide-react";
import { NavLink } from "react-router";

export default function BottomNavbar() {
  return (
    <div className="w-10/12 mx-auto flex items-center justify-between">
      <div className="flex items-center gap-8">
        <button className="flex whitespace-nowrap px-4 py-2 text-white bg-green-500 rounded-lg">
          <LayoutDashboard /> All Departments
        </button>
        <div className="hidden lg:block">
          <div className="flex items-center gap-8">
            <p>Home</p>
            <p>Shop</p>
            <p>Store</p>
            <p className="whitespace-nowrap">Mega Menu</p>
            <p>Pages</p>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/docs">Docs</NavLink>
            
          </div>
        </div>
       </div>

     <Menu className="block lg:hidden"/>    
     </div>
  );
}
