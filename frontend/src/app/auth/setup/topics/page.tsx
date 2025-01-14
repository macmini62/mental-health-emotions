"use client"

import React from "react";

const TopicsPage = () => {

  const topics: string[] = [
    "movies",
    "language learning",
    "devOps",
    "programming languages",
    "astronomy",
    "reading",
    "gaming",
    "pc",
    "dynamic programming",
    "comics",
    "engineering",
    "artificial intelligence",
    "amazon",
    "openAI",
    "technologies",
    "books",
    "depression",
    "suicide",
    "attention deficiet hypertension disorder (ADHD)",
    "obsession compulsion disorder (OCD)",
    "machine learning"
  ];

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
    <div className="w-full my-4 flex flex-col items-center justify-between">
      <div className="w-1/2 mx-4">
        <h2 className="text-center font-semibold text-2xl">Select topics to explore.</h2>
        <div className="flex flex-col items-center gap-16 w-full mt-12">
          <div className="w-full justify-center flex flex-wrap gap-4">
            {
              topics.map((topic: string, index: number) => (
                <div
                  className="text-sm py-4 px-14 rounded-full bg-gray-100 text-black capitalize cursor-pointer border-2 border-gray-100"
                  style={selectedTopics.includes(topic) == true ? {background: "transparent", borderColor: "black"} : {}}
                  key={index}
                  onClick={() => handleTopicSelect(topic)}
                >
                  {topic}
                </div>
              ))
            }
          </div>
          <p className="hover:underline text-sm font-semibold cursor-pointer" onClick={() => handleTopicsLoad()}>Load More</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-20 px-8 border-t-2 border-black">
        <button className="w-48 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white">Back</button>
        <button className="w-48 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white">Continue</button>
      </div>
    </div>
  )
}

export default TopicsPage