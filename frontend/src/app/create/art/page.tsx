"use client"

import Link from "next/link";
import { SlOptions } from "react-icons/sl";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { FiUploadCloud } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

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
}

const Page = () => {
  

  const [image, setImage] = React.useState<object>({});
  

  return (
    <div className="w-1/2 p-2">
      {/* HEADER */}
      <header className="flex justify-between">
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
      <div className="flex flex-col gap-4 py-4 mt-4">
        {/* titles */}
        <input type="text" className="text-7xl text-black outline-none px-2 font-semibold placeholder:font-normal" placeholder="TITLE"/>
        <input type="text" className="text-4xl text-black outline-none px-6" placeholder="SUB-TITLE"/>
        {/* thumbnail */}
        <div className="flex items-center justify-center gap-20">
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<FiUploadCloud />}
            style={buttonStyle}
          >
            Upload Image
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<MdDeleteOutline />}
            style={buttonStyle}
          >
            delete image
          </Button>
          <div className="my-4 flex flex-col items-center">
            <img src="/calm/calm2.webp" alt="" className="w-[400px] rounded-md" />
            <p className="text-sm text-gray-500 text-center my-4 w-fit">calm person from getty images</p>
          </div>
        </div>
        <div className="">

        </div>
      </div>
    </div>
  )
}

export default Page;