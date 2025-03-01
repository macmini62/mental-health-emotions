"use client"

import * as React from "react"

const ParagraphSection = ({
  contentKey,
  handleParagraphChange,
  paragraphContent,
  deleteParagraph
}:{
  contentKey?: number,
  handleParagraphChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  paragraphContent: string,
  deleteParagraph: (key?: number) => void
}) => {

  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "56px"; // Reset height to original to shrink on backspacing
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on scroll height
    }
  }, [paragraphContent]);

  // deletes the textarea when empty
  const handleDelete = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if((e.key === "Backspace" || e.key === "Delete") && paragraphContent === ""){
      deleteParagraph(contentKey);
    }
  }

  return(
    <div
      key={contentKey}
      className="flex flex-col items-center gap-2 py-2 px-8 my-4"
    >
      <textarea
        id={contentKey?.toString()}
        ref={textareaRef}
        value={paragraphContent}
        onChange={(e) => handleParagraphChange(e)}
        onKeyDown={(e) => handleDelete(e)}
        placeholder="Type something here..."
        className="w-full h-14 bg-transparent outline-none border border-gray-300 overflow-hidden resize-none rounded-xl p-4"
      >

      </textarea>
    </div>
  )
};

export default ParagraphSection;