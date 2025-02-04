import Link from "next/link"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { IoAdd } from "react-icons/io5"

const ContentHeader = () => {
  return (
    <div className="flex pt-6 px-14 sticky z-10 top-16 overflow-visible text-nowrap bg-white border-b border-gray-300 shadow-sm">
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
  )
}

export default ContentHeader