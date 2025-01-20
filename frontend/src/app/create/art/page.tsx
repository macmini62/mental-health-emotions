import Link from "next/link";
import { SlOptions } from "react-icons/sl";

const Page = () => {
  return (
    <div className="w-1/2 p-2">
      {/* HEADER */}
      <header className="flex justify-between">
        <div className="">
          <Link href=""><img src="/logo/logo-white.png" alt="" className="w-54 h-16"/></Link>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-black bg-green-600 px-5 py-2 rounded-full">Publish</button>
          <button><SlOptions className="w-7 h-7 hover:text-black"/></button>
          <button><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full hover:opacity-80"/></button>
        </div>
      </header>
      {/* EDITING SECTION */}
      <div className="flex flex-col py-4">
        
      </div>
    </div>
  )
}

export default Page;