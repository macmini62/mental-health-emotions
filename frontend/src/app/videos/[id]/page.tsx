"use client"

import React from "react";
import { video } from "@/app/interface/interface";
import Header from "@/app/components/header";
import LoadingBar from "@/app/components/loadings/loadingBar";
import axios from "axios";

const Post = ({
  params
}:{
  params: Promise<{ id: string }>
}) => {
  // stores the data from the browsers storage.
  const [storedLogs, setStoredLogs] = React.useState(
    {
      ACCESSTOKEN: "",
      ROLE: ""
    }
  );

  React.useEffect(() => {
    const USERID: string | null = localStorage.getItem("userId");
    const ACCESSTOKEN: string | null = localStorage.getItem("accessToken");
    const ROLE: string | null = localStorage.getItem("role");

    if(USERID && ACCESSTOKEN && ROLE){
      setStoredLogs({
        ACCESSTOKEN: JSON.parse(ACCESSTOKEN),
        ROLE: JSON.parse(ROLE)
      });
    }
  }, []);
  
  // Notifications and feedback
  const [loading, setLoading] = React.useState<boolean>(true);
  const [fetchFailed, setFetchFailed] = React.useState<boolean>(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    }
  });
  timer.current = setTimeout(() => {
    setFetchFailed(false);
  }, 10000);
  // console.log(fetchFailed);

  // Video data
  const [video, setVideo] = React.useState<video>();
  React.useEffect(() => {
    const fetchVideo = async () => {
      if (storedLogs.ACCESSTOKEN) {
        const { id } = await params;
        axios.get<video>(`http://localhost:3001/resources/videos/watch/${id}`, {
          headers: {
            Authorization: `Bearer ${storedLogs.ACCESSTOKEN}`
          }
        })
        .then((res) => {
          console.log(res);
          setTimeout(() => {
            setVideo(res.data);
            setLoading(false);
          }, 4000)
        })
        .catch((e) => {
          setLoading(true);
          setFetchFailed(true);
          console.log(e);
        })
      }
    };
    fetchVideo();
  }, [params, storedLogs]);

  console.log(video);

  return (
    <div className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
      {/* HEADER */}
      {
        storedLogs.ROLE &&
        <Header
          imageURL="/faces/face4.jpg"
          userId="John Doe"
          role={storedLogs.ROLE}
        />
      }
      <div className="w-full max-h-fit p-4 flex items-center justify-center">
        { loading && <LoadingBar/> }
      </div>
      {/* ARTICLE */}
      {
        (!loading && video) &&
        <video src={video.URL.replaceAll(" ", "+").replaceAll("?", "%3F")} controls={true} width={1280}/>
      }
    </div>
  )
}

export default Post;