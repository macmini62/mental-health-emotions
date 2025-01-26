"use client"

import Link from "next/link";
import { SlOptions } from "react-icons/sl";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { FiUploadCloud } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoAddOutline, IoImageOutline } from "react-icons/io5";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";


const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const buttonStyle = {
  backgroundColor: "transparent",
  color: "black",
  boxShadow: "none",
  border: "2px solid black",
  borderRadius: "10px"
};

const insertButtonStyle = {
  width: "max-content",
  backgroundColor: "transparent",
  padding: "0px",
  borderRadius: "9999px",
  border: "1px solid #6b7280",
  boxShadow: "none",
  cursor: "pointer",
  color: "black",
};

const Page = () => {
  

  const [thumbnail, setThumbnail] = React.useState<string>();
  const handleThumbnailUpload = (imgData: FileList | null) => {
    console.log(imgData);
    setThumbnail(() => {
      const selImg = imgData?.item(0);
      if(selImg !== null){
        if(selImg?.type.split("/")[0] === "image"){
          const img = URL.createObjectURL(selImg);
          return img.toString();
        }else{
          console.log("File uploaded must be an image!!");
        }
      }
    });
  }
  // console.log(thumbnail)

  const [caption, setCaption] = React.useState<string>("");
  const handleCaption = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setCaption(target.value);
  }

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  }

  const [images, setImages] = React.useState<string[]>();
  const handleImageUpload = (imgData: FileList | null) => {
    
  }

  const handleContent = () => {

  }

  const handleInsertOptions = () => {

  }

  const [optVis, setOptVis] = React.useState<boolean>(false);
  const handleOptionsVisibility = () => {
    setOptVis((opt: boolean) => {
      opt = !opt;
      return opt;
    });
  }
  

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
        {/* thumbnail */}
        <div className="flex flex-col items-center gap-2 py-2 px-8 my-4">
          {
            !thumbnail &&
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<FiUploadCloud />}
              style={{...buttonStyle, visibility: "visible"}}
            >
              upload thumbnail
              <VisuallyHiddenInput
                type="file"
                onChange={(event) => handleThumbnailUpload(event.target.files)}
              />
            </Button>
          }
          <div className="my-4 flex flex-col items-center relative group">
            { thumbnail && <img src={thumbnail} alt="" className="w-[450px] h-[450px] rounded-md" /> }
            <div className="flex items-center justify-center absolute z-10 w-full h-full invisible group-hover:visible bg-gray-50 opacity-80 rounded-md">
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<MdDeleteOutline />}
                style={buttonStyle}
                onClick={() => setThumbnail(undefined)}
              >
                delete thumbnail
              </Button>
            </div>
          </div>
          {
            thumbnail &&
            <div className="flex flex-col items-center gap-4 w-full">
              <input
                name="caption"
                type="text"
                value={caption}
                placeholder="Caption"
                className="text-sm text-gray-500 w-fit py-1 px-2 border-b-2 border-black outline-none max-w-fit"
                onChange={(event) => handleCaption(event)}
              />
            </div>
          }
        </div>
        {/* content */}
        <div className="">
          {/* insert options */}
          <div className="w-full relative">
            <div className="flex gap-4 p-4 w-full" onClick={() => handleInsertOptions()}>
              <div
                className="max-w-fit p-2 rounded-full border border-black cursor-pointer"
                onClick={() => handleOptionsVisibility()}
              >
                <IoAddOutline className={`w-8 h-8 text-black transition-transform duration-[.5s] ${optVis && "rotate-[405deg] ease-in-out"}`}/>
              </div>
              {/* options */}
              <div className={`flex gap-4 absolute left-24 ${optVis ? "visible" : "collapse left-64"} transition-all ease-in-out duration-[1s] text-gray-500`}>
                <button
                  className="max-w-fit p-2 rounded-full border border-gray-500 cursor-pointer hover:text-black"  
                >
                  <HiOutlineBars3BottomLeft className="w-8 h-8 m-0"/>
                </button>
                <button
                  className="max-w-fit p-2 rounded-full border border-gray-500 cursor-pointer hover:text-black"
                  onClick={() => handleButtonClick()}
                >
                  <IoImageOutline className="w-8 h-8"/>
                  <VisuallyHiddenInput
                    type="file"
                    ref={fileInputRef}
                    onChange={(event) => handleImageUpload(event.target.files)}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;