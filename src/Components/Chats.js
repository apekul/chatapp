import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/Context";
import { ChatContext } from "../Context/ChatContext";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => unsub();
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };

  return (
    <div className="flex flex-col gap-1 h-full overflow-y-auto">
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat, i) => (
          <div
            onClick={() => handleSelect(chat[1].userInfo)}
            key={chat[0]}
            className="flex items-center py-2 gap-2 cursor-pointer hover:bg-zinc-500 px-2"
          >
            <img
              src={chat[1].userInfo.photoURL}
              alt="avatar"
              className="w-16 h-16 object-cover object-top rounded-full"
            />
            <div className="flex flex-col">
              <p>{chat[1].userInfo.displayName}</p>
              <p className="text-xs text-gray-300">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
