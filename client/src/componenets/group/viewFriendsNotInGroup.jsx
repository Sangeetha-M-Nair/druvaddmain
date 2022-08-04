import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function ViewFriendsNotInGroup(){
    const params = useParams();
    const [ friends, setFriends ] = useState([]);
    const getFriends = async()=>{
        const response = await axios({
            method : 'GET',
            url : `/group/friendsToInvite/${params.gid}`
        });
        console.log(response.data);
        setFriends(response.data);
    }
    
    const invite = async(fid)=>{
        const response = await axios({
            method : 'put',
            url : `/group/inviteFriend/${params.gid}/${fid}`
        });
        console.log(response.data);
        alert(response.data);
    }

    useEffect(()=>{
        getFriends();
    }, [])

    return <div>
        These are your friends not in the group
        {
            friends.map(friend=>{
                return(
                    <div>
                        <p>{ friend.firstName + ' ' + friend.lastName + ' '}<Button onClick={()=>invite(friend._id)} style={{padding : '0.01px'}} variant="outlined" color="success">Invite</Button></p>    
                    </div>
                )
            })
        }
    </div>
}