import React from "react";
import Message from "./Message";

const fakeMessage = [
  {
    date: "",
    user: "user1",
    content: "Sample first messasge",
    id: 1,
    img: "",
    file: "",
  },
  {
    date: "",
    user: "user1",
    content: "",
    id: 2,
    img: "https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg",
    file: "",
  },
  {
    date: "",
    user: "user2",
    content: "",
    id: 2,
    img: "https://media.gcflearnfree.org/ctassets/topics/246/share_flower_fullsize.jpg",
    file: "",
  },
  {
    date: "",
    user: "user2",
    content: "Sample third messasge",
    id: 3,
    img: "",
    file: "",
  },
  {
    date: "",
    user: "user2",
    content: "Sample third messasge",
    id: 3,
    img: "",
    file: "",
  },
  {
    date: "",
    user: "user1",
    content:
      "Sample fifth messasge about something important to test if message will wrap around like it should be",

    id: 3,
    img: "",
    file: "",
  },
  {
    date: "",
    user: "user2",
    content:
      "Sample fifth messasge about something important to test if message will wrap around like it should be",
    id: 3,
    img: "",
    file: "",
  },
];

const Messages = () => {
  return (
    <div
      className="bg-zinc-500 px-[10px] text-black flex flex-col-reverse gap-1 overflow-y-auto"
      style={{ height: "calc(100% - 100px)" }}
    >
      <div>
        {fakeMessage.map((msg, index) => (
          <Message msg={msg} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
