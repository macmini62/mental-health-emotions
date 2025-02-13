"use client"

import ErrorNotification from "@/app/components/notifications/notificationAlert";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

interface userData {
  email: String;
  name: String;
  password: String;
  phoneNumber: String;
  role: String;
  title: String;
  contents: {
    topics: String[];
  }
}

const TopicsPage = () => {

  const [topics, setTopics] = React.useState<string[]>([
    "PTSD",
    "OCD",
    "ADHD"
  ]);
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

  console.log(topics);
  console.log(selectedTopics);

  // // Load topics data
  // React.useEffect(() => {
  //   axios.get(`http://localhost:3001/topics?size=${15}`)
  //   .then((res) => {
  //     setTopics(res.data);
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }, []);
  
  // // Reload more topics
  // const handleTopicsLoad = () => {
  //   axios.get(`http://localhost:3001/topics?size=${topics.length+15}`)
  //     .then((res) => {
  //       setTopics(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Uploads the users '(professional / seeker)' signup data to the server.
  const router = useRouter();
  const handleRoute = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const btn = e.target as HTMLButtonElement;
    if(btn.name === "continue"){
      if(selectedTopics.length >= 2){
        const data: string | null = localStorage.getItem("userData");
        if(data !== null){
          let userData: userData = JSON.parse(data);
          userData = {
            ...userData,
            contents:{
              topics: [...selectedTopics]
            }
          };
          console.log(userData);
          axios
            .post(`http://localhost:3001/users/create/${userData?.role === "professional" ? "professionals" : "seekers"}`)
            .then((res) => {
              if(res.status === 200){
                router.replace("/articles");
                localStorage.clear();
                console.log(res);
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
              topics.map((t: string, i: number) => (
                <div
                  className="text-sm py-4 px-14 rounded-full bg-gray-100 text-black capitalize cursor-pointer border-2 border-gray-100"
                  style={selectedTopics.includes(t) == true ? {background: "transparent", borderColor: "black"} : {}}
                  key={i}
                  onClick={() => handleTopicSelect(t)}
                >
                  {t}
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
      <ErrorNotification
        action={"Sign Up"}
        failed={failed}
      />
    </div>
  )
}

export default TopicsPage;