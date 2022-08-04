import React from 'react'

import { AiOutlineLink } from "react-icons/ai";
import { BiLinkAlt, BiSearchAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { GoSettings } from 'react-icons/go';
import { ImEmbed } from "react-icons/im";
import { MdOutlineContentCopy } from "react-icons/md";


function Share_Project2() {
  return (
    <div className=" font-semibold  flex flex-col gap-36  justify-between font-Smooch  items-center  ">
    {/* <div className="h-full w-full p-40 font-semibold  bg-[#F3F2EF] flex flex-col gap-36  justify-between font-Smooch  items-center  "> */}
    <div className=" text-black bg-white w-[550px]  border-4  px-5 py-6  m-auto rounded  items-center justify-center   shadow-2xl ">
      {/* first section  */}
      <div className="flex gap-5 mb-5">
        <div>
          <h1 className="text-3xl mb-2 font-bold">Share Project</h1>
         
        </div>
      
      </div>

      <div className='bg-[#F6F6F6] rounded p-3 border'>
      <div className="flex justify-between items-center mb-2 ">
        <div className="flex items-center gap-2 ">
          <img className="rounded-full object-cover w-14 h-14 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
          <div className="">
            <h1 className="text-lg items-center font-bold gap-1 flex "> Olivia Rhye<p className='text-base font-normal'>is asking to edit</p></h1>
            <div className="text-lg font-[530] text-gray-500">@olivia</div>
          </div>
        </div>
        <div className=' flex gap-2' >
        <button  className="flex items-center w-max bg-white border-gray-300 gap-2 text-base py-1 px-2 rounded font-bold text-red-500  border-[1px] " >
          Deny 
        </button>
        <button  className="flex items-center w-max bg-white border-gray-300 gap-2 text-base py-1 px-2 rounded font-bold text-blue-600  border-[1px] " >
          Approve  
        </button>
        </div>
      </div>
      </div>

      {/* second section  */}

      {/* <h2 className="font-bold mb-1  text-sm">Project link</h2> */}
      <div className="flex gap-2 justify-between my-5">
      <div className="border-gray-300 w-max grow gap-6 text-sm  border-[1px] flex items-center justify-between rounded-lg p-1">
        <input type="text" placeholder="Type your link" />

        <div className="flex gap-2 ">
        <button className="flex items-center w-max  gap-2 text-sm p-1 rounded ">
          Can view <BsChevronDown />
        </button>
     
        </div>
      </div>
      <button  className="flex items-center  text-white bg-blue-500 text-base w-max border-gray-300 gap-2 font-[500] p-2 px-4 rounded  border-[1px] ">Send invites</button>
      </div>
      


      {/* third section  */}
    

      {/* profile section  */}
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex items-center gap-5 ">
          <img className="rounded-full object-cover w-11 h-11 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
          <div className="">
            <h1 className="text-lg"> Payal</h1>
            {/* <p className="text-sm text-gray-500">@olivia</p> */}
          </div>
        </div>
        <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg   " >
          Owner <BsChevronDown />
        </button>
      </div>
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex items-center gap-5 ">
          <img className="rounded-full object-cover w-11 h-11 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
          <div className="">
            <h1 className="text-lg"> Payal</h1>
            {/* <p className="text-sm text-gray-500">@olivia</p> */}
          </div>
        </div>
        <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg   " >
          no access <BsChevronDown />
        </button>
      </div>
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex items-center gap-5 ">
          <img className="rounded-full object-cover w-11 h-11 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
          <div className="">
            <h1 className="text-lg"> Payal</h1>
            {/* <p className="text-sm text-gray-500">@olivia</p> */}
          </div>
        </div>
        <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg   " >
          Can edit <BsChevronDown />
        </button>
      </div>
      <div className="flex justify-between items-center mb-4 ">
        <div className="flex items-center gap-5 ">
          <img className="rounded-full object-cover w-11 h-11 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
          <div className="">
            <h1 className="text-lg"> Payal</h1>
            {/* <p className="text-sm text-gray-500">@olivia</p> */}
          </div>
        </div>
        <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg   " >
          Can view <BsChevronDown />
        </button>
      </div>

      {/* fourth section  */}

<div className="flex items-center justify-between pt-2 border-t-[1px] border-gray-300">
  <div className="flex gap-5">

<button className="flex gap-2  items-center  p-1 rounded-lg
           text-blue-900 text-lg font-semibold">
            {" "}
        <BiLinkAlt/>
            Copy link{" "}
          </button>
<button className="flex  gap-2  items-center   p-1 rounded-lg
           text-blue-900 text-lg font-semibold">
            {" "}
            <ImEmbed />
            Get Embed code{" "}
          </button>
  </div>
  <GoSettings className='text-lg'/>
</div>

    </div>
  </div>
  )
}

export default Share_Project2
