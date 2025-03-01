"use client"

import Link from "next/link";
import { SlOptions } from "react-icons/sl";
import * as React from "react";
import ImageSection from "@/app/components/createComponents/imageSection";
import ContentSection from "@/app/components/createComponents/contentSection";
import ParagraphSection from "@/app/components/createComponents/paragraphSection";


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

  // Contents...Paragraph and the Image sections
  const [contents, setContents] = React.useState<Array<React.JSX.Element>>([]);
  const handleImageUpload = (imgData: FileList|null) => {
    const selImg = imgData?.item(0);
    if(selImg !== null){
      if(selImg?.type.split("/")[0] === "image"){
        const img = URL.createObjectURL(selImg);
        setContents((c: Array<React.JSX.Element>) => {
          return[
            ...c,
            <ImageSection
              image={img}
              deleteImage={(key?: number) => handleDeleteContent(key)}
            />
          ];
        });
        setOptVis(false);
      }else{
        console.log("File uploaded must be an image!!");
      }
    }
  }

  const handleInsertParagraph = () => {
    setContents((c: Array<React.JSX.Element>) => {
      return[
        ...c,
        <ParagraphSection
          deleteParagraph={(key?: number) => handleDeleteContent(key)}
          handleParagraphChange={handleParagraphChange}
          paragraphContent={""}
        />
      ];
    });
    setOptVis(false);
  }

  // handles content changes on the paragraph section.
  const [paragraphContent, setParagraphContent] = React.useState<string>("");
  const handleParagraphChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setParagraphContent(target.value);
    setContents((c: Array<React.JSX.Element>) => {
      c[target.id as unknown as number] = <ParagraphSection
        deleteParagraph={(key?: number) => handleDeleteContent(key)}
        handleParagraphChange={handleParagraphChange}
        paragraphContent={target.value}
      />
      return c;
    });
  };
  // console.log(paragraphContent);
  
  const handleDeleteContent = (key?: number) => {
    console.log(key);
    setContents((c: Array<React.JSX.Element>) => {
      c = c.filter((element: React.JSX.Element, i: number) => { if(key !== i){ return element } });
      return c;
    })
  }
  // console.log(contents);
  
  return (
    <div className="w-1/2 p-2 relative">
      {/* HEADER */}
      <header className="flex justify-between border-b-2 border-black px-2 fixed top-0 z-10 w-1/2 bg-white">
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
      <div className="flex flex-col gap-4 py-4 mt-16 overflow-y-auto">
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
          <ContentSection
            handleButtonClick={() => handleButtonClick()}
            fileInputRef={fileInputRef}
            handleOptionsVisibility={() => handleOptionsVisibility()}
            optVis={optVis}
            handleInsertParagraph={handleInsertParagraph}
            handleUploadImage={handleImageUpload}
            contents={contents}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateArticle;