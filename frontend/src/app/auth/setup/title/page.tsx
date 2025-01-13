"use client"

import React from "react";

const TitlePage = () => {

  const titles = [
    "psychologist",
    "psychiatrist",
    "counselor",
    "therapists"
  ]

  const [title, setTitle] = React.useState<string>("");

  const handleSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement;

    setTitle((t: string) => {
      t = target.name;
      return t;
    });
  }

  return (
    <div className="w-1/3 p-4 flex flex-col gap-6 items-center">
      {/* ROLES */}
      <div className="w-full mx-4">
        <h2 className="text-center font-semibold text-2xl">Being a professional what title best suits you?</h2>
        <div className="w-full mt-10">
          <div className="flex justify-center gap-10 my-12">
            {
              titles.map((t: string, index: number) => (
                <button
                  key={index}
                  className="bg-gray-100 h-12 px-16 rounded-full border capitalize border-gray-100"
                  style={title === t ? {borderColor: "black", backgroundColor: "transparent"} : {}}
                  onClick={(e) => handleSelect(e)}
                  name={t}
                >
                  {t}
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitlePage