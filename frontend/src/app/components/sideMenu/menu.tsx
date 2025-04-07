import Link from "next/link";
import React from "react";

const Menu = ({
  menu
}:{
  menu: string
}) => {

  const menus = [
    "articles",
    "videos",
    "live_session",
    "community"
  ];

  return(
    <div className="flex flex-col items-start w-[144px] max-h-fit mt-8 py-8 pl-2 text-lg text-nowrap border-r-2 border-gray-300 sticky top-20">
      {
        menus.map((m: string, i: number) => (
          <div onClick={() => (window.location.href = `/${m}`)} key={i} className="w-full">
            <button 
              className={`${menu === m && "border-r-2 border-black"} flex items-start w-full my-3 text-black`}
            >
              <p className="pr-10 capitalize">
                {m.replace("_", " ")}
              </p>
            </button>
          </div>
        ))
      }
  </div>
  )
}

export default Menu;
