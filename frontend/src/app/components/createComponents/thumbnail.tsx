"use client"

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
};

const Thumbnail = () => {

  const [caption, setCaption] = React.useState<string>("");
  const handleCaption = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setCaption(target.value);
  }

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

  return (
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
  )
}

export default Thumbnail