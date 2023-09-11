import React from "react";

const fakeUsers = [
  { user: "user1", id: 1 },
  { user: "user2", id: 2 },
  { user: "user3", id: 3 },
  { user: "user4", id: 4 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
  { user: "user5", id: 5 },
];

const Search = () => {
  return (
    <div
      className="w-full h-full px-2 text-white py-2 text-sm"
      style={{ height: "calc(100% - 70px)" }}
    >
      <input
        placeholder="Find user"
        className="w-full px-2 py-1 mb-2 focus:outline-none"
      />
      {/* On condition if user is find */}
      <div
        className="overflow-y-auto px-1"
        style={{ height: "calc(100% - 20px)" }}
      >
        {fakeUsers.slice(0, 3).map((user, i) => (
          <div
            key={i}
            className="flex items-center py-2 gap-2 my-2 cursor-pointer hover:bg-zinc-500 px-2 mr-2 rounded"
          >
            <img
              src="https://i.ytimg.com/vi/9L0HzzrE-ck/hqdefault.jpg"
              alt="avatar"
              className="w-20 h-20 object-cover"
            />
            <p>{user.user}</p>
          </div>
        ))}
        <div className="w-full border-b-2 border-white"></div>
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
