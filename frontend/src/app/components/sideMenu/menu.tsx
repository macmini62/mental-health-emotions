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
    "live sessions",
    "communities"
  ];

  return(
    <div className="flex flex-col items-start w-[144px] mt-8 py-8 pl-2 text-lg text-nowrap border-r-2 border-gray-300 fixed">
      {
        menus.map((m: string, i: number) => (
          <Link href={`/${m}`} key={i} className="w-full">
            <button 
              className={`${menu === m && "border-r-2 border-black"} flex items-start w-full my-3 text-black`}
            >
              <p className="pr-10 capitalize">
                {m}
              </p>
            </button>
          </Link>
        ))
      }
  </div>
  )
}

export default Menu;
