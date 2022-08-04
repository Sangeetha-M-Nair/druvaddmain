import React, { useState } from 'react'
import { useHistory, useNavigate } from "react-router-dom";

export const JobPostingNav = () => {
    const [show, setshow] = useState(false)
    const showHide=()=>{
        setshow(!show)
    }
    const history = useNavigate()
    
  return (
  <div className="flex  h-20 px-4 items-center justify-between w-full bg-gray-100">

<div className="flex  items-center">
    <div className=" h-full  flex items-center">
    <div className=" px-2 ">

<div className="text-sm text-gray-400">
    Your Organization
</div>
<div className="flex items-center">
    <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/40055/image-upload/Screenshot_2022_02_16_at_9_30_14_am_copy.jpg" className='h-6 mr-1 rounded-lg w-6 ' alt="" />
    <span className="text-[17px]">
        Fikri Studio
    </span>
</div>
    </div>


<hr className='bg-gray-100 w-[1px] h-[78px] '  />
    
    </div>

</div>
<div className="flex items-center ">

{show?<div className="relative bg-white h-full w-48 top-40 shadow-md rounded-lg left-12">
<div onClick={()=>history('/JobSignIn')} className="flex w-full p-3 items-center cursor-pointer bg-white hover:bg-gray-100 ">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6m text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
<div className="text-lg text-gray-500">
    Add Job Post
</div>
</div>
<div className="flex w-full p-3 items-center cursor-pointer bg-white hover:bg-gray-100 ">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6m text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
<div className="text-lg text-gray-500">
    Add Job Post
</div>
</div>
<div className="flex w-full p-3 items-center cursor-pointer bg-white hover:bg-gray-100 ">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6m text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
<div className="text-lg text-gray-500">
    Add Job Post
</div>
</div>
<div className="flex w-full p-3 items-center cursor-pointer bg-white hover:bg-gray-100 ">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6m text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
<div className="text-lg text-gray-500">
    Add Job Post
</div>
</div>
</div>:null}
<div className=" p-3 ">
<div onClick={showHide} className="bg-yellow-500 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full">

<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
</svg>

</div>
</div>
<div className=" p-3">
<div className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full">

<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
</div>

</div>
<div className=" p-3">
    <img src="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  className='h-10 w-10 rounded-full ' alt="" />
</div>
</div>

  </div>
  )
}