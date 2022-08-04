import React, { useState } from 'react'
// import Experience from './Experience'
import Location from './Location'
import RangeSlider from './Newexp'
import Nnavbar from './Nnavbar'
// import Payment from './Payment'
import Slider from './Rangenew'

const Newnav = () => {
    let [open, setOpen] = useState(false);
    return (
        <>
            <div className=' p-2 px-3 lg:gap-4 mt-1'>

                <div className=' mt-2'>
                    {/* <i className="bi bi-search p-1 border-2 mb-7"></i> */}
                    <div className='pl-0'>
                        <div class=" ">
                            <div class=" flex w-full">
                               
                                <Nnavbar className="" />
                                <div onClick={() => setOpen(!open)} className=' px-1 pt-1 shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] text-3xl absolute right-4 top-8 cursor-pointer p-0 lg:hidden'> {/**md:hidden */}
                                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={(open ? "left-0" : "-left-full") + " overflow-scroll h-screen w-[80%] lg:w-[31%] md:w-[55%] border-r-2  border-b-2 md:border-white  md:gap-3 bg-white absolute bg:white md:z-auto z-[-1] left-0  transition-all duration-500 ease-in md:opacity-100"}> {/**'top-[320px]' : 'top-[-490px]' */}
                    <div className=' grid grid-cols-2 p-2 gap-5'>
                        <div className="text-center flex flex-col items-center">
                            <button className="w-full py-2 font-bold rounded-full text-md text-gray-700  hover:text-sm  flex items-center justify-center shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] px-1">
                                Youtuber{" "}
                            </button>
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <button className="w-full py-2 font-bold rounded-full text-md text-gray-700  hover:text-sm  flex items-center justify-center shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] px-1">
                                Instagramer{" "}
                            </button>
                        </div>

                        <div className="text-center flex flex-col items-center">
                            <button className="w-full py-2 font-bold rounded-full text-md text-gray-700  hover:text-sm  flex items-center justify-center shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] px-1">
                                Jobs{" "}
                            </button>
                        </div>
                        <div className="text-center flex flex-col items-center">
                            <button className="w-full py-2 font-bold rounded-full text-md text-gray-700  hover:text-sm  flex items-center justify-center shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] px-1">
                                Freelancing{" "}
                            </button>
                        </div>
                    </div>
                    <div className=' grow md:justify-center gap-5 px-10 md:px-0 mt-4'> {/**md:flex */}
                        <div className='md:w-1/2 mx-auto pt-4'><Location /></div>
                        <div className=' text-center -ml-2 pt-5 md:w-[80%] md:ml-8'>
                            <RangeSlider />
                        </div>
                        
                    </div>
                    <div className=' text-center px-14 -ml-6'>
                        
                        <Slider/>
                    </div>
                    <div className='h-full ml-2 rounded-xl pl-6  pb-10 pr-4'> {/**md:hidden */}
                        <div className='mb-6  bg-white' >
                        <div className='text-[#70798f] text-xl mb-2 font-semibold'>Schedule</div>
                            <div className='grid grid-cols-2'>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Full time
                                        </label>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Part-time
                                        </label>
                                    </div>
                                </div>
                                
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Internship
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mb-6'>
                        <div className='text-[#70798f] text-xl mb-2 font-semibold'>Employment Type</div>
                            <div className='grid grid-cols-2'>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Full day
                                        </label>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Shift work
                                        </label>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Flexible schedule
                                        </label>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Distant work
                                        </label>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Shift method
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div >
                        <div className='text-[#70798f] text-xl mb-2 font-semibold'>Professional level</div>
                            <div className='grid grid-cols-2'>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Trainee level
                                        </label>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Junior level
                                        </label>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Middle level
                                        </label>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" checked />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Senior level
                                        </label>
                                    </div>
                                </div>
                                <div className=''>
                                    <div className="form-check flex">
                                        <input
                                            className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label inline-block md:ml-2" for="flexCheckChecked">
                                            Director level
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        </>
    )
}

export default Newnav
