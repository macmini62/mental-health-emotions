 
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { GoBell, GoDotFill } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoAdd, IoSearchOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import Menu from "../components/sideMenu/menu";
import Footer from "../components/footerOptions/footer";

const Videos = () => {
  return (
    <div className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
      {/* HEADER */}
      <div className="w-full flex justify-between py-3 px-4 border-b-2 sticky z-50 top-0 bg-white shadow-sm">
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
      <div className="w-[1338px] flex justify-between p-4">
        {/* MENU SECTION */}
        <Menu
          menu="videos"
        />
        {/* CONTENT SECTION */}
        <div className="w-[1114px] max-h-fit py-4">
          {/* section header */}
          <div className="flex pt-6 px-14 sticky top-16 overflow-visible text-nowrap bg-white border-b border-gray-300 shadow-sm">
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
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Business</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">World</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Life</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Business</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">World</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Business</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">World</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Life</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Business</p></button></Link>
              <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">World</p></button></Link>
            </div>
            <button className="group absolute right-2"><IoIosArrowForward className="w-8 h-8 pb-2 group-hover:text-black"/></button>
          </div>
          {/* <hr className="w-full border-gray-300" /> */}
          {/* contents */}
            <div className="w-full flex flex-wrap col-span-4 gap-y-6 justify-between mt-6">
              <div className="w-[260px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[150px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <SlOptionsVertical className="w-5 h-5 hover:text-black"/>
                </div>
              </div>
              <div className="w-[260px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[150px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <SlOptionsVertical className="w-5 h-5 hover:text-black"/>
                </div>
              </div>
              <div className="w-[260px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[150px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <SlOptionsVertical className="w-5 h-5 hover:text-black"/>
                </div>
              </div>
              <div className="w-[260px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[150px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <SlOptionsVertical className="w-5 h-5 hover:text-black"/>
                </div>
              </div>
              <div className="w-[260px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[150px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <SlOptionsVertical className="w-5 h-5 hover:text-black"/>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer/>
    </div>
  )
}

export default Videos;