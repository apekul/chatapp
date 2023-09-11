import React from "react";
import Messages from "./Messages";
import Input from "./Input";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";

const Chat = () => {
  return (
    <div className="lg:w-3/4 w-full h-full">
      {/* chatIcons */}
      <div className="bg-zinc-700 h-[50px] flex items-center justify-between p-[10px] lg:rounded-tr">
        <p>User</p>
        <div className="flex text-2xl gap-2 ">
          <AiOutlineUserAdd className="cursor-pointer text-gray-200 hover:text-white" />
          <BiDotsHorizontalRounded className="cursor-pointer text-gray-200 hover:text-white" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
