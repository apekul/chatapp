import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-full">
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
