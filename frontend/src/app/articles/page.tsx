 "use client"

import Link from "next/link";
import { CiCircleMinus } from "react-icons/ci";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IoBookmarkOutline } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import Menu from "../components/sideMenu/menu";
import axios from "axios";
import React  from "react";
import Footer from "../components/footerOptions/footer";
import LoadingBar from "../components/loadings/loadingBar";
import ErrorNotification from "../components/notifications/notificationAlert";
import Header from "../components/header";
import ContentHeader from "../components/contentHeader";
import ContentOptions from "../components/dropDownOptions/contentOptions";
import { user, article, topic } from "../interface/interface";


const MONTHS = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

const Articles = () => {
  
  const [user, setUser] = React.useState<user>({
    _id: "",
    userId: "",
    profile: {
      profileURL: "",
      nickname: "",
      imageURL: ""
    },
    contents: {
      topics: [],
      bookmarks: {
        articles: [],
        videos: []
      }
    },
    createdAt: "",
    updatedAt: ""
  });
  const [articles, setArticles] = React.useState<Array<article>>([]);
  
  // Fetch data according to the topic selected and page scroll.
  const [fetch, setFetch] = React.useState<{
    f: boolean;
    page: number;
  }>({
    f: true,
    page: 1
  });
  const [fetchTag, setFetchTag] = React.useState<string>("all");
  
  React.useEffect(() => {
    fetchArticles();
  }, [fetch.page]);
  
  React.useEffect(() => {
    fetchArticles();
    setArticles([]);
  },[fetchTag])

  // Check if the user has scrolled to the bottom
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    // console.log(fetch.f);
    if(fetch.f){
      // Use document.documentElement to support various browsers
      const target = e.target as HTMLDivElement;
      const bottom = target.scrollHeight - target.scrollTop - target.clientHeight < 2;
      if(bottom && !loading){
        setLoading(!loading);
        setFetch((d) => {
          return {
            ...d,
            page: d.page + 1
          };
        });
      }
    }
  };

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
  
  // Fetch Data.
  React.useEffect(() => {
    const userId: string | null = localStorage.getItem("userId");
    const accessToken: string | null = localStorage.getItem("access token");
    const role: string | null = localStorage.getItem("role");

    if(userId && accessToken && role){
      // Fetch user data for after login.
      const res = axios.get<user>(`http://localhost:3001/${JSON.parse(role) === "professional" ? "professionals" : "seekers"}/${JSON.parse(userId)}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(accessToken)}`
            }
          }
        )
        .then((res) => {
          setUser(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);
  console.log(user);
  console.log(articles);

  // Fetch data that with the specific tags.
  const fetchArticles = () => {
    !loading && setLoading(!loading);
    const userId: string | null = localStorage.getItem("userId");
    const accessToken: string | null = localStorage.getItem("access token");
    
    if(userId && accessToken && fetch.f){
      if(fetchTag === "all"){
        // console.log(fetchTag);
        // Fetches all the article data.
        axios.get<Array<article>>(`http://localhost:3001/resources/articles?p=${fetch.page}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(accessToken)}`
            }
          }
        )
        .then((res) => {
          // console.log(res.status);
          if(res.status == 200){
            setTimeout(() => {
              setArticles(res.data);
              setLoading(false);
            }, 4000);
          }
          else if(res.status == 204){
            setFetch((d) => {
              return {
                ...d,
                f: false
              };
            });
            setLoading(false);
          }
        })
        .catch((e) => {
          console.log(e);
          setFetchFailed(true);
        });
      }
      else if(fetchTag === "following"){
        // Fetches all the users" subscribed article data.
        axios.get<Array<article>>(`http://localhost:3001/resources/articles/${JSON.parse(userId)}?p=${fetch.page}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(accessToken)}`
            }
          }
        )
        .then((res) => {
          // console.log(res.status);
          if(res.status == 200){
            setTimeout(() => {
              setArticles(res.data);
              setLoading(false);
            }, 4000);
          }
          else if(res.status == 204){
            setFetch((d) => {
              return {
                ...d,
                f: false
              };
            });
            setLoading(false);
          }
        })
        .catch((e) => {
          console.log(e);
          setFetchFailed(true);
        });
      }
      else{
        // Fetches the articles with the specified tag.
        axios.get<Array<article>>(`http://localhost:3001/resources/articles?t=${fetchTag}?p=${fetch.page}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(accessToken)}`
            }
          }
        )
        .then((res) => {
          // console.log(res.status);
          if(res.status == 200){
            setTimeout(() => {
              setArticles(res.data);
              setLoading(false);
            }, 4000);
          }
          else if(res.status == 204){
            setFetch((d) => {
              return {
                ...d,
                f: false
              };
            });
            setLoading(false);
          }
        })
        .catch((e) => {
          console.log(e);
          setFetchFailed(true);
        });
      }
    }
  };

  // Load topics data
  const [topics, setTopics] = React.useState<topic[]>([]);
  React.useEffect(() => {
    setLoading(true);
    axios.get<topic[]>(`http://localhost:3001/topics?s=${10}`)
    .then((res) => {
      setTopics(res.data);
    })
    .catch((e) => {
      console.log(e);
      setFetchFailed(true);
    });
  }, []);

  // Reload more topics
  const handleTopicsLoad = () => {
    axios.get<topic[]>(`http://localhost:3001/topics?s=${topics.length+5}`)
      .then((res) => {
        setTopics(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div onScroll={(e) => handleScroll(e)} className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
      {/* HEADER */}
      <Header
        imageURL={user.profile?.imageURL}
      /> 
      {/* BODY */}
      <div className="w-[1338px] flex justify-between p-4">
        {/* MENU SECTION */}
        <Menu
          menu="articles"
        />
        {/* CONTENT SECTION */}
        <div className="w-[728px] max-h-fit py-4">
          {/* content-header */}
          <ContentHeader
            topics={user.contents.topics}
            setFetchTag={(t: string) => setFetchTag(t)}
            tag={fetchTag}
          />
          {
                fetchFailed &&
                <div className="w-full flex justify-center">
                  <ErrorNotification
                    action={"Fetch Articles"}
                    failed={fetchFailed}
                  />
                </div>
              }
          {/* contents */}
          <ul className="mt-4">
            {
              articles.map((a: article, i: number) => (
                <li key={i} className="py-8 border-b border-gray-300">
                  <div className="flex flex-col gap-4">
                    {/* section-header --NB:fetch the creators content and use it here!-- */}
                    <div className="flex gap-2 items-center text-black">
                      <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 rounded-full hover:opacity-80" /></Link>
                      <Link href="/"><p className="text-sm hover:underline">Josh Boyer</p></Link>
                    </div>
                    
                    <div className="flex gap-10">
                      {/* contents */}
                      <div className="flex flex-col gap-6 w-[calc(100%-200px)]">
                        <Link href="/" className="flex gap-10 justify-between">
                          <div className="flex flex-col gap-2">
                            {/* title */}
                            <h3 className="text-black font-semibold text-3xl capitalize">
                              {a.title}
                            </h3>
                            {/* overview */}
                            <p className="line-clamp-2">
                              {a.overview}
                            </p>
                          </div>
                        </Link>
                        {/* section-footer */}
                        <div className="flex items-center justify-between">
                          <div className="flex gap-6 text-md">
                            {/* <img src="/faces/face5.jpg" alt="" className="" /> */}
                            <p className="h-5">
                              { `${MONTHS[new Date(a.createdAt).getMonth()]} ${new Date(a.createdAt).getFullYear()-2000}` }
                            </p>
                            <div className="flex gap-1.5 items-center">
                              {
                                a.stats.likes.includes(user._id) ?
                                <FcLikePlaceholder className="w-5 h-5"/>
                                :
                                <FcLike className="w-5 h-5"/>
                              }
                              <p className="h-5">{a.stats.likes.length}</p>
                            </div>
                            <div className="flex gap-1.5 items-center">
                              <TbMessageCircle className="w-5 h-5"/>
                              {/* <TbMessageCircleFilled className="w-5 h-5"/> */}
                              <p className="h-5">{a.stats.comments}</p>
                            </div>
                          </div>
                          <div className="flex gap-10">
                            <button><CiCircleMinus className="w-7 h-7 hover:text-black"/></button>
                            <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button>
                            {/* <button><IoBookmark className="w-7 h-7 text-black"/></button> */}
                            <ContentOptions
                              type="article"
                            />
                          </div>
                        </div>
                      </div>
                      {/* image */}
                      <Link href="/"><img src={a.thumbnail.imageURL} alt="" className="h-[146px] w-[160px] rounded-md" /></Link>
                    </div>
                  </div>
                </li>
              ))
            }
            {
              loading &&
              <div className="flex items-center justify-center my-8 relative">
                <LoadingBar/>
              </div>
            }
          </ul>
        </div>
        {/* RIGHT SECTION */}
        <div className="w-[340px] max-h-fit flex flex-col gap-6 mt-8 py-8 pl-10 border-l border-gray-300 sticky top-20">
          <h3 className="font-semibold text-black">Top Picks</h3>
            {/* articles */}
            <div className="flex flex-col py-4">
              <div className="flex flex-col gap-3 my-4">
                <div className="flex items-center gap-2">
                  <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 hover:opacity-90" /></Link>
                  <p className="text-sm">
                    In<Link href="/"><span className="hover:underline text-black mx-1">The eMotions Blog</span></Link>
                    by<Link href="/"><span className="hover:underline text-black ml-1">eMotion staff</span></Link>
                  </p>
                </div>
                <Link href="/">
                  <p className="font-bold text-black mb-2">It happened on eMotions in 2024.</p>
                  <p className="text-sm mt-2">Dec 29</p>
                </Link>
              </div>
              <div className="flex flex-col gap-3 my-4">
                <div className="flex items-center gap-2">
                  <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 hover:opacity-90" /></Link>
                  <p className="text-sm">
                    In<Link href="/"><span className="hover:underline text-black mx-1">The eMotions Blog</span></Link>
                    by<Link href="/"><span className="hover:underline text-black ml-1">eMotion staff</span></Link>
                  </p>
                </div>
                <Link href="/">
                  <p className="font-bold text-black mb-2">It happened on eMotions in 2024.</p>
                  <p className="text-sm mt-2">Dec 29</p>
                </Link>
              </div>
              <div className="flex flex-col gap-3 my-4">
                <div className="flex items-center gap-2">
                  <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 hover:opacity-90" /></Link>
                  <p className="text-sm">
                    In<Link href="/"><span className="hover:underline text-black mx-1">The eMotions Blog</span></Link>
                    by<Link href="/"><span className="hover:underline text-black ml-1">eMotion staff</span></Link>
                  </p>
                </div>
                <Link href="/">
                  <p className="font-bold text-black mb-2">It happened on eMotions in 2024.</p>
                  <p className="text-sm mt-2">Dec 29</p>
                </Link>
              </div>
              <p className="text-sm hover:underline hover:cursor-pointer mt-2">See the full list</p>
            </div>
            {/* topics */}
            <div className="my-10">
              <h3 className="font-semibold text-black">Recommended topics</h3>
              <div className="w-full flex flex-wrap col-span-2 gap-2 my-4">
              {
                topics.map((t: topic, i: number) => (
                  <button key={i} className="py-4 px-4 rounded-full bg-gray-100 text-black capitalize text-sm">{t.name}</button>
                ))
              }
              </div>
              <p className="text-sm hover:underline hover:cursor-pointer my-8" onClick={() => handleTopicsLoad()}>See more topics</p>
            </div>
            {/* FOOTER */}
            <Footer/>
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default Articles;