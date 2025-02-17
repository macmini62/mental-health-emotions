import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import axios from "axios";

const ContentHeader = ({
  topics
}:{
  topics: Array<string>
}) => {

  const[tp, setTp] = React.useState<Array<string>>([]);
  React.useEffect(() => {
    const accessToken: string | null = localStorage.getItem("access token");
    const userId: string | null = localStorage.getItem("userId");
    if(accessToken && userId){
      axios.post(`http://localhost:3001/topics/${JSON.parse(userId)}/`, 
      topics,
      {
        headers:{
          authorization: JSON.parse(accessToken)
        }
      })
      .then((res) => {
        setTp([...res.data]);
      })
      .catch((e) => { console.log(e) })
    }
  }, [topics]);

  return (
    <div className="flex pt-6 px-14 sticky z-10 top-16 overflow-visible text-nowrap bg-white border-b border-gray-300 shadow-sm">
      <Link href="/"><button className="group absolute left-2"><IoAdd className="w-8 h-8 pb-2 group-hover:text-black"/></button></Link>
      <button className="group absolute left-2 invisible"><IoIosArrowBack className="w-8 h-8 pb-2 group-hover:text-black"/></button>
      <div className="flex overflow-hidden shadow-3xl">
        <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">For you</p></button></Link>
        <Link href="/"><button className="mr-6 group focus:border-b-2 focus:border-black"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">Following</p></button></Link>
        {
          tp.map((t: string, i:number) => (
            <Link key={i} href="/"><button className="mr-6 group focus:border-b-2 focus:border-black capitalize"><p className="text-sm pb-6 group-hover:text-black group-focus:text-black">{t}</p></button></Link>
          ))
        }
      </div>
      <button className="group absolute right-2"><IoIosArrowForward className="w-8 h-8 pb-2 group-hover:text-black"/></button>
    </div>
  )
}

export default ContentHeader