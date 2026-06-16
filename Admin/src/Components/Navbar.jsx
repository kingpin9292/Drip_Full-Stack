import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(15%,80px)] cursor-pointer" src={assets.logo} alt="" onClick={() => navigate("/")} />
      <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full">Logout</button>
    </div>
  );
};

export default Navbar;
