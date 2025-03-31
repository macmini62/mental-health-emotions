"use client"

import Link from "next/link";
import { SlOptions } from "react-icons/sl";
import * as React from "react";
import ImageSection from "@/app/components/createComponents/imageSection";
import ParagraphSection from "@/app/components/createComponents/paragraphSection";
import InsertOptions from "@/app/components/createComponents/insertOptions";
import PublishPage from "@/app/components/publishComponent/publish";
import { article, createArticle } from "@/app/interface/interface";
import { ContentItem } from "@/app/types/types";
import axios from "axios";
import { AWSUtil } from "@/app/utils/AWSUtil";
import "dotenv/config";

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
    setContents((prev) => [...prev, { type: "paragraph", paragraph: "" }]);
    setOptVis(false);
  };

  const handleParagraphChange = (index: number, paragraph: string) => {
    setContents((prev) => {
      const updated = [...prev];
      updated[index] = { type: "paragraph", paragraph };
      return updated;
    });
  };  

  const handleImageUpload = (imgData: FileList | null) => {
    const selImg = imgData?.item(0);
    if (selImg) {
      if (selImg.type.split("/")[0] === "image") {
        console.log(selImg)
        setContents((prev) => [...prev, { type: "image", image: selImg }]);
        setOptVis(false);
      } else {
        console.log("File uploaded must be an image!!");
      }
    }
  };

  const handleDeleteContent = (index: number) => {
    setContents((prev) => prev.filter((_, i) => i !== index));
  };
  // console.log(contents);

  // Handles the state of the publish section
  // State for topics
  // Add a new topic (up to 5)
  const [topics, setTopics] = React.useState<Array<string>>([]);
  const [topicInput, setTopicInput] = React.useState("");
  const handleAddTopic = () => {
    if (topicInput.trim() && topics.length < 5) {
      setTopics((prev) => [...prev, topicInput.trim()]);
      setTopicInput("");
    }
  };

  // State for thumbnail upload
  // Handle thumbnail file upload
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);
  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];
    if (file.type.startsWith("image/")) {
      // Convert file to object URL for preview
      const f = 
      setThumbnail(file);
    } else {
      alert("Please upload an image file.");
    }
  };
  
  const AWS = React.useMemo(() => {
    return new AWSUtil();
  }, []);

  // Upload the article publication to the server.
  const[publish, setPublish] = React.useState<boolean>(false);
  const handlePublish = async () => {
    if(titles?.title.length > 0 && titles?.subTitle.length > 0){
      setPublish(true);
      if(thumbnail){
        try{
          const creatorId = localStorage.getItem("userId");
          // const creatorId = "37ec1a1b-1231-4552-b071-e05a19ca64ca";
          if(creatorId){
            if(contents.length > 0){
              const cnt: ContentItem[] = (await Promise.all(contents.map(async (c: ContentItem) => {
                if(c.type === "image"){
                  const item = c as { type: "image"; image: File; };
                  try{
                    const res: string | any = await AWS.services("image", item.image);
                    return { type: "image", image: res };
                  }
                  catch(e){
                    console.log(e);
                    return;
                  }
                }
                return c;
              }))).filter((c): c is ContentItem => c !== undefined);
          
              const thumbnailURL: string | any = await AWS.services("image", thumbnail);

              const data: createArticle = {
                creatorId: creatorId,
                title: titles.title,
                overview: titles.subTitle,
                content: cnt,
                tags: topics,
                thumbnail: {
                  imageURL: thumbnailURL
                }
              }
              console.log(data);

              axios.post<article>("http://localhost:3001/resources/articles/create", data)
              .then((res) => {
                console.log(res);
              })
              .catch((e) => {
                console.log(e);
              })
            }
          }
        }
        catch(e){
          console.log(e);
        }
      }
    }
  }

  console.log(contents);

  return (
    <div className="w-screen h-screen flex justify-center">
      {
        !publish ?
        <div className="w-1/2 p-2 relative">
          {/* HEADER */}
          <header className="flex justify-between border-b-2 border-black px-2 sticky top-0 z-10 w-full bg-white">
            <div className="">
              <Link href=""><img src="/logo/logo-white.png" alt="" className="w-54 h-16"/></Link>
            </div>
            <div className="flex items-center gap-8">
              <button
                className={`text-black bg-green-600 px-5 py-2 rounded-full ${titles.title.length === 0 && "opacity-50"} ${titles.subTitle.length === 0 && "opacity-50"}`}
                onClick={() => handlePublish()}
              >
                Publish
              </button>
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
                      content={item.paragraph}
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
        :
        <PublishPage
          type="article"
          handleAddTopic={() => handleAddTopic()}
          handlePublish={() => handlePublish()}
          handleThumbnailUpload={(e) => handleThumbnailUpload(e)}
          thumbnail={thumbnail}
          topicInput={topicInput}
          setTopicInput={setTopicInput}
          topics={topics}
        />
      }
    </div>
  )
}

export default CreateArticle;