"use client"

import Image from "next/image";
import React from "react";

const setupLayout = ({
  children
}:{
  children: React.ReactNode
}) => {

  return (
    <div className="w-full h-full flex flex-col">
      <header className="self-start w-full h-32 flex items-center px-4">
        <Image src="/logo/logo-white.png" alt="" className="w-48 h-14" />
      </header>
      <hr className="w-full border-black border-2" />
      <div className="w-full h-[calc(100%-84px)] flex justify-center pt-8">
        {children}
      </div>
    </div>
  )
}

export default setupLayout;