"use client"

import Menu from "../components/sideMenu/menu";
import Header from "../components/header";
import React from "react";
import { professional, seeker } from "../interface/interface";
import axios from "axios";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useTreeViewApiRef } from "@mui/x-tree-view/hooks/useTreeViewApiRef";
import { MdMicOff, MdMicNone, MdOutlineSettings } from "react-icons/md";
import { LuHeadphoneOff, LuHeadphones } from "react-icons/lu";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { IoPaperPlane, IoPaperPlaneOutline } from "react-icons/io5";
import CommunityMenu from "../components/communityComponents/menu";

const Communities = () => {
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

  const apiRef = useTreeViewApiRef();
  const handleButtonClick = (event: React.SyntheticEvent) => {
    apiRef.current?.focusItem(event, "pickers");
  };

  return (
    <div className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
      {/* HEADER */}
      <Header
        imageURL={user?.profile?.imageURL}
        userId={user?.userId}
        role={storedLogs.ROLE}
      />
      {/* BODY */}
      <div className="w-[1338px] flex justify-between p-4 gap-6">
        {/* MENU SECTION */}
        <Menu
          menu="community"
        />
        {/* COMMUNITY CHAT */}
        <div className="w-full h-[calc(100vh-90px)] flex border border-gray-300 rounded-2xl">
          {/* LEFT SECTION */}
          <div className="w-1/4 h-full flex flex-col justify-between border-r-2 p-2">
            {/* menu */}
            <CommunityMenu/>
            {/* options */}
            <div className="h-[5%] flex justify-between p-2 border-t-2">
              <div className="flex items-center gap-3">
                <img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" />
                <p className="text-black">
                  Allan Walker
                </p>
              </div>
              <div className="flex items-center gap-2">
                {/* <MdMicOff className="w-8 h-8 text-black rounded-full hover:bg-gray-200 p-1 cursor-pointer"/> */}
                <MdMicNone className="w-8 h-8 text-black rounded-full hover:bg-gray-200 p-1 cursor-pointer"/>
                {/* <LuHeadphoneOff className="w-8 h-8 text-black rounded-full hover:bg-gray-200 p-1 cursor-pointer"/> */}
                <LuHeadphones className="w-8 h-8 text-black rounded-full hover:bg-gray-200 p-1 cursor-pointer"/>
                <MdOutlineSettings className="w-8 h-8 text-black rounded-full hover:bg-gray-200 p-1 cursor-pointer"/>
              </div>
            </div>
          </div>
          {/* RIGHT SECTION */}
          <div className="w-3/4 h-full flex flex-col justify-between sticky">
            {/* header */}
            <div className="h-[5%] w-full shadow-md">

            </div>
            <div className="overflow-y-scroll">

            </div>
            {/* inputs */}
            <div className="h-[7%] w-full flex items-center justify-between px-8 text-black drop-shadow-md">
              <div className="w-11/12 h-2/3 flex items-center justify-evenly gap-4 px-6 bg-gray-100 rounded-full">
                <input type="text" className="w-11/12 outline-none bg-transparent "/>
                <FaPaperclip className="h-6 w-6 cursor-pointer" />
              </div>
              <IoPaperPlaneOutline className="w-6 h-6 cursor-pointer"/>
              <IoPaperPlane className="w-6 h-6 cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Communities;