"use client";

import * as React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

interface ParagraphSectionProps {
  contentKey?: number;
  handleParagraphChange: (contentKey: number | undefined, content: string) => void;
  content: string;
  deleteParagraph: (key?: number) => void;
}

const ParagraphSection: React.FC<ParagraphSectionProps> = ({
  contentKey,
  handleParagraphChange,
  content,
  deleteParagraph,
}) => {
  const { quill, quillRef } = useQuill();
  const isUserInput = React.useRef(false);

  // Handle text changes inside Quill and update parent state.
  React.useEffect(() => {
    if (!quill) return;
    const handleTextChange = () => {
      isUserInput.current = true;
      handleParagraphChange(contentKey, quill.root.innerHTML);
    };

    quill.on("text-change", handleTextChange);

    return () => {
      quill.off("text-change", handleTextChange);
    };
  }, [quill, contentKey, handleParagraphChange]);

  // When the parent's content changes (not due to user input), update Quill.
  React.useEffect(() => {
    if (!quill) return;
    if (isUserInput.current) {
      isUserInput.current = false;
      return;
    }

    // Preserve current selection (if any)
    const selection = quill.getSelection();
    quill.clipboard.dangerouslyPasteHTML(content);

    setTimeout(() => {
      if (selection) {
        quill.setSelection(selection.index, selection.length || 0);
      }
    }, 0);
  }, [content, quill]);

  // Delete the paragraph when it’s empty.
  const handleDelete = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === "Backspace" || e.key === "Delete") && quill?.root.innerHTML.match(/^<p><br><\/p>$/)) {
      deleteParagraph(contentKey);
    }
  };

  return (
    <div className="py-2 px-8 my-4">
      <div
        data-key={contentKey}
        onKeyDown={handleDelete}
        ref={quillRef}
        className="w-full border rounded-md my-4"
      />
    </div>
  );
};

export default ParagraphSection;
