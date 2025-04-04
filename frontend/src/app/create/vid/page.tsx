"use client"

import MultipleInputSelect from "@/app/components/createComponents/multipleInputSelect";
import SingleInputSelect from "@/app/components/createComponents/singleInputSelect";
import { Box, Button, Checkbox, CircularProgress, Fab, FormControlLabel, styled } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import Link from "next/link";
import * as React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { MdCheckBox, MdDeleteOutline, MdOutlineCheckBoxOutlineBlank, MdOutlineFileUpload } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { IoMdCheckmark } from "react-icons/io";
import ErrorNotification from "@/app/components/notifications/notificationAlert";
import { FiAlertTriangle } from "react-icons/fi";
import { AWSUtil } from "@/app/utils/AWSUtil";
import axios from "axios";
import { video } from "@/app/interface/interface";

const LANGUAGES = [
  "English",
  "Swahili",
  "Italian",
  "Mandarin Chinese",
  "Japanese",
  "Portuguese",
  "Spanish",
  "French",
  "Korean",
  "German",
  "Standard Arabic",
  "Russian",
  "Hindi",
  "Indonesian",
  "Turkish",
  "Vietnamese"
];

const LICENSES = [
  "Standard eMOTIONS License",
  "Creative Commons - Attribution"
];

