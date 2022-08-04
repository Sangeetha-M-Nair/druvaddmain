import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../userContex";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';

export default function UserAdmin() {
    const [allUsers, setAllUsers] = useState(null);
    const { user, setUser } = useContext(UserContext);
    const [ postDays, setPostDays ] = useState(0);
    const [ commentDays, setCommentDays ] = useState(0);

    const getAllUser = async () => {
        const response = await axios({
            method: 'get',
            url: `/admin/getUsers`
        });
        //console.log(response.data);
        setAllUsers(response.data.users);
    }

    useEffect(() => {
        getAllUser();
    }, [])

    const handleBlockIndefinitely = async (id) => {
        console.log('id from blocked posts', id);
        const response = await axios({
            method : 'PUT',
            url : `/admin/user/blockPosts/${id}`
        });
        if(response.data){
            alert('blocked posting for user');
        }
    }

    const handleBlockComments = async(id)=>{
        const response = await axios ({
            method : 'PUT',
            url : `/admin/user/blockComments/${id}/${commentDays}`
        });
        if(response.data){
            alert('Commenting blocked for the user');
        }
    }

    const handleBlockPosts = async(id)=>{
         const response = await axios({
            method : 'PUT',
            url : `/admin/user/blockPosts/${id}/${postDays}`
         });
         if(response.data){
            alert('posts blocked succesfully');
         }
    }

    const handlePermanentBlock = async(id)=>{
        const response = await axios({
            method : 'PUT',
            url : `/admin/user/blockPosts/permanent/${id}`
        });
        if(response.data){
            alert('Posts and Comments blocked indefinitely');
        }
    }

    const handleUnblock = async(id)=>{
        const response = await axios ({
            method : 'PUT',
            url : `/admin/user/unblock/${id}`
        });
        if(response.data){
            alert('User unblocked');
        }
    }

    if (!allUsers) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                {allUsers.map(user => {
                    return (
                        <div>
                            {allUsers.map(user => {
                                return (
                                    <h5>{user.firstName + " " + user.lastName}
                                       <input style={{margin:'5px'}} 
                                            type="text" 
                                            name="postDays" 
                                            placeholder="block posts for days"
                                            onChange={(e)=>setPostDays(e.target.value)}    
                                        /><button onClick={()=>handleBlockPosts(user._id)}>block post</button>
                                       <input style={{margin:'5px'}} 
                                            type="text" 
                                            name="postDays" 
                                            placeholder="block comments"
                                            onChange={(e)=>{console.log(commentDays);setCommentDays(e.target.value);}}
                                        /><button onClick={((e)=>handleBlockComments(user._id))}>block comment</button>
                                       <Button
                                            variant="outlined" 
                                            color="warning"
                                            onClick={()=>handlePermanentBlock(user._id)}
                                            >Block Indefinitely</Button>
                                       <Button 
                                            variant="outlined" 
                                            color="success"
                                            onClick={()=>handleUnblock(user._id)}
                                            >Unblock</Button>
                                    </h5>
                                )
                            })}





                        </div>
                    )
                })}
            </div>
        )
    }
}