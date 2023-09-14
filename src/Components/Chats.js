import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => unsub();
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  return (
    <div className="flex flex-col gap-1 h-full overflow-y-auto">
      {Object.entries(chats)?.map((chat, i) => (
        <div
          key={chat[0]}
          className="flex items-center py-2 gap-2 cursor-pointer hover:bg-zinc-500 px-2"
        >
          {console.log(chat)}
          <img
            src={chat[1].userInfo.photoURL}
            alt="avatar"
            className="w-16 h-16 object-cover object-top rounded-full"
          />
          <div className="flex flex-col">
            <p>{chat[1].userInfo.displayName}</p>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
