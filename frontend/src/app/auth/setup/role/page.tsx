"use client"

import React from "react";

const RolePage = () => {

  // Selection of roles and titles
  const [role, setRole] = React.useState<string>("");

  const handleSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement;

    setRole((r: string) => {
      r = target.name;
      return r;
    });
  };

  return (
    <div className="w-1/3 p-4 flex flex-col gap-6 items-center">
      {/* ROLES */}
      <div className="w-full mx-4">
        <h2 className="text-center font-semibold text-2xl">How do you intend to use the platform for?</h2>
        <div className="w-full mt-10">
          <div className="flex justify-center gap-10 my-12">
            <button
              className="bg-gray-100 h-12 px-16 rounded-full border border-gray-100"
              style={role === "professional" ? {borderColor: "black", backgroundColor: "transparent"} : {}}
              onClick={(e) => handleSelect(e)}
              name="professional"
            >
              Professional
            </button>
            <button
              className="bg-gray-100 h-12 px-16 rounded-full border border-gray-100"
              style={role === "healthSeeker" ? {borderColor: "black", backgroundColor: "transparent"} : {}}
              onClick={(e) => handleSelect(e)}
              name="healthSeeker"
            >
              Health seeker
            </button>
          </div>
        </div>
        {/* Visual Effect */}
        <div className="flex justify-center">
          {/* professional */}
          <div className="">

          </div>
          {/* health seeker */}
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default RolePage