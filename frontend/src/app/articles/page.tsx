 "use client"


import Link from "next/link";
import { CiCircleMinus } from "react-icons/ci";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { GoBell, GoDotFill } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoAdd, IoBookmark, IoBookmarkOutline, IoSearchOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { TbMessageCircle, TbMessageCircleFilled } from "react-icons/tb";
import Menu from "../components/sideMenu/menu";
import axios from "axios";
import React from "react";
import Footer from "../components/footerOptions/footer";

interface topic {
  _id: string,
  name: string
}

const Articles = () => {
  const [topics, setTopics] = React.useState<topic[]>([]);
  
  // Load topics data
  React.useEffect(() => {
    axios.get(`http://localhost:3001/topics?size=${10}`)
    .then((res) => {
      setTopics(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  // Reload more topics
  const handleTopicsLoad = () => {
    axios.get(`http://localhost:3001/topics?size=${topics.length+5}`)
      .then((res) => {
        setTopics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
      {/* HEADER */}
      <div className="w-full flex justify-between py-3 px-4 border-b-2 fixed z-50 left-0 top-0 bg-white shadow-sm">
        <div className="flex gap-6 items-center">
          <Link href="/"><img src="/logo/logo-white.png" alt="" className="w-36 h-10"/></Link>
          <div className="max-w-fit h-10 flex px-3 gap-3 items-center bg-gray-100 rounded-full group">
            <button className="hover:rounded-full hover:bg-gray-300 p-1 group-focus-within:text-black"><IoSearchOutline className="w-6 h-6"/></button>
            <input type="text" name="" id="" className="px-2 w-52 outline-none bg-transparent group-focus-within:text-black" placeholder="Search"/>
          </div>
        </div>
        <div className="w-56 flex justify-between items-center mr-2">
          <Link href="/" className="max-w-fit flex items-center gap-2 hover:text-black">
            <FiEdit className="w-7 h-7"/>
            <p className="">Write</p>
          </Link>
          <Link href="/" className="relative"><GoBell className="w-7 h-7 hover:text-black"/><GoDotFill className="animate-ping absolute w-3 h-3 bottom-0 -right-1 text-black"/></Link>
          <button><img src="/faces/face1.jpg" alt="" className="w-10 h-10 rounded-full hover:opacity-80"/></button>
        </div>
      </div>
      {/* BODY */}
      <div className="w-[1338px] flex justify-between p-4 mt-4">
        {/* MENU SECTION */}
        <Menu
          menu="articles"
        />
        {/* CONTENT SECTION */}
        <div className="w-[728px] max-h-fit mt-10 py-4 ml-[196px]">
          {/* section-header */}
          <div className="flex pt-2 px-14 relative overflow-visible text-nowrap">
            <Link href="/"><button className="group absolute left-2"><IoAdd className="w-8 h-8 pb-2 group-hover:text-black"/></button></Link>
            <button className="group absolute left-2 invisible"><IoIosArrowBack className="w-8 h-8 pb-2 group-hover:text-black"/></button>
            <div className="flex overflow-hidden shadow-3xl">
              <Link href=""><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">For you</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Following</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Life</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Business</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">World</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Life</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Business</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">World</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Life</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Business</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">World</p></button></Link>
            </div>
            <button className="group absolute right-2"><IoIosArrowForward className="w-8 h-8 pb-2 group-hover:text-black"/></button>
          </div>
          <hr className="w-full border-gray-300" />
          {/* contents */}
          <ul className="mt-4">
            <li className="py-8 border-b border-gray-300">
              <div className="flex flex-col gap-4">
                {/* section-header */}
                <div className="flex gap-2 items-center text-black">
                  <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 rounded-full hover:opacity-80" /></Link>
                  <Link href="/"><p className="text-sm hover:underline">Josh Boyer</p></Link>
                  <img src="/faces/face5.jpg" alt="" className="w-4 h-4 rounded-full" />
                </div>
                
                <div className="flex gap-10">
                  {/* contents */}
                  <div className="flex flex-col gap-6 w-[calc(100%-200px)]">
                    <Link href="/" className="flex gap-10 justify-between">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-black font-semibold text-3xl">
                          Prince of Persia's Accessibility is Inaccessible to Some
                        </h3>
                        <p className="line-clamp-2">
                          Were you aware of the prison that is located on the famous island of San Francisco?
                        </p>
                      </div>
                    </Link>
                    {/* section-footer */}
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex gap-6 text-md">
                        {/* <img src="/faces/face5.jpg" alt="" className="" /> */}
                        <p className="h-5">Dec 21</p>
                        <div className="flex gap-1.5 items-center">
                          <FcLikePlaceholder className="w-5 h-5"/>
                          {/* <FcLike className="w-5 h-5"/> */}
                          <p className="h-5">90</p>
                        </div>
                        <div className="flex gap-1.5 items-center">
                          <TbMessageCircle className="w-5 h-5"/>
                          {/* <TbMessageCircleFilled className="w-5 h-5"/> */}
                          <p className="h-5">33</p>
                        </div>
                      </Link>
                      <div className="flex gap-10">
                        <button><CiCircleMinus className="w-7 h-7 hover:text-black"/></button>
                        <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button>
                        {/* <button><IoBookmark className="w-7 h-7 text-black"/></button> */}
                        <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
                      </div>
                    </div>
                  </div>
                  {/* image */}
                  <Link href="/"><img src="/calm/calm2.webp" alt="" className="h-[146px] w-[160px] rounded-md" /></Link>
                </div>
              </div>
            </li>
            <li className="py-8 border-b border-gray-300">
              <div className="flex flex-col gap-4">
                {/* section-header */}
                <div className="flex gap-2 items-center text-black">
                  <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 rounded-full hover:opacity-80" /></Link>
                  <Link href="/"><p className="text-sm hover:underline">Josh Boyer</p></Link>
                  <img src="/faces/face5.jpg" alt="" className="w-4 h-4 rounded-full" />
                </div>
                
                <div className="flex gap-10">
                  {/* contents */}
                  <div className="flex flex-col gap-6 w-[calc(100%-200px)]">
                    <Link href="/" className="flex gap-10 justify-between">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-black font-semibold text-3xl">
                          Prince of Persia's Accessibility is Inaccessible to Some
                        </h3>
                        <p className="line-clamp-2">
                          Were you aware of the prison that is located on the famous island of San Francisco?
                        </p>
                      </div>
                    </Link>
                    {/* section-footer */}
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex gap-6 text-md">
                        {/* <img src="/faces/face5.jpg" alt="" className="" /> */}
                        <p className="h-5">Dec 21</p>
                        <div className="flex gap-1.5 items-center">
                          {/* <FcLikePlaceholder className="w-5 h-5"/> */}
                          <FcLike className="w-5 h-5"/>
                          <p className="h-5">90</p>
                        </div>
                        <div className="flex gap-1.5 items-center">
                          {/* <TbMessageCircle className="w-5 h-5"/> */}
                          <TbMessageCircleFilled className="w-5 h-5"/>
                          <p className="h-5">33</p>
                        </div>
                      </Link>
                      <div className="flex gap-10">
                        <button><CiCircleMinus className="w-7 h-7 hover:text-black"/></button>
                        {/* <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button> */}
                        <button><IoBookmark className="w-7 h-7 text-black"/></button>
                        <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
                      </div>
                    </div>
                  </div>
                  {/* image */}
                  <Link href="/"><img src="/calm/calm2.webp" alt="" className="h-[146px] w-[160px] rounded-md" /></Link>
                </div>
              </div>
            </li>
            <li className="py-8 border-b border-gray-300">
              <div className="flex flex-col gap-4">
                {/* section-header */}
                <div className="flex gap-2 items-center text-black">
                  <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 rounded-full hover:opacity-80" /></Link>
                  <Link href="/"><p className="text-sm hover:underline">Josh Boyer</p></Link>
                  <img src="/faces/face5.jpg" alt="" className="w-4 h-4 rounded-full" />
                </div>
                
                <div className="flex gap-10">
                  {/* contents */}
                  <div className="flex flex-col gap-6 w-[calc(100%-200px)]">
                    <Link href="/" className="flex gap-10 justify-between">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-black font-semibold text-3xl">
                          Prince of Persia's Accessibility is Inaccessible to Some
                        </h3>
                        <p className="line-clamp-2">
                          Were you aware of the prison that is located on the famous island of San Francisco?
                        </p>
                      </div>
                    </Link>
                    {/* section-footer */}
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex gap-6 text-md">
                        {/* <img src="/faces/face5.jpg" alt="" className="" /> */}
                        <p className="h-5">Dec 21</p>
                        <div className="flex gap-1.5 items-center">
                          {/* <FcLikePlaceholder className="w-5 h-5"/> */}
                          <FcLike className="w-5 h-5"/>
                          <p className="h-5">90</p>
                        </div>
                        <div className="flex gap-1.5 items-center">
                          {/* <TbMessageCircle className="w-5 h-5"/> */}
                          <TbMessageCircleFilled className="w-5 h-5"/>
                          <p className="h-5">33</p>
                        </div>
                      </Link>
                      <div className="flex gap-10">
                        <button><CiCircleMinus className="w-7 h-7 hover:text-black"/></button>
                        {/* <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button> */}
                        <button><IoBookmark className="w-7 h-7 text-black"/></button>
                        <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
                      </div>
                    </div>
                  </div>
                  {/* image */}
                  <Link href="/"><img src="/calm/calm2.webp" alt="" className="h-[146px] w-[160px] rounded-md" /></Link>
                </div>
              </div>
            </li>
            <li className="py-8 border-b border-gray-300">
              <div className="flex flex-col gap-4">
                {/* section-header */}
                <div className="flex gap-2 items-center text-black">
                  <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 rounded-full hover:opacity-80" /></Link>
                  <Link href="/"><p className="text-sm hover:underline">Josh Boyer</p></Link>
                  <img src="/faces/face5.jpg" alt="" className="w-4 h-4 rounded-full" />
                </div>
                
                <div className="flex gap-10">
                  {/* contents */}
                  <div className="flex flex-col gap-6 w-[calc(100%-200px)]">
                    <Link href="/" className="flex gap-10 justify-between">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-black font-semibold text-3xl">
                          Prince of Persia's Accessibility is Inaccessible to Some
                        </h3>
                        <p className="line-clamp-2">
                          Were you aware of the prison that is located on the famous island of San Francisco?
                        </p>
                      </div>
                    </Link>
                    {/* section-footer */}
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex gap-6 text-md">
                        {/* <img src="/faces/face5.jpg" alt="" className="" /> */}
                        <p className="h-5">Dec 21</p>
                        <div className="flex gap-1.5 items-center">
                          {/* <FcLikePlaceholder className="w-5 h-5"/> */}
                          <FcLike className="w-5 h-5"/>
                          <p className="h-5">90</p>
                        </div>
                        <div className="flex gap-1.5 items-center">
                          {/* <TbMessageCircle className="w-5 h-5"/> */}
                          <TbMessageCircleFilled className="w-5 h-5"/>
                          <p className="h-5">33</p>
                        </div>
                      </Link>
                      <div className="flex gap-10">
                        <button><CiCircleMinus className="w-7 h-7 hover:text-black"/></button>
                        {/* <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button> */}
                        <button><IoBookmark className="w-7 h-7 text-black"/></button>
                        <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
                      </div>
                    </div>
                  </div>
                  {/* image */}
                  <Link href="/"><img src="/calm/calm2.webp" alt="" className="h-[146px] w-[160px] rounded-md" /></Link>
                </div>
              </div>
            </li>
            <li className="py-8 border-b border-gray-300">
              <div className="flex flex-col gap-4">
                {/* section-header */}
                <div className="flex gap-2 items-center text-black">
                  <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 rounded-full hover:opacity-80" /></Link>
                  <Link href="/"><p className="text-sm hover:underline">Josh Boyer</p></Link>
                  <img src="/faces/face5.jpg" alt="" className="w-4 h-4 rounded-full" />
                </div>
                
                <div className="flex gap-10">
                  {/* contents */}
                  <div className="flex flex-col gap-6 w-[calc(100%-200px)]">
                    <Link href="/" className="flex gap-10 justify-between">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-black font-semibold text-3xl">
                          Prince of Persia's Accessibility is Inaccessible to Some
                        </h3>
                        <p className="line-clamp-2">
                          Were you aware of the prison that is located on the famous island of San Francisco?
                        </p>
                      </div>
                    </Link>
                    {/* section-footer */}
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex gap-6 text-md">
                        {/* <img src="/faces/face5.jpg" alt="" className="" /> */}
                        <p className="h-5">Dec 21</p>
                        <div className="flex gap-1.5 items-center">
                          {/* <FcLikePlaceholder className="w-5 h-5"/> */}
                          <FcLike className="w-5 h-5"/>
                          <p className="h-5">90</p>
                        </div>
                        <div className="flex gap-1.5 items-center">
                          {/* <TbMessageCircle className="w-5 h-5"/> */}
                          <TbMessageCircleFilled className="w-5 h-5"/>
                          <p className="h-5">33</p>
                        </div>
                      </Link>
                      <div className="flex gap-10">
                        <button><CiCircleMinus className="w-7 h-7 hover:text-black"/></button>
                        {/* <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button> */}
                        <button><IoBookmark className="w-7 h-7 text-black"/></button>
                        <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
                      </div>
                    </div>
                  </div>
                  {/* image */}
                  <Link href="/"><img src="/calm/calm2.webp" alt="" className="h-[146px] w-[160px] rounded-md" /></Link>
                </div>
              </div>
            </li>
            <li className="py-8 border-b border-gray-300">
              <div className="flex flex-col gap-4">
                {/* section-header */}
                <div className="flex gap-2 items-center text-black">
                  <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 rounded-full hover:opacity-80" /></Link>
                  <Link href="/"><p className="text-sm hover:underline">Josh Boyer</p></Link>
                  <img src="/faces/face5.jpg" alt="" className="w-4 h-4 rounded-full" />
                </div>
                
                <div className="flex gap-10">
                  {/* contents */}
                  <div className="flex flex-col gap-6 w-[calc(100%-200px)]">
                    <Link href="/" className="flex gap-10 justify-between">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-black font-semibold text-3xl">
                          Prince of Persia's Accessibility is Inaccessible to Some
                        </h3>
                        <p className="line-clamp-2">
                          Were you aware of the prison that is located on the famous island of San Francisco?
                        </p>
                      </div>
                    </Link>
                    {/* section-footer */}
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex gap-6 text-md">
                        {/* <img src="/faces/face5.jpg" alt="" className="" /> */}
                        <p className="h-5">Dec 21</p>
                        <div className="flex gap-1.5 items-center">
                          {/* <FcLikePlaceholder className="w-5 h-5"/> */}
                          <FcLike className="w-5 h-5"/>
                          <p className="h-5">90</p>
                        </div>
                        <div className="flex gap-1.5 items-center">
                          {/* <TbMessageCircle className="w-5 h-5"/> */}
                          <TbMessageCircleFilled className="w-5 h-5"/>
                          <p className="h-5">33</p>
                        </div>
                      </Link>
                      <div className="flex gap-10">
                        <button><CiCircleMinus className="w-7 h-7 hover:text-black"/></button>
                        {/* <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button> */}
                        <button><IoBookmark className="w-7 h-7 text-black"/></button>
                        <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
                      </div>
                    </div>
                  </div>
                  {/* image */}
                  <Link href="/"><img src="/calm/calm2.webp" alt="" className="h-[146px] w-[160px] rounded-md" /></Link>
                </div>
              </div>
            </li>
            <li className="py-8 border-b border-gray-300">
              <div className="flex flex-col gap-4">
                {/* section-header */}
                <div className="flex gap-2 items-center text-black">
                  <Link href="/"><img src="/faces/face5.jpg" alt="" className="w-6 h-6 rounded-full hover:opacity-80" /></Link>
                  <Link href="/"><p className="text-sm hover:underline">Josh Boyer</p></Link>
                  <img src="/faces/face5.jpg" alt="" className="w-4 h-4 rounded-full" />
                </div>
                
                <div className="flex gap-10">
                  {/* contents */}
                  <div className="flex flex-col gap-6 w-[calc(100%-200px)]">
                    <Link href="/" className="flex gap-10 justify-between">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-black font-semibold text-3xl">
                          Prince of Persia's Accessibility is Inaccessible to Some
                        </h3>
                        <p className="line-clamp-2">
                          Were you aware of the prison that is located on the famous island of San Francisco?
                        </p>
                      </div>
                    </Link>
                    {/* section-footer */}
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex gap-6 text-md">
                        {/* <img src="/faces/face5.jpg" alt="" className="" /> */}
                        <p className="h-5">Dec 21</p>
                        <div className="flex gap-1.5 items-center">
                          {/* <FcLikePlaceholder className="w-5 h-5"/> */}
                          <FcLike className="w-5 h-5"/>
                          <p className="h-5">90</p>
                        </div>
                        <div className="flex gap-1.5 items-center">
                          {/* <TbMessageCircle className="w-5 h-5"/> */}
                          <TbMessageCircleFilled className="w-5 h-5"/>
                          <p className="h-5">33</p>
                        </div>
                      </Link>
                      <div className="flex gap-10">
                        <button><CiCircleMinus className="w-7 h-7 hover:text-black"/></button>
                        {/* <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button> */}
                        <button><IoBookmark className="w-7 h-7 text-black"/></button>
                        <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
                      </div>
                    </div>
                  </div>
                  {/* image */}
                  <Link href="/"><img src="/calm/calm2.webp" alt="" className="h-[146px] w-[160px] rounded-md" /></Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* RIGHT SECTION */}
        <div className="w-[340px] flex flex-col gap-6 mt-8 py-8 pl-10 border-l border-gray-300">
          <div className="">
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
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default Articles;