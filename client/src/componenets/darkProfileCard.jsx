import React, { useEffect, useState } from "react";
import axios from "axios";
import Like from "./Like";
import DisLike from "./Dislike";
import CommentBox from "./CommentBox";
import CommentViewBox from "./commentViewBox";

export default function DarkProfileCard(props) {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [likeCount, setlikeCount] = useState(props.data.Likes.length);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comments, setComments] = useState(null);

    const getComments = async () => {
        console.log('sending request to fetch comments');
        const response = await axios({
            method: 'GET',
            url: '/comment/getComments/' + props.data._id
        });
        setComments(response.data);
        console.log(response.data);
        setComments(response.data);
    
    }

    useEffect(()=>{
        getComments();
    }, []);


    const handleLike = async () => {
        if (!liked) {
            setlikeCount(likeCount + 1);
            setLiked(true);
        }
        if (disliked) {
            const response = await axios({
                method: 'PUT',
                url: '/post/removeDislikes/' + props.data._id
            })
            console.log(response);

            setDisliked(false);

        }
    }

    const handleDislike = async () => {
        if (!disliked) {
            setDisliked(true);
        }
        console.log('handle dislike called');
        if (liked) {
            console.log('liked');
            const response = await axios({
                method: 'PUT',
                url: '/post/removeLikes/' + props.data._id
            })
            console.log(response);
            setlikeCount(likeCount - 1);
            setLiked(false);
        }
    }



    const [show, setshow] = useState(false)
    const handleShow = () => {
        setshow(!show)
        setshow2(false)
    }
    const [show2, setshow2] = useState(false)
    const handleShow2 = () => {
        setshow2(!show2)
        setshow(false)
    }

    const LikeDis =
        [
            {
                id: 1,
                img: 'https://img.icons8.com/external-justicon-lineal-color-justicon/344/external-like-notifications-justicon-lineal-color-justicon.png',
                imgDis: 'https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-dislike-web-flaticons-flat-flat-icons-3.png'
            },
            {
                id: 2,
                img: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-like-dating-app-flaticons-lineal-color-flat-icons-4.png',
                imgDis: 'https://img.icons8.com/external-flatart-icons-flat-flatarticons/344/external-dislike-love-flatart-icons-flat-flatarticons.png'

            },
            {
                id: 3,
                img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-like-modern-dating-flaticons-flat-flat-icons-4.png',
                imgDis: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-dislike-web-flaticons-lineal-color-flat-icons-2.png'
            },
            {
                id: 4,
                img: 'https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-like-modern-dating-flaticons-flat-flat-icons-2.png',
                imgDis: 'https://img.icons8.com/color/344/unfriend-female.png'

            },

        ]



    const [like, setlike] = useState('https://img.icons8.com/external-kmg-design-outline-color-kmg-design/344/external-love-love-kmg-design-outline-color-kmg-design-2.png')
    const [dislike, setDislike] = useState('https://img.icons8.com/flat-round/344/thumbs-down.png')

    const getTime = (date) => {
        let hours = (new Date() - new Date(date)) / 36e5;
        console.log("hours " + hours);
        if (hours > 24) {
            return Math.floor(hours / 24);
        }
        else if (hours < 24 && hours > 1) {
            return Math.floor(hours);
        }
        else {
            return 'Less than an hour ago';
        }
    }


    return (
        <div className=" rounded-3xl p-2 bg-[#2c2e2f] bb my-3">
            <div className="h-20 bb flex justify-between items-center w-full">

                <div className="flex">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='h-10 w-10 mr-2 rounded-full border-2 border-blue-500' alt="" />
                    <div className="">
                        <h1 className="text-base">
                            {props.data.companyName || props.data.name}
                        </h1>
                        <h2 className='text-[12px] text-gray-400'>
                            {getTime(props.data.Date) + 'hrs'}
                        </h2>
                    </div>

                </div>
                <div className="h-10 flex w-10   rounded-full items-center justify-center bg-[#3d3f41]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </div>
            </div>

            <img src={props.data.ImgPath} className='h-60 rounded-t-3xl w-full' alt="" />
            <div className="pl-3">




                <div className="flex my-2 h-8  justify-between">
                    <div className="flex">

                        <img onClick={handleShow} src={like} className='h-6 cursor-pointer w-6 mr-2' alt="">

                        </img>
                        <img onClick={handleShow2} src={dislike} className='h-6 cursor-pointer mr-2 w-6' alt="">

                        </img>
                        <svg onClick={() => {
                            setShowCommentBox(!showCommentBox)
                        }} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 cursor-pointer w-6 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                    </div>
                    {show ? <div className="flex duration-500 transition ease-in bg-[#2c2e2fa1] h-8  w-32 relative -top-12 right-[480px] items-center  ">
                        {LikeDis.map((likeDis) => (

                            <Like likeDis={likeDis} handleLike={handleLike} key={likeDis.id} show={show} setshow={setshow} handleShow={handleShow} setlike={setlike} />

                        ))}
                    </div> : null}

                    {show2 ? <div className=" duration-500 transition ease-in bg-[#2c2e2fa1] h-8 flex w-32 relative -top-12 right-[440px] items-center   ">
                        {LikeDis.map((likeDis) => (


                            <DisLike handleDislike={handleDislike} _id={props.data._id} likeDis={likeDis} handleLike={handleLike} key={likeDis.id} show2={show2} setshow2={setshow2} handleShow={handleShow2} setDislike={setDislike} />

                        ))}



                    </div> : null}

                </div>

                <div className="flex my-2">
                    <div className="flex mr-2">
                        <h1 className='mr-1'>
                            {likeCount}
                        </h1>
                        <h2 className="text-gray-400 mt-1 text-[12px]">
                            Likes
                        </h2>
                    </div>
                    <div className="flex">
                        <h1 className='mr-1'>
                            200
                        </h1>
                        <h2 className="text-gray-400 mt-1 text-[12px]">
                            Comments
                        </h2>
                        {showCommentBox && <CommentBox _id={props.data._id} />}

                    </div>



                </div>

                <div className="flex my-2">
                    <h1 className='mr-1'>
                        {props.data.companyName || props.data.name}
                    </h1>
                    <h2 className="text-gray-400 mt-1 text-[12px]">
                        {props.data.Description}
                    </h2>
                </div>
                {comments && comments.map(comment=>{
                    console.log('printing the comment', comment);
                    return <CommentViewBox {...comment}/> 
                })}
            </div>
        </div>
    )
}


