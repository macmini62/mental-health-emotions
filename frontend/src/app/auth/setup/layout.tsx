"use client"

import Link from "next/link";
import React from "react";

const setupLayout = ({
  children
}:{
  children: React.ReactNode
}) => {

  return (
    <div className="w-full h-full flex flex-col">
      <header className="self-start w-full h-32 flex items-center px-4">
        <img src="/logo/logo-white.png" alt="" className="w-48 h-14" />
      </header>
      <hr className="w-full border-black border-2" />
      <div className="w-full h-[calc(100%-84px)] flex justify-center pt-8">
        {children}
      </div>
      <hr className="w-full border-black border-2" />
      <div className="flex items-center justify-between w-full h-20 px-8">
        <button className="w-32 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white">Back</button>
        <button className="w-32 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white">Continue</button>
      </div>
    </div>
  )
}

export default setupLayout;