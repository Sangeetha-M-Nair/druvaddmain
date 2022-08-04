import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function Leftbottom() {
    const params = useParams();
    const [requests, setRequests] = useState([]);
    const [reload , setReload ] = useState(1);
    const approve = async(userId)=>{
        const response = await axios ({
            method : 'PUT',
            url : `/group/addMember/${userId}/${params.gid}`
        });
        console.log(response.data);
        alert('approved');
        setReload(reload + 1);
    }

    const decline = async(userId)=>{
        console.log('sending request to decline request');
        const response = await axios({
            method : 'PUT',
            url : `/group/declineJoinRequest/${params.gid}/${userId}`
        });
        console.log(response.data);
        alert('declined');
        setReload(reload + 1);
    }

    const getRequests = async () => {
        console.log('sending request to get join requests');
        const resposne = await axios({
            method: 'GET',
            url: `/group/viewJoinRequests/${params.id}`
        })
        console.log(resposne.data);
        setRequests(resposne.data);
        
    }

    useEffect(() => {
        getRequests();
    }, [reload]);
  return (
    <div>
        <div className='w-full mt-4 h-full'>
                        <div className='p-2 font-semibold text-lg uppercase'>Requests</div>
                        {
                            requests.map(request=> <div className='bg-white h-30 w-full rounded-lg flex p-2 mb-3'>
                            <div className='w-[17%] m-2'><img src='./images/OIP.jpg' alt="pic" className='rounded-full border-2 border-gray-400' /></div>
                            <div className='m-2 w-[80%]'>
                                <div className='font-semibold text-lg'>{request.firstName + request.lastName}</div>
                                <div className='flex w-full justify-start mt-3 gap-5'>
                                    <button onClick={()=>approve(request._id)} className='bg-[#eff1f7]  px-3 py-1 rounded-lg text-blue-400 font-semibold'>Accept</button>
                                    <button onClick={()=>decline(request._id)} className='bg-[#eff1f7]  px-3 py-1 rounded-lg text-red-400 font-semibold'>Decline</button>
                                </div>
                            </div>
                        </div>)
                        }
                        
                        
                    </div>
    </div>
  )
}

export default Leftbottom
