import React, { useState } from 'react'
import axios from 'axios'

export const DarkProfile = (props) => {

    const [active1, setactive1] = useState(false)
    const [active2, setactive2] = useState(false)
    const [active3, setactive3] = useState(false)
    //const [liked, setLiked] = useState(false);
    const [likeCount, setlikeCount] = useState(props.Likes.length)
    
    const getTime = (date)=>{
        let hours = (new Date() - new Date(date))/36e5;
        if(hours > 24){
            return Math.floor(hours/24);
        }
        else if(hours < 24 && hours > 1){
            return Math.floor(hours);
        }
        else{
            return 'Less than an hour ago';
        }    
    }

    const handleLike = () => {
        
        setlikeCount(likeCount + 1);
            
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


    const handleActive1 = () => {
        setactive1(!active1)
        setactive2(false)
        setactive3(false)
    }
    const handleActive2 = () => {
        setactive2(!active2)
        setactive1(false)
        setactive3(false)
    }
    const handleActive3 = () => {
        setactive3(!active3)
        setactive2(false)
        setactive1(false)
    }

    const data = [
        {
            id: 1,
            name: 'Adison Mango',
            profile: '',
            background: ''
        },
        {
            id: 2,
            name: 'Ahmad Darwart ',
            profile: '',
            background: ''
        },
        {
            id: 3,
            name: 'Lindsey Darwat',
            profile: '',
            background: ''
        },
        {
            id: 4,
            name: 'Adison Mango',
            profile: '',
            background: ''
        },
    ]

    return (
        <div className='flex h-screen bg-[#1b1a1d] text-white'>
            <div className="w-1/4 bb"></div>
            <div className="w-2/4 bb">
                <div className="flex  h-12 bg-[#2c2e2f] my-3  items-center w-full rounded-full ">
                    <button onClick={handleActive1} className={`${active1 ? '  rounded-full h-10 bg-[#3f8cfb] w-1/3' : '  rounded-full h-10 w-1/3'}`}>
                        Explore
                    </button>
                    <button onClick={handleActive2} className={`${active2 ? '  rounded-full bg-[#3f8cfb] h-10 w-1/3' : '  rounded-full h-10 w-1/3'}`}>
                        Discover
                    </button>
                    <button onClick={handleActive3} className={`${active3 ? '  rounded-full h-10 bg-[#3f8cfb] w-1/3' : '  rounded-full h-10 w-1/3'}`}>
                        Explore
                    </button>

                </div>

                <div className=" rounded-3xl p-2 bg-[#2c2e2f] bb">
                    <div className="h-20 bb flex justify-between items-center w-full">

                        <div className="flex">
                            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='h-10 w-10 mr-2 rounded-full border-2 border-blue-500' alt="" />
                            <div className="">
                                <h1 className="text-base">
                                {props.data.companyName || props.data.name}
                                </h1>
                                <h2 className='text-[12px] text-gray-400'>
                                   {getTime(props.data.Date)} 
                                  
                                </h2>
                            </div>

                        </div>
                        <div className="h-10 flex w-10   rounded-full items-center justify-center bg-[#3d3f41]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </div>
                    </div>

                    <img src={props.ImgPath} className='h-60 rounded-t-3xl w-full' alt="" />
                    {console.log(props._id)}
                    <div className="pl-3">
                        {show ? <div className="flex duration-500 transition ease-in bg-[#2c2e2fa1] h-8  w-32 absolute items-center top-[360px] ">
                            {LikeDis.map((likeDis) => (
                                
                                <Like _id = {props._id} likeDis={likeDis} handleLike={handleLike} key={likeDis.id} handleShow={handleShow} setlike={setlike} />

                            ))}
                        </div> : null}

                        {show2 ? <div className=" duration-500 transition ease-in bg-[#2c2e2fa1] h-8 flex w-32 absolute items-center left-[355px] top-[360px]  ">
                            {LikeDis.map((likeDis) => (


                                <DisLike likeDis={likeDis} handleLike={handleLike} key={likeDis.id} handleShow={handleShow2} setDislike={setDislike} />

                            ))}



                        </div> : null}



                        <div className="flex my-2">
                            <img onClick={handleShow} src={like} className='h-6 cursor-pointer w-6 mr-2' alt="">

                            </img>
                            <img onClick={handleShow2} src={dislike} className='h-6 cursor-pointer mr-2 w-6' alt="">

                            </img>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 cursor-pointer w-6 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
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
                            </div>



                        </div>

                        <div className="flex my-2">
                            <h1 className='mr-1'>
                                Amat Pauji
                            </h1>
                            <h2 className="text-gray-400 mt-1 text-[12px]">
                                {props.Description}
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-1/4 bb"></div>
        </div>
    )
}



export const Like = (props) => {
    const like = props.likeDis
    const setlike = props.setlike
    const handleLike = props.handleLike

    const handleLikee = async() => {
        console.log("POSTiD FROM "+  props._id);
        setlike(like.img);
        console.log('Sending axios request');
        const response = await axios({
            method : 'PUT',
            url : `/post/like/${props._id}`
        });
        console.log(response);  
    }


    return (

        <img onClick={() => { handleLikee(); handleLike() }} src={like.img} className='h-6 w-6  animate-bounce cursor-pointer mr-2' alt="" />

    )
}

export const DisLike = (props) => {
    const like = props.likeDis
    const setDislike = props.setDislike
    const handleDisLike = () => {
        setDislike(like.imgDis)
    }

    return (

        <img onClick={() => setDislike(like.imgDis)} src={like.imgDis} className='h-6 w-6  animate-bounce cursor-pointer mr-2' alt="" />
    )
}
