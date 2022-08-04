import React, { useState, useEffect } from "react";
import axios from "axios";
import DarkProfileBar from "./darkProfileBar";
import DarkProfileCard from "./darkProfileCard";

export default function HomePage3() {
    const [posts, setPosts] = useState(null);
    const getData = async () => {
        console.log('Sending request to get all posts');
        const response = await axios({
            method: 'get',
            url: '/post/allposts'
        });
        console.log(response.data);
        setPosts(response.data);
    }

    useEffect(() => {
        getData();
    }, [])
    if (!posts) {
        return <div>Loading</div>
    }
    else {
        return (
            <div className='flex h-full bg-[#1b1a1d] text-white'>
                <div className="w-1/4 bb"></div>
                <div className="w-2/4 bb">
                    <DarkProfileBar />
                    {posts.map(post=><DarkProfileCard data = {post} key = {post._id}/>)}
                    
                </div>
                <br></br>
                <div className="w-1/4 bb"></div>
            </div>
        )
    }


}