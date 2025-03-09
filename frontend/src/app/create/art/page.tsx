"use client"

import Link from "next/link";
import { SlOptions } from "react-icons/sl";
import * as React from "react";
import ImageSection from "@/app/components/createComponents/imageSection";
import ParagraphSection from "@/app/components/createComponents/paragraphSection";
import InsertOptions from "@/app/components/createComponents/insertOptions";

type ContentItem =
| { type: "paragraph"; content: string }
| { type: "image"; image: string };

const CreateArticle = (
  props: {}
) => {

  // handles the titles changes.
  const [titles, setTitles] = React.useState<{title: string, subTitle: string}>({title: "", subTitle: ""});
  const handleTitlesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setTitles((t: {title: string, subTitle: string}) => {
      t[target.id as "title" | "subTitle"] = target.value;
      return {...t};
    });
  }
  // console.log(titles);

  // files upload window
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  }

  // options visibility
  const [optVis, setOptVis] = React.useState<boolean>(false);
  const handleOptionsVisibility = () => {
    setOptVis((opt: boolean) => {
      opt = !opt;
      return opt;
    });
  }

  // Handles contents upload. Paragraphs and media uploads.
  const [contents, setContents] = React.useState<Array<ContentItem>>([]);

  const handleInsertParagraph = () => {
    setContents((prev) => [...prev, { type: "paragraph", content: "" }]);
    setOptVis(false);
  };

  const handleParagraphChange = (index: number, content: string) => {
    setContents((prev) => {
      const updated = [...prev];
      updated[index] = { type: "paragraph", content };
      return updated;
    });
  };  

  const handleImageUpload = (imgData: FileList | null) => {
    const selImg = imgData?.item(0);
    if (selImg) {
      if (selImg.type.split("/")[0] === "image") {
        const img = URL.createObjectURL(selImg);
        setContents((prev) => [...prev, { type: "image", image: img }]);
        setOptVis(false);
      } else {
        console.log("File uploaded must be an image!!");
      }
    }
  };

  const handleDeleteContent = (index: number) => {
    setContents((prev) => prev.filter((_, i) => i !== index));
  };
  console.log(contents);
  
  // Upload the article publication to the server.
  const handlePublish = () => {

  }

  return (
    <div className="w-1/2 p-2 relative">
      {/* HEADER */}
      <header className="flex justify-between border-b-2 border-black px-2 sticky top-0 z-10 w-full bg-white">
        <div className="">
          <Link href=""><img src="/logo/logo-white.png" alt="" className="w-54 h-16"/></Link>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-black bg-green-600 px-5 py-2 rounded-full">Publish</button>
          <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
          <button><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full hover:opacity-80"/></button>
        </div>
      </header>
      {/* EDITING SECTION */}
      <div className="flex flex-col gap-4 py-4 overflow-y-auto">
        {/* titles */}
        <div className="my-4 flex flex-col gap-4 text-black">
          <input
            id="title"
            value={titles.title}
            type="text"
            className="text-7xl outline-none px-2 font-semibold placeholder:font-normal"
            placeholder="TITLE"
            onChange={(e) => handleTitlesChange(e)}
          />
          <input
            id="subTitle"
            value={titles.subTitle}
            type="text"
            className="text-4xl outline-none px-6"
            placeholder="SUB-TITLE"
            onChange={(e) => handleTitlesChange(e)}
          />
        </div>
        {/* contents */}
        <div className="">
          {contents.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <ParagraphSection
                  key={index}
                  contentKey={index}
                  content={item.content}
                  handleParagraphChange={(_, content) => handleParagraphChange(index, content)}
                  deleteParagraph={() => handleDeleteContent(index)}
                />
              );
            } else if (item.type === "image") {
              return (
                <ImageSection
                  key={index}
                  image={item.image}
                  deleteImage={() => handleDeleteContent(index)}
                />
              );
            }
            return null;
          })}
          <InsertOptions
            handleButtonClick={handleButtonClick}
            fileInputRef={fileInputRef}
            handleOptionsVisibility={handleOptionsVisibility}
            optVis={optVis}
            handleUploadImage={(imgData: FileList|null) => handleImageUpload(imgData)}
            handleInsertParagraph={handleInsertParagraph}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateArticle;