import React, { useState, useContext } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      console.log("search user error", err);
    }
  };

  const handleKey = (event) => {
    event.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const mergedID =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", mergedID));
      if (!res.exists()) {
        // create chat in chats collection
        await setDoc(doc, (db, "chats", mergedID), { messages: [] });

        // create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [mergedID + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [mergedID + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [mergedID + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [mergedID + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log("select error", err);
    }
    setUser(null);
    setUsername("");
  };

  return (
    <div className="w-full px-2 text-white py-2 text-sm">
      <input
        type="text"
        placeholder="Find user"
        value={username}
        className="w-full px-2 py-1 focus:outline-none text-black"
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKey}
      />
      <div className="overflow-y-auto px-1">
        {/* On condition if user is find */}
        {user && (
          <>
            <div
              className="flex items-center py-2 gap-2 my-2 cursor-pointer hover:bg-zinc-500 px-2 rounded"
              onClick={handleSelect}
            >
              <img
                src={user.photoURL}
                alt="avatar"
                className="w-16 h-16 object-cover object-top rounded-full"
              />
              <p>{user.displayName}</p>
            </div>
            <div className="w-full border-b-2 border-white"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
