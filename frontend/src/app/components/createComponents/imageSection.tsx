"use client"

import { Button } from "@mui/material";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const buttonStyle = {
  backgroundColor: "transparent",
  color: "black",
  boxShadow: "none",
  border: "2px solid black",
  borderRadius: "10px"
};

const ImageSection = ({
  contentKey,
  image,
  deleteImage
}:{
  contentKey?: number
  image: string,
  deleteImage: (key?: number) => void
}) => {

  const [caption, setCaption] = React.useState<string>("");
  const handleCaption = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setCaption(target.value);
  }

  return(
    <div key={contentKey} className="flex flex-col items-center gap-2 py-2 px-8 my-4">
      <div className="my-4 flex flex-col items-center relative group">
        { image && <img src={image} alt="" className="w-[600px] h-[400px] rounded-md" /> }
        <div className="flex items-center justify-center absolute z-10 w-full h-full invisible group-hover:visible bg-gray-50 opacity-80 rounded-md">
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<MdDeleteOutline />}
            style={buttonStyle}
            onClick={() => deleteImage(contentKey)}
          >
            delete image
          </Button>
        </div>
      </div>
      {
        image &&
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
  )
};

  export default ImageSection;