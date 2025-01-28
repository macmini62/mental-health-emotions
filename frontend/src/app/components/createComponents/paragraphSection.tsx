"use client"

import * as React from "react"

const ParagraphSection = ({
  contentKey,
  deleteParagraph
}:{
  contentKey?: number
  deleteParagraph: (key?: number) => void
}) => {

  const [content, setContent] = React.useState<string>("");
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "56px"; // Reset height to original to shrink on backspacing
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on scroll height
    }
  }, [content]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  // deletes the textarea when empty
  const handleDelete = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if((event.key === "Backspace" || event.key === "Delete") && content === ""){
      deleteParagraph(contentKey);
    }
  }

  return(
    <div
      key={contentKey}
      className="flex flex-col items-center gap-2 py-2 px-8 my-4"
    >
      <textarea
        ref={textareaRef}
        value={content}
        onChange={handleChange}
        onKeyDown={handleDelete}
        placeholder="Type something here..."
        className="w-full h-14 bg-transparent outline-none border border-black overflow-hidden resize-none rounded-xl px-4 py-3.5"
      >

      </textarea>
    </div>
  )
};

export default ParagraphSection;