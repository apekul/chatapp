import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="w-1/4 hidden lg:block h-full border-r-2 relative bg-zinc-700">
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
