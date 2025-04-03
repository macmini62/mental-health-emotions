"use client"

import Link from "next/link"
import { FaGoogle, FaMicrosoft } from "react-icons/fa";

const Auth0Options = ({
  auth
}:{
  auth: string
}) => {
  return (
    <div className="w-full">
      <p className="inline-block text-center w-full">
        {auth == "login"? "Don't" : "Already"} have an account?
        <span
          onClick={() => (window.location.href = auth == "login" ? "/auth/authv1/signup" : "/auth/authv1/login")}
          className="hover:underline ml-1 cursor-pointer"
        >
          {auth == "login" ? "Sign Up" : "Log In"}
        </span>
      </p>
      <div className="w-full my-4 flex gap-4 items-center justify-center text-gray-500">
        <hr className="w-1/2 border-gray-500"/>
        <p>or</p>
        <hr className="w-1/2 border-gray-500"/>
      </div>
      <Link href="" className="flex items-center justify-center w-full h-12 gap-4 border border-black my-4 rounded-md">
        <FaGoogle className="w-6 h-6"/>
        <p>{auth == "login" ? "Log in" : "Sign up"} with Google</p>
      </Link>
      <Link href="" className="flex items-center justify-center w-full h-12 gap-4 border border-black my-4 rounded-md">
        <FaMicrosoft className="w-6 h-6"/>
        <p>{auth == "login" ? "Log in" : "Sign up"} with Microsoft</p>
      </Link>
    </div>
  )
}

export default Auth0Options;