import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Grouplist() {
    const [groups, setGroups] = useState([]);
    const getGroups = async () => {
        const response = await axios({
            method: 'GET',
            url: `/group/viewGroups/joined`
        });
        console.log(response.data);
        setGroups(response.data);
    }
    useEffect(() => {
        getGroups();
    }, [])

    return (
        <div>
            <div className='bg-white h-[35rem] rounded-lg overflow-hidden border-b-[10px] border-[#eff1f7]'>
                <div className='flex w-full p-2 font-semibold text-lg'>GROUPS</div>
                <div className='p-4 overflow-scroll h-full'>
                    {
                        groups.map(group => <div className='flex w-full gap-4 mb-3 h-16 overflow-hidden border-b pb-4 border-gray-300'>
                            <div className='w-12 h-12'><img src='../images/OIP.jpg' alt="pic" className='rounded-xl' /></div>
                            <div className='w-[80%] h-12 overflow-hidden'>
                                <div className='font-[590] text-lg'>{group.name}</div>
                                <div className='w-full text-gray-400'>{group.description}</div>
                            </div>
                        </div>)
                    }
                </div>
            </div>


        </div>
    )
}

export default Grouplist
