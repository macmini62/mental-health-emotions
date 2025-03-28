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

const buttonStyle = {
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

  // file directory upload.
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  }

  // Thumbnail upload handler.
  const [thumbnail, setThumbnail] = React.useState<object>();

  const handleUploadThumbnail = (thumData: FileList|null) => {
    const selThumb = thumData?.item(0);
    console.log(selThumb);
    if(selThumb !== null){
      if(selThumb?.type.split("/")[0] === "image"){
        setThumbnail(selThumb);
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
    setThumbnail({})
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
  
  // Video upload handler.
  const [video, setVideo] = React.useState<object | null>(null);
  const handleVideoUpload = (vidData: FileList|null) => {
    setLoading(true);
    const selVid = vidData?.item(0);
    console.log(selVid);
    if(selVid !== null){
      if(selVid?.type.split("/")[0] === "video"){
        timer.current = setTimeout(() => {
          setLoading(false);
          setSuccess(true);
        }, 6000);
        timer.current = setTimeout(() => {
          setVideo(selVid);
        }, 10000);
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

  // Uploads the video to AWS Bucket.
  React.useEffect(() => {
    if(video){
      // Add the AWS upload code.
    }
  }, [video]);

  return (
    <div className="w-1/2 p-2">
      {/* HEADER */}
      <header className="flex justify-between border-b-2 border-black px-2 sticky top-0 z-10 w-full bg-white">
        <div className="">
          <Link href=""><img src="/logo/logo-white.png" alt="" className="w-54 h-16"/></Link>
        </div>
        <div className="flex items-center gap-8">
          <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
          <button><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full hover:opacity-80"/></button>
        </div>
      </header>
      {/* upload section */}
      {
        !video &&
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
          {/* <ErrorNotification
            action={"Upload Video"}
            failed={failed}
          /> */}
        </div>
      }
      {/* editing section*/}
      {
        video &&
        <div className="gap-6 mt-6 px-4 pb-6">
          <h3 className="font-semibold text-3xl h-16">Details</h3>
          <div className="flex gap-6">
            <form className="w-[60%] flex flex-col gap-6">
              <div className="w-full px-4 py-2 border border-black rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Title (required)</p>
                <textarea
                  name=""
                  id=""
                  rows={2}
                  className="overflow-none outline-none resize-none w-full"
                ></textarea>
              </div>
              <div className="w-full px-4 py-2 border border-black rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Description</p>
                <textarea
                  name=""
                  id=""
                  rows={5}
                  placeholder="Tell viewers about your video"
                  className="overflow-none outline-none resize-none w-full"
                ></textarea>
              </div>
              <div className="w-full">
                <h2 className="font-semibold text-xl">Thumbnail</h2>
                <div className="w-full my-2 flex flex-col items-center relative group">
                  { <img src="" alt="" className="w-[500px] h-[300px] rounded-md" /> }
                  <div className="flex items-center justify-center absolute z-10 w-[500px] h-[300px] invisible group-hover:visible bg-gray-50 opacity-80 rounded-md">
                    {
                      !thumbnail ?
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={< MdOutlineFileUpload/>}
                        style={buttonStyle}
                        onClick={() => handleButtonClick()}
                      >
                        Upload thumbnail
                        <VisuallyHiddenInput
                          type="file"
                          ref={fileInputRef}
                          onChange={(event) => handleUploadThumbnail(event.target.files)}
                        />
                      </Button>
                      :
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<MdDeleteOutline />}
                        style={buttonStyle}
                        onClick={() => handleButtonClick()}
                      >
                        Delete thumbnail
                        <VisuallyHiddenInput
                          type="file"
                          ref={fileInputRef}
                          onChange={() => handleDeleteThumbnail()}
                        />
                      </Button>
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
              <div className="w-full">
                <h2 className="font-semibold text-xl">Playlist</h2>
                <p className="text-gray-500 my-2">
                  Add your video to one or more playlists to organize your content for viewers.
                </p>
                <MultipleInputSelect/>
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
                    control={<Checkbox defaultChecked
                    icon={<FaRegCircle  className="text-black w-6 h-6"/>}
                    checkedIcon={<FaCheckCircle className="text-black w-6 h-6" />}
                    size="large"
                  />} 
                    label="Yes"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked
                    icon={<FaRegCircle className="text-black w-6 h-6" />}
                    checkedIcon={<FaCheckCircle className="text-black w-6 h-6" />}
                    size="large"
                  />} 
                    label="No"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-xl font-semibold">Tags</h2>
                <div className="">
                  <p className="my-4">
                    Tags can be useful if content in your video is commonly mispelled. Otherwise, tags play
                    a minimal role in helping viewers find your video.
                  </p>
                  <div className="w-full">
                    <textarea
                      name=""
                      id=""
                      rows={1}
                      placeholder="Add tags"
                      className="p-4 overflow-none outline-none resize-none w-full border border-gray-400 hover:border-black cursor-pointer rounded-lg placeholder:text-gray-400 placeholder:text-sm"
                    ></textarea>
                    <p className="text-sm text-gray-700 mb-1">Enter a comma after each tag</p>
                  </div>
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold text-xl">Language</h2>
                <div className="">
                  <p className="my-4">
                    Select your video"s language(s)
                  </p>
                  <MultipleInputSelect/>
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold text-xl">Category</h2>
                <div className="">
                  <p className="my-4">
                    Add your video to a category so viewers can find it more easily
                  </p>
                  <SingleInputSelect/>
                </div>
              </div>
              <div className="">
                <h2 className="font-semibold text-xl">License</h2>
                <div className="">
                  <p className="my-4">
                    Select your video's language(s)
                  </p>
                  <SingleInputSelect/>
                  <div className="flex flex-col my-2">
                    <FormControlLabel
                      control={<Checkbox defaultChecked
                      icon={<MdOutlineCheckBoxOutlineBlank  className="text-black w-6 h-6"/>}
                      checkedIcon={<MdCheckBox className="text-black w-6 h-6" />}
                      size="large"
                    />} 
                      label="Allow embedding"
                    />
                    <FormControlLabel
                      control={<Checkbox defaultChecked
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
                  <SingleInputSelect/>
                  <div className="flex flex-col my-2">
                    <FormControlLabel
                      control={<Checkbox defaultChecked
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
                <video src="" className="w-full h-64 border">

                </video>
                <div className="w-full px-4">
                  <div className="my-3">
                    <p className="text-lg text-gray-600">Video link</p>
                    <Link href="" className="text-blue-600">http://localhost:3000/create/vid</Link>
                  </div>
                  <div className="my-3">
                    <p className="text-lg text-gray-600">Filename</p>
                    <p className="">The Video Name.mp4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end my-2">
            <button className="w-48 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white">
              Submit
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default CreateVideo;
