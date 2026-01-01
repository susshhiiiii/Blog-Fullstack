"use client";
import React, { useState } from "react";
import Link from "next/link";
const Register = () => {
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.username.value;
    const password = form.password.value;
    const email = form.email.value;
    console.log(username, password, email);
    

    try {
      
    } catch (err) {
      setError(true);
    }
  }
  return (
    <div className="flex items-center text-center w-screen flex-col">
      <h1 className="font-bold text-4xl mt-24 mb-4">Create an Account</h1>
      <h3 className="text-xl mb-6">Please Signup to see the Dashboard.</h3>
      <form action="" onSubmit={handleSubmit} className="flex flex-col">
        <input
          className="border-2 mb-4 border-gray-300 px-5 py-3"
          placeholder="Username"
          name="username"
          type="text"
        />
        <input
          className="border-2 mb-4 border-gray-300 px-5 py-3"
          placeholder="Email"
          name="email"
          type="text"
        />
        <input
          className="border-2 mb-4 border-gray-300 px-5 py-3"
          placeholder="Password"
          name="password"
          type="password"
        />
        <button className="px-5 py-2 bg-green-600 mb-3 text-white rounded w-54">
          Register
        </button>
      </form>
      {error && <p className="text-red-500">Something went Wrong!!</p>}
      <h3>- OR -</h3>
      <Link className="underline cursor-pointer" href={"/dashboard/login"}>
        Login with an Existing Account
      </Link>
    </div>
  );
};

export default Register;
