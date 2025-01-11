"use client"

import React from "react";

const setupLayout = ({
  children
}:{
  children: React.ReactNode
}) => {

  return (
    <div className="self-start mt-10 w-1/3 shadow-lg shadow-gray-300 rounded-md p-4">
      {children}
    </div>
  )
}

export default setupLayout;