import axios from "axios";
import React from "react"

const DisLike = (props) => {
    console.log(props);
    const like = props.likeDis
    const setDislike = props.setDislike
    const handleShow = props.handleShow;
    
    // console.log("This is handle show 2", handleShow2);
    const handleDisLikee = async() => {
        console.log('SENDING dislike request');
        setDislike(like.imgDis)
        const response = await axios({
            method : 'PUT',
            url : '/post/dislike/'+props._id
        });
        console.log(response);
    }

    return (

        <img onClick={() => {
            handleShow();
            handleDisLikee();
            props.handleDislike();
            
        }} src={like.imgDis} className='h-6 w-6  animate-bounce cursor-pointer mr-2' alt="" />
    )
}

export default DisLike;