import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="text-center flex place-items-center flex-col w-screen">
      <h1 className="text-4xl font-bold mt-24 mb-4">Welcome Back</h1>
      <h2 className="font-bold text-xl mb-6">
        Please Sign in to see the dashboard.
      </h2>
      <input
        placeholder="Email"
        className="border-2  mb-4 border-gray-300 py-3 px-5"
        type="text"
      />
      <input
        placeholder="Password"
        className="border-2 mb-4 border-gray-300 py-3 px-5"
        type="text"
      />
      <button className="px-5 py-2 bg-green-600 w-54 mb-3 text-white rounded">
        Login
      </button>
      <button className="px-5 py-2 bg-red-600 w-54 mb-3 text-white rounded">
        Login with Google
      </button>
      <h3>- OR -</h3>
      <Link className="underline cursor-pointer" href={"/dashboard/register"}>Create New Account</Link>
    </div>
  );
};

export default Login;
