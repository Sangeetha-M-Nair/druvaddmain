import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Button } from "@mui/material";


export default function JoinRequest() {
    const [requests, setRequests] = useState([]);
    const [reload , setReload ] = useState(1);
    const params = useParams();
    const getRequests = async () => {
        const resposne = await axios({
            method: 'GET',
            url: `/group/viewJoinRequests/${params.gid}`
        })
        console.log(resposne.data);
        setRequests(resposne.data);
        
    }

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

    useEffect(() => {
        getRequests();
    }, [reload]);



    return <div>
        This is join requests
        {
            requests.map((request) => {
                return (
                    <div>
                        <p>{request.firstName + " " + request.lastName}
                            &nbsp;
                            <Button onClick={()=>approve(request._id)} variant="outlined" color="success"> Approve </Button>
                            &nbsp;
                            <Button onClick={()=>decline(request._id)} variant="outlined" color="warning"> Decline </Button>
                        </p>

                    </div>

                )
            })
        }

    </div>
}