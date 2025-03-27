import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import axios from "axios";
import { topic } from "../interface/interface";

const ContentHeader = ({
  topics,
  setFetchTag,
  tag,
  role
}:{
  topics: Array<string> | undefined,
  setFetchTag: (t: string) => void,
  tag: string
  role: string
}) => {

  // fetch seeker subscribed topics
  const[tp, setTp] = React.useState<Array<topic>>([]);
  React.useEffect(() => {
    const accessToken: string | null = localStorage.getItem("accessToken");
    const userId: string | null = localStorage.getItem("userId");
    if(accessToken && userId && topics){
      axios.post<Array<topic>>(`http://localhost:3001/topics/${JSON.parse(userId)}`, 
      topics,
      {
        headers:{
          authorization: JSON.parse(accessToken)
        }
      })
      .then((res) => {
        setTp(res.data);
      })
      .catch((e) => { console.log(e) })
    }
  }, [topics]);

  return (
    <div className="flex pt-6 px-14 sticky z-10 top-16 overflow-visible text-nowrap bg-white border-b border-gray-300 shadow-sm">
     <div><button className="group absolute left-2"><IoAdd className="w-8 h-8 pb-2 group-hover:text-black"/></button></div>
      <button className="group absolute left-2 invisible"><IoIosArrowBack className="w-8 h-8 pb-2 group-hover:text-black"/></button>
      <div className="flex overflow-hidden shadow-3xl">
        <div onClick={() => setFetchTag("all")}>
          <button className={`mr-6 group  ${tag === "all" && "border-b-2 border-black text-black"}`}>
            <p className="text-sm pb-6 group-hover:text-black">For you</p>
          </button>
        </div>
        {
          role === "seeker" &&
          <div onClick={() => setFetchTag("following")}>
            <button className={`mr-6 group  ${tag === "following" && "border-b-2 border-black text-black"}`}>
              <p className="text-sm pb-6 group-hover:text-black">Following</p>
            </button>
          </div>
        }
        {
          tp.map((t: topic, i:number) => (
            <div
              key={i}
              onClick={() => setFetchTag(t._id)}
              >
              <button className={`mr-6 group  ${tag === t._id && "border-b-2 border-black text-black"}`}>
              <p className="text-sm pb-6 group-hover:text-black">{t.name}</p></button>
            </div>
          ))
        }
      </div>
      <button className="group absolute right-2"><IoIosArrowForward className="w-8 h-8 pb-2 group-hover:text-black"/></button>
    </div>
  )
}

export default ContentHeader;