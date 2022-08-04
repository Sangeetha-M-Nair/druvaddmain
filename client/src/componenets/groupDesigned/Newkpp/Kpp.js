
import { useState } from "react";
import "./kpp.css";
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

export const users = [
  {
    id: "1",
    Name: "Diane Cooper",
    Gender: "Female",
    Email: "diane.cooper@example.com",
    Post: "15",
    YoutubeImage:
      "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    InstagramImage:
      "https://images.pexels.com/photos/4099414/pexels-photo-4099414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

    Education: "@dianecooper12",
    UserName: "@dianecooper12",
    MonthlyViews: "5.5K",
    YoutubeName: "Musical Cooper",
    InstagramName: "cooper12",
    Subscribers: "1.2K",
    Videos: "42",
    InstagramPost: "102",
    InstagramFollowers: "2.5K",

    Followers: "200",
    DOB: "24th Feb, 1997",
    City: "Chandigarh",
    Skills: "Singing, Dancing",
    Languages: "English, French",
    Instagram: "diane.cooper12",
    Upcoming: "2",
  },
];


function Kpp(group) {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="App">
      <div className="flex w-full">
        {/* <div className="flex lg:w-[325px] ">
          <SideBar />
        </div> */}

        <div className="flex flex-col w-full h-screen">



          <div className="flex flex-col w-full  h-full">
            <div className="flex     ">
              <div className="flex flex-col lg:flex-row w-full h-[80%] bg-[#fffdfe] mx-6 my-3  ">
                <div className="lg:w-1/3  flex flex-col items-center lg:p-4 p-8">
                  <>
                    <img
                      src="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="lg:h-24 mb-2 lg:w-24 border-4 border-solid border-gray-300   h-20 w-20 rounded-full"
                      alt=""
                    />
                    <h1 className="text-2xl  font-bold ">{group.name}</h1>
                    <h2 className="text-[#888d91] font-bold mb-3 text-sm">
                      {group.name}
                    </h2>
                    <div className="flex mb-3">
                      <div className="flex flex-col items-center">
                        <h3 className="font-bold">{group.approvedPosts.length}</h3>
                        <h2 className="text-[#888d91] font-bold text-[18px]">
                          Post
                        </h2>
                      </div>
                      <div className=" bg-gray-200 w-[2px] mx-8 h-[80%]" />
                      <div className="flex flex-col items-center">

                        <h3 className="font-bold">{group.members.length}</h3>
                        <h2 className="text-[#888d91] font-bold text-[18px]">
                          members
                        </h2>
                      </div>

                    </div>
                    <button className="border-4 rounded-xl mb-2 text-xl font-bold border-[#d6dce1] w-full h-12 ">
                      Send Message
                    </button>
                  </>
                </div>
                <hr className=" bg-[#f6f7f9] w-[4px]  h-full " />
                <div className="lg:w-2/3 ">
                  <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 h-full p-8">


                    <>
                      <div className="flex flex-col border-b-2 border-[#eff4f8]">
                        <h1 className="font-bold text-[#888d91] text-sm text-left">
                          Name
                        </h1>
                        <h2 className="text-sm text-left">{group.name}</h2>
                      </div>
                      <div className="flex flex-col border-b-2 border-[#eff4f8]">
                        <h1 className="font-extrabold text-[#888d91] text-sm  text-left">
                          Description
                        </h1>
                        <h2 className="text-sm text-left ">{group.description}</h2>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex b bg-[#fffdfe] h-full mx-6  ">
              <div className="flex flex-col w-full lg:px-8" >
                <div className="hidden lg:flex bg-[#eff1f7] w-[600px] rounded-lg h-8 mb-3 ">
                  <button
                    onClick={() => toggleTab(1)}
                    type="button"
                    className={(toggleState === 1 ? "bg-gray-100 text-blue-700" : "") + " text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "}
                  >
                    Members
                  </button>
                  <button
                    onClick={() => toggleTab(2)}
                    type="button"
                    className={(toggleState === 2 ? "bg-gray-100 text-blue-700" : "") + " text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "}
                  >
                    Post Approve
                  </button>
                  <button
                    onClick={() => toggleTab(3)}
                    type="button"
                    className={(toggleState === 3 ? "bg-gray-100 text-blue-700" : "") + " text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "}
                  >
                    Blocked
                  </button>
                </div>
                {/**block 1 */}

                <div className={(toggleState === 1 ? "block" : "hidden") + " flex flex-col h-full  bg-[#eff1f7] b   lg:p-4 p-2 "}>
                  <div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div>@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div>@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div>@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div>@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div>@gmail.com</div>
                      </div>
                    </div>

                  </div>



                </div>
                {/**block 1 end */}
                {/**block 2 */}
                <div className={(toggleState === 2 ? "block" : "hidden") + " flex flex-col h-full  bg-[#eff1f7] b   lg:p-4 p-2 "}>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="flex justify-between">
                      <div className="flex">
                        <div className="w-12 h-12"><img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-500" /></div>
                        <div className="font-bold mt-2 ml-2">Ravi Raunak</div>
                      </div>
                      <div><BsThreeDots /></div>
                    </div>
                    <div className="text-left font-bold my-4 mx-2">We live life to enjoy it to it's fullest. </div>
                    <div className="h-64 px-3"><img src="./images/BUILD.jpg" className="h-full w-full rounded-2xl" /></div>
                    <div className="flex justify-center gap-4 my-4">
                      <button className="w-32 h-9 bg-blue-400 text-white rounded-xl font-bold px-2">Approve</button>
                      <button className="w-32 h-9 bg-red-400 text-white rounded-xl font-bold px-2">Decline</button>
                    </div>

                  </div>

                </div>
                {/**end block 2 */}
                {/**block 3 */}
                <div className={(toggleState === 3 ? "block" : "hidden") + " flex flex-col h-full  bg-[#eff1f7] b   lg:p-4 p-2 "}>
                  <div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div>@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div>@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div>@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div>@gmail.com</div>
                      </div>
                    </div>
                    <div className="flex bg-white rounded-xl py-2 px-3 mb-4">
                      <div className="w-14 h-14">
                        <img src="./images/OIP.jpg" className="rounded-full border-2 border-gray-600" />
                      </div>
                      <div className="w-30 ml-4 mt-1">
                        <div className="font-[690]">Payal Kumari</div>
                        <div>@gmail.com</div>
                      </div>
                    </div>

                  </div>



                </div>
                {/**end block 3 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kpp;

export const SideBar = () => {



  const [state, setstate] = useState(
    {
      activeObjects: null,
      objects: [
        {
          name: 'Home',
          class: 'bi bi-house-door-fill  text-[#cbd0d5]',
          id: '1'
        },
        {
          name: 'Bookmark',
          class: 'bi bi-bookmark-fill  text-[#cbd0d5]',
          id: '2'
        },
        {
          name: 'Messages',
          class: 'bi bi-envelope-fill text-[#cbd0d5]',
          id: '3'
        },
        {
          name: 'Logut',
          class: 'bi bi-chat-left-text-fill text-[#cbd0d5]',
          id: '4'
        },


      ]
    }
  )

  const activeHandler = (index) => {

    setstate({ ...state, activeObjects: state.objects[index] })
  }



  return (
    <div>
      {/* <span className="absolute  text-4xl top-5 left-4 cursor-pointer" onclick="Openbar()">
  <i className="bi bi-filter-left  bg-gray-900 "></i>
</span> */}
      <div className="sidebar flex justify-between flex-col fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
   w-[250px] overflow-y-auto text-center bg-white shadow h-screen">
        <div className=" text-sm">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            <i className="bi bi-app-indicator px-2 py-1 bg-[#0d53fd] rounded-md"></i>
            <h1 className="  ml-3 text-sm  font-bold">Tailwindbar</h1>
            <i className="bi bi-x ml-20 cursor-pointer lg:hidden" onclick="Openbar()"></i>
          </div>


          <div>

            {
              state.objects.map((object, index) =>
              (

                <div className="p-2.5 mt-2 flex items-center  px-4 duration-300 cursor-pointer   hover:bg-[#0d53fd] hover:text-white" onClick={activeHandler} key={index}>
                  <i className={object.class}></i>
                  <span className="text-sm ml-4 font-bold  ">{object.name}</span>
                </div>
              )



              )
            }




          </div>
        </div>
        <div className="flex">
          helo
        </div>
      </div>

    </div>
  )
}
