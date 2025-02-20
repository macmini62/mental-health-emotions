"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const TitlePage = () => {

  const titles = [
    "psychologist",
    "psychiatrist",
    "counselor",
    "therapist"
  ]

  const [title, setTitle] = React.useState<string>("");

  const handleSelect = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as HTMLButtonElement;

    setTitle((t: string) => {
      t = target.name;
      return t;
    });
  }

  React.useEffect(() => {
    if (title !== ""){
      const data: string | null = localStorage.getItem("userData");
      let userData: object = {};
      if(data !== null){
        userData = {
          ...JSON.parse(data),
          title: title
        }
        localStorage.setItem("userData", JSON.stringify(userData));
      }
      console.log(userData);
    }
  }, [title]);

  const router = useRouter();
  const handleRoute = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const btn = e.target as HTMLButtonElement;
    if(btn.name === "continue"){
      if(title !== ""){
        if(title === "professional"){
          router.push("title");
        }else{
          router.push("topics");
        }
      }
    }else{
      router.back();
    }
  };

  return (
    <div className="w-full mt-4 flex flex-col gap-6 items-center justify-between">
      <div className="w-1/3 mx-4">
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
      <div className="flex items-center justify-between w-full h-24 px-8 border-t-2 border-black">
        <button
          className="w-48 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white"
          onClick={(e) => handleRoute(e)}
          name="back"
          >
            Back
          </button>
        <button 
          className={`${title === "" ? "w-48 h-12 bg-black rounded-full text-white opacity-20 cursor-not-allowed"
             : "w-48 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white"}`}
          onClick={(e) => handleRoute(e)}
          name="continue"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default TitlePage