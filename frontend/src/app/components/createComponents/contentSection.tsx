"use client"

import React from "react";
import InsertOptions from "./insertOptions";

const ContentSection = ({
  handleButtonClick,
  fileInputRef,
  handleOptionsVisibility,
  optVis,
  handleUploadImage,
  handleInsertParagraph,
  contents
}:{
  handleButtonClick: () => void,
  fileInputRef: React.RefObject<HTMLInputElement | null>,
  handleOptionsVisibility: () => void,
  optVis: boolean,
  handleUploadImage: (imgData: FileList | null) => void,
  handleInsertParagraph: () => void,
  contents: React.JSX.Element[]
}) => {

  // console.log(contents);
  
  return (
    <div>
      { contents.map((c: React.JSX.Element, i: number) => React.cloneElement(c, {key: i, contentKey: i})) }
      <InsertOptions
        handleButtonClick={handleButtonClick}
        fileInputRef={fileInputRef}
        handleOptionsVisibility={handleOptionsVisibility}
        optVis={optVis}
        handleUploadImage={(imgData: FileList|null) => handleUploadImage(imgData)}
        handleInsertParagraph={handleInsertParagraph}
      />
    </div>
  )
}

export default ContentSection;
