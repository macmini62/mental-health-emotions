"use client"

import * as React from "react";
import Link from "next/link";
import Menu from "../components/sideMenu/menu";
import Footer from "../components/footerOptions/footer";
import LoadingSkeleton from "../components/loadings/loadingSkeleton";
import Header from "../components/header";
import ContentHeader from "../components/contentHeader";
import MoreOptions from "../components/moreOptions";

const SKELETONS = 8;

const Videos = () => {

  // Video loading skeletons.
  const [skeletons, setSkeletons] = React.useState<Array<React.JSX.Element>>([]);
  React.useEffect(() => {
    setSkeletons((s: Array<React.JSX.Element>) => {
      for(let i = 0; i < SKELETONS; i++){
        s.push(<LoadingSkeleton/>);
      }
      return [...s];
    });
  }, []);

  return (
    <div className="w-full h-screen overflow-y-visible overflow-x-hidden flex flex-col items-center text-gray-600">
      {/* HEADER */}
      <Header/>
      {/* BODY */}
      <div className="w-[1338px] flex justify-between p-4">
        {/* MENU SECTION */}
        <Menu
          menu="videos"
        />
        {/* CONTENT SECTION */}
        <div className="w-[1114px] max-h-fit py-4">
          {/* content header */}
          <ContentHeader/>
          {/* contents */}
            <div className="w-full flex flex-wrap col-span-4 justify-around mt-6 relative">
              {/* {
                skeletons.map((s: React.JSX.Element, i: number) => (
                  <React.Fragment key={i}>
                    {s}
                  </React.Fragment>
                ))
              } */}
              <div className="w-[350px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[240px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between gap-2 my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <MoreOptions
                    type="video"
                  />
                </div>
              </div>
              <div className="w-[350px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[240px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between gap-2 my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <MoreOptions
                    type="video"
                  />
                </div>
              </div>
              <div className="w-[350px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[240px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between gap-2 my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <MoreOptions
                    type="video"
                  />
                </div>
              </div>
              <div className="w-[350px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[240px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between gap-2 my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <MoreOptions
                    type="video"
                  />
                </div>
              </div>
              <div className="w-[350px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[240px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between gap-2 my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <MoreOptions
                    type="video"
                  />
                </div>
              </div>
              <div className="w-[350px] hover:shadow-md rounded-b-md">
                <Link href="/videos"><img src="/calm/calm2.webp" alt="" className="h-[240px] w-full rounded-md" /></Link>
                <div className="w-full flex justify-between gap-2 my-4 px-1">
                  <Link href="/"><img src="/faces/face1.jpg" alt="" className="w-12 h-12 rounded-full" /></Link>
                  <div className="text-sm w-2/3">
                    <Link href="/videos"><h3 className="text-black font-bold line-clamp-2 mb-1">Here is to the new year. Everything you might expect in this wonderful year.</h3></Link>
                    <Link href="/"><p className="my-1">eMotions</p></Link>
                    <p className="capitalize my-1">21 dec</p>
                  </div>
                  <MoreOptions
                    type="video"
                  />
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