import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillMessage,
  AiOutlineUsergroupAdd,
  AiTwotoneHome,
} from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import { ImBriefcase, ImCross, ImPlus } from "react-icons/im";
// import { GrApps } from "react-icons/gr ";
import { RiBriefcase4Fill } from "react-icons/ri";

function Nnavbar() {
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-white h-14 flex w-full px-1 py-2 justify-between gap-10">
        {/* left side  */}
        <div className="flex gap-2 w-full">
          {/* <img className="object-cover"
            src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw"
            alt="no imasge"
          /> */}
          <div className="bg-slate-200 flex gap-2 items-center px-3 h-12 rounded-lg w-[80%]">
            <BiSearchAlt />
            <input
              onInput={() => setSearch(true)}
              className="bg-slate-200 md:w-[full] w-60 rounded-lg h-12"
              type="text"
              placeholder=" Search"
              
            />
          </div>
          <div
            className={`bg-white h-[300px] md:w-[370px] absolute flex flex-col gap-5 top-12 p-5 rounded-lg ${
              search ? "unhidden" : "hidden"
            }  `}
          >
            <div className="flex items-center gap-1">
              <BiSearchAlt /> <h1>shreyansh dewangan</h1>{" "}
              <p>frontend developer</p>
            </div>
            <div className="flex items-center gap-1">
              <BiSearchAlt /> <h1>somaya singh</h1> <p>frontend developer</p>
            </div>
            <div className="flex items-center gap-1">
              <BiSearchAlt /> <h1>shresth raj</h1> <p>frontend developer</p>
            </div>
            <div className="flex items-center gap-1">
              <BiSearchAlt /> <h1>samar lal</h1> <p>frontend developer</p>
            </div>
            <div className="flex items-center gap-1">
              <BiSearchAlt /> <h1>samskar singh</h1> <p>frontend developer</p>
            </div>
            <div className="flex items-center gap-1">
              <BiSearchAlt /> <h1>setul paramar</h1> <p>frontend developer</p>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="hidden lg:flex gap-5 text-center text-gray-700 items-center pr-0 grow justify-end ">
          <div className="text-center flex flex-col items-center">
            <button className="w-full py-2 font-bold rounded-full text-md text-gray-700  hover:text-sm  flex items-center justify-center shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] px-3">
              Youtuber{" "}
            </button>
          </div>
          <div className="text-center flex flex-col items-center">
            <button className="w-full py-2 font-bold rounded-full text-md text-gray-700  hover:text-sm  flex items-center justify-center shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] px-3">
              Instagramer{" "}
            </button>
          </div>

          <div className="text-center flex flex-col items-center">
            <button className="w-full py-2 font-bold rounded-full text-md text-gray-700  hover:text-sm  flex items-center justify-center shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] px-3">
              Jobs{" "}
            </button>
          </div>
          <div className="text-center flex flex-col items-center">
            <button className="w-full py-2 font-bold rounded-full text-md text-gray-700  hover:text-sm  flex items-center justify-center shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] px-3">
              Freelancing{" "}
            </button>
          </div>
          <div className="text-center flex flex-col items-center border-l-2 pl-5 border-gray-300 ">
            {/* <button
              onClick={() => setFilter(!filter)}
              className="w-full py-2 font-bold rounded-full text-md text-gray-700  hover:text-sm  flex items-center justify-center shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] px-3"
            >
              All filters{" "}
            </button> */}
          </div>

          {/* <div className="text-center flex flex-col items-center">
            <button className="w-full py-2 font-bold rounded-full text-md text-gray-700  hover:text-sm  flex items-center justify-center  px-3">
              Reset{" "}
            </button>
          </div> */}

          <div
            className={`bg-white h-[500px] w-[370px] absolute overflow-scroll flex flex-col gap-5 right-28 top-12 p-5 rounded-lg ${
              filter ? "unhidden  " : "hidden  "
            }  `}
          >
            <div className="flex justify-between   py-3 pb-3 border-b-2 border-gray-300 ">
              
               <h1 className="flex items-center gap-2  font-medium">
                Filter only posts <AiFillCaretDown/> By
                
                </h1>
              <ImCross className="hover:scale-125 transition-all ease-in-out hover:rotate-90" onClick={() => setFilter(!filter)} />
            </div>
            <div className="  items-center py-3 pb-3 border-b-2 border-gray-300   ">
              <h1 className="mb-5 flex justify-start font-medium">posted By </h1>
              <div className="flex gap-16">

                <div className="flex items-center gap-2 text-gray-500">

                <input className="w-5 h-7 "
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> 1st connection</label>
                </div>

                <div className="flex items-center gap-2 text-gray-500">

                <input className="w-5 h-7 "
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> Me</label>
                </div>
              </div>
            </div>
            <div className="  items-center py-3 pb-3 border-b-2 border-gray-300   ">
              <h1 className="mb-5 flex justify-start font-medium"> Date posted </h1>
              <div className="flex gap-16">

                <div className="flex items-center gap-2 text-gray-500">

                <input className="w-5 h-7 "
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> past 24 hours</label>
                </div>

                <div className="flex items-center gap-2 text-gray-500">

                <input className="w-5 h-7 "
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> Past Week</label>
                </div>
              </div>
                <div className="flex items-center gap-2 text-gray-500">

                <input className="w-5 h-7 "
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> Past Month </label>
                </div>
            </div>
            <div className="  items-center py-3 pb-3 border-b-2 border-gray-300   ">
              <h1 className="mb-5 flex justify-start font-medium">Sort  By </h1>
              <div className="flex gap-16">

                <div className="flex items-center gap-2 text-gray-500">

                <input className="w-5 h-7 "
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> Top Match </label>
                </div>

                <div className="flex items-center gap-2 text-gray-500">

                <input className="w-5 h-7 "
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> Latest</label>
                </div>
              </div>
            </div>
            <div className="  items-center py-3 pb-3 border-b-2 border-gray-300   ">
              <h1 className="mb-5 flex justify-start font-medium">From members</h1>
              

                <div className="flex items-center gap-2 text-gray-500">

                <ImPlus
                />
                <label for="vehicle1"> Add a person's name </label>
               

               
              </div>
            </div>

            <div className="  items-center py-3 pb-3 border-b-2 border-gray-300   ">
              <h1 className="mb-5 flex justify-start font-medium"> Language </h1>
              <div className="flex gap-16">

                <div className="flex items-center gap-2 text-gray-500">

                <input className="w-5 h-7 "
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> Hindi </label>
                </div>

                <div className="flex items-center gap-2 text-gray-500">

                <input className="w-5 h-7 "
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> English </label>
                </div>
              </div>
                <div className="flex items-center gap-2 text-gray-500">

                <input className="w-5 h-7 "
                  type="checkbox"
                  id="vehicle2"
                  name="vehicle2"
                  value="Car"
                />
                <label for="vehicle2"> Other  </label>
                </div>
            </div>

            <div className="  items-center py-3 pb-3 border-b-2 border-gray-300   ">
              <h1 className="mb-5 flex justify-start font-medium">Location</h1>
              

                <div className="flex items-center gap-2 text-gray-500">

                <ImPlus
                />
              <input className="border-white border-2 bg-white" type="text" placeholder="location" />
               

               
              </div>
            </div>


            {/* end of inputs */}
          
            <div className="flex justify-end gap-4">
              <button>Reset</button>
              <button  onClick={() => setFilter(!filter)} className="bg-blue-700 hover:scale-110 rounded-full text-white text-sm px-5 py-2 ">Show results</button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nnavbar;
