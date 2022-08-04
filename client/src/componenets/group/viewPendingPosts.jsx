import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export default function ViewPendingPosts() {
    const params = useParams(0);
    const [ reload, setReload ] = useState()
    const [ pendingPosts, setPendingPosts ] = useState([]);
    const getPosts = async()=>{
        const response = await axios ({
            method : 'GET',
            url : `/group/getPendingPosts/${params.gid}`
        });
        
        console.log(response.data);
        setPendingPosts(response.data);
        
    }
    //takes post id as params 
    const deletePost = async(pid)=>{
        const response = await axios({
            method : 'put',
            url : `/group/deletePost/${params.gid}/${pid}`
        });
        alert('Post deleted');
        setReload(reload + 1);
    }

    const approvePost = async(pid)=>{
        console.log('sending request to approve post');
        const response = await axios({
            method : 'put',
            url : `/group/approvePost/${params.gid}/${pid}`
        });
        alert('Post approved');
        setReload(reload + 1);
        console.log('response received for approving post');
        console.log(response.data);
    }

    useEffect(()=>{
        getPosts();
    }, [reload]);

    return <div>
        These are the pending posts
        {
            pendingPosts.map(post=>{
                return (
                    <div>
                        <img style={{width:'25%'}} src={post.ImgPath} alt="post"></img>
                        <p>{post.Description}</p>
                        <Button 
                            variant="outlined" 
                            color="warning"
                            onClick={()=>deletePost(post._id)}
                        >Delete</Button>
                        &nbsp;
                        <Button 
                            variant="outlined" 
                            color="success"
                            onClick={()=>{approvePost(post._id)}}
                        >Approve</Button>
                    </div>
                )
            })
        } 
    </div>
}