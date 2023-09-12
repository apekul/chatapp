import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="bg-zinc-900 flex items-center justify-between px-3 py-4 h-[50px] rounded-tl">
      <span>.Logo</span>
      <div className="flex items-center gap-1">
        <div className="rounded-full w-5 h-5 bg-blue-200"></div>
        <p>User1</p>
        <button
          onClick={() => signOut(auth)}
          className="bg-zinc-500 hover:bg-blue-500 text-xs px-2 py-1 rounded ml-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
