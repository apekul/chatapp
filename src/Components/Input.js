import React from "react";
import { MdAttachFile } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";

const Input = () => {
  return (
    <div className="relative text-black bg-zinc-700 h-[50px] p-[10px] flex items-center lg:rounded-br">
      <input
        className="w-full resize-none px-2 py-1 focus:outline-none rounded"
        placeholder="Message..."
      />
      <div className="absolute bottom-[16px] text-lg text-gray-400 right-5 flex gap-2">
        <MdAttachFile className="hover:text-black cursor-pointer" />
        <BiSolidImageAdd className="hover:text-black cursor-pointer" />
        <BsSendFill className="hover:text-black cursor-pointer" />
      </div>
    </div>
  );
};

export default Input;
