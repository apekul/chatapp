import React, { useContext, useState } from "react";
// import { MdAttachFile } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";
import { AuthContext } from "../Context/Context";
import { ChatContext } from "../Context/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    setText("");
    setImg(null);

    if (img) {
      // send message tyo chats collection
      const storageRef = ref(storage, uuid());
      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateDoc(doc(db, "chats", data.chatID), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderID: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          } catch (err) {
            console.log(err);
          }
        });
      });
    } else {
      await updateDoc(doc(db, "chats", data.chatID), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderID: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    // update userChats collection latest messsage for both users
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatID + ".lastMessage"]: {
        text,
      },
      [data.chatID + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatID + ".lastMessage"]: {
        text,
      },
      [data.chatID + ".date"]: serverTimestamp(),
    });
  };

  const handleKeyDown = (e) => {
    e.code === "Enter" && handleSend();
  };
  return (
    <div className="relative text-black bg-zinc-700 h-[50px] p-[10px] flex items-center lg:rounded-br">
      {img && (
        <img
          src={img}
          alt="input_img"
          className="w-16 h-16 object-cover object-top absolute -top-16"
        />
      )}
      <input
        className="w-full resize-none px-2 py-1 focus:outline-none rounded"
        placeholder="Message..."
        rows="1"
        value={text}
        onKeyDown={handleKeyDown}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="absolute bottom-[16px] text-lg text-gray-400 right-5 flex gap-2">
        {/* <MdAttachFile className="hover:text-black cursor-pointer" /> */}
        <div>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor="file">
            <BiSolidImageAdd className="hover:text-black cursor-pointer" />
          </label>
        </div>
        <BsSendFill
          className="hover:text-black cursor-pointer"
          onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default Input;
