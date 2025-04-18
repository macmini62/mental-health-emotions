"use client"

import Footer from "@/app/components/footerOptions/footer";
import Header from "@/app/components/header";
import LoadingBar from "@/app/components/loadings/loadingBar";
import Link from "next/link";
import React from "react";
import { BsDot } from "react-icons/bs";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { TbMessageCircleFilled } from "react-icons/tb";
import { article, topic } from "@/app/interface/interface";
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
  // stores the data from the browsers storage.
  const [storedLogs, setStoredLogs] = React.useState(
    {
      ACCESSTOKEN: "",
      ROLE: "",
      USERID: ""
    }
  );

  React.useEffect(() => {
    const USERID: string | null = localStorage.getItem("userId");
    const ACCESSTOKEN: string | null = localStorage.getItem("accessToken");
    const ROLE: string | null = localStorage.getItem("role");

    if(USERID && ACCESSTOKEN && ROLE){
      setStoredLogs({
        ACCESSTOKEN: JSON.parse(ACCESSTOKEN),
        ROLE: JSON.parse(ROLE),
        USERID: JSON.parse(USERID)
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
  
  // Article data
  const [article, setArticle] = React.useState<article>();
  React.useEffect(() => {
    const fetchArticle = async () => {
      if (storedLogs.ACCESSTOKEN) {
        const { id } = await params;
        axios.get<article>(`http://localhost:3001/resources/articles/read/${id}`, {
          headers: {
            Authorization: `Bearer ${storedLogs.ACCESSTOKEN}`
          }
        })
        .then((res) => {
          // console.log(res);
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
  }, [params, storedLogs]);
  // console.log(article);
  
  // Fetch Creator Name.
  const [creator, setCreator] = React.useState<string>();
  React.useEffect(() => {
		// Fetch seeker data for after login.
		if(storedLogs.USERID && storedLogs.ACCESSTOKEN && storedLogs.ROLE){
			axios.get<string>(`http://localhost:3001/resources/articles/read/creatorName/${article?.creatorId}`,
					{
						headers: {
							Authorization: `Bearer ${storedLogs.ACCESSTOKEN}`
						}
					}
				)
				.then((res) => {
					// console.log(res.data);
					setCreator(res.data);
				})
				.catch((e) => {
					console.log(e);
				});
		}
  }, [article]);

// Fetch tags.
const [tags, setTags] = React.useState<Array<topic>>([]);
React.useEffect(() => {
  // Fetch seeker data for after login.
  if(storedLogs.USERID && storedLogs.ACCESSTOKEN && storedLogs.ROLE){
    axios.post<Array<topic>>(`http://localhost:3001/resources/articles/read/Tags/${article?.creatorId}`, article?.tags,
        {
          headers: {
            Authorization: `Bearer ${storedLogs.ACCESSTOKEN}`
          }
        }
      )
      .then((res) => {
        // console.log(res.data);
        setTags(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}, [article]);

  // Handles the Likes on the article
  const handleLikeArticle = (id: string) => {
    const user = article?.stats.likes.includes(storedLogs.USERID);
    // console.log(user)
    if(article){
      let updatedArticle: article;
      if(user){
        updatedArticle = {
          ...article,
          stats: {
            ...article.stats,
            likes: article.stats.likes.filter((v: string) => v !== storedLogs.USERID)
          }
        };
      }
      else{
        updatedArticle = {
          ...article,
          stats: {
            ...article.stats,
            likes: [...article.stats.likes, storedLogs.USERID]
          } ,
        };
      }
      console.log(updatedArticle);
      
      axios.put(`http://localhost:3001/resources/articles/${id}`, updatedArticle)
        .then(() => {
          setArticle(updatedArticle);
        })
        .catch((e) => {
          console.log(e);
          console.log("Error Liking the video");
        })
    }
  }

  // Handles the Bookmark on the article
  const handelBookmarkArticle = (id: string) => {
    const user = article?.stats.bookmarks.includes(storedLogs.USERID);
    // console.log(user)
    if(article){
      let updatedArticle: article;
      if(user){
        updatedArticle = {
          ...article,
          stats: {
            ...article.stats,
            bookmarks: article.stats.bookmarks.filter((v: string) => v !== storedLogs.USERID)
          }
        };
      }
      else{
        updatedArticle = {
          ...article,
          stats: {
            ...article.stats,
            bookmarks: [...article.stats.bookmarks, storedLogs.USERID]
          } ,
        };
      }
      console.log(updatedArticle);
      
      axios.put(`http://localhost:3001/resources/articles/${id}`, updatedArticle)
        .then(() => {
          setArticle(updatedArticle);
        })
        .catch((e) => {
          console.log(e);
          console.log("Error Liking the video");
        })
    }
  }

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
        (!loading && article) &&
        <article className="flex flex-col items-start w-1/3 py-8 text-lg text-nowrap">
          {/* heading */}
          <div className="w-full p-2">
            <h2 className="text-5xl text-black font-semibold my-4 capitalize text-wrap">{article.title}</h2>
            <h3 className="text-xl my-3 text-wrap">{article.overview}</h3>
            <div className="flex gap-4 items-center my-8">
              <Link href="/"><img src="/faces/face4.jpg" alt="" className="w-14 h-14 rounded-full hover:opacity-80"/></Link>
              <div className="max-w-fit">
                <Link href={`localhost:3000/writer/${creator}`}><p className="text-black hover:underline capitalize">{creator}</p></Link>
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
                      article.stats.likes.includes(storedLogs.USERID) ?
                      <FcLike onClick={() => handleLikeArticle(article._id)} className="w-5 h-5 cursor-pointer"/>
                      :
                      <FcLikePlaceholder onClick={() => handleLikeArticle(article._id)} className="w-5 h-5 cursor-pointer"/>
                    }
                    <p className="h-6">{article.stats.likes.length}</p>
                  </div>
                </div>
                <div className="flex gap-1.5 items-center">
                  {/* <TbMessageCircle className="w-5 h-5"/> */}
                  <TbMessageCircleFilled className="w-5 h-5"/>
                  <p className="h-5 text-sm">{article.stats.comments}</p>
                </div>
              </div>
              {
                storedLogs.ROLE === "seeker" &&
                <div className="flex gap-10">
                  {
                    article.stats.bookmarks.includes(storedLogs.USERID) ?
                    <button><IoBookmark onClick={() => handelBookmarkArticle(article._id)} className="w-7 h-7 text-black"/></button>
                    :
                    <button><IoBookmarkOutline onClick={() => handelBookmarkArticle(article._id)} className="w-7 h-7 hover:text-black"/></button>
                  }
                  <ContentOptions
                    type="article"
                  />
                </div>
              }
            </div>
          </div>
          {/* content */}
          <div className="w-full border-b border-gray-200 mt-8">
            <div className="text-wrap text-black flex flex-col items-center gap-6 py-8 mb-8">
              {
                article.content.map((c: ContentItem, i: number) => (
                  <div key={i}>
                    {
                      c.type === "paragraph" ?
                      parse(DOMPurify.sanitize(c.paragraph))
                      :
                      <div className="flex flex-col w-full items-center justify-center gap-4 py-10">
                        <Image priority={true} src={`${parse(DOMPurify.sanitize(c.image as string))}`} alt="creator image" width={500} height={500}/>
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
                  tags.map((t: topic, i: number) => (
                    <Link key={i} href={`locahost:3000/topic/${t._id}`} className="py-4 px-6 rounded-full bg-gray-100 text-black capitalize">{t.name}</Link>
                  ))
                }
              </div>
              <div className="w-full p-3 flex justify-between items-center mt-8">
                <div className="flex gap-6 text-md">
                  <div className="flex gap-1.5 items-center h-6">
                    <div className="flex gap-1.5 items-center">
                      {
                        article.stats.likes.includes(storedLogs.USERID) ?
                        <FcLike onClick={() => handleLikeArticle(article._id)} className="w-5 h-5 cursor-pointer"/>
                        :
                        <FcLikePlaceholder onClick={() => handleLikeArticle(article._id)} className="w-5 h-5 cursor-pointer"/>
                      }
                      <p className="h-6">{article.stats.likes.length}</p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center">
                    {/* <TbMessageCircle className="w-5 h-5"/> */}
                    <TbMessageCircleFilled className="w-5 h-5"/>
                    <p className="h-5 text-sm">{article.stats.comments}</p>
                  </div>
                </div>
                {
                  storedLogs.ROLE === "seeker" &&
                  <div className="flex gap-10">
                    {
                      article.stats.bookmarks.includes(storedLogs.USERID) ?
                      <button><IoBookmark onClick={() => handelBookmarkArticle(article._id)} className="w-7 h-7 text-black"/></button>
                      :
                      <button><IoBookmarkOutline onClick={() => handelBookmarkArticle(article._id)} className="w-7 h-7 hover:text-black"/></button>
                    }
                    <ContentOptions
                      type="article"
                    />
                  </div>
                }
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