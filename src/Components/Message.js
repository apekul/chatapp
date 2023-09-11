import React from "react";
import { RxAvatar } from "react-icons/rx";

const Message = ({ msg }) => {
  return (
    <div
      className={`w-full text-xs flex ${msg.user === "user1" && "justify-end"}`}
    >
      <div
        className={`flex items-start w-fit gap-3 my-0.5 rounded ${
          msg.user === "user1" && "flex-row-reverse"
        }`}
      >
        <RxAvatar className="text-4xl text-white" />
        {msg.content.length > 0 && (
          <p
            className={`bg-zinc-800 text-white p-3 xl:max-w-lg md:max-w-xs max-w-[220px] break-all rounded-b-lg ${
              msg.user === "user1" ? "rounded-tl-lg" : "rounded-tr-lg"
            }`}
          >
            {msg.content}
          </p>
        )}
        {msg.img.length > 0 && (
          <img
            src={msg.img}
            alt="user msg"
            className="lg:h-52 h-40 w-40 lg:w-52 object-cover cursor-pointer rounded-xl"
          />
        )}
        {msg.file && <div>file</div>}
      </div>
    </div>
  );
};

export default Message;
