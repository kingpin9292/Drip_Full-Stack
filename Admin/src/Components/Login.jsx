import React from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", { email, password });
      console.log(response);

      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.log(error.message);

      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-row items-center justify-center w-full">
      <div className="bg-white shadow-md max-w-md px-8 py-6">
        <h1 className="font-bold text-2xl mb-4">Admin Panel</h1>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 m-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md border border-gray-400 text-sm font-medium px-3 py-2 outline-none w-full"
              placeholder="Your email"
            />
          </div>

          <div className="mb-3 min-w-72">
            <p className="mb-2 text-gray-700 text-sm font-medium">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border border-gray-400 rounded-md px-3 py-2 text-sm font-medium outline-none w-full"
              placeholder="Your password"
            />
          </div>

          <button type="submit" className="mt-2 border rounded-md bg-black text-white px-4 py-2 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
