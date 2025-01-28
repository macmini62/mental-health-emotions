"use client"

import React from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoAddOutline, IoImageOutline } from "react-icons/io5";
import { styled } from "@mui/material/styles";

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

const InsertOptions = ({
  handleButtonClick,
  fileInputRef,
  handleOptionsVisibility,
  optVis,
  handleUploadImage,
  handleInsertParagraph
}:{
  handleButtonClick: () => void,
  fileInputRef: React.RefObject<HTMLInputElement | null>,
  handleOptionsVisibility: () => void,
  optVis: boolean
  handleUploadImage: (imgData: FileList | null) => void,
  handleInsertParagraph: () => void
}) => {

  return(
    <div className="w-full relative">
      <div className="flex gap-4 p-4 w-full">
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
            onClick={() => handleInsertParagraph()} 
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
              onChange={(event) => handleUploadImage(event.target.files)}
            />
          </button>
        </div>
      </div>
    </div>
  )
};

export default InsertOptions;