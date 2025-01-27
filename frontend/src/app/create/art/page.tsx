"use client"

import Link from "next/link";
import { SlOptions } from "react-icons/sl";
import * as React from "react";
import ImageSection from "@/app/components/createComponents/imageSection";
import ContentSection from "@/app/components/createComponents/contentSection";


const Page = () => {

  const [content, setContent] = React.useState<Array<React.JSX.Element>>([]);

  const handleImageUpload = (imgData: FileList|null) => {
    // console.log(imgData);
    const selImg = imgData?.item(0);
    if(selImg !== null){
      if(selImg?.type.split("/")[0] === "image"){
        const img = URL.createObjectURL(selImg);
        setContent((c: Array<React.JSX.Element>) => {
          return[
            ...c,
            <ImageSection
              key={c.length}
              image={img}
              deleteImage={(key: number) => handleDeleteContent(key)}
            />
          ];
        })
      }else{
        console.log("File uploaded must be an image!!");
      }
    }
  }
  console.log(content);

  const handleInsertParagraph = () => {
    
  }
  
  const handleDeleteContent = (key: number) => {
    console.log("Key:", key);
  }

  const [contentSection, setContentSection] = React.useState<Array<React.ReactNode>>([]);

  
  return (
    <div className="w-1/2 p-2 relative">
      {/* HEADER */}
      <header className="flex justify-between border-b-2 border-black px-2 absolute top-0 z-10 w-full">
        <div className="">
          <Link href=""><img src="/logo/logo-white.png" alt="" className="w-54 h-16"/></Link>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-black bg-green-600 px-5 py-2 rounded-full">Publish</button>
          <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
          <button><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full hover:opacity-80"/></button>
        </div>
      </header>
      {/* EDITING SECTION */}
      <div className="flex flex-col gap-4 py-4 mt-16 overflow-y-auto">
        {/* titles */}
        <input type="text" className="text-7xl text-black outline-none px-2 font-semibold placeholder:font-normal" placeholder="TITLE"/>
        <input type="text" className="text-4xl text-black outline-none px-6" placeholder="SUB-TITLE"/>
        {/* content */}
        <div className="">
          <ContentSection
            handleInsertParagraph={handleInsertParagraph}
            handleUploadImage={handleImageUpload}
            content={content}
          />
        </div>
      </div>
    </div>
  )
}

export default Page;