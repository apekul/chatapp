import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";

const Register = () => {
  const [image, setImage] = React.useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-gray-300 w-96 rounded px-10 py-5">
        <h2 className="text-2xl font-bold text-center pb-5 text-slate-700">
          Register
        </h2>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="display name"
            className="py-2 px-3 rounded"
          />
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
          <input
            className="hidden"
            type="file"
            id="file"
            onChange={onImageChange}
          />
          <label
            htmlFor="file"
            className="flex items-center gap-2 cursor-pointer text-blue-500 w-auto h-16"
          >
            {image ? (
              <img
                src={image}
                alt="avatar"
                className="w-16 h-16 object-cover object-top"
              />
            ) : (
              <BiImageAdd className="text-4xl w-16 h-16" />
            )}
            <span>Add avatar</span>
          </label>
          <button
            onClick={() => console.log("register")}
            className="py-2 my-1 rounded text-white bg-blue-400 hover:bg-blue-500"
          >
            Sign in
          </button>
          <p className="flex items-center justify-center gap-2 ">
            You already have an accout?
            <a
              href="/login"
              className="text-blue-500 font-bold hover:underline flex items-center"
            >
              Login
              <BsArrowRightShort size={20} />
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
