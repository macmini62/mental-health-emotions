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
  content: React.ReactNode
}) => {


  
  return (
    <div>
      <InsertOptions
        handleUploadImage={(imgData: FileList|null) => handleUploadImage(imgData)}
        handleInsertParagraph={handleInsertParagraph}
      />
      {content}
    </div>
  )
}

export default ContentSection;