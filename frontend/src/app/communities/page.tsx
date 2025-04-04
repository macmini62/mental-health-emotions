"use client"

import Menu from "../components/sideMenu/menu";
import Header from "../components/header";
import React from "react";
import { professional, seeker } from "../interface/interface";
import axios from "axios";

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

  return (
    <div className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
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
          menu="communities"
        />
      </div>
    </div>
  )
}

export default Communities;