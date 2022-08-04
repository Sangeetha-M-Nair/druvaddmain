import React, { useState } from 'react'
// import Experience from './Navbar/Experience'
import Location from './Navbar/Location'
import RangeSlider from './Navbar/Newexp'
// import Range from './Navbar/Range'
// import Nnavbar from './Nnavbar'
// import Payment from './Payment'
import Slider from './Navbar/Rangenew'

function Filters() {
    return (
        <div className='mt-24 font-[poppins] h-screen w-full '>
            <div className={" border-l-2  border-t-2 h-screen md:gap-3 bg-white  md:z-auto z-[-1] right-0  transition-all duration-500 ease-in md:opacity-100"}> {/**'top-[320px]' : 'top-[-490px]' */}
                <div className=' grow md:justify-center gap-5 px-10 md:px-0'> {/**md:flex */}
                    <div className='md:w-3/4 mx-auto mt-4 mb-4'><Location /></div>
                    <div className=' text-center pl-8 pr-14'>
                        {/* <div className=''>Salary</div> */}
                        {/* The salary */}
                        <RangeSlider/>
                        {/* <Range/> */}
                    </div>
                    {/* <div className='md:w-3/4 mx-auto my-3'><Experience /></div> */}
                    {/* <div className='w-1/3'><Payment /></div> */}
                </div>
                <div className=' text-center pl-8 pr-14 '>
                    {/* <div className=''>Salary</div> */}
                    {/* The salary */}
                    <Slider />
                </div>
                <div className='h-full ml-2 rounded-xl pl-6  pb-10 pr-4'> {/**md:hidden */}
                    <div className='mb-6  bg-white' >
                        <div className='text-[#70798f] text-xl mb-2 font-semibold'>Schedule</div>
                        <div className='grid grid-cols-2'>
                            <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label inline-block " for="flexCheckChecked">
                                        Full time
                                    </label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label inline-block " for="flexCheckChecked">
                                        Part-time
                                    </label>
                                </div>
                            </div>
                            {/* <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label inline-block " for="flexCheckChecked">
                                        Project-work
                                    </label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label inline-block " for="flexCheckChecked">
                                        Volunteering
                                    </label>
                                </div>
                            </div> */}
                            <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label inline-block " for="flexCheckChecked">
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
                                    <label className="form-check-label inline-block md:ml-[0.5 rem]" for="flexCheckChecked">
                                        Full day
                                    </label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label inline-block md:ml-[0.5 rem]" for="flexCheckChecked">
                                        Shift work
                                    </label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label inline-block md:ml-[0.5 rem]" for="flexCheckChecked">
                                        Flexible schedule
                                    </label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label inline-block md:ml-[0.5 rem]" for="flexCheckChecked">
                                        Distant work
                                    </label>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label inline-block md:ml-[0.5 rem]" for="flexCheckChecked">
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
                                    <label className="form-check-label inline-block md:ml-[0.5 rem]" for="flexCheckChecked">
                                        Trainee level
                                    </label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label inline-block md:ml-[0.5 rem]" for="flexCheckChecked">
                                        Junior level
                                    </label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label inline-block md:ml-[0.5 rem]" for="flexCheckChecked">
                                        Middle level
                                    </label>
                                </div>
                            </div>
                            <div className=''>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label inline-block md:ml-[0.5 rem]" for="flexCheckChecked">
                                        Senior level
                                    </label>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <div className="form-check flex">
                                    <input
                                        className=" shadow-[2px_2px_2px_0px_rgba(0,0,0,0.2)] hover:shadow-[-1px_-1px_8px_0px_rgba(98,60,234,0.5)_inset] form-check-input appearance-none h-4 w-4 border-[0.1px] rounded border-gray-400  bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label inline-block md:ml-[0.5 rem]" for="flexCheckChecked">
                                        Director level
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Filters
