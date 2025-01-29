"use client"

import MultipleInputSelect from "@/app/components/createComponents/multipleInputSelect";
import SingleInputSelect from "@/app/components/createComponents/singleInputSelect";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import Link from "next/link";
import * as React from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { MdCheckBox, MdDeleteOutline, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

const buttonStyle = {
  backgroundColor: "transparent",
  color: "black",
  boxShadow: "none",
  border: "2px solid black",
  borderRadius: "10px"
};

const CreateVideo = () => {

  const [thumbnail, setThumbnail] = React.useState<FileList>();

  const handleUploadThumbnail = () => {

  }

  const handleDeleteThumbnail = () => {

  }

  return (
    <div className="w-1/2 p-2 relative h-screen">
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
      {/* content */}
      <div className="flex gap-4 mt-20 px-16 overflow-y-auto">
        <form className="w-2/3 flex flex-col gap-6">
          <h3 className="font-semibold text-3xl">Details</h3>
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
              { <img src="" alt="" className="w-[400px] h-[400px] rounded-md" /> }
              <div className="flex items-center justify-center absolute z-10 w-[400px] h-[400px] invisible group-hover:visible bg-gray-50 opacity-80 rounded-md">
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<MdDeleteOutline />}
                  style={buttonStyle}
                  onClick={() => handleDeleteThumbnail()}
                >
                  delete thumbnail
                </Button>
              </div>
            </div>
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
                  className="p-4 overflow-none outline-none resize-none w-full border border-black rounded-lg placeholder:text-gray-400 placeholder:text-sm"
                ></textarea>
                <p className="text-sm text-gray-700 mb-1">Enter a comma after each tag</p>
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="font-semibold text-xl">Language</h2>
            <div className="">
              <p className="my-4">
                Select your video's language(s)
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
        <div className=""></div>
      </div>
    </div>
  )
}

export default CreateVideo;
