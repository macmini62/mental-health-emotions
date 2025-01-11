"use client"

import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";

const AuthLayout = ({
  children
}:{
  children: React.ReactNode
}) => {

  const[auth, setAuth] = useState<string>("signup");

  const handleAuth:any = () => {
    setAuth((a: any) => {
      a = a == "login" ? "signup" : "login";
      return a;
    })
  }

  return (
    <div className="w-[512px] rounded-md border border-black p-10">
      <div className="flex gap-4 justify-center">
        <img src="/logo/logo-white.png" alt="" className="w-48 h-14"/>
      </div>
      <h1 className="text-4xl font-semibold my-6">{auth == "login" ? "Log In" : "Sign Up"}</h1>
      {/* Form Details */}
      { children }
      <p className="inline-block text-center w-full">
        {auth == "login"? "Don't" : "Already"} have an account?
        <span onClick={() => handleAuth()}>
          <Link 
            href={auth == "login" ? "/auth/authv1/signup" : "/auth/authv1/login"}
            className="hover:underline ml-1">{auth == "login" ? "Sign Up" : "Log In"}
          </Link>
        </span>
      </p>
      <div className="w-full my-4 flex gap-4 items-center justify-center text-gray-500">
        <hr className="w-1/2 border-gray-500"/>
        <p>or</p>
        <hr className="w-1/2 border-gray-500"/>
      </div>
      {/* External Links */}
      <div>
        <Link href="" className="flex items-center justify-center w-full h-12 gap-4 border border-black my-4 rounded-md">
          <FaGoogle className="w-6 h-6"/>
          <p>{auth == "login" ? "Log in" : "Sign up"} with Google</p>
        </Link>
        <Link href="" className="flex items-center justify-center w-full h-12 gap-4 border border-black my-4 rounded-md">
          <FaMicrosoft className="w-6 h-6"/>
          <p>{auth == "login" ? "Log in" : "Sign up"} with Microsoft</p>
        </Link>
      </div>
    </div>
  )
}

export default AuthLayout;