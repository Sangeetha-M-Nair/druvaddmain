import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Kpp from '../Newkpp/Kpp';


function Leftupper(group) {
    const [show, hide] = useState(false);
    if(!group){
        return <div>Loading...</div>
    }

   
    return (
        <div>
        <div className="bg-white text-center rounded-lg ">
            <div className="h-20 w-full bg-[#98C9B4] rounded-lg pb-6" ></div>
            <img className="z-1 rounded object-cover w-[80%] h-24 relative bottom-9 m-auto " alt="pic" src='./images/BUILD.jpg' />

            <div className='pt-1 -mt-7'>
                <div className='text-2xl'>{group.name}</div>
                <p>{group.name}</p>
            </div>
            <h5 className=" mb-2 font-medium ">
                {group.description}
            </h5>

            <div className="flex justify-around text-base my-2 border-y-2 border-gray-700 pt-1 ">
                <div>
                    <h5>{group.members.length}</h5>
                    <p>Members</p>
                </div>
            </div>

            <h5 onClick={() => hide(!show)} className="text-blue-400 mb-3 font-semibold pb-3 w-full cursor-pointer">
            Group Info
            </h5>
        </div>
        <div className={(show ? "block" : "hidden") + ' absolute w-[48%] h-full bg-white z-[3] top-[0.9rem] ml-[26%] rounded-lg mt-2 mb-2'}>
                <Kpp {...group}/>
            </div>
        </div>
    )
}

export default Leftupper
