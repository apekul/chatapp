import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex bg-indigo-400 text-white w-2/3 h-3/4 rounded">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
