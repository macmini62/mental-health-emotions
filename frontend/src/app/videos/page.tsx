"use client"

import * as React from "react";
import Menu from "../components/sideMenu/menu";
import Footer from "../components/footerOptions/footer";
import LoadingSkeleton from "../components/loadings/loadingSkeleton";
import Header from "../components/header";
import ContentHeader from "../components/contentHeader";
import ContentOptions from "../components/dropDownOptions/contentOptions";
import { professional, seeker, topic, video } from "../interface/interface";
import axios from "axios";

const SKELETONS = 3;
const MONTHS = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

const Videos = () => {
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
  }, []);

  // Video loading skeletons.
  const [skeletons, setSkeletons] = React.useState<Array<React.JSX.Element>>([]);
  React.useEffect(() => {
    setSkeletons((s: Array<React.JSX.Element>) => {
      for(let i = 0; i < SKELETONS; i++){
        s.push(<LoadingSkeleton/>);
      }
      return [...s];
    });
  }, []);

  const [videos, setVideos] = React.useState<Array<video>>([]);
  React.useEffect(() => {
    axios.get<video[]>("http://localhost:3001/resources/videos")
      .then((res) => {
        setVideos(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);


  // Stores the state of the logged in user. 
  const [user, setUser] = React.useState<professional | seeker>();
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
    fetchVideos();
  }, [fetch.page]);
  
  React.useEffect(() => {
    fetchVideos();
    setFetch({f: true, page: 1});
    setVideos([]);
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

  // Fetch data that with the specific tags.
  const fetchVideos = () => {
    !loading && setLoading(!loading);
    
    if(fetchTag === "all"){
      // setFetch({f: false, page: fetch.page});
      // console.log(fetchTag);
      // Fetches all the video data.
      axios.get<Array<video>>(`http://localhost:3001/resources/videos?p=${fetch.page}`,
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
            setVideos(res.data);
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
      // Fetches all the users" subscribed video data.
      axios.get<Array<video>>(`http://localhost:3001/resources/videos/seeker?id=${storedLogs.USERID}&p=${fetch.page}`,
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
            setVideos(res.data);
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
      // Fetches the videos with the specified tag.
      axios.get<Array<video>>(`http://localhost:3001/resources/videos/tag?t=${fetchTag}&p=${fetch.page}`,
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
            setVideos(res.data);
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
          menu="videos"
        />
        {/* CONTENT SECTION */}
        <div className="w-[1114px] max-h-fit py-4">
          {/* content-header */}
          <ContentHeader
            topics={user?.contents.topics}
            setFetchTag={(t: string) => setFetchTag(t)}
            tag={fetchTag}
            role={storedLogs.ROLE}
          />
          {/* contents */}
            <div className="w-full flex flex-wrap col-span-3 gap-y-8 gap-9 mt-6 relative">
              {
                videos.length == 0 && loading &&
                skeletons.map((s: React.JSX.Element, i: number) => (
                  <React.Fragment key={i}>
                    {s}
                  </React.Fragment>
                ))
              }
              {
                videos.map((v: video, i: number) => (
                  <div onClick={() => window.location.href = `/videos/${v._id}`} key={i} className="w-[350px] hover:shadow-md rounded-b-md cursor-pointer">
                    <img src={v.thumbnail} alt="video thumbnail" className="h-[240px] w-full rounded-md" />
                    <div className="w-full flex justify-between gap-2 my-4 px-2">
                      <img onClick={() => window.location.href = `user/${user?._id}`} src="/faces/face1.jpg" alt="user" className="w-12 h-12 rounded-full" />
                      <div className="text-sm w-2/3">
                      <h3 className="text-black font-bold line-clamp-2 mb-1">{v.title}</h3>
                        <p className="my-1">eMotions</p>
                        <p className="capitalize my-1">{ `${MONTHS[new Date(v.createdAt).getMonth()]} ${new Date(v.createdAt).getFullYear()-2000}` }</p>
                      </div>
                      <ContentOptions
                        type="video"
                      />
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer/>
    </div>
  )
}

export default Videos;