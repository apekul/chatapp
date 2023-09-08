import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-700 flex items-center justify-between px-3 py-2 rounded-tl">
      <span>.Logo</span>
      <div className="flex items-center gap-1">
        <div className="rounded-full w-5 h-5 bg-blue-200"></div>
        <p>Display name</p>
        <button className="bg-gray-400 hover:bg-blue-500 text-xs px-2 py-1 rounded ml-2">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
