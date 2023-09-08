import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
const Chat = () => {
  return (
    <div className="w-3/4 bg-blue-200">
      {/* chatIcons */}
      <div className="bg-gray-500 h-20 flex items-center justify-between px-5 rounded-tr">
        <p>User</p>
        <div className="flex text-2xl gap-2 ">
          <AiOutlineUserAdd className="cursor-pointer text-gray-200 hover:text-white" />
          <BiDotsHorizontalRounded className="cursor-pointer text-gray-200 hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
