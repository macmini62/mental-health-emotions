 "use client"

import Link from "next/link";
import { CiCircleMinus } from "react-icons/ci";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
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
import Image from "next/image";
import { professional, seeker, article, topic } from "../interface/interface";

const MONTHS = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

const Articles = () => {
	// stores the data from the browsers storage.
  const [storedLogs, setStoredLogs] = React.useState(
    {
      USERID: "",
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
        USERID: JSON.parse(USERID),
        ACCESSTOKEN: JSON.parse(ACCESSTOKEN),
        ROLE: JSON.parse(ROLE)
      });
    }
    else{
      window.location.href = "/auth/authv1/login";
    }
  }, []);

	// console.log(storedLogs)
  
  // Stores the state of the logged in user. 
  const [user, setUser] = React.useState<professional | seeker>();

  // stroes the state of the fetched articles.
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
    setFetch({f: true, page: 1});
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
  
  // Fetch User Data.
  React.useEffect(() => {
		// Fetch seeker data for after login.
		if(storedLogs.USERID && storedLogs.ACCESSTOKEN && storedLogs.ROLE){
			axios.get(`http://localhost:3001/${storedLogs.ROLE === "professional" ? "professionals" : "seekers"}/${storedLogs.USERID}`,
					{
						headers: {
							Authorization: `Bearer ${storedLogs.ACCESSTOKEN}`
						}
					}
				)
				.then((res) => {
					// console.log(res.data);
					setUser(res.data as professional | seeker);
				})
				.catch((e) => {
					console.log(e);
				});
		}
  }, [storedLogs]);

  // console.log(user);
  // console.log(articles);
  // console.log(fetchTag);


  // Fetch data that with the specific tags.
  const fetchArticles = () => {
    !loading && setLoading(!loading);
    
    if(fetchTag === "all"){
			// setFetch({f: false, page: fetch.page});
			// console.log(fetchTag);
			// Fetches all the article data.
			axios.get<Array<article>>(`http://localhost:3001/resources/articles?p=${fetch.page}`,
				{
					headers: {
						Authorization: `Bearer ${storedLogs.ACCESSTOKEN}`
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
			axios.get<Array<article>>(`http://localhost:3001/resources/articles/seeker?id=${storedLogs.USERID}&p=${fetch.page}`,
				{
					headers: {
						Authorization: `Bearer ${storedLogs.ACCESSTOKEN}`
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
			axios.get<Array<article>>(`http://localhost:3001/resources/articles/tag?t=${fetchTag}&p=${fetch.page}`,
				{
					headers: {
						Authorization: `Bearer ${storedLogs.ACCESSTOKEN}`
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

  // Handles the Likes on the article
  const handleLikeArticle = (id: string) => {
    const article = articles.find(article => article._id === id);
    const user = article?.stats.likes.includes(storedLogs.USERID);
    // console.log(user)
    let updatedArticles: Array<article>;
    if(user){
      updatedArticles = articles.map(article => {
        if (article._id === id) {
          return {
            ...article,
            stats: {
              ...article.stats,
              likes: article.stats.likes.filter((v: string) => v !== storedLogs.USERID)
            }
          };
        }
        return article;
      });
    }
    else{
      updatedArticles = articles.map(article => {
        if (article._id === id) {
          return {
            ...article,
            stats: {
              ...article.stats,
              likes: [...article.stats.likes, storedLogs.USERID]
            } ,
          };
        }
        return article;
      });
    }
    // console.log(updatedArticles);
    
    const updatedArticle = updatedArticles.find(article => article._id === id);
    
    axios.put(`http://localhost:3001/resources/articles/${id}`, updatedArticle)
      .then(() => {
        setArticles(updatedArticles);
      })
      .catch((e) => {
        console.log(e);
        console.log("Error Liking the video");
      })
  }

  // Handles the Bookmark on the article
  const handelBookmarkArticle = (id: string) => {
    const article = articles.find(article => article._id === id);
    const user = article?.stats.bookmarks.includes(storedLogs.USERID);
    // console.log(user)
    let updatedArticles: Array<article>;
    if(user){
      updatedArticles = articles.map(article => {
        if (article._id === id) {
          return {
            ...article,
            stats: {
              ...article.stats,
              bookmarks: article.stats.bookmarks.filter((v: string) => v !== storedLogs.USERID)
            }
          };
        }
        return article;
      });
    }
    else{
      updatedArticles = articles.map(article => {
        if (article._id === id) {
          return {
            ...article,
            stats: {
              ...article.stats,
              bookmarks: [...article.stats.bookmarks, storedLogs.USERID]
            } ,
          };
        }
        return article;
      });
    }
    // console.log(updatedArticles);
    
    const updatedArticle = updatedArticles.find(article => article._id === id);
    
    axios.put(`http://localhost:3001/resources/articles/${id}`, updatedArticle)
      .then(() => {
        setArticles(updatedArticles);
      })
      .catch((e) => {
        console.log(e);
        console.log("Error Liking the video");
      })
  }

  return (
    <div onScroll={(e) => handleScroll(e)} className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
      {/* HEADER */}
      <Header
        imageURL={user?.profile?.imageURL}
        userId={user?.userId}
        role={storedLogs.ROLE}
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
            topics={
              user
                ? "contents" in user
                  ? user.contents.topics // professional
                  : user.topics          // seeker
                : []
            }
            setFetchTag={(t: string) => setFetchTag(t)}
            tag={fetchTag}
            role={storedLogs.ROLE}
          />
          {/* Notification */}
          <div className={`w-full flex justify-center ${ !fetchFailed ? "hidden" : "visible" }`}>
            <ErrorNotification
              action={"Fetch Articles"}
              failed={fetchFailed}
            />
          </div>
          {/* contents */}
          <ul className="mt-4">
            {
              articles.map((a: article, i: number) => (
                <li key={i} className="py-8 border-b border-gray-300 cursor-pointer">
                  <div className="flex flex-col gap-4">
                    {/* section-header --NB:fetch the creators content and use it here!-- */}
                    <div className="flex gap-2 items-center text-black">
                      <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 rounded-full hover:opacity-80" /></Link>
                      <Link href="/"><p className="text-sm hover:underline">Josh Boyer</p></Link>
                    </div>
                    
                    <div className="flex gap-10">
                      {/* contents */}
                      <div className="flex flex-col gap-6 w-[calc(100%-200px)]">
                        <div className="flex gap-10 justify-between" onClick={() => (window.location.href = `articles/${a._id}`)}>
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
                        </div>
                        {/* section-footer */}
                        <div className="flex items-center justify-between">
                          <div className="flex gap-6 text-md">
                            {/* <img src="/faces/face5.jpg" alt="" className="" /> */}
                            <p className="h-5">
                              { `${MONTHS[new Date(a.createdAt).getMonth()]} ${new Date(a.createdAt).getFullYear()-2000}` }
                            </p>
                            <div className="flex gap-1.5 items-center">
                              {
                                user && a.stats.likes.includes(user.userId) ?
                                <FcLike onClick={() => handleLikeArticle(a._id)} className="w-5 h-5 cursor-pointer"/>
                                :
                                <FcLikePlaceholder onClick={() => handleLikeArticle(a._id)} className="w-5 h-5 cursor-pointer"/>
                              }
                              <p className="h-5">{a.stats.likes.length}</p>
                            </div>
                            <div className="flex gap-1.5 items-center">
                              <TbMessageCircle className="w-5 h-5"/>
                              {/* <TbMessageCircleFilled className="w-5 h-5"/> */}
                              <p className="h-5">{a.stats.comments}</p>
                            </div>
                          </div>
                          {
                            storedLogs.ROLE === "seeker" &&
                            <div className="flex gap-10">
                              {
                                user && a.stats.bookmarks.includes(user?.userId) ?
                                <button><IoBookmark onClick={() => handelBookmarkArticle(a._id)} className="w-7 h-7 text-black"/></button>
                                :
                                <button><IoBookmarkOutline onClick={() => handelBookmarkArticle(a._id)} className="w-7 h-7 hover:text-black"/></button>
                              }
                              <ContentOptions
                                type="article"
                              />
                            </div>
                          }
                        </div>
                      </div>
                      {/* image */}
											<Image priority={true} width={240} height={168} src={a.thumbnail.imageURL} alt="thumbnail" className="rounded-md" onClick={() => (window.location.href = `articles/${a._id}`)}/>
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
        </div>
      </div>
    </div>
  )
}

export default Articles;