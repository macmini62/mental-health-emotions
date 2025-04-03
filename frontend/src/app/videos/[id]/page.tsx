"use client"

import React from "react";
import { video } from "@/app/interface/interface";
import Header from "@/app/components/header";
import LoadingBar from "@/app/components/loadings/loadingBar";
import axios from "axios";
import Footer from "@/app/components/footerOptions/footer";
import ErrorNotification from "@/app/components/notifications/notificationAlert";
import ContentOptions from "@/app/components/dropDownOptions/contentOptions";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { IoShareOutline, IoBookmarkOutline } from "react-icons/io5";
import { TbMessageCircleFilled } from "react-icons/tb";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import CommentComponent from "@/app/components/commentComponents/commentComponent";

const MONTHS = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

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
      {/* VIDEO */}
      {
        (!loading && video) &&
        (
          <div>
            <video src={video.URL.replaceAll(" ", "+").replaceAll("?", "%3F")} controls={true} width={1280} className="rounded-md"/>
            <div className="w-full my-16">
              <h2 className="text-5xl text-black font-semibold my-4 capitalize text-wrap">{video.title}</h2>
              <div className="flex gap-4 items-center my-8">
                <Link href={`localhost:3000/writer/${video.creatorId}`}><img src="/faces/face4.jpg" alt="" className="w-14 h-14 rounded-full hover:opacity-80"/></Link>
                <div className="max-w-fit">
                  <Link href={`localhost:3000/writer/${video.creatorId}`}><p className="text-black hover:underline capitalize">{video.creatorId}</p></Link>
                  <div className="flex items-center gap-1 text-sm">
                    <p className="">
                      { `${MONTHS[new Date(video.createdAt).getMonth()]} ${new Date(video.createdAt).getFullYear()-2000}` }
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl my-3 text-wrap">{video.description}</h3>
              <div className="w-full p-3 flex justify-between items-center mt-8">
                <div className="flex gap-6 text-md">
                  <div className="flex gap-1.5 items-center h-6">
                    <div className="flex gap-1.5 items-center">
                      {
                        video.stats.likes.length > 0 ?
                        <FcLikePlaceholder className="w-5 h-5"/>
                        :
                        <FcLike className="w-5 h-5"/>
                      }
                      <p className="h-5 mb-1.5">{video.stats.likes.length}</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    {/* <TbMessageCircle className="w-5 h-5"/> */}
                    <TbMessageCircleFilled className="w-5 h-5"/>
                    <p className="h-5 text-sm">{video.stats.comments}</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <button><IoShareOutline className="w-7 h-7 hover:text-black"/></button>
                  <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button>
                  {/* <button><IoBookmark className="w-7 h-7 text-black"/></button> */}
                  <ContentOptions
                    type="video"
                  />
                </div>
              </div>
            </div>
            {/* COMMENT */}
            <CommentComponent/>
          </div>
        )
      }
      {/* FOOTER */}
      { !loading && <Footer/> }
      {/* Notification */}
      <div className={`w-full flex justify-center ${ !fetchFailed ? "hidden" : "visible" }`}>
        <ErrorNotification
          action={"Fetch Articles"}
          failed={fetchFailed}
        />
      </div>
    </div>
  )
}

export default Post;