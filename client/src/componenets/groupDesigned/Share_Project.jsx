import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { ImEmbed } from "react-icons/im";
import { MdOutlineContentCopy } from "react-icons/md";

function Share_Project() {
  return (
    <div className="h-full w-full p-40 font-semibold  bg-[#F3F2EF] flex flex-col gap-36  justify-between font-Smooch  items-center  ">
      <div className=" text-black bg-white w-[450px]    px-5 py-6  m-auto rounded-3xl  items-center justify-center   shadow-2xl ">
        {/* first section  */}
        <div className="flex gap-5 mb-5">
          <div>
            <h1 className="text-xl mb-2 font-bold">Share your project</h1>
            <p className="text-xs font-semibold">
              You've have created a new project invite your  team to review
              collabration on this project.
            </p>
          </div>
          <img className="w-20"
            src="https://img.lovepik.com/free-png/20220125/lovepik-blue-school-bag-png-image_401719254_wh1200.png"
            alt=""
          />
        </div>

        {/* second section  */}

        <h2 className="font-bold mb-1  text-sm">Project link</h2>
        <div className="border-gray-300 mb-5 gap-6 text-sm  border-[1px] flex items-center justify-between rounded-lg p-1">
          <input type="text" placeholder="Type your link" />

          <div className="flex gap-2 ">

          <button className="flex items-center bg-blue-100  p-1 rounded-lg
           text-blue-900 font-semibold">
            {" "}
            <ImEmbed />
            Embed{" "}
          </button>
          <button className="flex items-center border-gray-300 gap-2 text-sm p-1 rounded-lg  border-[1px] ">
            <MdOutlineContentCopy /> Copy{" "}
          </button>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-between mb-5 ">
                <div className="flex gap-2 items-center ">

          <AiOutlineLink className="flex items-center text-3xl  bg-blue-100  p-1 rounded-lg
           text-blue-900 font-semibold" />
          <div>
            <h1 className="flex items-center font-bold gap-1   text-sm">
              Anyone with the link <BsChevronDown />
            </h1>
            <p className="flex items-center font-semibold gap-1 text-gray-500   text-xs">The project link is publicly viewable</p>
          </div>
                </div>
          <button className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg  border-[1px] ">
            Can view <BsChevronDown />
          </button>
        </div>

        <div className="mb-5">
          <h1 className="font-bold mb-1   text-sm">Invite team members</h1>
          <div className="flex justify-between">
            <div className="bg-white flex gap-2 items-center px-3 rounded-lg  border-[1px] border-gray-300 ">
              <BiSearchAlt />
              <input
                
                className="bg-white w-full   rounded-lg"
                type="text"
                placeholder=" Search"
              /> {/**onInput={() => setSearch(true)} */}
            </div>
            <button  className="flex items-center text-white bg-blue-700 text-xs w-max border-gray-300 gap-2  p-2 rounded-lg  border-[1px] ">Send invites</button>
          </div>
        </div>

        {/* third section  */}
        <h1 className="font-bold mb-1   text-sm">In the project </h1>

        {/* profile section  */}
        <div className="flex justify-between items-center mb-2 ">
          <div className="flex items-center gap-2 ">
            <img className="rounded-full object-cover w-10 h-10 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
            <div className="">
              <h1 className="text-sm"> Olivia Rhye</h1>
              <p className="text-xs text-gray-500">@olivia</p>
            </div>
          </div>
          <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg  border-[1px] " >
            Owner <BsChevronDown />
          </button>
        </div>
        <div className="flex justify-between items-center mb-2 ">
          <div className="flex items-center gap-2 ">
            <img className="rounded-full object-cover w-10 h-10 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
            <div className="">
              <h1 className="text-sm"> Olivia Rhye</h1>
              <p className="text-xs text-gray-500">@olivia</p>
            </div>
          </div>
          <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg  border-[1px] " >
            Owner <BsChevronDown />
          </button>
        </div>
        <div className="flex justify-between items-center mb-2 ">
          <div className="flex items-center gap-2 ">
            <img className="rounded-full object-cover w-10 h-10 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
            <div className="">
              <h1 className="text-sm"> Olivia Rhye</h1>
              <p className="text-xs text-gray-500">@olivia</p>
            </div>
          </div>
          <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg  border-[1px] " >
            Owner <BsChevronDown />
          </button>
        </div>
        <div className="flex justify-between items-center mb-2 ">
          <div className="flex items-center gap-2 ">
            <img className="rounded-full object-cover w-10 h-10 " src="https://image.cnbcfm.com/api/v1/image/103893236-GettyImages-533810850.jpg?v=1529472521" alt="" />
            <div className="">
              <h1 className="text-sm"> Olivia Rhye</h1>
              <p className="text-xs text-gray-500">@olivia</p>
            </div>
          </div>
          <button  className="flex items-center w-max border-gray-300 gap-2 text-sm p-1 rounded-lg  border-[1px] " >
            Owner <BsChevronDown />
          </button>
        </div>

        {/* fourth section  */}

<div className="flex justify-center my-5 font-bold  gap-5">
        <button className="flex items-center font-bold text-black bg-white text-xs w-max border-gray-300 gap-2  py-3 px-10  rounded-lg  border-[1px] ">Discard changes</button>
        <button className="flex items-center font-bold text-white bg-blue-700 text-xs w-max border-gray-300 gap-2  py-3 px-10 rounded-lg  border-[1px] ">Save Project </button>
</div>

      </div>
    </div>
  );
}

export default Share_Project;
