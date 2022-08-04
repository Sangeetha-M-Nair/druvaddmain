import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";


export default function ViewGroupPosts() {
    const [posts, setPosts] = useState([]);
    const params = useParams();
    const getGroupPosts = async () => {
        console.log('getting group posts');
        const response = await axios({
            method: 'GET',
            url: `/group/posts/${params.gid}`
        });
        console.log(response.data);
        setPosts(response.data);
    }

    useEffect(() => {
        getGroupPosts();
    }, [])

    return (
        <div>
            {
            posts.map(post => {
                return (
                    <div>
                        <img style={{ width: '25%' }} src={post.ImgPath} alt="post"></img>
                        <p>{post.Description}</p>
                    </div>
                )
            })
        }
        </div>
        

    )
}