"use client"

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";

const topics: string[] = [
  "movies",
  "language learning",
  "devOps",
  "programming languages",
  "astronomy",
  "reading",
];

const Page = () => {

  // Selection of roles and titles
  const [role, setRole] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    event.target.name === "role" ? setRole(event.target.value) : setTitle(event.target.value);
  };

  // Selection of topics
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);

  const handleTopicSelect = (t: string) => {
    if(selectedTopics.includes(t)){
      setSelectedTopics((tp: string[]) => {
        return tp.filter((top: string) => top !== t);
      })
    }
    else{
      setSelectedTopics((tp: string[]) => {
        return [...tp, t];
      });
    }
  };

  // Reload more topics
  const handleTopicsLoad = () => {

  };

  return (
    <div className="p-4 flex flex-col gap-6 items-center">
      {/* ROLES */}
      <div className="w-full mx-4">
        <div className="">
          <div className="">
          To help us tailor your experience on our platform, please let us know your role. You can choose from the following options: 
          <span className="">
            <ul className="list-inside list-disc px-6 my-2">
              <li className=""><span className="font-semibold">Professional:</span> If you’re here to share your expertise, insights, or support in mental health education.</li>
              <li className=""><span className="font-semibold">Mental Health Education Seeker:</span> If you’re here to learn, grow, or gain knowledge about mental health.</li>
            </ul>
          </span> 
          Your role will help us ensure that you get the most relevant features and resources. Don’t worry—you can always update your role later if needed!
          </div>
        </div>
        <div className="w-full">
          <p className="my-4">Select Role to get started</p>
          <div className="flex flex-col gap-6 px-4 my-6">
            <FormControl required sx={{ minWidth: 120 }}>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role-select"
                value={role}
                label="Role"
                name="role"
                onChange={handleChange}
              >
                <MenuItem value={"professional"}>Professional</MenuItem>
                <MenuItem value={"seeker"}>Education Seeker</MenuItem>
              </Select>
            </FormControl>
            { 
              role === "professional" &&
              <FormControl required sx={{ minWidth: 120 }}>
                <InputLabel id="title-label">Title</InputLabel>
                <Select
                  labelId="title-label"
                  id="title-select"
                  value={title}
                  label="Title"
                  name="title"
                  onChange={handleChange}
                >
                  <MenuItem value={"phyciatrist"}>Psychiatrist</MenuItem>
                  <MenuItem value={"phychologist"}>Psychologist</MenuItem>
                  <MenuItem value={"counselor"}>Counselor</MenuItem>
                  <MenuItem value={"therapist"}>Therapist</MenuItem>
                </Select>
              </FormControl>
            }
            {
              title !== "" && role === "professional" &&
              <TextField
                className="margin-4 "
                id="outlined-password-input"
                label="License No *"
                type="text"
              />
            }
          </div>
          <p className="text-sm text-red-400">* - Required</p>
        </div>
      </div>
      {/* TOPICS */}
      <div className="w-full my-6 flex flex-col items-center">
        <h2 className="self-start text-2xl font-semibold">Explore Topics</h2>
        <div className="w-full max-h-fit flex flex-wrap col-span-2 gap-4 my-8">
          {
            topics.map((topic: string, index: number) => (
              <button
                className="text-sm py-4 px-6 rounded-full bg-gray-100 text-black capitalize cursor-pointer border-2 border-gray-100"
                style={selectedTopics.includes(topic) == true ? {background: "transparent", borderColor: "black"} : {}}
                name={topic}
                key={index}
                onClick={() => handleTopicSelect(topic)}
              >
                {topic}
              </button>
            ))
          }
        </div>
        <p className="hover:underline text-sm font-semibold cursor-pointer" onClick={() => handleTopicsLoad()}>Load More</p>
      </div>
      <button className="w-1/2 h-12 bg-black active:bg-white active:border active:text-black text-white border-black rounded-lg">Continue</button>
    </div>
  )
}

export default Page;