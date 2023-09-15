import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../Context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => unSub();
  }, [data.chatID]);
  return (
    <div
      className="bg-zinc-500 px-[10px] text-black flex flex-col-reverse gap-1 overflow-y-auto"
      style={{ height: "calc(100% - 100px)" }}
    >
      <div>
        {messages.map((msg, index) => (
          <Message msg={msg} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
