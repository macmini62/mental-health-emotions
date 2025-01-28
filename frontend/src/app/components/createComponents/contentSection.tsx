"use client"

import React from "react";
import InsertOptions from "./insertOptions";

const ContentSection = ({
  handleUploadImage,
  handleInsertParagraph,
  content
}:{
  handleUploadImage: (imgData: FileList | null) => void,
  handleInsertParagraph: () => void,
  content: React.JSX.Element[]
}) => {

  console.log(content);
  
  return (
    <div>
      { content.map((c: React.JSX.Element, i: number) => React.cloneElement(c, {key: i, contentKey: i})) }
      <InsertOptions
        handleUploadImage={(imgData: FileList|null) => handleUploadImage(imgData)}
        handleInsertParagraph={handleInsertParagraph}
      />
    </div>
  )
}

export default ContentSection;
