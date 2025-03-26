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
import { article, tag } from "@/app/interface/interface";
import axios from "axios";
import ErrorNotification from "@/app/components/notifications/notificationAlert";
import ContentOptions from "@/app/components/dropDownOptions/contentOptions";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { ContentItem } from "@/app/types/types";
import Image from "next/image";

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
        axios.get<article>(`http://localhost:3001/resources/articles/read/${id}`, {
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

  console.log(article);

  return (
    <div className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
      {/* HEADER */}
      <Header
        imageURL="/faces/face4.jpg"
        userId="John Doe"
        role="seeker"
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
            <h2 className="text-5xl text-black font-semibold my-3 capitalize">{article.title}</h2>
            <h3 className="text-xl my-3">{article.overview}</h3>
            <div className="flex gap-4 items-center my-6">
              <Link href="/"><img src="/faces/face4.jpg" alt="" className="w-14 h-14 rounded-full hover:opacity-80"/></Link>
              <div className="max-w-fit">
                <Link href="/"><p className="text-black hover:underline">{article.creatorId}</p></Link>
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
                  <div className="flex gap-1.5 items-center">
                    {
                      article.stats.likes.length > 0 ?
                      <FcLikePlaceholder className="w-5 h-5"/>
                      :
                      <FcLike className="w-5 h-5"/>
                    }
                    <p className="h-5 mb-1.5">{article.stats.likes.length}</p>
                  </div>
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
                <ContentOptions
                  type="article"
                />
              </div>
            </div>
          </div>
          {/* content */}
          <div className="w-full border-b border-gray-200 mt-8">
            <div className="text-wrap text-black flex flex-col items-center gap-4 py-8 mb-8">
              {
                article.content.map((c: ContentItem, i: number) => (
                  <div key={i}>
                    {
                      c.type === "paragraph" ?
                      <div className="text-wrap text-black flex flex-col items-center gap-4 py-8 mb-8">
                       { parse(DOMPurify.sanitize(c.paragraph))}
                      </div>
                      :
                      <div className="flex flex-col w-full items-center justify-center gap-4 py-4">
                        <Image priority={true} src={`https://d1m6naxu3t6ela.cloudfront.net/meme2.png`} alt="" width={500} height={500}/>
                      </div>
                    }
                  </div>
                ))
              }
            </div>
            {/* tags */}
            <div className="">
              <div className="w-full max-h-fit flex flex-wrap col-span-2 gap-4 my-4">
                {
                  article.tags.map((t: tag, i: number) => (
                    <Link key={i} href={`locahost:3000/topic/${t._id}`} className="py-4 px-6 rounded-full bg-gray-100 text-black capitalize">{t.name}</Link>
                  ))
                }
              </div>
              <div className="w-full p-3 flex justify-between items-center mt-8">
                <div className="flex gap-6 text-md">
                  <div className="flex gap-1.5 items-center h-6">
                    <div className="flex gap-1.5 items-center">
                      {
                        article.stats.likes.length > 0 ?
                        <FcLikePlaceholder className="w-5 h-5"/>
                        :
                        <FcLike className="w-5 h-5"/>
                      }
                      <p className="h-5 mb-1.5">{article.stats.likes.length}</p>
                    </div>
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
                  <ContentOptions
                    type="article"
                  />
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