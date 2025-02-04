import Link from "next/link"
import { FiEdit } from "react-icons/fi"
import { GoBell, GoDotFill } from "react-icons/go"
import { IoSearchOutline } from "react-icons/io5"

const Header = () => {
  return (
    <div className="w-full flex justify-between py-3 px-4 border-b-2 sticky z-50 left-0 top-0 bg-white shadow-sm">
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
  )
}

export default Header;
