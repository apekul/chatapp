import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const fakeUsers = [
  { user: "user1", id: 1 },
  { user: "user2", id: 2 },
  { user: "user3", id: 3 },
  { user: "user4", id: 4 },
  { user: "user5", id: 5 },
];

const Search = () => {
  const [username, setUsername] = useState();
  const [user, setUser] = useState(null);

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

  return (
    <div
      className="w-full h-full px-2 text-white py-2 text-sm"
      style={{ height: "calc(100% - 70px)" }}
    >
      <input
        placeholder="Find user"
        className="w-full px-2 py-1 mb-2 focus:outline-none text-black"
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKey}
      />
      <div
        className="overflow-y-auto px-1"
        style={{ height: "calc(100% - 20px)" }}
      >
        {/* On condition if user is find */}
        {user && (
          <>
            <div className="flex items-center py-2 gap-2 my-2 cursor-pointer hover:bg-zinc-500 px-2 mr-2 rounded">
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
        {/*  */}
        <div className="flex flex-col gap-1 py-2">
          Active Chats
          {fakeUsers.map((user, i) => (
            <div
              key={i}
              className="flex items-center py-2 gap-2 cursor-pointer hover:bg-zinc-500 px-2 mr-2 rounded"
            >
              <img
                src="https://i.ytimg.com/vi/9L0HzzrE-ck/hqdefault.jpg"
                alt="avatar"
                className="xl:w-20 xl:h-20 h-10 w-10 object-cover rounded-full"
              />
              <div className="flex flex-col">
                <p>{user.user}</p>
                <p>Last message</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
