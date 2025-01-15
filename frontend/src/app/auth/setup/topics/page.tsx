"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

interface topic {
  _id: string,
  name: string
}

const TopicsPage = () => {

  const [topics, setTopics] = React.useState<topic[]>([]);
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

  // Load topics data
  React.useEffect(() => {
    axios.get(`http://localhost:3001/topics?size=${15}`)
    .then((res) => {
      setTopics(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  
  // Reload more topics
  const handleTopicsLoad = () => {
    axios.get(`http://localhost:3001/topics?size=${topics.length+15}`)
      .then((res) => {
        setTopics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const router = useRouter();
  const handleRoute = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const btn = e.target as HTMLButtonElement;
    if(btn.name === "continue"){
      if(selectedTopics.at(0) !== undefined){
        const userId = localStorage.getItem("userId");
        console.log("Id", userId);
        console.log("selectedTopics:", selectedTopics);
        axios.put(`http://localhost:3001/users/id/c699086a-a8b9-4951-a107-69a9c7147a5f`,
          {selectedTopics: selectedTopics}
        ).then((res) => {
            if(res.status === 200){ router.replace("/articles"); }
            console.log(res);
          }).catch((err) => {
            console.log(err);
          });
      }
    }else{
      router.back();
    }
  };

  return (
    <div className="w-full my-4 flex flex-col items-center justify-between">
      <div className="w-1/2 mx-4 overflow-y-auto">
        <h2 className="text-center font-semibold text-2xl">Select topics to explore.</h2>
        <div className="flex flex-col items-center gap-10 w-full mt-12 mb-6">
          <div className="w-full justify-center flex flex-wrap gap-4">
            {
              topics.map((tp: topic, index: number) => (
                <div
                  className="text-sm py-4 px-14 rounded-full bg-gray-100 text-black capitalize cursor-pointer border-2 border-gray-100"
                  style={selectedTopics.includes(tp._id) == true ? {background: "transparent", borderColor: "black"} : {}}
                  key={index}
                  onClick={() => handleTopicSelect(tp._id)}
                >
                  {tp.name}
                </div>
              ))
            }
          </div>
          <p className="hover:underline text-sm font-semibold cursor-pointer" onClick={() => handleTopicsLoad()}>Load More</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-20 px-8 border-t-2 border-black">
        <button
          className="w-48 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white"
          onClick={(e) => handleRoute(e)}
          name="back"
          >
            Back
          </button>
        <button 
          className={`${selectedTopics.at(0) === undefined ? "w-48 h-12 bg-black rounded-full text-white opacity-20 cursor-not-allowed"
             : "w-48 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white"}`}
          onClick={(e) => handleRoute(e)}
          name="continue"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default TopicsPage;