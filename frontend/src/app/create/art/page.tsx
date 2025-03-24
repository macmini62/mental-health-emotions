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
// import { AWSUtil } from "@/app/utils/AWSUtil";

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
  const [topics, setTopics] = React.useState<Array<string>>([]);
  const [topicInput, setTopicInput] = React.useState("");

  // State for thumbnail upload
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);

  // Add a new topic (up to 5)
  const handleAddTopic = () => {
    if (topicInput.trim() && topics.length < 5) {
      setTopics((prev) => [...prev, topicInput.trim()]);
      setTopicInput("");
    }
  };

  // Handle thumbnail file upload
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
  
  const AWSUpload = React.useMemo(() => {
    console.log("Hello world")
    return new AWSUtil();
  }, [])

  // Upload the article publication to the server.
  const[publish, setPublish] = React.useState<boolean>(false);
  const handlePublish = async () => {
    if(titles?.title.length > 0 && titles?.subTitle.length > 0){
      setPublish(true);
      const creatorId = localStorage.getItem("userId");
      if(creatorId){

        // const data: createArticle = {
        //   creatorId: creatorId,
        //   title: titles.title,
        //   overview: titles.subTitle,
        //   content: contents,
        //   tags: topics,
        //   thumbnail: {
        //     image: thumbnail,
        //     caption: "image has no caption",
        //   }
        // }

        const formData = new FormData();
        formData.append("creatorId", creatorId);
        formData.append("title", titles.title);
        formData.append("overview", titles.subTitle);
        formData.append("content", JSON.stringify(contents)); // if content is an array/object
        formData.append("tags", JSON.stringify(topics)); // or loop and append each tag
        // Append the thumbnail file (if exists)
        if (thumbnail) {
          formData.append("thumbnail", thumbnail);

          // Store the images in the AWS s3.
          const res = await AWSUpload.services("image", thumbnail);
          console.log(res);
        }
        // Optionally, add a caption
        formData.append("thumbnailCaption", "image has no caption");

        console.log(formData.get("content"));
        console.log(formData.get("thumbnail"));

        // console.log(data)

  
        axios.post<article>("http://localhost:3001/resources/articles/create", formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
          .then((res) => {
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          })
      }
    }
  }

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
              >Publish</button>
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