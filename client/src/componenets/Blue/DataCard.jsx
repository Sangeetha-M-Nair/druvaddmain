import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

export default function DataCard(props) {
    const [admins, setAdmins] = useState([]);
    const [hrManagerNames, setHrMangagerNames] = useState('');
    const gettingHiringMangagers = async () => {
        const response = await axios({
            method: 'POST',
            url: '/user/givenUsers',
            data: {
                admins: props.job.hrAdmin
            }
        });
        console.log('these are the names of the hr admmins');
        console.log(response.data);
        setAdmins(response.data);
    }

    useEffect(() => {
        gettingHiringMangagers();
    }, []);

    useEffect(() => {
        let names = '';
        for (let i = 0; i < admins.length; i++) {
            names += admins[i].firstName + ' ' + admins[i].lastName + ', ';
        }
        setHrMangagerNames(names.substring(0, names.length - 2));

    }, [admins])


    return <div>
        <div
            className={(props.toggleState === props.index ? "block" : "hidden") + " mr-2"}
        >
            <div className='bg-white p-6  rounded-xl grow lg:ml-3 font-semibold font-poppins mt-2 lg:mt-0 '>{/**shadow-[-3px_-3px_12px_0px_rgba(98,60,234,0.5)_inset] */}
                <div className='flex justify-between'>
                    <div className='md:block hidden bg-white rounded-xl w-[14%] relative lg:flex'>
                        {/* <img src='./images/BUILD.jpg' className='h-full w-[90%] rounded-2xl' alt='img' /> */}
                        <img src='./images/logo.jpg' alt="logo" className='w-16 h-16 z-[2] mt-[1rem] ml-3 rounded-xl' />
                    </div>
                    <div className='w-[86%]'>
                        <div className='w-full md:pl-2'>
                            <div className='lg:flex'>
                                <div className='flex grow md:gap-4 gap-1'>
                                    <div className='text-[#70798f] font-semibold text-2xl py-1'>{props.job.companyName}</div>
                                    {
                                        props.job.type.map(t => <div className='bg-[#f2effd] px-1 h-8 my-1 mb-5 md:pt-1 md:mb-0 text-sm md:text-base rounded-lg flex text-red-500'>
                                            {t === 'youtube' ? <i className="bi bi-youtube text-sm px-1 py-1"></i> : <i class="bi bi-instagram text-sm py-1 px-1"></i>}
                                            <div className='px-1' >{t}</div>
                                        </div>


                                        )
                                    }
                                </div>
                                <div className='flex text-[#70798f]'>
                                    <i class="bi bi-eye-fill"></i>
                                    <div>1.5k</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex pl-2 justify-between -mt-5 w-full'>
                            <div>
                                <div className='font-bold my-2'>{props.job.jobTitle}</div>
                                <div className='flex'>
                                    <div className='font-[550] text-[#714eeb]'>8.8-12.7k</div>
                                    <div className='text-[#70798f]'>PLN</div>
                                </div>
                                <div className='flex gap-1 text-[#70798f] my-1'>
                                    <div><i class="bi bi-geo-alt"></i></div>
                                    <div>{props.job.location + ', ' + props.job.country}</div>
                                </div>
                                <div className='flex gap-1 text-[#70798f]'>
                                    <div><i class="bi bi-briefcase"></i></div>
                                    <div>Full-Time</div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between gap-4 w-[30%] pt-4'>
                                {/* <div className='flex text-[#70798f] flex-row-reverse'>
                                            <div>1.5k</div>
                                            <i class="bi bi-eye-fill"></i>

                                        </div> */}
                                <div className='flex flex-col gap-1'>

                                    <div className='flex flex-row-reverse text-xl overflow-hidden p-1 '>
                                        <div className=' flex flex-row-reverse cursor-pointer shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] rounded-full text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.8rem] hover:mr-0 transition-all duration-500 ease-in '> {/**shadow-[0_-1rem_1rem_2rem_rgba(225,225,225,0.5)] shadow-[-8px_-8px_-15px_-1rem_#bebebe] */}
                                            <div className='px-[0.28rem] pt-1 text-sm justify-center'>www.google.com</div>
                                            <div className=' '>
                                                <i class="bi bi-globe"></i>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex flex-row-reverse text-xl overflow-hidden p-1 '>
                                        <div className=' flex flex-row-reverse cursor-pointer shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] rounded-full text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.8rem] hover:mr-0 transition-all duration-500 ease-in '>
                                            <div className='px-[0.28rem] pt-1 text-sm justify-center'>www.google.com</div>
                                            <i class="bi bi-twitter"></i>
                                        </div>

                                    </div>
                                    <div className='flex flex-row-reverse text-xl  overflow-hidden p-1'>
                                        <div className=' flex flex-row-reverse cursor-pointer shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] rounded-full text-[#70798f] hover:bg-gray-100 px-2 mr-[-8.8rem] hover:mr-0 transition-all duration-500 ease-in '>
                                            <div className='px-[0.28rem] pt-1 text-sm justify-center'>www.google.com</div>
                                            <i class="bi bi-instagram"></i>
                                        </div>

                                    </div>

                                </div>
                                <div className='flex flex-row-reverse gap-2'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t mt-2'>
                    <div className='pb-2'>
                        <div className='text-[#70798f] mt-3 text-xl '><div>JOB DESCRIPTION</div></div>
                        <div>
                            <p className='text-base font-[300]  text-black'>
                                {props.job.description}
                            </p>
                        </div>
                    </div>
                    <div className='md:flex my-4'>
                        <div className='md:w-1/2 mb-4 md:mb-0'>
                            <div className='text-[#70798f]'>JOB CREATION DATE</div>
                            <div className='font-[535]'>{props.job.date.substring(0, props.job.date.indexOf('T'))}</div>
                        </div>
                        <div>
                            <div className='text-[#70798f]'>CAREER LEVEL</div>
                            <div className='font-[535]'>Project Management</div>
                        </div>
                    </div>

                    <div className='md:flex my-4'>
                        <div className='md:w-1/2 md:pr-6 mb-6 md:mb-0'>
                            <div className='text-[#70798f] mt-2'>TECHNOLOGICAL REQUIREMENTS</div>
                            <div>
                                {
                                    props.job.skillsRated.map((skill) => {
                                        return (<div className='flex my-1'>
                                            <div className='w-3/5'>{skill.name}</div>

                                            <div className='flex grow'>
                                                {console.log(skill.value)}
                                                {

                                                    [...Array(skill.value)].map((v) => {
                                                        return <i class="bi bi-star-fill text-[#ffb016]"></i>
                                                    })
                                                }
                                            </div>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='my-2 text-[#70798f]'>SOFT SKILLS</div>
                            <div className='flex gap-4 my-1 w-full'>
                                {
                                    props.job.skills.map(skill => <div className='bg-[#daeafc] text-[#572cf0] p-1 px-2 rounded-lg font-semibold'>{skill}</div>)

                                }
                            </div>
                        </div>
                    </div>
                    <div className=' mt-2 rounded-2xl p-2 '>
                        <div className='flex w-full justify-center gap-5 mb-4'>
                            <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                <div className='text-gray-500'>Work Level</div>
                                <div className='font-[550]'>Senior</div>
                            </div>
                            <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                <div className='text-gray-500 '>Job Type</div>
                                <div className='font-[550]'>{props.job.jobType}</div>
                            </div>
                            {/* </div>
                                <div className='flex w-full justify-center gap-5 mb-4'> */}
                            <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                <div className='text-gray-500'>Fields</div>
                                <div className='font-[550]'>Design</div>
                            </div>
                            <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl'>
                                <div className='text-gray-500'>Salary</div>
                                <div className='font-[550]'>$8,000/mo</div>
                            </div>
                        </div>
                        <div className='flex w-full justify-center gap-5'>
                            <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl  '>
                                <div className='text-gray-500'>Work Model</div>
                                <div className='font-[550]'>On-Site</div>
                            </div>
                            <div className='bg-gray-100 justify-center h-16 text-center p-2 w-2/3 pb-0 rounded-xl '>
                                <div className='text-gray-500'>Experience</div>
                                <div className='font-[550]'>2 Year</div>
                            </div>
                        </div>
                        <div className='md:flex my-3 mt-9'>
                            <div className='md:w-1/2 mb-4 md:mb-0'>
                                <div className='text-[#70798f]'>TYPE OF COOPERATION</div>
                                <div className='font-[550]'>Kontrakt B2B</div>
                            </div>
                            <div className='md:w-1/2'>
                                <div className='text-[#70798f] flex justify-end'>Hiring Manager</div>
                                <div className='font-[550] flex justify-end'>{hrManagerNames}</div>
                            </div>
                        </div>
                        <div className='flex w-full justify-center pt-4'>
                            <button className='bg-[#572cf0] px-4 text-[white] rounded-lg flex gap-2 w-[40%] h-20 py-3 border justify-center text-4xl text-center shadow-[5px_5px_7px_0px_rgba(37,99,235,0.4)] hover:shadow-[-3px_-3px_7px_0px_rgba(37,99,235,0.6)_inset]'>Apply </button> {/**<i class="bi bi-arrow-down-right-circle-fill"></i> shadow-[-3px_-3px_7px_0px_rgba(37,99,235,0.6)] hover:shadow-[-3px_-3px_7px_0px_rgba(37,99,235,0.6)_inset]  */}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
}