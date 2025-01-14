"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
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

  React.useEffect(() => {
    updateUserRole();
  }, [role]);

  const updateUserRole = async () => {
    if (role !== ""){
      const userId = localStorage.getItem("userId");
      console.log("Id", userId);
      console.log("role:", role);
      await axios.put(`http://localhost:3001/users/id/${userId}`,
        {role: role}
      )
        .then((res) => {
          console.log(res);
        }).catch((e) => {
          console.log(e);
        });
    }
  }

  const handleRoute = () => {
    role !== "" && useRouter().push("/auth/setup/title");
  };

  return (
    <div className="w-full p-4 flex flex-col gap-6 items-center justify-between">
      {/* ROLES */}
      <div className="w-1/3 mx-4">
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
      </div>
      <div className="flex items-center justify-between w-full h-20 px-8 border-t-2 border-black">
        <button 
          className="w-48 h-12 bg-black rounded-full text-white opacity-20 cursor-not-allowed"
        >
          Back
        </button>
        <button 
          className={`${role === "" ? "w-48 h-12 bg-black rounded-full text-white opacity-20 cursor-not-allowed"
             : "w-48 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white"}`}
          onClick={() => handleRoute()}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default RolePage