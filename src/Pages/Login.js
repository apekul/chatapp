import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Login = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-gray-300 w-96 rounded px-10 py-5">
        <h2 className="text-2xl font-bold text-center pb-5 text-slate-700">
          Sign in
        </h2>
        <form className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="email"
            className="py-2 px-3 rounded"
          />
          <input
            type="password"
            placeholder="password"
            className="py-2 px-3 rounded"
          />

          <button
            onClick={() => console.log("register")}
            className="py-2 my-1 rounded text-white bg-blue-400 hover:bg-blue-500"
          >
            Sign in
          </button>
          <p className="flex items-center justify-center gap-2 ">
            You already have an accout?
            <a
              href="/register"
              className="text-blue-500 font-bold hover:underline flex items-center"
            >
              Register
              <BsArrowRightShort size={20} />
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
