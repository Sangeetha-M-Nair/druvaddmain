import React from "react";
import {
  AiFillHeart,
  AiOutlineBell,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineRight,
} from "react-icons/ai";
import {
  FcAdvertising,
  FcCalculator,
  FcExternal,
  FcManager,
  FcShipped,
} from "react-icons/fc";
import { MdAccountBalanceWallet, MdShoppingCart } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

import { Bar, Doughnut } from 'react-chartjs-2';
import Bargraph from "./Graph/Bargraph";
import Dough from "./Graph/Doughnut";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);




function Dashboard() {
  return (
    <div className="h-full bg-[#F5F9FF] flex font-normal text-black pr-0 mr-0">
      <div className="flex w-full h-full pr-0 mr-0">
        <div className="w-2/3  p-10 -mt-6">
          <div className="mb-4 ">
            <div className="font-bold text-2xl flex">
              <h1 className="">Welcome Back,</h1>
              <p className="font-medium text-gray-700 ml-1 text-2xl">Nabbhila!</p>
            </div>
            <p className="text-slate-400  text-sm">
              Look what's happening to your store's update.
            </p>
          </div>

          <div className="flex justify-between mb-7 mr-0">
            <div className="bg-white  mr-0 rounded-lg p-3 ">
              <div className="flex gap-12 items-center mb-3">
                <FcShipped className="bg-transparent border-2 rounded-full p-1 w-10 h-10" />
                <h1 className="flex items-center text-green-500">
                  +30% <FcExternal />
                </h1>
              </div>
              <div className="cn">
                <h1>$22,045.00</h1>
                <p className="text-slate-400  text-sm">Total Sales</p>
              </div>
            </div>

            <div className="bg-white  mr-0 rounded-lg p-3   ">
              <div className="flex gap-12 items-center mb-3">
                <FcCalculator className="bg-transparent border-2 rounded-full p-1 w-10 h-10" />
                <h1 className="flex items-center text-red-500">
                  +30% <FcExternal className="text-red-500" />
                </h1>
              </div>
              <div className="cn">
                <h1>$22,045.00</h1>
                <p className="text-slate-400  text-sm">Total Expense</p>
              </div>
            </div>

            <div className="bg-white  mr-0 ml-0 rounded-lg p-3 ">
              <div className="flex gap-12 items-center mb-3">
                <FcManager className="bg-transparent border-2 rounded-full p-1 w-10 h-10" />
                <h1 className="flex items-center text-green-500">
                  +30% <FcExternal />
                </h1>
              </div>
              <div className="cn">
                <h1>$22,045.00</h1>
                <p className="text-slate-400  text-sm">Total Visitors</p>
              </div>
            </div>

            <div className="bg-white  rounded-lg p-3 items-center  ">
              <div className="flex gap-12 items-center mb-3">
                <MdAccountBalanceWallet className="bg-transparent border-2 text-purple-700 rounded-full p-1 w-10 h-10" />
                <h1 className="flex items-center text-green-500">
                  +30% <FcExternal />
                </h1>
              </div>
              <div className="cn">
                <h1>$22,045.00</h1>
                <p className="text-slate-400  text-sm">Total Balance</p>
              </div>
            </div>
          </div>


          {/* graph section */}

          <div className="w-full h-[350px] bg-white rounded-lg my-7 p-7">

            <div className="flex justify-between">

              <div className="flex gap-2 items-center  "><h1 className="">Sale Analytics</h1>
                {/* <button className="py-1 px-2 flex items-center text-sm text-gray-500 border-2 border-gray-500 rounded-lg"><GoPrimitiveDot className="text-indigo-700" />  Total Sales </button>
                <button className="py-1 px-2 flex items-center  text-sm text-gray-500 border-2 border-gray-500 rounded-lg"><GoPrimitiveDot className="text-indigo-700" />Total balance </button> */}

              </div>
              <div className="">
                <select className="font-bold py-1 px-3  text-sm text-black border-2 border-gray-500 rounded-lg">
                  <option value="volvo">This Week</option>
                  <option value="saab">This Month</option>
                  <option value="opel">this year</option>
                  {/* <option value="audi">Audi</option> */}
                </select>

              </div>



            </div>
            {/*Graph starts */}
            
            <Bargraph/>
            

            {/*Graph ends*/}

          </div>





          {/* second section */}

          <div className="flex ">
            <div className="w-1/2 ">
              <div className="bg-white w-2/5 rounded-lg p-3 mr-7 inline-block mb-7 ">
                <div className="flex gap-7 items-center mb-3">
                  <FcAdvertising className="bg-transparent border-2 text-purple-700 rounded-full p-1 w-10 h-10" />
                </div>
                <div className="">
                  <p className="text-slate-400  text-sm">New product</p>
                  <h1>1202</h1>
                </div>
              </div>

              <div className="bg-white w-2/5 rounded-lg p-3 mr-7 inline-block mb-10 ">
                <div className="flex gap-7 items-center mb-3">
                  <MdShoppingCart className="bg-transparent border-2 text-green-700 rounded-full p-1 w-10 h-10" />
                </div>
                <div className="">
                  <p className="text-slate-400  text-sm">Online Order</p>
                  <h1>1202</h1>
                </div>
              </div>
              <div className="bg-white w-2/5 rounded-lg p-3 mr-7 inline-block mb-7 ">
                <div className="flex gap-7 items-center mb-3">
                  <MdShoppingCart className="bg-transparent border-2 text-red-700 rounded-full p-1 w-10 h-10" />
                </div>
                <div className="">
                  <p className="text-slate-400  text-sm">Offline Orders</p>
                  <h1>1202</h1>
                </div>
              </div>
              <div className="bg-white w-2/5 rounded-lg p-3 mr-7 inline-block mb-7 ">
                <div className="flex gap-7 items-center mb-3">
                  <FaUsers className="bg-transparent border-2 text-purple-700 rounded-full p-1 w-10 h-10" />
                </div>
                <div className="">
                  <p className="text-slate-400  text-sm">Total Users</p>
                  <h1>1202</h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 bg-white rounded-lg p-5">
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Activities</h1>

                <BsThreeDotsVertical />
              </div>
              <div className="flex justify-center">
              <Dough/>
              </div>
            
            </div>
          </div>
        </div>

        {/* profile setting */}

        <div className="w-[25%] p-10 bg-white text-black mt-0 justify-end border-gray-700">
          <div className="flex mb-10 justify-between">
            <div className="-mt-4">
              <h1>Profile</h1>
            </div>
            <div>
              <AiOutlineBell className="w-5 h-5 -mt-4" />
            </div>
          </div>
          <div className="text-center flex-col justify-center items-center mb-5">
            <div className="flex justify-center mb-10">
              <img
                className="w-20 h-20 -mt-7"
                src="data:image/png;base64,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"
                alt="no image"
              />
            </div>
            <h1 className="text-lg -mt-6">Gadget holic</h1>
            <p className="text-slate-400  text-sm">Elecronic store</p>
          </div>
          <div className="flex justify-evenly border-b-2 pb-4 mb-5  border-gray-300 text-center">
            <div className="border-r-2 border-gray-300 pr-10">
              <p className="text-slate-400  text-sm">Items</p>
              <h1>52,590</h1>
            </div>
            <div className="cn">
              <p className="text-slate-400  text-sm">Profit</p>
              <h1>$52,564</h1>
            </div>
          </div>

          <div className="">
            <h1 className="mb-5 -mt-2">Social Source</h1>

            <div>
              <div className="flex justify-between items-center mb-4 -mt-3">
                <div className="flex items-center gap-3">
                  <AiOutlineFacebook className="w-7 h-7 bg-gray-300 p-0 rounded-full" />

                  <div className="w-16 h-7 pt-0 -mt-3">
                    <p className="text-slate-400  text-sm">Facebook</p>
                    <h1>$2,457</h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <FcExternal />
                  <h1>+30%</h1>
                </div>
              </div>

              <div className="flex justify-between items-center pb-3 border-b-2 border-gray-300 mb-5">
                <div className="flex items-center gap-3">
                  <AiOutlineInstagram className="w-7 h-7 bg-gray-300 p-0 rounded-full" />

                  <div>
                    <p className="text-slate-400  text-sm">Instagram</p>
                    <h1>$1,457</h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <FcExternal />
                  <h1>+20%</h1>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-5">
                <h1 className="cn">Recent Sale</h1>
                <p className="text-blue-500 font-bold text-sm">See All</p>
              </div>
              <div className="flex  justify-between items-center mb-3">
                <div className="flex gap-3 items-center ">
                  <img
                    className=" w-8 h-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpI6Uhmi0hAnGNrFOPTYRfYYmm9FBAtPnCGCcqWo06n-4lfMg-t7652l9r4HNmmVhCt4&usqp=CAU"
                    alt=""
                  />
                  <div className="cn">
                    <h1 className="text-sm">Aderianne</h1>
                    <p className="text-slate-400  text-xs">2 minutes ago</p>
                  </div>
                </div>

                <h1 className="text-green-400 float-right text-sm">+$89.00</h1>
              </div>
              <div className="flex  justify-between items-center mb-3">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-8 h-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpI6Uhmi0hAnGNrFOPTYRfYYmm9FBAtPnCGCcqWo06n-4lfMg-t7652l9r4HNmmVhCt4&usqp=CAU"
                    alt=""
                  />
                  <div className="cn">
                    <h1 className="text-sm">Aderianne</h1>
                    <p className="text-slate-400  text-xs">2 minutes ago</p>
                  </div>
                </div>

                <h1 className="text-green-400 float-right text-sm">+$89.00</h1>
              </div>
              <div className="flex  justify-between items-center mb-3">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-8 h-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpI6Uhmi0hAnGNrFOPTYRfYYmm9FBAtPnCGCcqWo06n-4lfMg-t7652l9r4HNmmVhCt4&usqp=CAU"
                    alt=""
                  />
                  <div className="cn">
                    <h1 className="text-sm">Aderianne</h1>
                    <p className="text-slate-400  text-xs">2 minutes ago</p>
                  </div>
                </div>

                <h1 className="text-green-400 float-right text-sm">+$89.00</h1>
              </div>
              <div className="flex  justify-between items-center mb-3">
                <div className="flex gap-3 items-center">
                  <img
                    className="w-8 h-8"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrpI6Uhmi0hAnGNrFOPTYRfYYmm9FBAtPnCGCcqWo06n-4lfMg-t7652l9r4HNmmVhCt4&usqp=CAU"
                    alt=""
                  />
                  <div className="cn">
                    <h1 className="text-sm">Aderianne</h1>
                    <p className="text-slate-400  text-xs">2 minutes ago</p>
                  </div>
                </div>

                <h1 className="text-green-400 float-right text-sm">+$89.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
