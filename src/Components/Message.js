import React, { useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { AuthContext } from "../Context/Context";
import { ChatContext } from "../Context/ChatContext";

const Message = ({ msg }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  return (
    <div
      className={`w-full text-xs flex ${
        msg.senderID === currentUser.uid && "justify-end"
      }`}
    >
      <div
        className={`flex items-start w-fit gap-3 my-0.5 rounded ${
          msg.senderID === currentUser.uid && "flex-row-reverse"
        }`}
      >
        <RxAvatar className="text-4xl text-white" />
        {msg.text.length > 0 && (
          <>
            <p
              className={`bg-zinc-800 text-white p-3 xl:max-w-lg md:max-w-xs max-w-[220px] break-all rounded-b-lg ${
                msg.senderID === currentUser.uid
                  ? "rounded-tl-lg"
                  : "rounded-tr-lg"
              }`}
            >
              {msg.text}
            </p>
          </>
        )}
        {msg.img && (
          <img
            src={msg.img}
            alt="user_msg_img"
            className="lg:h-52 h-40 w-40 lg:w-52 object-cover cursor-pointer rounded-xl"
          />
        )}
        {/* {msg.file && <div>file</div>} */}
      </div>
    </div>
  );
};

export default Message;
