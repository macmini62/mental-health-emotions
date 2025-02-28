"use client"

import Footer from "@/app/components/footerOptions/footer";
import Header from "@/app/components/header";
import LoadingBar from "@/app/components/loadings/loadingBar";
import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IoBookmarkOutline, IoShareOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { TbMessageCircleFilled } from "react-icons/tb";
import { article } from "@/app/interface/interface";
import axios from "axios";
import ErrorNotification from "@/app/components/notifications/notificationAlert";

const MONTHS = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

const Post = ({
  params
}:{
  params: Promise<{ id: string }>
}) => {
  
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

  // Article data
  const [article, setArticle] = React.useState<article>();
  React.useEffect(() => {
    const fetchArticle = async () => {
      const accessToken: string | null = localStorage.getItem("access token");
      if (accessToken) {
        const { id } = await params;
        axios.get<article>(`http://localhost:3001/resources/articles/${id}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(accessToken)}`
          }
        })
        .then((res) => {
          setTimeout(() => {
            setArticle(res.data);
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
    fetchArticle();
  }, [params]);
  // console.log(article);

  return (
    <div className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
      {/* HEADER */}
      <Header
        imageURL="/faces/face4.jpg"
      />
      <div className="w-full max-h-fit p-4 flex items-center justify-center">
        { loading && <LoadingBar/> }
      </div>
      {/* ARTICLE */}
      {
        (!loading && article) &&
        <article className="flex flex-col items-start w-1/3 py-8 text-lg text-nowrap">
          {/* heading */}
          <div className="w-full p-2">
            <h2 className="text-5xl text-black font-semibold my-3">{article.title}</h2>
            <h3 className="text-xl my-3">{article.overview}</h3>
            <div className="flex gap-4 items-center my-6">
              <Link href="/"><img src="/faces/face4.jpg" alt="" className="w-14 h-14 rounded-full hover:opacity-80"/></Link>
              <div className="max-w-fit">
                <Link href="/"><p className="text-black hover:underline">eMotions</p></Link>
                <div className="flex items-center gap-1 text-sm">
                  <p className="">2 min read</p>
                  <BsDot/>
                  <p className="">
                    { `${MONTHS[new Date(article.createdAt).getMonth()]} ${new Date(article.createdAt).getFullYear()-2000}` }
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-3 flex justify-between items-center border-y border-gray-200">
              <div className="flex gap-6 text-md">
                <div className="flex gap-1.5 items-center h-6">
                  {
                    article.stats.likes.includes(user._id) ?
                    <FcLikePlaceholder className="w-5 h-5"/>
                    :
                    <FcLike className="w-5 h-5"/>
                  }
                  <p className="h-5">{article.stats.likes.length}</p>
                </div>
                <div className="flex gap-1.5 items-center">
                  {/* <TbMessageCircle className="w-5 h-5"/> */}
                  <TbMessageCircleFilled className="w-5 h-5"/>
                  <p className="h-5 text-sm">{article.stats.comments}</p>
                </div>
              </div>
              <div className="flex gap-10">
                <button><IoShareOutline className="w-7 h-7 hover:text-black"/></button>
                <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button>
                {/* <button><IoBookmark className="w-7 h-7 text-black"/></button> */}
                <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
              </div>
            </div>
          </div>
          {/* content */}
          <div className="w-full border-b border-gray-200 mt-8">
            {/* thumbnail */}
            <div className="flex flex-col w-full items-center justify-center gap-4 py-4">
              <img src="/calm/calm2.webp" alt="" className="w-2/3 h-[400px]"/>
              <p className="text-sm">Image by eMotions staff.</p>
            </div>
            {/* paragraphs */}
            <div className="text-wrap text-black flex flex-col items-center gap-4 py-8 mb-8">
              {
                article.content
              }
              <p className="">
                2024 has finally come to an end. You've made it to the last day of the year and as you look back at everything you've been through,
                I hope you see how far you've come. There were good times and tough times, but you kept moving forward. Every challenge you faced 
                and every step you took brought you to where you are today.
              </p>
              <p className="">
                It was a hard year, but you made it. You survived, and that's a big deal. I'm proud of you and always will be.
              </p>
              <p className="">
                Keep moving forward, keep believing in yourself, and know that you've already accomplished much. The future is full of possiblities
                -so go after it, because you've earned every step of it. You've got this. Keep shining my brave little fighter.
              </p>
            </div>
            {/* tags */}
            <div className="">
              <div className="w-full max-h-fit flex flex-wrap col-span-2 gap-4 my-4">
                {
                  article.tags.map(() => (
                    <Link href="" className="py-4 px-6 rounded-full bg-gray-100 text-black capitalize">mathematics</Link>
                  ))
                }
              </div>
              <div className="w-full p-3 flex justify-between items-center mt-8">
                <div className="flex gap-6 text-md">
                  <div className="flex gap-1.5 items-center h-6">
                  {
                    article.stats.likes.includes(user._id) ?
                    <FcLikePlaceholder className="w-5 h-5"/>
                    :
                    <FcLike className="w-5 h-5"/>
                  }
                  <p className="h-5">{article.stats.likes.length}</p>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    {/* <TbMessageCircle className="w-5 h-5"/> */}
                    <TbMessageCircleFilled className="w-5 h-5"/>
                    <p className="h-5 text-sm">{article.stats.comments}</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <button><IoShareOutline className="w-7 h-7 hover:text-black"/></button>
                  <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button>
                  {/* <button><IoBookmark className="w-7 h-7 text-black"/></button> */}
                  <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
                </div>
              </div>
            </div>
          </div>
        </article>
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