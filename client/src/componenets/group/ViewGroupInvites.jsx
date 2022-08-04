import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "../userContex";


export default function ViewGroupInvites() {
    const { user, setUser } = useContext(UserContext);
    const acceptInvite = async(id)=>{
        const response = await axios({
            method : 'PUT',
            url : `/user/join/group/${id}`
        });
        alert(response.data.msg);
    }

    const declineInvite = async(id)=>{
        const response = await axios({
            method : 'put',
            url : `/user/declineInvite/${id}`
        });
        console.log(response.data);
        if(response.data){
            alert('Invite declined'); 
        }
        setUser(response.data);
        
    }

    return (
        user && <div>
            These are the group Invites
            {
                user.groupInvites.map((invite) => {
                    return <div>
                        <p>
                            {invite.senderName + " invited you to join " + invite.groupName}
                            <Button onClick={()=>acceptInvite(invite.groupId)} color="success">Accept</Button>
                            <Button onClick={()=>declineInvite(invite._id)} color="warning">Reject</Button>
                        </p>
                    </div>
                })
            }
        </div>
    )
}