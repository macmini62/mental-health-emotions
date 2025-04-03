"use client"

import Link from "next/link";
import { BiCircleHalf, BiSolidRightArrow } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import LineDark from "./components/wobbly-line/line-dark";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiFlowerFill } from "react-icons/ri";
import { GiCircleCage, GiFlowerTwirl } from "react-icons/gi";
import { PiFlowerLotusFill } from "react-icons/pi";
import { IoIosArrowRoundDown, IoIosArrowRoundForward, IoIosArrowRoundUp, IoMdArrowForward } from "react-icons/io";
import { FaFan, FaInstagram, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";
 

export default function LandingPage() {

  return (
    <div className="w-screen flex justify-center">
      {<div className="w-3/4 h-scr">
        {/* HEADER */}
        <header className="flex justify-between items-center w-full h-48 border-b-4 border-black">
          <Link href={"/"}><img src="logo/logo-white.png" alt="" className="w-48 h-14"/></Link>
          <div className="flex justify-between gap-14 items-center font-[500] text-2xl">
            <div onClick={() => (window.location.href = `/about`)}>ABOUT</div>
            <div onClick={() => (window.location.href = `/services`)}>SERVICES</div>
            <div onClick={() => (window.location.href = `/help`)}>HELP</div>
            <div onClick={() => (window.location.href = `/careers`)}>CAREERS</div>
          </div>
          <div className="w-72 flex items-center relative">
            <div onClick={() => (window.location.href = "auth/authv1/signup")}
              className="w-64 flex justify-center font-[500] text-2xl border border-black rounded-full py-2 px-8 absolute right-10 hover:bg-black hover:text-white
                ease-in-out duration-300 hover:right-14"
              > GET STARTED
            </div>
            <IoPersonOutline className="absolute right-0 text-white w-12 h-12 p-3 bg-black rounded-full "/>
          </div>
        </header>

        {/* BODY */}
        <div className="p-14 flex flex-col">
          {/* TOP SECTION */}
          <div className="w-full flex">
            {/* LEFT */}
            <div className="w-[980px] relative">
              {/* TOP */}
              <div className="text-9xl font-[400] tracking-wide">
                <p className="">EMPOWERING</p>
                <p className="relative">
                  MENTAL
                  <span className="text-xl absolute top-5 ml-4 tracking-normal font-[500]">
                    <span>UNDERSTANDING MENTAL HEALTH A<br/></span>
                    <span>COMPREHENSIVE OVERVIEW OF DIFFERENT<br/></span>
                    <span>MENTAL HEALTH CONDITIONS<br/></span>
                  </span>
                </p>
                <p className="relative">WELLNESS<span className="absolute top-2 text-6xl">&#174;</span></p>
              </div>
              {/* BOTTOM */}
              <div className="w-full flex justify-between mt-24 text-xl">
                <Link href={"/"} className="bg-black w-[320px] h-20 rounded-full flex items-center justify-between px-6 group">
                  <p className="text-white">VIEW VIDEOS</p>
                  <div className="flex justify-center items-center w-10 h-10 bg-white text-black rounded-full group-hover:animate-pulse">
                    <BiSolidRightArrow className="w-4 h-4"/>
                  </div>
                </Link>
                <div className="">
                  <p className="font-[600] text-3xl">REAL-LIFE EXPERIENCE</p>
                  <div className="flex pl-4 my-6">
                    <div className="flex relative w-[184px] h-16">
                      <Link
                        href={"/"}
                        className="absolute right-36 z-30 w-16 h-16 rounded-full flex justify-center items-center shadow-xl bg-white
                          hover:right-40 ease-in-out duration-300"
                      >
                        <IoIosArrowRoundForward className="w-8 h-8"/>
                      </Link>
                      <img src="/faces/face5.jpg" alt="" className="absolute right-24 z-20 w-16 h-16 rounded-full"/>
                      <img src="/faces/face1.jpg" alt="" className="absolute right-12 z-10 w-16 h-16 rounded-full"/>
                      <img src="/faces/face4.jpg" alt="" className="absolute right-0 w-16 h-16 rounded-full"/>
                    </div>
                    <div className="flex items-center font-[500] gap-4 ml-4">
                      <p className="text-4xl">50+</p>
                      <p className="opacity-50 leading-6">
                        <span className="">INSPIRING<br/></span><span className="">ARTICLES</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* DECO */}
              <RiFlowerFill className="absolute w-20 h-20 text-gray-300 right-32 top-80"/>
              <GiFlowerTwirl className="absolute w-20 h-20 text-gray-300 left-96 -bottom-16"/>
              <PiFlowerLotusFill className="absolute w-20 h-20 text-gray-300 -right-16 -bottom-32"/>
              <GiCircleCage className="absolute w-56 h-56 text-gray-300 right-48 -bottom-80"/>
            </div>
            {/* RIGHT */}
            <div className="relative w-[598px]">
              <img src="/calm/calm2.webp" alt="" className="absolute h-[550px] w-[448px] rounded-xl right-0"/>
              <div className="absolute w-72 h-40 z-10 top-28 left-10 p-6 rounded-3xl backdrop-blur-sm backdrop-brightness-90">
                <p className="font-[500] text-lg">
                  BUILDING MENTAL<br/>RESILIENCE
                </p>
                <LineDark/>
                <MdKeyboardArrowRight className="absolute w-10 h-10 -right-[43px] top-10 -rotate-[75deg] z-10 text-white"/>
                <FaFan className="absolute w-6 h-6 right-6 bottom-4"/>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM SECTION */}
        <div className="flex justify-between w-full py-10 px-14">
          {/* LEFT */}
          <div className="w-1/3">
            <p className="max-w-fit text-lg font-bold py-2 px-8 mb-6 border-4 border-black rounded-full">
              MOST POPULAR MATERIALS
            </p>
            <div className="flex items-center justify-between border-y-4 border-black py-10 px-4">
              <div className="flex flex-col gap-2 max-w-fit h-[145px]">
                <p className="font-[500] text-2xl">
                  STRATEGIES AND<br/> TECHNIQUES FOR<br/> SELF-NURTURING
                </p>
                <Link href={"/"} className="flex relative max-h-fit group">
                  <IoIosArrowRoundForward className="absolute right-[55px] w-16 h-16 p-4 rounded-full bg-black text-white group-hover:right-[60px] ease-in-out duration-300"/>
                  <BiCircleHalf className="absolute right-7 w-16 h-16"/>
                  <BiCircleHalf className="absolute right-0 w-16 h-16"/>
                </Link>
              </div>
              <img src="/one_with_nature.jpg" alt="" className="rounded-2xl w-[240px] h-[155px]"/>
            </div>
          </div>
          {/* MIDDLE */}
          <div className="flex max-w-fit self-end">
            <Link href={"/"} className="">
              <FaInstagram className="w-12 h-12 p-2 border-y-2 border-l-2 border-black rounded-full"/>
            </Link>
            <Link href={"/"} className="">
              <FaTwitter className="w-12 h-12 p-2 border-y-2 border-black rounded-full"/>
            </Link>
            <Link href={"/"} className="">
              <FaYoutube className="w-12 h-12 p-2 border-y-2 border-black rounded-full"/>
            </Link>
            <Link href={"/"} className="">
              <FaTelegram className="w-12 h-12 p-2 border-y-2 border-r-2 border-black rounded-full"/>
            </Link>
          </div>
          {/* RIGHT */}
          <div className="w-[598px] flex items-center gap-6">
            <div className="flex flex-col justify-center gap-4 mr-6 px-2">
              <button className="">
                <IoIosArrowRoundUp className="w-12 h-12 p-2 border border-black rounded-full hover:h-20 hover:bg-black hover:text-white ease-in-out duration-300"/>
              </button>
              <button className="">
                <IoIosArrowRoundDown className="w-12 h-12 p-2 border border-black rounded-full hover:h-20 hover:bg-black hover:text-white ease-in-out duration-300"/>
              </button>
            </div>
            <div className="w-10/12">
              <ul className="h-full w-full text-xl font-[500] text-gray-400">
                <li className="h-1/5 py-3">
                  <Link href={"/"} className="flex justify-between items-center h-full hover:text-black">
                    <div className="flex gap-6 max-w-fit">
                      <p className="">01</p>
                      <p className="">CHAPTER</p>
                    </div>
                    <div className="flex justify-between w-2/3">
                      <p className="ml-4 pt-1.5">HEALTH ASSESSMENT</p>
                      <IoMdArrowForward className="w-10 h-10 -rotate-45"/>
                    </div>
                  </Link>
                </li>
                <hr className="border border-black w-full"/>
                <li className="h-1/5 py-3">
                  <Link href={"/"} className="flex justify-between items-center h-full hover:text-black">
                    <div className="flex gap-6 max-w-fit">
                      <p className="">02</p>
                      <p className="">CHAPTER</p>
                    </div>
                    <div className="flex justify-between w-2/3">
                      <p className="ml-4 pt-1.5">MINDFULNESS & MEDITATION</p>
                      <IoMdArrowForward className="w-10 h-10 -rotate-45"/>
                    </div>
                  </Link>
                </li>
                <hr className="border border-black w-full"/>
                <li className="h-1/5 py-3">
                  <Link href={"/"} className="flex justify-between items-center h-full hover:text-black">
                    <div className="flex gap-6 max-w-fit">
                      <p className="">03</p>
                      <p className="">CHAPTER</p>
                    </div>
                    <div className="flex justify-between w-2/3">
                      <p className="ml-4 pt-1.5">STRESS DETECTION</p>
                      <IoMdArrowForward className="w-10 h-10 -rotate-45"/>
                    </div>
                  </Link>
                </li>
                <hr className="border border-black w-full"/>
                <li className="h-1/5 py-3">
                  <Link href={"/"} className="flex justify-between items-center h-full hover:text-black">
                    <div className="flex gap-6 max-w-fit">
                      <p className="">04</p>
                      <p className="">CHAPTER</p>
                    </div>
                    <div className="flex justify-between w-2/3">
                      <p className="ml-4 pt-1.5">TREATMENT OPTIONS</p>
                      <IoMdArrowForward className="w-10 h-10 -rotate-45"/>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}
