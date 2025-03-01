"use client"

import * as React from "react"
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const ParagraphSection = ({
  contentKey,
  handleParagraphChange,
  paragraphContent,
  deleteParagraph
}:{
  contentKey?: number,
  handleParagraphChange: (contentKey: number | undefined, content: string) => void,
  paragraphContent: string,
  deleteParagraph: (key?: number) => void
}) => {

  const { quill, quillRef } = useQuill();
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        const content = quill.root.innerHTML;
        handleParagraphChange(contentKey, content);
        console.log(content); 
      });
    }
  }, [quill, contentKey, handleParagraphChange, paragraphContent]);

  // deletes the textarea when empty
  const handleDelete = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if((e.key === "Backspace" || e.key === "Delete") && quill?.root.innerHTML === ""){
      deleteParagraph(contentKey);
    }
  }

  return(
    <div
      key={contentKey}
      className="py-2 px-8 my-4"
    >
      <div onKeyDown={(e) => handleDelete(e)} ref={quillRef} className="w-full border rounded-md my-4"/>
    </div>
  )
};

export default ParagraphSection;