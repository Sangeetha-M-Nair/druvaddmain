import { Button } from "@mui/material";
import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router";
import { UserContext } from "../userContex";

export default function ViewOneGroup() {
    const { user, setUser } = useContext(UserContext);
    const [group, setGroup] = useState(null);
    setUser(user);
    //console.log('from view one group', user);
    const params = useParams();
    const navigate = useNavigate();
    const getGroup = async () => {
        const response = await axios({
            method: 'GET',
            url: `/group/viewGroup/one/${params.gid}`
        });
        console.log(response.data);
        setGroup(response.data);
    }

    const turnOffPostApproval = async (e) => {
        console.log('Sending request');
        e.preventDefault();
        const response = await axios({
            method: 'PUT',
            url: `/group/settings/postApprove/off/${params.gid}`
        });
        if (response.data) {
            alert('Post Approve turned off');
            console.log(response.data);
            setGroup(response.data);
        }
    }

    const turnOnPostApproval = async (e) => {
        console.log('Sending request');
        e.preventDefault();
        const response = await axios({
            method: 'PUT',
            url: `/group/settings/postApprove/on/${params.gid}`
        });
        if (response.data) {
            alert('Post Approve turned on');
            console.log(response.data);
            setGroup(response.data);
        }
    }

    const turnOffMemberApproval = async (e) => {
        console.log('Sending request');
        e.preventDefault();
        const response = await axios({
            method: 'PUT',
            url: `/group/settings/memberApprove/off/${params.gid}`
        });
        if (response.data) {
            alert('Member Approve turned off');
            console.log(response.data);
            setGroup(response.data);
        }
    }

    const turnOnMemberApproval = async (e) => {
        console.log('Sending request');
        e.preventDefault();
        const response = await axios({
            method: 'PUT',
            url: `/group/settings/memberApprove/on/${params.gid}`
        });
        if (response.data) {
            alert('Member Approve turned on');
            console.log(response.data);
            setGroup(response.data);
        }
    }

    const viewJoinRequests = async () => {
        navigate('joinRequests');
    }

    const createPost = () => {
        navigate('createGroupPost');
    }

    const viewPendingPosts = ()=>{
        navigate('viewPendingPosts');
    }

    const viewPosts = ()=>{
        navigate('viewGroupPosts');
    }

    const viewFriendsNotInGroup = ()=>{
        navigate('viewFriendsNotInGroup');
    }

    const buttonViewAdmin = () => {
        if (user) {
            if (user._id === group.superAdmin) {
               <Button onClick={viewPendingPosts} variant="outlined" color="success" >View Peniding Posts</Button>
                    return <div style={{ padding: '10px' }}>
                    <Button onClick={turnOffPostApproval} variant="outlined" color="warning">Turn Off Post Approval</Button>
                    <Button onClick={turnOnPostApproval} variant="outlined" color="success">Turn On Post Approval</Button>
                    <Button onClick={turnOffMemberApproval} variant="outlined" color="warning">Turn Off Member Approval</Button>
                    <Button onClick={turnOnMemberApproval} variant="outlined" color="success">Turn On Member Approval</Button>
                    <Button onClick={viewJoinRequests} variant="outlined" color="success" >View Join Requests</Button>
                    <Button onClick={viewFriendsNotInGroup}>Invite Friends</Button> 
                    {/* <Button onClick={viewApprovedPosts} variant="outlined" color="success">Group Posts</Button> */}
                </div>
            }
        }
    }
    const buttonViewUser = () => {
        if (user) {
            if (group.members.includes(user._id)) {
                return <div>
                    <Button onClick={createPost} variant="outlined">Create a post</Button>
                    <Button onClick={viewPosts}>View Posts</Button>
                    <Outlet/>
                </div>
            }
        }
    }


    useEffect(() => {
        getGroup();
    }, []);

    if (!group) {
        return <div>
            loading...
        </div>
    }

    return <div style={{ border: '1px solid black', borderRadius: '10px', marginTop: '10px', padding: '10px' }}>

        <h1>name : {group.name}</h1>
        description : {group.description}
        <p>Post Approval Required : {group.postApproveRequired ? 'Required' : 'Not Required'}</p>
        <p>Member Approval Required : {group.memberApproveRequired ? 'Required' : 'Not Required'}</p>
        {buttonViewAdmin()}
        {buttonViewUser()}
    </div>


}