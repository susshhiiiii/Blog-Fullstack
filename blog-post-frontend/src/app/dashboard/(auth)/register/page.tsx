import React from "react";
import Link from "next/link";
const Register = () => {
  return <div className="flex items-center text-center w-screen flex-col">
    <h1 className="font-bold text-4xl mt-24 mb-4">Create an Account</h1>
    <h3 className="text-xl mb-6">Please Signup to see the Dashboard.</h3>
    <input className="border-2 mb-4 border-gray-300 px-5 py-3" placeholder="Username" type="text" />
    <input className="border-2 mb-4 border-gray-300 px-5 py-3" placeholder="Email" type="text" />
    <input className="border-2 mb-4 border-gray-300 px-5 py-3" placeholder="Password" type="text" />
    <button className="px-5 py-2 bg-green-600 mb-3 text-white rounded w-54">Register</button>
    <h3>- OR -</h3>
    <Link className="underline cursor-pointer" href={"/dashboard/login"}>Login with an Existing Account</Link>
  </div>;
};

export default Register;
