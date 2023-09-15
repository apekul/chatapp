import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Context/Context";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="bg-zinc-900 flex items-center justify-between px-3 py-4 h-[50px] rounded-tl">
      <span>.Logo</span>
      <div className="flex items-center gap-2">
        {currentUser.photoURL ? (
          <img
            src={currentUser.photoURL}
            className="w-7 h-7 object-cover object-top rounded-full "
            alt="user_img"
          />
        ) : (
          <RxAvatar className="w-7 h-7" />
        )}
        <p>{currentUser.displayName}</p>
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
