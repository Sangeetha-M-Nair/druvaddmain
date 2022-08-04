import React, { useEffect, useState } from 'react';
import Leftupper from './Left/Leftupper';
import Leftmid from './Left/Leftmid';
import Leftbottom from './Left/Leftbottom';
import Inputpost from './Center/Inputpost';
import Posts from './Center/Posts';
import Grouplist from './Right/Grouplist';
import Request from './Right/Request';
import { useParams } from 'react-router';
import axios from 'axios';

function Main() {
    const [group, setGroup] = useState(null);
    const params = useParams();
    const getGroup = async () => {
        const response = await axios({
            method: 'GET',
            url: `/group/viewGroup/one/${params.id}`
        });
        console.log(response.data);
        setGroup(response.data);
    }
    
    useEffect(() => {
        getGroup();
    }, []);
    if(!group){
        return <div>Loading...</div>
    }

    return (
        <div className="h-full  bg-[#eff1f7]  py-3 px-0  overflow-hidden text-base relative">
            <div className='w-full flex text-black'>
                {/**Leftside */}
                <div className="w-1/4 overflow-hidden ml-3 ">
                    {/* upperside */}

                    <Leftupper {...group} />

                    {/* Middle */}

                    <Leftmid/>

                    {/**Bottom */}

                    <Leftbottom/>
                </div>
                {/**Left end */}
                {/**Center */}
                <div className="w-1/2 overflow-hidden px-4">
                    <Inputpost/>
                     {/* 1st layer end */}
                    <Posts/>
                </div>
                {/**Right Side */}
                <div className='w-[23%]'>
                    <Grouplist/>
                    <Request/>

                </div>

            </div>

            
        </div>
    )
}

export default Main
