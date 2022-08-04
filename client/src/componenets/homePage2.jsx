import React, { useEffect, useState } from "react";
import { DarkProfile } from "./DarkProfile";
import axios from "axios";

export default function HomePage2() {
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
        return <div>
            {posts.map(post=>{
                return <DarkProfile {...post}></DarkProfile>
            })}
        </div>
    }


}