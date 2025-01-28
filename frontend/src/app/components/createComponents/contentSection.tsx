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
  content
}:{
  handleButtonClick: () => void,
  fileInputRef: React.RefObject<HTMLInputElement | null>,
  handleOptionsVisibility: () => void,
  optVis: boolean,
  handleUploadImage: (imgData: FileList | null) => void,
  handleInsertParagraph: () => void,
  content: React.JSX.Element[]
}) => {

  console.log(content);
  
  return (
    <div>
      { content.map((c: React.JSX.Element, i: number) => React.cloneElement(c, {key: i, contentKey: i})) }
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
