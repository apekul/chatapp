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
    <div className="w-full h-full text-black px-3 py-2 ">
      <input
        placeholder="Find user"
        className="w-full px-2 py-1 mb-2 focus:outline-none"
      />
      <div className="flex flex-col gap-2 py-2 overflow-y-auto h-4/5">
        {fakeUsers.map((user, i) => (
          <div
            key={i}
            className="flex items-center py-2 gap-2 cursor-pointer hover:bg-gray-300 px-2 mr-2 rounded"
          >
            <img
              src="https://i.ytimg.com/vi/9L0HzzrE-ck/hqdefault.jpg"
              alt="avatar"
              className="w-20 h-20 object-cover"
            />
            <div className="flex flex-col">
              <p>{user.user}</p>
              <p>Last message</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
