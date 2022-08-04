import React from "react";
import axios from "axios";

const Like = (props) => {
    const like = props.likeDis
    const setlike = props.setlike
    const handleLike = props.handleLike
    const handleShow = props.handleShow;
    
    const handleLikee = async () => {
        console.log("POSTiD FROM " + props._id);
        setlike(like.img);
        console.log('Sending axios request');
        const response = await axios({
            method: 'PUT',
            url: `/post/like/${props._id}`
        });
        console.log(response);
    }


    return (

        <img onClick={() => {
            handleLikee();
            handleLike();
            handleShow();
        }} src={like.img} className='h-6 w-6  animate-bounce cursor-pointer mr-2' alt="" />

    )
}

export default Like;
