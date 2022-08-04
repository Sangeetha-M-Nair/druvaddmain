import React, { useState } from 'react'

function Mobile() {

    const [toggleState, setToggleState] = useState();

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <div className='w-screen'>
        <div className='p-2 py-6 mt-24'>
            {/* Job card */}

            <div className=''>
                {/* card 1 */}
                <div className={toggleState === 1 ? "bg-white text-black rounded-2xl border-b-4  shadow-[-3px_-3px_7px_0px_rgba(98,60,234,0.5)_inset]" : "bg-[#623cea] text-white rounded-2xl"}
                    onClick={() => toggleTab(1)}>
                    <div className='flex p-2 cursor-pointer w-full'>
                        <div className='p-2'>
                            <img src='./images/logo.jpg' alt='picture' className='h-12 w-12 rounded-lg' />
                        </div>
                        <div className='p-2 grow'>
                            <div className='flex gap-2 justify-between'>
                                <div className='text-xl lg:text-2xl md:text-xl'>Digital Ocean</div>
                                <div className='md:flex md:gap-4'>
                                    <div className={(toggleState === 1 ? " bg-[#f4f2fd] text-red-500" : " bg-[#8566f6] text-white") + " py-1 md:mb-3 px-1 rounded-lg flex mb-1"}>
                                        <i className="bi bi-youtube text-xs px-1 md:py-1"></i>
                                        <div className=' px-1 text-sm md:text-base' >Youtube</div>
                                    </div>
                                    <div className={(toggleState === 1 ? " bg-[#f4f2fd] text-pink-600" : " bg-[#8566f6] text-white") + " md:py-1 md:mb-3 px-1 rounded-lg flex gap-1"}>
                                        <i class="bi bi-instagram text-xs py-1 px-1"></i>
                                        <div className='pr-1 text-sm md:text-base'>Instagramer</div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:flex gap-1 font-semibold my-2 mb-1 md:mb-2'>
                                <div className='grow'>Sr. Back-End Developer</div>
                                <div>8.8-12.7k</div>
                            </div>
                            <div className='text-[#d0c5f7] mb-1 md:my-2'>Bokaro, Jharkhand</div>
                            <div className='flex'>
                                <div className='flex grow gap-2'>
                                    <div className={(toggleState === 1 ? " bg-[#f4f2fd]" : " bg-[#623cea]") + " px-1 text-sm md:text-base rounded-lg"}>C++</div>
                                    <div className={(toggleState === 1 ? " bg-[#f4f2fd]" : " bg-[#623cea]") + " px-1 text-sm md:text-base rounded-lg"}>Open SG</div>
                                    <div className={(toggleState === 1 ? " bg-[#f4f2fd]" : " bg-[#623cea]") + " px-1 text-sm md:text-base rounded-lg"}>GPSS</div>
                                </div>
                                <div className='px-1 text-sm md:text-base'>ID:4567932</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/********************* */}
                {/* data 1 */}
                <div
                    className={(toggleState === 1 ? "block" : "hidden") + " mr-2"}
                >
                    <div className='bg-white p-6 py-4 rounded-xl grow lg:ml-2 font-semibold font-[Poppins] mt-2 lg:mt-0'>
                        <div className='flex'>
                            <div className='hidden bg-white rounded-xl w-[30%] relative'>
                                {/* <img src='./images/BUILD.jpg' className='h-full w-[90%] rounded-2xl hidden md:block' alt='img' /> */}
                                <img src='./images/logo.jpg' className='w-16 h-16 z-[2] mt-[5rem]  rounded-xl' />
                            </div>
                            <div className='lg:flex'>
                                <div className=' grow md:pl-6'>
                                    <div className='lg:flex'>
                                        <div className='flex grow md:gap-4 gap-2'>
                                            <div className='text-[#70798f] font-semibold text-xl py-1'>Digital Ocean</div>
                                            <div className='py-1 h-7 bg-[#f2effd] px-1 my-1 mb-5 md:pt-1 md:mb-0 text-sm md:text-base rounded-lg flex text-red-500'>
                                                <i className="bi bi-youtube text-xs px-1 py-1"></i>
                                                <div className='px-1' >Youtuber</div>
                                            </div>
                                            <div className='py-1 h-7 bg-[#f2effd] my-1  mb-9 md:mb-0 md:pt-1 px-1 text-sm md:text-base rounded-lg flex gap-1 text-pink-500'>
                                                <i class="bi bi-instagram text-xs py-1 px-1"></i>
                                                <div className='pr-1'>Instagramer</div>
                                            </div>
                                        </div>
                                        <div className='flex text-[#70798f]'>
                                            <i class="bi bi-eye-fill"></i>
                                            <div>1.5k</div>
                                        </div>
                                    </div>
                                    <div className='font-bold my-2'>Sr. Back-End Developer</div>
                                    <div className='flex'>
                                        <div className='font-[550] text-[#714eeb]'>8.8-12.7k</div>
                                        <div className='text-[#70798f]'>PLN</div>
                                    </div>
                                    <div className='flex gap-1 text-[#70798f] my-1'>
                                        <div><i class="bi bi-geo-alt"></i></div>
                                        <div>Samborzec, Pacandw, Debe Wielkie, Tyniec Maly......</div>
                                    </div>
                                    <div className='flex gap-1 text-[#70798f]'>
                                        <div><i class="bi bi-briefcase"></i></div>
                                        <div>Full-Time</div>
                                    </div>
                                </div>
                                <div className='md:flex flex-col md:flex-row justify-between mt-4 md:mt-0'>
                                    {/* <div className='flex text-[#70798f] flex-row-reverse'>
                                    <div>1.5k</div>
                                    <i class="bi bi-eye-fill"></i>

                                </div> */}
                                    <div className='flex lg:flex-col md:gap-1 gap-3 md:mt-4 md:ml-4 md:justify-between'>

                                        <div className='flex flex-row-reverse text-xl overflow-hidden '>
                                            <div className=' flex flex-row-reverse cursor-pointer text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.5rem] hover:mr-0 transition-all duration-500 ease-in  rounded-xl'> {/**shadow-[0_-1rem_1rem_2rem_rgba(225,225,225,0.5)] shadow-[-8px_-8px_-15px_-1rem_#bebebe] */}
                                                <div className='px-1 pt-1 text-sm justify-center'>www.google.com</div>

                                                <i class="bi bi-globe"></i>

                                            </div>

                                        </div>
                                        <div className='flex flex-row-reverse text-xl overflow-hidden '>
                                            <div className=' flex flex-row-reverse cursor-pointer text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.5rem] hover:mr-0 transition-all duration-500 ease-in rounded-xl'>
                                                <div className='px-1 pt-1 text-sm justify-center'>www.google.com</div>
                                                <i class="bi bi-twitter"></i>
                                            </div>

                                        </div>
                                        <div className='flex flex-row-reverse text-xl  overflow-hidden '>
                                            <div className=' flex flex-row-reverse cursor-pointer text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.5rem] hover:mr-0 transition-all duration-500 ease-in rounded-xl'>
                                                <div className='px-1 pt-1 text-sm justify-center'>www.google.com</div>
                                                <i class="bi bi-instagram"></i>
                                            </div>

                                        </div>

                                    </div>
                                    {/* <div className='flex md:flex-row-reverse gap-2 mt-4'>
                                        <button className='bg-[#714eeb] px-4 py-1 text-white rounded-2xl '><i class="bi bi-arrow-down-right-circle-fill"></i> Apply now </button>
                                        <button className='bg-[#714eeb] px-4 py-1 text-white rounded-2xl '>
                                            <i class="bi bi-share-fill"></i> Share
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* </div>
                    <div className='lg:flex'> */}
                        <div className='bg-white lg:flex lg:m-2 my-2 mb-0 p-4 lg:w-[70%]  border-t-2'>
                            <div>
                                <div className='pb-2'>
                                <div className='text-[#70798f] mt-3 text-xl '><div>JOB DESCRIPTION</div></div>
                                    <div>
                                        <p className='text-base font-[400]  text-black'>
                                            A ux/ui designer required detected, but CSS nesting has not been configured correctly.
                                            Please enable a CSS nesting plugin *before* Tailwind in your configuration.
                                            See how here: https://tailwindcss.com/docs/using-with-preprocessors#nesting
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex my-4'>
                                    <div className='md:w-1/2 mb-4 md:mb-0'>
                                        <div className='text-[#70798f]'>JOB CREATION DATE</div>
                                        <div className='font-[550]'>March 15,2021 to March 17,2021</div>
                                    </div>
                                    <div>
                                        <div className='text-[#70798f]'>CAREER LEVEL</div>
                                        <div className='font-[550]'>Project Management</div>
                                    </div>
                                </div>

                                <div className='md:flex my-4'>
                                    <div className='md:w-1/2 md:pr-6 mb-6 md:mb-0'>
                                        <div className='text-[#70798f] mt-2'>TECHNOLOGICAL REQUIREMENTS</div>
                                        <div>
                                            <div className='flex my-1'>
                                                <div className='w-3/5'>C++</div>
                                                <div className='flex grow'>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                </div>
                                            </div>
                                            <div className='flex my-1'>
                                                <div className='w-3/5'>Open SG</div>
                                                <div className='flex grow'>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                </div>
                                            </div>
                                            <div className='flex my-1'>
                                                <div className='w-3/5'>GPSS</div>
                                                <div className='flex grow'>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <div className='my-2 text-[#70798f]'>SOFT SKILLS</div>
                                        <div className='flex gap-4 my-1 w-full'>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>Stack</div>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>Microsoft Word</div>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>WordPress</div>
                                        </div>
                                        <div className='my-1 flex'>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>Business Development</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex w-full justify-center gap-5 mb-4'>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500'>Work Level</div>
                                    <div className='font-semibold'>Senior</div>
                                </div>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500 '>Job Type</div>
                                    <div className='font-semibold'>Full-Time</div>
                                </div>
                            </div>
                            <div className='flex w-full justify-center gap-5 mb-4'>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500'>Fields</div>
                                    <div className='font-semibold'>Design</div>
                                </div>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500'>Salary</div>
                                    <div className='font-semibold'>$8,000/mo</div>
                                </div>
                            </div>
                            <div className='flex w-full justify-center gap-5'>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl  '>
                                    <div className='text-gray-500'>Work Model</div>
                                    <div className='font-semibold'>On-Site</div>
                                </div>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl '>
                                    <div className='text-gray-500'>Experience</div>
                                    <div className='font-semibold'>2 Year</div>
                                </div>
                            </div>
                            <div className='md:flex my-4'>
                                <div className='md:w-1/2 mb-4 md:mb-0'>
                                    <div className='text-[#70798f]'>TYPE OF COOPERATION</div>
                                    <div className='font-[550]'>Kontrakt B2B</div>
                                </div>
                                <div>
                                    <div className='text-[#70798f]'>Hiring Manager</div>
                                    <div className='font-[550]'>Anmol Rathi</div>
                                </div>
                            </div>
                            <div className='w-full flex justify-center'>
                            <button className='shadow-[5px_5px_7px_0px_rgba(37,99,235,0.4)] hover:shadow-[-3px_-3px_7px_0px_rgba(37,99,235,0.6)_inset] bg-[#714eeb] px-4 py-2 text-white rounded-lg flex w-2/3 h-12 text-xl  justify-center '> Apply now </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end data 1 */}
            </div>
            {/* End card 1 */}
            <div className='my-3'>
                {/* card 2 */}

                <div className={toggleState === 2 ? "bg-white text-black rounded-2xl border-b-4  shadow-[-3px_-3px_7px_0px_rgba(98,60,234,0.5)_inset]" : "bg-[#623cea] text-white rounded-2xl"}
                    onClick={() => toggleTab(2)}>
                    <div className='flex p-2 cursor-pointer w-full'>
                        <div className='p-2'>
                            <img src='./images/logo.jpg' alt='picture' className='h-12 w-12 rounded-lg' />
                        </div>
                        <div className='p-2 grow'>
                            <div className='flex gap-2 justify-between'>
                                <div className='text-xl lg:text-2xl md:text-xl'>Google</div>
                                <div className='md:flex md:gap-4'>
                                    <div className={(toggleState === 2 ? " bg-[#f4f2fd] text-red-500" : " bg-[#8566f6] text-white") + " py-1 md:mb-3 px-1 rounded-lg flex mb-1"}>
                                        <i className="bi bi-youtube text-xs px-1 md:py-1"></i>
                                        <div className=' px-1 text-sm md:text-base' >Youtube</div>
                                    </div>
                                    <div className={(toggleState === 2 ? " bg-[#f4f2fd] text-pink-600" : " bg-[#8566f6] text-white") + " md:py-1 md:mb-3 px-1 rounded-lg flex gap-1"}>
                                        <i class="bi bi-instagram text-xs py-1 px-1"></i>
                                        <div className='pr-1 text-sm md:text-base'>Instagramer</div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:flex gap-1 font-semibold my-2 mb-1 md:mb-2'>
                                <div className='grow'>Sr. Front-End Developer</div>
                                <div>8.8-12.7k</div>
                            </div>
                            <div className='text-[#d0c5f7] mb-1 md:my-2'>Bokaro, Jharkhand</div>
                            <div className='flex'>
                                <div className='flex grow gap-2'>
                                    <div className={(toggleState === 2 ? " bg-[#f4f2fd]" : " bg-[#623cea]") + " px-1 text-sm md:text-base rounded-lg"}>C++</div>
                                    <div className={(toggleState === 2 ? " bg-[#f4f2fd]" : " bg-[#623cea]") + " px-1 text-sm md:text-base rounded-lg"}>Open SG</div>
                                    <div className={(toggleState === 2 ? " bg-[#f4f2fd]" : " bg-[#623cea]") + " px-1 text-sm md:text-base rounded-lg"}>GPSS</div>
                                </div>
                                <div className='px-1 text-sm md:text-base'>ID:4567932</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/********* */}
                {/* data 2 */}
                <div
                    className={(toggleState === 2 ? "block" : "hidden") + " mr-2"}
                >
                    <div className='bg-white p-6 py-4 rounded-xl grow lg:ml-2 font-semibold font-[Poppins] mt-2 lg:mt-0'>
                        <div className='flex'>
                            <div className='hidden bg-white rounded-xl w-[30%] relative'>
                                {/* <img src='./images/BUILD.jpg' className='h-full w-[90%] rounded-2xl hidden md:block' alt='img' /> */}
                                <img src='./images/logo.jpg' className='w-16 h-16 z-[2] mt-[5rem] rounded-xl' />
                            </div>
                            <div className='lg:flex'>
                                <div className=' grow md:pl-6'>
                                    <div className='lg:flex'>
                                        <div className='flex grow md:gap-4 gap-2'>
                                            <div className='text-[#70798f] font-semibold text-xl py-1'>Google</div>
                                            <div className='py-1 h-7 bg-[#f2effd] px-1 my-1 mb-5 md:pt-1 md:mb-0 text-sm md:text-base rounded-lg flex text-red-500'>
                                                <i className="bi bi-youtube text-xs px-1 py-1"></i>
                                                <div className='px-1' >Youtuber</div>
                                            </div>
                                            <div className='py-1 h-7 bg-[#f2effd] my-1  mb-9 md:mb-0 md:pt-1 px-1 text-sm md:text-base rounded-lg flex gap-1 text-pink-500'>
                                                <i class="bi bi-instagram text-xs py-1 px-1"></i>
                                                <div className='pr-1'>Instagramer</div>
                                            </div>
                                        </div>
                                        <div className='flex text-[#70798f]'>
                                            <i class="bi bi-eye-fill"></i>
                                            <div>1.5k</div>
                                        </div>
                                    </div>
                                    <div className='font-bold my-2'>Sr. Front-End Developer</div>
                                    <div className='flex'>
                                        <div className='font-[550] text-[#714eeb]'>8.8-12.7k</div>
                                        <div className='text-[#70798f]'>PLN</div>
                                    </div>
                                    <div className='flex gap-1 text-[#70798f] my-1'>
                                        <div><i class="bi bi-geo-alt"></i></div>
                                        <div>Samborzec, Pacandw, Debe Wielkie, Tyniec Maly......</div>
                                    </div>
                                    <div className='flex gap-1 text-[#70798f]'>
                                        <div><i class="bi bi-briefcase"></i></div>
                                        <div>Full-Time</div>
                                    </div>
                                </div>
                                <div className='md:flex flex-col md:flex-row justify-between mt-4 md:mt-0'>
                                    {/* <div className='flex text-[#70798f] flex-row-reverse'>
                                    <div>1.5k</div>
                                    <i class="bi bi-eye-fill"></i>

                                </div> */}
                                    <div className='flex lg:flex-col md:gap-1 gap-3 md:mt-4 md:ml-4 md:justify-between'>

                                        <div className='flex flex-row-reverse text-xl overflow-hidden '>
                                            <div className=' flex flex-row-reverse cursor-pointer text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.5rem] hover:mr-0 transition-all duration-500 ease-in  rounded-xl'> {/**shadow-[0_-1rem_1rem_2rem_rgba(225,225,225,0.5)] shadow-[-8px_-8px_-15px_-1rem_#bebebe] */}
                                                <div className='px-1 pt-1 text-sm justify-center'>www.google.com</div>

                                                <i class="bi bi-globe"></i>

                                            </div>

                                        </div>
                                        <div className='flex flex-row-reverse text-xl overflow-hidden '>
                                            <div className=' flex flex-row-reverse cursor-pointer text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.5rem] hover:mr-0 transition-all duration-500 ease-in rounded-xl'>
                                                <div className='px-1 pt-1 text-sm justify-center'>www.google.com</div>
                                                <i class="bi bi-twitter"></i>
                                            </div>

                                        </div>
                                        <div className='flex flex-row-reverse text-xl  overflow-hidden '>
                                            <div className=' flex flex-row-reverse cursor-pointer text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.5rem] hover:mr-0 transition-all duration-500 ease-in rounded-xl'>
                                                <div className='px-1 pt-1 text-sm justify-center'>www.google.com</div>
                                                <i class="bi bi-instagram"></i>
                                            </div>

                                        </div>

                                    </div>
                                    {/* <div className='flex md:flex-row-reverse gap-2 mt-4'>
                                        <button className='bg-[#714eeb] px-4 py-1 text-white rounded-2xl '><i class="bi bi-arrow-down-right-circle-fill"></i> Apply now </button>
                                        <button className='bg-[#714eeb] px-4 py-1 text-white rounded-2xl '>
                                            <i class="bi bi-share-fill"></i> Share
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* </div>
                    <div className='lg:flex'> */}
                        <div className='bg-white lg:flex lg:m-2 my-2 mb-0 p-4 lg:w-[70%]  border-t-2'>
                            <div>
                                <div className='pb-2'>
                                <div className='text-[#70798f] mt-3 text-xl '><div>JOB DESCRIPTION</div></div>
                                    <div>
                                        <p className='text-base font-[400]  text-black'>
                                            A ux/ui designer required detected, but CSS nesting has not been configured correctly.
                                            Please enable a CSS nesting plugin *before* Tailwind in your configuration.
                                            See how here: https://tailwindcss.com/docs/using-with-preprocessors#nesting
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex my-4'>
                                    <div className='md:w-1/2 mb-4 md:mb-0'>
                                        <div className='text-[#70798f]'>JOB CREATION DATE</div>
                                        <div className='font-[550]'>March 15,2021 to March 17,2021</div>
                                    </div>
                                    <div>
                                        <div className='text-[#70798f]'>CAREER LEVEL</div>
                                        <div className='font-[550]'>Project Management</div>
                                    </div>
                                </div>

                                <div className='md:flex my-4'>
                                    <div className='md:w-1/2 md:pr-6 mb-6 md:mb-0'>
                                        <div className='text-[#70798f] mt-2'>TECHNOLOGICAL REQUIREMENTS</div>
                                        <div>
                                            <div className='flex my-1'>
                                                <div className='w-3/5'>C++</div>
                                                <div className='flex grow'>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                </div>
                                            </div>
                                            <div className='flex my-1'>
                                                <div className='w-3/5'>Open SG</div>
                                                <div className='flex grow'>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                </div>
                                            </div>
                                            <div className='flex my-1'>
                                                <div className='w-3/5'>GPSS</div>
                                                <div className='flex grow'>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <div className='my-2 text-[#70798f]'>SOFT SKILLS</div>
                                        <div className='flex gap-4 my-1 w-full'>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>Stack</div>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>Microsoft Word</div>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>WordPress</div>
                                        </div>
                                        <div className='my-1 flex'>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>Business Development</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex w-full justify-center gap-5 mb-4'>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500'>Work Level</div>
                                    <div className='font-semibold'>Senior</div>
                                </div>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500 '>Job Type</div>
                                    <div className='font-semibold'>Full-Time</div>
                                </div>
                            </div>
                            <div className='flex w-full justify-center gap-5 mb-4'>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500'>Fields</div>
                                    <div className='font-semibold'>Design</div>
                                </div>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500'>Salary</div>
                                    <div className='font-semibold'>$8,000/mo</div>
                                </div>
                            </div>
                            <div className='flex w-full justify-center gap-5'>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl  '>
                                    <div className='text-gray-500'>Work Model</div>
                                    <div className='font-semibold'>On-Site</div>
                                </div>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl '>
                                    <div className='text-gray-500'>Experience</div>
                                    <div className='font-semibold'>2 Year</div>
                                </div>
                            </div>
                            <div className='md:flex my-4'>
                                <div className='md:w-1/2 mb-4 md:mb-0'>
                                    <div className='text-[#70798f]'>TYPE OF COOPERATION</div>
                                    <div className='font-[550]'>Kontrakt B2B</div>
                                </div>
                                <div>
                                    <div className='text-[#70798f]'>Hiring Manager</div>
                                    <div className='font-[550]'>Anmol Rathi</div>
                                </div>
                            </div>
                            <div className='w-full flex justify-center'>
                            <button className='shadow-[5px_5px_7px_0px_rgba(37,99,235,0.4)] hover:shadow-[-3px_-3px_7px_0px_rgba(37,99,235,0.6)_inset] bg-[#714eeb] px-4 py-2 text-white rounded-lg flex w-2/3 h-12 text-xl  justify-center '> Apply now </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end data 2 */}
            </div>
            {/* End card 2 */}
            {/* card 3 */}
            <div>
            <div className={toggleState === 3 ? "bg-white text-black rounded-2xl border-b-4  shadow-[-3px_-3px_7px_0px_rgba(98,60,234,0.5)_inset]" : "bg-[#623cea] text-white rounded-2xl"}
                    onClick={() => toggleTab(3)}>
                    <div className='flex p-2 cursor-pointer w-full'>
                        <div className='p-2'>
                            <img src='./images/logo.jpg' alt='picture' className='h-12 w-12 rounded-lg' />
                        </div>
                        <div className='p-2 grow'>
                            <div className='flex gap-2 justify-between'>
                                <div className='text-xl lg:text-2xl md:text-xl'>Microsoft</div>
                                <div className='md:flex md:gap-4'>
                                    <div className={(toggleState === 3 ? " bg-[#f4f2fd] text-red-500" : " bg-[#8566f6] text-white") + " py-1 md:mb-3 px-1 rounded-lg flex mb-1"}>
                                        <i className="bi bi-youtube text-xs px-1 md:py-1"></i>
                                        <div className=' px-1 text-sm md:text-base' >Youtube</div>
                                    </div>
                                    {/* <div className={(toggleState === 3 ? " bg-[#f4f2fd] text-pink-600" : " bg-[#8566f6] text-white") + " md:py-1 md:mb-3 px-1 rounded-lg flex gap-1"}>
                                        <i class="bi bi-instagram text-xs py-1 px-1"></i>
                                        <div className='pr-1 text-sm md:text-base'>Instagramer</div>
                                    </div> */}
                                </div>
                            </div>
                            <div className='md:flex gap-1 font-semibold my-2 mb-1 md:mb-2'>
                                <div className='grow'>Sr. Data Scientist</div>
                                <div>8.8-12.7k</div>
                            </div>
                            <div className='text-[#d0c5f7] mb-1 md:my-2'>Bokaro, Jharkhand</div>
                            <div className='flex'>
                                <div className='flex grow gap-2'>
                                    <div className={(toggleState === 3 ? " bg-[#f4f2fd]" : " bg-[#623cea]") + " px-1 text-sm md:text-base rounded-lg"}>C++</div>
                                    <div className={(toggleState === 3 ? " bg-[#f4f2fd]" : " bg-[#623cea]") + " px-1 text-sm md:text-base rounded-lg"}>Open SG</div>
                                    <div className={(toggleState === 3 ? " bg-[#f4f2fd]" : " bg-[#623cea]") + " px-1 text-sm md:text-base rounded-lg"}>GPSS</div>
                                </div>
                                <div className='px-1 text-sm md:text-base'>ID:4567932</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/******************* */}
                {/* data 3 */}
                <div
                    className={(toggleState === 3 ? "block" : "hidden") + " mr-2"}
                >
                    <div className='bg-white p-6 py-4 rounded-xl grow lg:ml-2 font-semibold font-[Poppins] mt-2 lg:mt-0'>
                        <div className='flex'>
                            <div className='hidden bg-white rounded-xl w-[30%] relative '>
                                {/* <img src='./images/BUILD.jpg' className='h-full w-[90%] rounded-2xl hidden md:block' alt='img' /> */}
                                <img src='./images/logo.jpg' className='w-16 h-16 z-[2] mt-[5rem] rounded-xl' />
                            </div>
                            <div className='lg:flex'>
                                <div className=' grow md:pl-6'>
                                    <div className='lg:flex'>
                                        <div className='flex grow md:gap-4 gap-2'>
                                            <div className='text-[#70798f] font-semibold text-xl py-1'>Microsoft</div>
                                            <div className='py-1 h-7 bg-[#f2effd] px-1 my-1 mb-5 md:pt-1 md:mb-0 text-sm md:text-base rounded-lg flex text-red-500'>
                                                <i className="bi bi-youtube text-xs px-1 py-1"></i>
                                                <div className='px-1' >Youtuber</div>
                                            </div>
                                            <div className='py-1 h-7 bg-[#f2effd] my-1  mb-9 md:mb-0 md:pt-1 px-1 text-sm md:text-base rounded-lg flex gap-1 text-pink-500'>
                                                <i class="bi bi-instagram text-xs py-1 px-1"></i>
                                                <div className='pr-1'>Instagramer</div>
                                            </div>
                                        </div>
                                        <div className='flex text-[#70798f]'>
                                            <i class="bi bi-eye-fill"></i>
                                            <div>1.5k</div>
                                        </div>
                                    </div>
                                    <div className='font-bold my-2'>Sr. Data Scientist</div>
                                    <div className='flex'>
                                        <div className='font-[550] text-[#714eeb]'>8.8-12.7k</div>
                                        <div className='text-[#70798f]'>PLN</div>
                                    </div>
                                    <div className='flex gap-1 text-[#70798f] my-1'>
                                        <div><i class="bi bi-geo-alt"></i></div>
                                        <div>Samborzec, Pacandw, Debe Wielkie, Tyniec Maly......</div>
                                    </div>
                                    <div className='flex gap-1 text-[#70798f]'>
                                        <div><i class="bi bi-briefcase"></i></div>
                                        <div>Full-Time</div>
                                    </div>
                                </div>
                                <div className='md:flex flex-col md:flex-row justify-between mt-4 md:mt-0'>
                                    {/* <div className='flex text-[#70798f] flex-row-reverse'>
                                    <div>1.5k</div>
                                    <i class="bi bi-eye-fill"></i>

                                </div> */}
                                    <div className='flex lg:flex-col md:gap-1 gap-3 md:mt-4 md:ml-4 md:justify-between'>

                                        <div className='flex flex-row-reverse text-xl overflow-hidden '>
                                            <div className=' flex flex-row-reverse cursor-pointer text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.5rem] hover:mr-0 transition-all duration-500 ease-in  rounded-xl'> {/**shadow-[0_-1rem_1rem_2rem_rgba(225,225,225,0.5)] shadow-[-8px_-8px_-15px_-1rem_#bebebe] */}
                                                <div className='px-1 pt-1 text-sm justify-center'>www.google.com</div>

                                                <i class="bi bi-globe"></i>

                                            </div>

                                        </div>
                                        <div className='flex flex-row-reverse text-xl overflow-hidden '>
                                            <div className=' flex flex-row-reverse cursor-pointer text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.5rem] hover:mr-0 transition-all duration-500 ease-in rounded-xl'>
                                                <div className='px-1 pt-1 text-sm justify-center'>www.google.com</div>
                                                <i class="bi bi-twitter"></i>
                                            </div>

                                        </div>
                                        <div className='flex flex-row-reverse text-xl  overflow-hidden '>
                                            <div className=' flex flex-row-reverse cursor-pointer text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.5rem] hover:mr-0 transition-all duration-500 ease-in rounded-xl'>
                                                <div className='px-1 pt-1 text-sm justify-center'>www.google.com</div>
                                                <i class="bi bi-instagram"></i>
                                            </div>

                                        </div>

                                    </div>
                                    {/* <div className='flex md:flex-row-reverse gap-2 mt-4'>
                                        <button className='bg-[#714eeb] px-4 py-1 text-white rounded-2xl '><i class="bi bi-arrow-down-right-circle-fill"></i> Apply now </button>
                                        <button className='bg-[#714eeb] px-4 py-1 text-white rounded-2xl '>
                                            <i class="bi bi-share-fill"></i> Share
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* </div>
                    <div className='lg:flex'> */}
                        <div className='bg-white lg:flex lg:m-2 my-2 mb-0 p-4 lg:w-[70%]  border-t-2'>
                            <div>
                                <div className='pb-2'>
                                <div className='text-[#70798f] mt-3 text-xl '><div>JOB DESCRIPTION</div></div>
                                    <div>
                                        <p className='text-base font-[400]  text-black'>
                                            A ux/ui designer required detected, but CSS nesting has not been configured correctly.
                                            Please enable a CSS nesting plugin *before* Tailwind in your configuration.
                                            See how here: https://tailwindcss.com/docs/using-with-preprocessors#nesting
                                        </p>
                                    </div>
                                </div>
                                <div className='md:flex my-4'>
                                    <div className='md:w-1/2 mb-4 md:mb-0'>
                                        <div className='text-[#70798f]'>JOB CREATION DATE</div>
                                        <div className='font-[550]'>March 15,2021 to March 17,2021</div>
                                    </div>
                                    <div>
                                        <div className='text-[#70798f]'>CAREER LEVEL</div>
                                        <div className='font-[550]'>Project Management</div>
                                    </div>
                                </div>

                                <div className='md:flex my-4'>
                                    <div className='md:w-1/2 md:pr-6 mb-6 md:mb-0'>
                                        <div className='text-[#70798f] mt-2'>TECHNOLOGICAL REQUIREMENTS</div>
                                        <div>
                                            <div className='flex my-1'>
                                                <div className='w-3/5'>C++</div>
                                                <div className='flex grow'>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                </div>
                                            </div>
                                            <div className='flex my-1'>
                                                <div className='w-3/5'>Open SG</div>
                                                <div className='flex grow'>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                </div>
                                            </div>
                                            <div className='flex my-1'>
                                                <div className='w-3/5'>GPSS</div>
                                                <div className='flex grow'>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <div className='my-2 text-[#70798f]'>SOFT SKILLS</div>
                                        <div className='flex gap-4 my-1 w-full'>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>Stack</div>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>Microsoft Word</div>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>WordPress</div>
                                        </div>
                                        <div className='my-1 flex'>
                                            <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>Business Development</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex w-full justify-center gap-5 mb-4'>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500'>Work Level</div>
                                    <div className='font-semibold'>Senior</div>
                                </div>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500 '>Job Type</div>
                                    <div className='font-semibold'>Full-Time</div>
                                </div>
                            </div>
                            <div className='flex w-full justify-center gap-5 mb-4'>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500'>Fields</div>
                                    <div className='font-semibold'>Design</div>
                                </div>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                    <div className='text-gray-500'>Salary</div>
                                    <div className='font-semibold'>$8,000/mo</div>
                                </div>
                            </div>
                            <div className='flex w-full justify-center gap-5'>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl  '>
                                    <div className='text-gray-500'>Work Model</div>
                                    <div className='font-semibold'>On-Site</div>
                                </div>
                                <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl '>
                                    <div className='text-gray-500'>Experience</div>
                                    <div className='font-semibold'>2 Year</div>
                                </div>
                            </div>
                            <div className='md:flex my-4'>
                                <div className='md:w-1/2 mb-4 md:mb-0'>
                                    <div className='text-[#70798f]'>TYPE OF COOPERATION</div>
                                    <div className='font-[550]'>Kontrakt B2B</div>
                                </div>
                                <div>
                                    <div className='text-[#70798f]'>Hiring Manager</div>
                                    <div className='font-[550]'>Anmol Rathi</div>
                                </div>
                            </div>
                            <div className='w-full flex justify-center'>
                            <button className='shadow-[5px_5px_7px_0px_rgba(37,99,235,0.4)] hover:shadow-[-3px_-3px_7px_0px_rgba(37,99,235,0.6)_inset] bg-[#714eeb] px-4 py-2 text-white rounded-lg flex w-2/3 h-12 text-xl  justify-center '> Apply now </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end data 3 */}
                {/* End card 3*/}
            </div>
            {/* card ends */}
            {/* full data */}

        </div>
        </div>
    )
}

export default Mobile
