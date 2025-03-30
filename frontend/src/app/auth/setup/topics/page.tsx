"use client"

import ErrorNotification from "@/app/components/notifications/notificationAlert";
import { topic, userData } from "@/app/interface/interface";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const TopicsPage = () => {

  const [topics, setTopics] = React.useState<topic[]>([]);
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);

  const handleTopicSelect = (t: string) => {
    console.log(t);
    if(selectedTopics.includes(t)){
      setSelectedTopics((tp: string[]) => {
        return tp.filter((topic: string) => topic !== t);
      });
    }
    else{
      setSelectedTopics((tp: string[]) => {
        return [...tp, t];
      });
    }
  };

  useEffect(() => {
    const data: string | null = localStorage.getItem("userData");
      let userData: object = {};
      if(data !== null){
        userData = {
          ...JSON.parse(data),
          topics: [...selectedTopics]
        }
        localStorage.setItem("userData", JSON.stringify(userData));
      }
      console.log(userData);
  }, [selectedTopics])

  // console.log(topics);
  // console.log(selectedTopics);

  // Load topics data
  React.useEffect(() => {
    axios.get<topic[]>(`http://localhost:3001/topics?s=${5}`)
    .then((res) => {
      setTopics(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  
  // Reload more topics
  const handleTopicsLoad = () => {
    axios.get<topic[]>(`http://localhost:3001/topics?s=${topics.length+15}`)
      .then((res) => {
        setTopics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Uploads the users '(professional / seeker)' signup data to the server.
  const router = useRouter();
  const handleRoute = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const btn = e.target as HTMLButtonElement;
    if(btn.name === "continue"){
      if(selectedTopics.length >= 2){
        const userId: string | null = localStorage.getItem("userId");
        const accessToken: string | null = localStorage.getItem("accessToken");
        const data: string | null = localStorage.getItem("userData");
        if(userId && accessToken && data){
          localStorage.setItem("role", JSON.stringify(JSON.parse(data).role));
          let userData: userData = JSON.parse(data);
          console.log(userData);
          axios.post(`http://localhost:3001/auth/signup/completeRegistration/${JSON.parse(userId)}`,
              userData,
              { headers: { authorization: `Bearer ${JSON.parse(accessToken)}` } }
            )
            .then((res) => {
              console.log(res);
              if(res.status === 201){
                localStorage.removeItem("userData");
                window.location.href = "/articles";
              }
              else{
                throw new Error();
              }
            }).catch((err) => {
              console.log(err);
              setFailed(true);
              setTimeout(() => {
                setFailed(false)
              }, 5000);
            });
        }
        else{
          throw new Error("ERROR!!!!");
        }
      }
    }else{
      router.back();
    }
  };
  
  // handles the error feedback.
  const[failed, setFailed] = React.useState<boolean>(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="w-full mt-4 flex flex-col items-center justify-between relative overflow-hidden">
      <div className="w-1/2 mx-4 overflow-y-auto">
        <h2 className="text-center font-semibold text-2xl">Select topics to explore.<span className="text-sm ml-2">(Atleast two)</span></h2>
        <div className="flex flex-col items-center gap-10 w-full mt-12 mb-6">
          <div className="w-full justify-center flex flex-wrap gap-4">
            {
              topics.map((t: topic, i: number) => (
                <div
                  className="text-sm py-4 px-14 rounded-full bg-gray-100 text-black capitalize cursor-pointer border-2 border-gray-100"
                  style={selectedTopics.includes(t._id) == true ? {background: "transparent", borderColor: "black"} : {}}
                  key={i}
                  onClick={() => handleTopicSelect(t._id)}
                >
                  {t.name}
                </div>
              ))
            }
          </div>
          <p className="hover:underline text-sm font-semibold cursor-pointer" onClick={() => handleTopicsLoad()}>Load More</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-24 px-8 border-t-2 border-black">
        <button 
          className="w-48 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white"
          onClick={(e) => handleRoute(e)}
          name="back"
          >
            Back
          </button>
        <button 
          className={`${selectedTopics.length < 2 ? "w-48 h-12 bg-black rounded-full text-white opacity-20 cursor-not-allowed"
             : "w-48 h-12 bg-black rounded-full active:bg-white active:border border-black active:text-black text-white"}`}
          onClick={(e) => handleRoute(e)}
          name="continue"
        >
          Continue
        </button>
      </div>
      {/* <ErrorNotification
        action={"Sign Up"}
        failed={failed}
      /> */}
    </div>
  )
}

export default TopicsPage;