const BUTTONSTYLE = {
  backgroundColor: "transparent",
  color: "black",
  boxShadow: "none",
  border: "2px solid black",
  borderRadius: "10px"
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreateVideo = () => {

  // Intializes the AWS services.
  const AWS = React.useMemo(() => {
    return new AWSUtil();
  }, []);

  // handles the title and description text input change.
  const [text, setText] = React.useState({
    title: "",
    description: ""
  });
  const handleTextInput = (e:  React.ChangeEvent<HTMLTextAreaElement>) => {
    setText((t) => {
      return {
        ...t,
        [e.target.name]: e.target.value,
      };
    });
  };

  // file directory upload.
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  }
  // Thumbnail upload handler.
  const [thumbnail, setThumbnail] = React.useState<string>("");
  const handleUploadThumbnail = async (thumData: FileList | null) => {
    const selThumb = thumData?.item(0);
    if(selThumb !== null){
      if(selThumb?.type.split("/")[0] === "image"){
        try{
          const res: string | null = await AWS.services("image", selThumb);
          if(res){
            setThumbnail(res);
          }
        }
        catch(e){
          console.log("File uploaded must be an image!!");
        }
      }else{
        console.log("File uploaded must be an image!!");
        setFailed(true);
        timer.current = setTimeout(() => {
          setFailed(false);
        }, 5000);
      }
    }
  }

  const handleDeleteThumbnail = () => {
    setThumbnail("");
  }

  // video upload buttons.
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);
  const buttonSx = {
    width: 200,
    height: 200,
    "&:hover": {
      bgcolor: grey[200]
    },
    backgroundColor: "white",
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  // handles the error feedback.
  const[failed, setFailed] = React.useState<boolean>(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  
  // Video upload handler. Uploads the video to AWS Bucket.
  const [video, setVideo] = React.useState({
    URL: "",
    duration: 0
  });

  const getVideoDuration = (file: File): Promise<number> => {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const video = document.createElement("video");
      video.preload = "metadata";
      video.src = url;
  
      // When metadata is loaded, the duration is available
      video.onloadedmetadata = () => {
        URL.revokeObjectURL(url); // clean up after yourself
        resolve(video.duration);
      };
  
      video.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Failed to load video metadata"));
      };
    });
  };
  const handleVideoUpload = async (vidData: FileList | null) => {
    setLoading(true);
    const selVid = vidData?.item(0);
    if(selVid !== null){
      if(selVid?.type.split("/")[0] === "video"){        
        try{
          setLoading(true);
          
          // Get the video duration before uploading (if needed)
          const duration = await getVideoDuration(selVid);
          // console.log("Video duration (in seconds):", duration);

          // Upload video to AWS s3
          const res: string | any = await AWS.services("video", selVid);
          
          if(typeof(res) === "string"){
            setLoading(false);
            setSuccess(true);
            timer.current = setTimeout(() => {
              setText((t) => {
                return{
                  ...t,
                  title: selVid.name,
                };
              });
              setVideo({
                URL: res,
                duration: duration
              });              
            }, 2000)
          }
        }
        catch(e){
          console.log(e);
          setLoading(false);
          setSuccess(false);
          setFailed(true);
        }
      }else{
        console.log("File uploaded must be a video!!");
        setLoading(false);
        setSuccess(false);
        setFailed(true);
        timer.current = setTimeout(() => {
          setFailed(false);
        }, 5000);
      }
    }
  }

  // State for topics
  const [topics, setTopics] = React.useState<Array<string>>([]);
  const [topicInput, setTopicInput] = React.useState("");
  // Add a new topic (up to 5)
  const handleAddTopic = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (topicInput.trim() && topics.length < 5) {
      setTopics((prev) => [...prev, topicInput.trim()]);
      setTopicInput("");
    }
  };

  // States to handles the different form inputs
  const[languageSelected, setLanguageSelected] = React.useState<Array<string>>([]);
  const [options, setOptions] = React.useState({
    category: "",
    license: "",
    comments: ""
  });

  const handlePublish = () => {
    const creatorId: string | null = localStorage.getItem("userId");
    if(
      options.category !== "" &&
      options.comments !== "" &&
      options.license !== "" &&
      languageSelected.length > 0 &&
      creatorId
    ){
      const data = {
        creatorId: creatorId,
        title: text.title,
        URL: video.URL,
        description: text.description,
        tags: topics,
        duration: video.duration,
        languages: languageSelected,
        thumbnail: thumbnail,
        license: options.license
      }

      axios.post<video>("http://localhost:3001/resources/videos/create", data)
        .then((res) => {
          // console.log(res);
          window.location.href = "/articles";
        })
        .catch((e) => {
          console.log(e);
        })
    }
  }

  return (
    <div className="w-1/2 p-2">
      {/* HEADER */}
      <header className="flex justify-between border-b-2 border-black px-2 sticky top-0 z-10 w-full bg-white">
        <div className="">
          <Link href=""><img src="/logo/logo-white.png" alt="" className="w-54 h-16"/></Link>
        </div>
        <div className="flex items-center gap-8">
          <button
            className={`text-black bg-green-600 px-5 py-2 rounded-full ${text.title.length === 0 && "opacity-50"} ${text.description.length === 0 && "opacity-50"}`}
            onClick={() => handlePublish()}
          >
            Publish
          </button>
          <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
          <button><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full hover:opacity-80"/></button>
        </div>
      </header>
      {/* upload section */}
      {
        !video.URL &&
        <div className="flex flex-col gap-6 justify-center items-center h-[calc(100%-60px)] relative">
          <Box sx={{ m: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Fab
              aria-label="save"
              sx={buttonSx}
              onClick={() => handleButtonClick()}
            >
              {success ? <IoMdCheckmark className="w-24 h-24 text-white"/> : <MdOutlineFileUpload className="w-24 h-24"/>}
            </Fab>
            {loading && (
              <CircularProgress
                size={215}
                sx={{
                  color: green[500],
                  position: "absolute",
                  zIndex: 1,
                }}
                />
              )}
          </Box>
          <VisuallyHiddenInput
            type="file"
            ref={fileInputRef}
            onChange={(event) => handleVideoUpload(event.target.files)}
          />
          <p className="">Your videos will be private until you publish them</p>
          <div className="">
            <button
                className="w-40 p-3 rounded-full text-white border border-black bg-black active:bg-transparent active:text-black"
                onClick={() => handleButtonClick()}
              >
                Upload
                <VisuallyHiddenInput
                  type="file"
                  ref={fileInputRef}
                  onChange={(event) => handleVideoUpload(event.target.files)}
                />
            </button>
          </div>
          <ErrorNotification
            action={"Upload Video"}
            failed={failed}
          />
        </div>
      }
      {/* editing section*/}
      {
        video.URL &&
        <div className="gap-6 mt-6 px-4 pb-6">
          <h3 className="font-semibold text-3xl h-16">Details</h3>
          <div className="flex gap-6">
            <form className="w-[60%] flex flex-col gap-6">
              <div className="w-full px-4 py-2 border border-black rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Title (required)</p>
                <textarea
                  name="title"
                  id=""
                  value={text.title}
                  rows={2}
                  onChange={(e) => handleTextInput(e)}
                  className="overflow-none outline-none resize-none w-full"
                ></textarea>
              </div>
              <div className="w-full px-4 py-2 border border-black rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Description</p>
                <textarea
                  name="description"
                  id=""
                  value={text.description}
                  rows={5}
                  onChange={(e) => handleTextInput(e)}
                  placeholder="Tell viewers about your video"
                  className="overflow-none outline-none resize-none w-full"
                ></textarea>
              </div>
              <div className="w-full">
                <h2 className="font-semibold text-xl">Thumbnail</h2>
                <div className="w-full my-2 flex flex-col items-center relative group">
                  { <img src={thumbnail} alt="" className="w-[500px] h-[300px] rounded-md" /> }
                  <div className="flex items-center justify-center absolute w-[500px] h-[300px] invisible group-hover:visible bg-gray-50 opacity-80 rounded-md">
                    {
                      !thumbnail ? 
                      ( <Button
                          component="label"
                          variant="contained"
                          startIcon={<MdOutlineFileUpload />}
                          style={BUTTONSTYLE}
                        >
                          Upload thumbnail
                          <VisuallyHiddenInput
                            type="file"
                            ref={fileInputRef}
                            onChange={(event) => handleUploadThumbnail(event.target.files)}
                          />
                        </Button> )
                        :
                      ( <Button
                          variant="contained"
                          startIcon={<MdDeleteOutline />}
                          style={BUTTONSTYLE}
                          onClick={() => handleDeleteThumbnail()}  // This would handle deletion
                        >
                          Delete thumbnail
                        </Button> )
                    }
                  </div>
                </div>
                {
                  failed &&
                  <div className="flex gap-2 items-center">
                    <FiAlertTriangle className="text-red-500"/>
                    <p className="text-sm text-red-500">Failed to upload thumbnail</p>
                  </div>
                }
              </div>
              <div className="font-semibold">
                <h2 className="text-xl">Altered content</h2>
                <p className="font-normal my-2">Do any of the following describe your content?</p>
                <ol className="list-disc pl-10">
                  <li className="">
                    Makes a real person appear to say or do something they didn't say or do
                  </li>
                  <li className="">
                    Alters footage of a real event or place
                  </li>
                  <li className="">
                    Generates a realistic-looking scene that didn't actually occur
                  </li>
                </ol>
                <div className="flex flex-col my-2">
                  <FormControlLabel
                    control={<Checkbox
                    icon={<FaRegCircle  className="text-black w-6 h-6"/>}
                    checkedIcon={<FaCheckCircle className="text-black w-6 h-6" />}
                    size="large"/>}
                    label="Yes"
                  />
                  <FormControlLabel
                    control={<Checkbox
                    icon={<FaRegCircle className="text-black w-6 h-6" />}
                    checkedIcon={<FaCheckCircle className="text-black w-6 h-6" />}
                    size="large"/>}
                    label="No"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold">Tags</h2>
                <label
                  htmlFor="topicInput"
                  className="block font-medium my-4"
                >
                  Tags can be useful if content in your video is commonly mispelled. Otherwise, tags play
                  a minimal role in helping viewers find your video.
                </label>
                <div className="flex items-center gap-4 mb-4">
                  <input
                    id="topicInput"
                    type="text"
                    placeholder="Add a topic..."
                    value={topicInput}
                    onChange={(e) => setTopicInput(e.target.value)}
                    className="flex-1 border border-gray-300 p-2 rounded-lg h-16 focus:border-blue-500 outline-none"
                  />
                  <button
                    onClick={(e) => handleAddTopic(e)}
                    className={`w-32 h-12 px-4 py-2 rounded-lg ${topics.length == 5 ? "bg-gray-100 cursor-not-allowed hover:bg-gray-200 text-black" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                  >
                    Add
                  </button>
                </div>
                {/* List of topics */}
                <div className="flex gap-4 ml-6 mb-4">
                  {topics.map((t, i) => (
                    <p className="rounded-full py-2 px-6 bg-gray-200" key={i}>{t}</p>
                  ))}
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold text-xl">Language</h2>
                <div className="">
                  <p className="my-4">
                    Select your video's language(s)
                  </p>
                  <MultipleInputSelect
                    choices={LANGUAGES}
                    choicesSelected={languageSelected}
                    setChoicesSelected={setLanguageSelected}
                  />
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold text-xl">Category</h2>
                <div className="">
                  <p className="my-4">
                    Add your video to a category so viewers can find it more easily
                  </p>
                  <SingleInputSelect
                    name={"category"}
                    choices={["Yes", "No"]}
                    choiceSelected={options.category}
                    setChoiceSelected={setOptions}
                  />
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold text-xl mb-4">License</h2>
                <div className="">
                  <SingleInputSelect
                    name={"license"}
                    choices={LICENSES}
                    choiceSelected={options.license}
                    setChoiceSelected={setOptions}
                  />
                  <div className="flex flex-col my-2">
                    <FormControlLabel
                      control={<Checkbox
                      icon={<MdOutlineCheckBoxOutlineBlank  className="text-black w-6 h-6"/>}
                      checkedIcon={<MdCheckBox className="text-black w-6 h-6" />}
                      size="large"
                    />} 
                      label="Allow embedding"
                    />
                    <FormControlLabel
                      control={<Checkbox
                      icon={<MdOutlineCheckBoxOutlineBlank className="text-black w-6 h-6" />}
                      checkedIcon={<MdCheckBox className="text-black w-6 h-6" />}
                      size="large"
                    />} 
                      label="Publish to subscription feed and notify sebscribers"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold text-xl">Comments and ratings</h2>
                <div className="">
                  <p className="my-4">
                    Choose if and how you want to show comments
                  </p>
                  <SingleInputSelect
                    name={"comments"}
                    choices={["Yes", "No"]}
                    choiceSelected={options.comments}
                    setChoiceSelected={setOptions}
                  />
                  <div className="flex flex-col my-2">
                    <FormControlLabel
                      control={<Checkbox
                      icon={<MdOutlineCheckBoxOutlineBlank className="text-black w-6 h-6" />}
                      checkedIcon={<MdCheckBox className="text-black w-6 h-6" />}
                      size="large"
                    />} 
                      label="Show how many viewers like the video"
                    />
                  </div>
                </div>
              </div>
            </form>
            {/* video preview */}
            <div className="w-[40%] max-h-fit sticky top-24">
              <div className="w-full flex flex-col border border-black rounded-lg">
                <video src={video.URL} controls={true} controlsList="nodownload nofullscreen noremoteplayback noplaybackrate nopictureinpicture" className="w-full h-64 border"></video>
                <div className="w-full px-4">
                  <div className="my-3">
                    <p className="text-lg text-gray-600">Video link</p>
                    <p className="text-blue-600 text-wrap">{video.URL}</p>
                  </div>
                  <div className="my-3 w-full">
                    <p className="text-lg text-gray-600 text-wrap">Filename</p>
                    <p className="">{text.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default CreateVideo;
