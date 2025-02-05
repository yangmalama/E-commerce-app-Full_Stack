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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/Stores">Stores</NavLink>
            <NavLink  to="/MegaMenu">Mega Menu</NavLink>
            <NavLink to="/pages">Pages</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/docs">Docs</NavLink>
            <NavLink to="/sign_in">Sign In</NavLink>
            <NavLink to="/sign_up">Sign Up</NavLink>
          </div>
        </div>
       </div>

     <Menu className="block lg:hidden"/>    
     </div>
  );
}
