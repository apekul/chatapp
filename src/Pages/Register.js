import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [image, setImage] = React.useState(null);

  const navigate = useNavigate();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
          }
        });
      });
    } catch (err) {
      console.log("catch register error", err);
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-gray-300 w-96 rounded px-10 py-5">
        <h2 className="text-2xl font-bold text-center pb-5 text-slate-700">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
            type="submit"
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
