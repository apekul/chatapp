import React from "react";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex text-white w-full h-full lg:w-2/3 lg:h-4/5 rounded">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
