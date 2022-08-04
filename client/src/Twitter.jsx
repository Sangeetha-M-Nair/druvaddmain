import React from 'react';
import { CSSProperties } from './index.css'

import {
  FcStackOfPhotos,
  FcVideoFile,
  FcCalendar,
  FcBrokenLink,
  FcLikePlaceholder,
  FcSettings,
} from "react-icons/fc";
// import {AiFillSchedule} from "react-icons/ai";
import { BsPatchCheckFill, BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots, FaShareSquare, FaRetweet } from "react-icons/fa";

const Twitter = () => {
  return (
    <div className="h-full  bg-[#05141C] py-5 px-0 text-white flex gap-4 overflow-hidden text-base">
      {/* leftside */}

      <div className="w-1/4 overflow-hidden ml-3 ">
        {/* upperside */}

        <div className="bg-[#1B2730] text-center rounded-lg ">
          <div className="h-20 w-full bg-[#98C9B4] rounded-lg pb-6" ></div>
          <img
            className="z-1 rounded-full object-cover w-14 h-14 relative bottom-9 m-auto "
            src="data:image/jpeg;base64,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"
            alt="" 
          />
          <div className='pt-1'>
          <h1>Yeremias NJ</h1>
          <p>@notojoya</p>
          </div>
          <h2 className="my-3 font-medium ">
            ✨penting gak penting yang <br /> penting posting✨
          </h2>

          <div className="flex justify-around text-base my-2 border-y-2 border-gray-700 py-2 ">
            <div>
              <h1>6,664</h1>
              <p>Following</p>
            </div>
            <div>
              <h1>6,664</h1>
              <p>Following</p>
            </div>
          </div>

          <h1 className="text-blue-400 mb-3 pb-3">My profile</h1>
        </div>

        {/* bottom side */}

        <div className="bg-[#1B2730] p-6 rounded-lg mt-2 ">
          <h2 className="font-bold mb-5">who is to follow you</h2>

          <div className="flex gap-2 mb-5">
            <img
              className="object-cover rounded-full w-10"
              src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
              alt=""
            />
            <div className='text-sm'>
              <h2>Product Hunt</h2>
              <p className='text-slate-500'>@Producthunt</p>
            </div>
            <button className="text-black bg-white px-3 rounded-full font-bold w-1/3 h-9 ml-2">
              follow
            </button>
          </div>
          <div className="flex gap-2 mb-5">
            <img
              className="object-cover rounded-full w-10"
              src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
              alt=""
            />
            <div className='text-sm'>
              <h2>Product Hunt</h2>
              <p className='text-slate-500'>@Producthunt</p>
            </div>
            <button className="text-black bg-white px-3 rounded-full font-bold w-1/3 h-9 ml-2">
              follow
            </button>
          </div>
          <div className="flex gap-2 mb-5">
            <img
              className="object-cover rounded-full w-10"
              src="https://miro.medium.com/max/1400/1*ii5coEmEhfnjRQRWp8RjfQ.jpeg"
              alt=""
            />
            <div className='text-sm'>
              <h2>Product Hunt</h2>
              <p className='text-slate-500'>@Producthunt</p>
            </div>
            <button className="text-black bg-white px-3 rounded-full font-bold w-1/3 h-9 ml-2">
              follow
            </button>
          </div>
          <h2 className="text-blue-400 font-bold">Show More</h2>
        </div>
      </div>

      {/* leftside end */}

      {/* center starts */}

      <div className="w-1/2 overflow-hidden">
        <div className="bg-[#1B2730] text-center rounded-lg p-2 mb-2">
          <div className="flex gap-2 items-center">
            <div className="cn">
              <img
                className=" rounded-full object-cover w-10 h-10 relative pt-0  "
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="w-full p-4 pt-1 pl-1">
              <input
                className="w-full h-full p-2 text-white bg-gray-700 rounded-xl"
                type="text"
                placeholder="What's Happening?"
              />
            </div>
          </div>
          <div className="flex gap-2 justify-center mb-1">
            <button className="flex bg-transparent rounded-full gap-1 py-1 px-7 items-center  border-2 border-gray-700">
              <FcStackOfPhotos /> photo
            </button>
            <button className="flex bg-transparent rounded-full gap-1 py-1 px-7 items-center  border-2 border-gray-700">
              <FcVideoFile />
              Video
            </button>
            <button className="flex bg-transparent rounded-full gap-1 py-1 px-7 items-center  border-2 border-gray-700">
              <FcBrokenLink />
              Thread
            </button>
            <button className="flex bg-transparent rounded-full gap-1 py-1 px-7 items-center  border-2 border-gray-700">
              <FcCalendar />
              Schedule
            </button>
          </div>
        </div>

        {/* 1st layer end */}

        <div className="bg-[#1B2730]  rounded-lg p-3 mb-2">
          <div className="">
            <div className="flex gap-2 mb-2">
              <img
                className=" rounded-full object-cover w-10 h-10 relative mr-3"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div>
                <h1 className=" flex gap-1">Elon musk</h1>
                <p className='text-slate-500'>Few minutes ago</p>
              </div>

              <BsPatchCheckFill className="text-blue-400 flex h-5" />
              <p>@elonmusk</p>
            </div>

            <div className="px-14 mb-4 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos esse
              similique ea aliquam fugiat?
            </div>

            <div className="flex pl-14 gap-1 justify-between px-5 mb-4 text-base pt-0 ">
              <div className="flex gap-1 ">
                <FcLikePlaceholder className="bg-red-500 rounded-full p-1 w-5 h-5" />
                <FaRetweet className="bg-green-500 rounded-full p-1 w-5 h-5" />
                <FaShareSquare className="bg-blue-500 rounded-full p-1 w-5 h-5" />
                <p>241k</p>
              </div>
              <p className="">45 comments</p>
            </div>

            <div className="flex pl-14 gap-2 -mt-2 justify-between px-4 text-white text-base">
              <button className="flex gap-2 items-center py-1 px-7 bg-gray-700 rounded-xl">
                <FcLikePlaceholder className="text-white" /> Like
              </button>
              <button className="flex gap-2 items-center py-1 px-7 bg-gray-700 rounded-xl">
                <FaRetweet /> Retweet
              </button>
              <button className="flex gap-2 items-center py-1 px-7 bg-gray-700 rounded-xl">
                <FaRegCommentDots /> Comment
              </button>
              <button className="flex gap-2 items-center py-1 px-3 border-gray-700 border-2 rounded-xl">
                <FaShareSquare />
              </button>
            </div>
          </div>
        </div>

        {/* 2nd layer ends       */}

        <div className="bg-[#1B2730]  rounded-lg p-4 pt-2 mb-4">
          <div className="text-sm">
            <div className="flex gap-1 mb-4 text-base">
              <img
                className=" rounded-full object-cover w-10 h-10 relative mr-3"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div>
                <h1 className=" flex gap-3 ">HYPERBEAST</h1>
                <p className='text-slate-500'>2 hours ago</p>
              </div>

              <BsPatchCheckFill className="text-blue-400 flex h-5" />
              <p>@HYPERBEAST</p>
            </div>

            <div className="px-14 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit ea aliquam
              fugiat!!!
            </div>

            <div className="flex justify-center w-full mb-7 pl-14 pr-5 rounded-lg ">
              <img
                className="h-30 w-full object-cover rounded-xl"
                src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F025%2F810%2Flol.jpg"
                alt=""
              />
            </div>

            <div className="flex pl-16 gap-1 justify-between px-5 mb-8 ">
              <div className="flex gap-2 ">
                <FcLikePlaceholder className="bg-red-500 rounded-full p-1 w-5 h-5" />
                <FaRetweet className="bg-green-500 rounded-full p-1 w-5 h-5" />
                <FaShareSquare className="bg-blue-500 rounded-full p-1 w-5 h-5" />
                <p>241k</p>
              </div>
              <p className="">45 comments</p>
            </div>

            <div className="flex pl-16 gap-1 justify-between px-5 text-white">
              <button className="flex gap-2 items-center py-1 px-7 bg-gray-700 rounded-xl">
                <FcLikePlaceholder className="text-white" /> Like
              </button>
              <button className="flex gap-2 items-center py-1 px-7 bg-gray-700 rounded-xl">
                <FaRetweet /> Retweet
              </button>
              <button className="flex gap-2 items-center py-1 px-7 bg-gray-700 rounded-xl">
                <FaRegCommentDots /> Comment
              </button>
              <button className="flex gap-2 items-center py-1 px-3 border-gray-700 border-2 rounded-xl">
                <FaShareSquare />
              </button>
            </div>
          </div>
        </div>

        {/* 3rd layer ends */}
      </div>

      {/* center ends */}

      {/* right starts */}
      <div className="w-1/4 pr-4">
        <div className="bg-[#1B2730]  rounded-lg p-4 pb-0">
          {/* first block */}
          <div className="border-b-2 border-gray-600 mb-2">
            <div  className="flex items-center justify-between mb-5">
              <h1>Trends for you</h1>
              <FcSettings />
            </div>
            <p>TRRENDING IN INDONESIA</p>
            <div className="mt-2 flex justify-between mb-3">
              <div className="cn">
                <h1>#Minions</h1> <p>97.8 k tweets </p>
              </div>
              <div className="cn">
                {" "}
                <BsThreeDots />{" "}
              </div>
            </div>
            <div className="mt-2 flex justify-between mb-3">
              <div className="cn">
                <h1>#Minions</h1> <p>97.60 k tweets </p>
              </div>
              <div className="cn">
                {" "}
                <BsThreeDots />{" "}
              </div>
            </div>
          </div>

          {/* second block */}

          <div className="border-b-2 border-gray-600 mb-2 ">
           
            <p>NFT * TRRENDING</p>
            <div className="mt-3 flex justify-between mb-3">
              <div className="cn">
                <h1>#Texas</h1> <p>97.8 k tweets </p>
              </div>
              <div className="cn">
                {" "}
                <BsThreeDots />{" "}
              </div>
            </div>
           
          </div>


{/* third block */}


<div className=" mb-7">
           
            <p> FOOTBALL * TRRENDING </p>
            <div className="mt-3 flex justify-between mb-3">
              <div className="cn">
                <h1>#Minions</h1> <p>97.8 k tweets </p>
              </div>
              <div className="cn">
                {" "}
                <BsThreeDots />{" "}
              </div>
            </div>
            <div className="mt-2 flex justify-between mb-3">
              <div className="cn">
                <h1>#Minions</h1> <p>97.8 k tweets </p>
              </div>
              <div className="cn">
                {" "}
                <BsThreeDots />{" "}
              </div>
            </div>
            <div className="mt-2 flex justify-between mb-3">
              <div className="cn">
                <h1>#Minions</h1> <p>97.8 k tweets </p>
              </div>
              <div className="cn">
                {" "}
                <BsThreeDots />{" "}
              </div>
            </div>

            <h1 className="text-blue-400 pt-3 pb-2">Show More</h1>
          </div>


{/* third ends */}


        </div>
      </div>
    </div>
  );
};

export default Twitter;
