import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useLocation } from "react-router";
import SinglePost from "./singlePost";


export default function ViewFullPost(){
    const params = useParams();
    const [ post, setPost ] = useState(null);
    const getPost = async()=>{
        const response = await axios({
            method : 'GET',
            url : `/post/getPost/${params.id}`
        });
        console.log(response.data);
        setPost(response.data);
    }

    useEffect(()=>{
        getPost();
    })
    if(!post){
        return <div>Loading...</div>
    }
    else{
        return <SinglePost {...post}/>
    }
}