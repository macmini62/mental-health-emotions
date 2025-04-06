"use client"

import Menu from "../components/sideMenu/menu";
import Header from "../components/header";
import React from "react";
import { professional, seeker } from "../interface/interface";
import axios from "axios";
import Footer from "../components/footerOptions/footer";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@mui/material";
import SessionMenu from "../components/sessionComponents/sessionMenu";
import SessionWithCode from "../components/sessionComponents/sessionWithCode";
import { MdOutlineContentCopy } from "react-icons/md";

const LiveSession = () => {
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
          menu="live_sessions"
        />
        <div className="w-full h-full flex items-center justify-center pt-4 px-6">
          <div className="w-full h-3/4 flex flex-col px-4 pt-8 rounded-lg border-2 border-gray-300">
              <div className="flex flex-col gap-8 px-0 sm:px-6">
                <h3 className="text-5xl font-semibold text-black">Video sessions and meetings for everyone</h3>
                <p className="text-xl w-full text-black">
                No matter where you are, you’re never alone. Connect with licensed professionals in real-time,
                share your journey, and receive the care you deserve—right from the comfort of your space.
                Our live sessions are designed to support, uplift, and guide you every step of the way toward healing and mental wellness.
                </p>
              </div>
              <div className="w-full h-3/4 flex flex-col items-center justify-between mt-4 pt-8">
                <div className="w-full flex flex-col sm:flex-row items-center justify-evenly gap-16 mt-4">
                  <SessionMenu />
                  <SessionWithCode />
                </div>
                <div className="flex gap-4 w-1/2 px-4 py-3 border rounded-lg">
                  <p className="w-full outline-none border-r-2 border-black">sosjdflj-nskdfn3ls03no-2nslnjfd</p>
                  <MdOutlineContentCopy className="text-black w-6 h-6"/>
                </div>
                <div className="w-full border-t px-6 py-4">
                  <p className="text-sm">
                    <Link href={"#"} className="text-blue-500">Learn More</Link> about Google Meet
                  </p>
                </div>
              </div>
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className="w-[340px] max-h-fit flex flex-col gap-6 mt-8 py-8 pl-10 border-l border-gray-300 sticky top-20">
          <h3 className="font-semibold text-black">Previous Sessions</h3>
          {/* sessions list */}
          <ul className="flex flex-col">
            <li className="flex flex-col gap-3 my-4">
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
            </li>
            <li className="flex flex-col gap-3 my-4">
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
            </li>
            <li className="flex flex-col gap-3 my-4">
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
            </li>
            <p className="text-sm hover:underline hover:cursor-pointer mt-2">See the full list</p>
          </ul>
          {/* FOOTER */}
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default LiveSession;