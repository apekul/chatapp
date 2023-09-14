import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="w-1/4 hidden lg:block h-full border-r-2 relative bg-zinc-700">
      <Navbar />
      <div
        className="flex flex-col justify-between"
        style={{ height: "calc(100% - 50px)" }}
      >
        <Search />
        <Chats />
      </div>
    </div>
  );
};

export default Sidebar;
