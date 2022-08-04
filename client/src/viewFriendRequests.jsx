import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export default function ViewFriendRequest(){
    
    const [ requests, setRequests ] = useState([]);
    const [ reload, setReload ] = useState(0);
    const getFriendRequests = async()=>{
        const response = await axios({
            method : 'get',
            url : '/user/displayfriendRequests'
        });
        console.log(response.data);
        setRequests(response.data);
    }

    const acceptRequest = async(id)=>{
        console.log('accepting request');
        const response = await axios ({
            method : 'put',
            url : `/user/friendRequestAccept/${id}`
        });
        console.log(response.data);
        alert(response.data);
        setReload(reload + 1);
    }
    
    const rejectRequest = async(id)=>{
        const response = await axios({
            method : 'put',
            url : `/user/friendRequestReject/${id}`
        });
        console.log(response.data);
        alert('rejected');
        setReload(reload-1);
    }


    useEffect(()=>{
        getFriendRequests();
    }, [reload])

    return <div>
        This is view Friend Requests<br></br>
        {
         requests.length === 0 ? 'No Requests' : 
         requests.map((request)=>{
                return <div>
                        <p>{request.firstName + ' ' + request.lastName}
                            &nbsp;
                            <Button onClick={()=>acceptRequest(request._id)} variant="outlined" color="success">Accept</Button>
                            &nbsp;
                            <Button onClick={()=>rejectRequest(request._id)} variant="outlined" color="warning">Reject</Button>
                        </p>
                    </div>
            })
        } 
    </div>
}