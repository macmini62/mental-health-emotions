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

  // scrolling of the header.
  const [scrollX, setScrollX] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current || !containerRef.current.parentElement) return;
    
    // Viewable area's width and sliding container's total width
    const viewableWidth = containerRef.current.parentElement.offsetWidth;
    const slidingWidth = containerRef.current.scrollWidth;
    const scrollAmount = viewableWidth / 6; // Adjust scroll increment as needed

    if (direction === "left") {
      // Scroll left without exceeding the default (0)
      const newScrollX = Math.min(scrollX + scrollAmount, 0);
      setScrollX(newScrollX);
    } else {
      // Calculate the maximum negative scroll value:
      // It stops when the last item is fully visible.
      const maxScrollX = viewableWidth - slidingWidth - 4;
      const newScrollX = Math.max(scrollX - scrollAmount, maxScrollX);
      setScrollX(newScrollX);
    }
  };


  return (
    <div className="flex justify-center items-center pt-6 sticky z-10 top-16 text-nowrap bg-white border-b border-gray-300">
      {/* Add button only visible when at default scroll position */}
      {scrollX === 0 && (
        <button className="group absolute left-2">
          <IoAdd className="w-6 h-6 group-hover:text-black" />
        </button>
      )}
      {/* Left arrow button is visible only when scrolled */}
      <button
        className={`group absolute left-2 ${scrollX === 0 ? "invisible" : ""}`}
        onClick={() => handleScroll("left")}
      >
        <IoIosArrowBack className="w-6 h-6 group-hover:text-black" />
      </button>
      {/* Viewable area with overflow hidden */}
      <div className="w-[calc(100%-80px)] relative h-12 overflow-hidden">
        {/* Sliding container */}
        <div
          ref={containerRef}
          className="h-full flex items-center whitespace-nowrap"
          style={{
            transform: `translateX(${scrollX}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {
            role === "seeker" &&
            <button className="mr-6" onClick={() => setFetchTag("following")}>
              <p className={`text-sm hover:text-black ${ tag === "following" && "text-black underline"}`}>following</p>
            </button>
          }
          {tp.map((t: topic, i: number) => (
            <button
              key={i}
              className={`mr-6 group`}
              onClick={() => setFetchTag(t._id)}
            >
              <p className={`text-sm hover:text-black ${t._id === tag && "text-black underline"}`}>{t.name}</p>
            </button>
          ))}
        </div>
      </div>
      {/* Right arrow button */}
      <button
        className="group absolute right-2"
        onClick={() => handleScroll("right")}
      >
        <IoIosArrowForward className="w-6 h-6 group-hover:text-black" />
      </button>
    </div>
  );
};

export default ContentHeader;
