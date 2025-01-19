 
import Footer from "@/app/components/footerOptions/footer";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { GoBell, GoDotFill } from "react-icons/go";
import { IoBookmarkOutline, IoSearchOutline, IoShareOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { TbMessageCircleFilled } from "react-icons/tb";

const Post = () => {
  return (
    <div className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
      {/* HEADER */}
      <div className="w-full flex justify-between py-3 px-4 border-b-2 fixed z-50 left-0 top-0 bg-white shadow-sm">
        <div className="flex gap-6 items-center">
          <Link href=""><img src="/logo/logo-white.png" alt="" className="w-36 h-10"/></Link>
          <div className="max-w-fit h-10 flex px-3 gap-3 items-center bg-gray-100 rounded-full group">
            <IoSearchOutline className="w-7 h-7 group-focus-within:text-black"/>
            <input type="text" name="" id="" className="px-2 w-52 outline-none bg-transparent focus:text-black" placeholder="Search"/>
          </div>
        </div>
        <div className="w-56 flex justify-between items-center mr-2">
          <Link href="" className="max-w-fit flex items-center gap-1 text-white bg-black active:text-black active:bg-white active:border-black border py-1 px-4 rounded-full">
            <p className="">Create</p>
          </Link>
          <Link href="" className="relative"><GoBell className="w-7 h-7 hover:text-black"/><GoDotFill className="animate-ping absolute w-3 h-3 bottom-0 -right-1 text-black"/></Link>
          <button><img src="/faces/face1.jpg" alt="" className="w-10 h-10 rounded-full hover:opacity-80"/></button>
        </div>
      </div>
      {/* ARTICLE */}
      <article className="flex flex-col items-start w-1/3 mt-20 py-8 text-lg text-nowrap">
        {/* heading */}
        <div className="w-full p-2">
          <h2 className="text-5xl text-black font-semibold my-3">366/366</h2>
          <h3 className="text-xl my-3">Long story short, you survived the year 2024.</h3>
          <div className="flex gap-4 items-center my-6">
            <Link href="/"><img src="/faces/face4.jpg" alt="" className="w-14 h-14 rounded-full hover:opacity-80"/></Link>
            <div className="max-w-fit">
              <Link href="/"><p className="text-black hover:underline">eMotions</p></Link>
              <div className="flex items-center gap-1 text-sm">
                <p className="">2 min read</p>
                <BsDot/>
                <p className="">2 days ago</p>
              </div>
            </div>
          </div>
          <div className="w-full p-3 flex justify-between items-center border-y border-gray-200">
            <div className="flex gap-6 text-md">
              <div className="flex gap-1.5 items-center h-6">
                {/* <FcLikePlaceholder className="w-5 h-5"/> */}
                <FcLike className="w-5 h-5"/>
                <p className="h-5 text-sm">90</p>
              </div>
              <div className="flex gap-1.5 items-center">
                {/* <TbMessageCircle className="w-5 h-5"/> */}
                <TbMessageCircleFilled className="w-5 h-5"/>
                <p className="h-5 text-sm">33</p>
              </div>
            </div>
            <div className="flex gap-10">
              <button><IoShareOutline className="w-7 h-7 hover:text-black"/></button>
              <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button>
              {/* <button><IoBookmark className="w-7 h-7 text-black"/></button> */}
              <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="w-full border-b border-gray-200 mt-8">
          {/* thumbnail */}
          <div className="flex flex-col w-full items-center justify-center gap-4 py-4">
            <img src="/calm/calm2.webp" alt="" className="w-2/3 h-[400px]"/>
            <p className="text-sm">Image by eMotions staff.</p>
          </div>
          {/* paragraphs */}
          <div className="text-wrap text-black flex flex-col items-center gap-4 py-8 mb-8">
            <p className="">
              2024 has finally come to an end. You've made it to the last day of the year and as you look back at everything you've been through,
              I hope you see how far you've come. There were good times and tough times, but you kept moving forward. Every challenge you faced 
              and every step you took brought you to where you are today.
            </p>
            <p className="">
              It was a hard year, but you made it. You survived, and that's a big deal. I'm proud of you and always will be.
            </p>
            <p className="">
              Keep moving forward, keep believing in yourself, and know that you've already accomplished much. The future is full of possiblities
              -so go after it, because you've earned every step of it. You've got this. Keep shining my brave little fighter.
            </p>
          </div>
          {/* tags */}
          <div className="">
            <div className="w-full max-h-fit flex flex-wrap col-span-2 gap-4 my-4">
              <Link href="" className="py-4 px-6 rounded-full bg-gray-100 text-black capitalize">mathematics</Link>
              <Link href="" className="py-4 px-6 rounded-full bg-gray-100 text-black capitalize">movies</Link>
              <Link href="" className="py-4 px-6 rounded-full bg-gray-100 text-black capitalize">language learning</Link>
              <Link href="" className="py-4 px-6 rounded-full bg-gray-100 text-black capitalize">devOps</Link>
              <Link href="" className="py-4 px-6 rounded-full bg-gray-100 text-black capitalize">programming languages</Link>
              <Link href="" className="py-4 px-6 rounded-full bg-gray-100 text-black capitalize">astronomy</Link>
              <Link href="" className="py-4 px-6 rounded-full bg-gray-100 text-black capitalize">reading</Link>
            </div>
            <div className="w-full p-3 flex justify-between items-center mt-8">
              <div className="flex gap-6 text-md">
                <div className="flex gap-1.5 items-center h-6">
                  {/* <FcLikePlaceholder className="w-5 h-5"/> */}
                  <FcLike className="w-5 h-5"/>
                  <p className="h-5 text-sm">90</p>
                </div>
                <div className="flex gap-1.5 items-center">
                  {/* <TbMessageCircle className="w-5 h-5"/> */}
                  <TbMessageCircleFilled className="w-5 h-5"/>
                  <p className="h-5 text-sm">33</p>
                </div>
              </div>
              <div className="flex gap-10">
                <button><IoShareOutline className="w-7 h-7 hover:text-black"/></button>
                <button><IoBookmarkOutline className="w-7 h-7 hover:text-black"/></button>
                {/* <button><IoBookmark className="w-7 h-7 text-black"/></button> */}
                <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* FOOTER */}
      <Footer/>
    </div>
  )
}

export default Post;