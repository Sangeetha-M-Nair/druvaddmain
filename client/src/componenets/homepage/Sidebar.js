import React, { useState, useEffect } from 'react'
import {
    FcStackOfPhotos,
    FcVideoFile,
    FcCalendar,
    FcBrokenLink,
    FcLikePlaceholder,
    FcSettings,
} from "react-icons/fc";
import { useContext } from "react";
import { UserContext } from '../userContex';
// import {AiFillSchedule} from "react-icons/ai";
import { BsPatchCheckFill, BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots, FaShareSquare, FaRetweet } from "react-icons/fa";
import axios from 'axios';
import SinglePost from './singlePost';

function Sidebar() {
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [desc, setDesc] = useState('');
    const { user, setUser } = useContext(UserContext);
    const [requestsf, setRequestsf] = useState([]);
    const getFriendRequests = async () => {
        console.log('sending requests to get all friend requests');
        const response = await axios({
            method: 'get',
            url: '/user/displayfriendRequests'
        });
        console.log(response.data);
        setRequestsf(response.data);
    }

    const acceptRequest = async (id) => {
        console.log('accepting request');
        const response = await axios({
            method: 'put',
            url: `/user/friendRequestAccept/${id}`
        });
        console.log(response.data);
        alert(response.data);
    }

    const rejectRequest = async (id) => {
        const response = await axios({
            method: 'put',
            url: `/user/friendRequestReject/${id}`
        });
        console.log(response.data);
        alert('rejected');
    }

    
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        console.log('Sending request to get all posts');
        const response = await axios({
            method: 'get',
            url: '/post/allposts'
        });
        console.log(response.data);
        setPosts(response.data);
    }

    const getPostsIfNotLoggedIn = async () => {
        const response = await axios({
            method: 'GET',
            url: 'post/postsForLogOut/'
        });
        console.log(response.data);
        setPosts(response.data);
    }


    //getting the current logged in user 
    const getData = async () => {
        console.log('sending request');
        const resp = await axios({
            method: 'GET',
            url: '/user/getCuser'
        });
        //console.log(resp.data);
        if (resp.data.user) {
            setUser(resp.data.user);
        }

    }

    useEffect(() => {
        console.log("this is the user" + user);
        getData();
        if (user === null) {
            console.log('No user');
            getPostsIfNotLoggedIn();
        }
        else {
            getPosts();
            getFriendRequests();
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("postImg", selectedFile);
        formData.append('Description', desc);
        formData.append('name', user.firstName + " " + user.lastName);
        //console.log(formData);
        for (var [key, value] of formData.entries()) {
            //console.log(key, value);
        }
        try {
            const response = await axios({
                method: "post",
                url: "/post/addPost/user",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            if (response.data.success) {
                alert('Posted successfully');
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }
    const [primaryShow, setprimaryShow] = useState(true)
    const [generalShow, setgeneralShow] = useState(false)
    const [requestShow, setrequestShow] = useState(false)
    const handlePrimary = () => {
        setprimaryShow(true)
        setgeneralShow(false)
        setrequestShow(false)
    }
    const handlegeneral = () => {
        setprimaryShow(false)
        setgeneralShow(true)
        setrequestShow(false)
    }
    const handlerequest = () => {
        setprimaryShow(false)
        setgeneralShow(false)
        setrequestShow(true)
    }

    const primary = [
        {
            id: 1,
            name: "Anmol Rathi",
            img: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 2,
            name: "Palvi ",
            img: 'https://images.pexels.com/photos/4519122/pexels-photo-4519122.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 3,
            name: "Pintu",
            img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 4,
            name: "Shintu",
            img: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 5,
            name: "Anmol Rathi",
            img: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 6,
            name: "Anmol Rathi",
            img: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
    ]
    const general = [
        {
            id: 1,
            name: "Santo Sam",
            img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 2,
            name: "Kumari ",
            img: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 3,
            name: "Pintu",
            img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 4,
            name: "Shintu",
            img: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 5,
            name: "Anmol Rathi",
            img: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 6,
            name: "Anmol Rathi",
            img: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'
        },
    ]
    const requests = [
        {
            id: 1,
            name: "Richa Chada",
            img: 'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 2,
            name: "Rattan ",
            img: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 3,
            name: "Pintu",
            img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 4,
            name: "Shintu",
            img: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 5,
            name: "Anmol Rathi",
            img: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'
        },
        {
            id: 6,
            name: "Anmol Rathi",
            img: 'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600'
        },
    ]



    return (
        <div className=' bg-black relative md:flex'>
            <div className='flex z-0 lg:w-[75%] lg:relative'>
                {/* Left side */}
                {/* <div className='pt-6'> */}


                <div className='lg:w-[20%] w-[20%] md:w-[15%] rounded-xl h-full z-10 lg: lg:p-4 sm:p-0 p-1 bg-black text-white lg:fixed top-0 left-0 relative'>
                    {/*Profile Section */}
                    {user && <div className='lg:block hidden'>
                        <div className='flex border-2 p-2 pt-1 pl-4 rounded-2xl bg-gray-900 border-gray-900'>
                            <div>
                                <img
                                    className="object-cover w-10 h-10 mt-3 rounded-full"
                                    src="data:image/jpeg;base64,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"
                                    alt=""
                                />
                            </div>
                            <div className='ml-2 mt-2'>
                                <h5 className='ml-1 font-bold mt-1'>{user.firstName + " " + user.lastName}</h5>
                                <h5 className=' text-slate-400 text-sm'>{user.email}</h5>
                            </div>
                        </div>
                    </div>}

                    {/*Menu Section*/}
                    <div className='border-2 mt-4 pt-5 w-[8%] lg:w-full rounded-2xl bg-gray-900 border-gray-900 pb-5 pl-0 pr-0 fixed lg:static'>
                        <a className=' no-underline '>
                            <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0  p-2'>

                                <div className='lg:mx-0 lg:ml-2  '>
                                    <i className="bi bi-house-door text-slate-400 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                                </div>
                                <div className='ml-2 lg:block text-sm hidden text-lg'>
                                    <h5>Home</h5>
                                </div>


                            </div>
                        </a>
                        <a>
                            <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2'>

                                <div className='lg:mx-0 lg:ml-2  '>
                                    <i className="bi bi-compass text-slate-400 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                                </div>
                                <div className='ml-2 lg:block hidden text-lg'>
                                    <h5>Explore</h5>
                                </div>

                            </div>
                        </a>
                        <a>
                            <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2'>

                                <div className='lg:mx-0 lg:ml-2  '>
                                    <i className="bi bi-bell text-slate-400 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                                </div>
                                <div className='ml-2 lg:block hidden text-lg'>
                                    <h5>Notifications</h5>
                                </div>

                            </div>
                        </a>
                        <a>
                            <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2'>

                                <div className='lg:mx-0 lg:ml-2  '>
                                    <i className="bi bi-envelope text-slate-400 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                                </div>
                                <div className='ml-2 lg:block hidden text-lg'>
                                    <h5>Messages</h5>
                                </div>

                            </div>
                        </a>
                        <a>
                            <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2'>

                                <div className='lg:mx-0 lg:ml-2  '>
                                    <i className="bi bi-bookmark text-slate-400 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                                </div>
                                <div className='ml-2 lg:block hidden text-lg'>
                                    <h5>Bookmarks</h5>
                                </div>

                            </div>
                        </a>
                        <a>
                            <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2'>

                                <div className='lg:mx-0 lg:ml-2  '>
                                    <i className="bi bi-graph-up-arrow text-slate-400 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                                </div>
                                <div className='ml-2 lg:block hidden text-lg'>
                                    <h5>Analytics</h5>
                                </div>

                            </div>
                        </a>
                        <a>
                            <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0  p-2 font-bold border-l-4 text-red-400 border-red-400 bg-black pt-2'>

                                <div className='lg:mx-0 lg:ml-2  '>
                                    <i className="bi bi-palette lg:text-base md:text-2xl py-2 lg:py-0"></i>
                                </div>
                                <div className='ml-2 lg:block hidden text-lg'>
                                    <h5>Theme</h5>
                                </div>

                            </div>
                        </a>
                        <a>
                            <div className='flex h-12 lg:pl-6  gap-4 lg:mt-0 font-bold p-2'>

                                <div className='lg:mx-0 lg:ml-2  '>
                                    <i className="bi bi-gear text-slate-400 lg:text-base md:text-2xl py-2 lg:py-0"></i>
                                </div>
                                <div className='ml-2 lg:block hidden text-lg'>
                                    <h5>Settings</h5>
                                </div>

                            </div>
                        </a>
                    </div>

                    {/*Button */}
                    <div className='lg:block hidden'>
                        <button className='bg-red-400 boder-2 border-red-400 p-2 mt-5 mb-4 rounded-3xl justify-center text-center w-full' >
                            <span className=''>
                                Create post
                            </span>
                        </button>
                    </div>
                </div>

                {/* </div> */}
                {/* middle section */}
                {/* <div className='w-[50%] bg-white'> */}
                <div className="lg:w-[75%] lg:ml-[19rem] w-full mr-0 md:ml-1 overflow-hidden pt-4 text-white pr-4">

                    {user && <div className="bg-gray-900 text-center rounded-[5rem] px-1 lg:h-10 h-10 ">
                        <div className="flex lg:gap-2 items-center lg:ml-2 pt-1">
                            <div className='flex grow'>
                                <div className="cn hidden md:block">
                                    <img
                                        className=" rounded-full object-cover w-8 h-8 md:w-10 relative "
                                        src="data:image/jpeg;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div className=" grow text-sm lg:text-base ml-2 ">
                                    <input
                                        className="w-full h-full text-white bg-gray-900 rounded-xl"
                                        type="text"
                                        placeholder="What's on your mind, Dina?"
                                        value={desc}
                                        onChange={(e) => {
                                            setDesc(e.target.value);
                                        }}
                                        name="Description"

                                    />
                                    <input
                                        type="file"
                                        onChange={handleFileSelect}
                                    />
                                </div>
                            </div>
                            <div className='p-0 text-sm lg:text-xl'>
                                <button onClick={handleSubmit} className='bg-red-400 md:w-28 lg:px-4 rounded-2xl h-8 w-12 lg:pb-1 '>
                                    Post
                                </button>
                            </div>
                        </div>


                    </div>}


                    {/* 1st layer end */}


                    <div className="bg-gray-900  rounded-2xl p-4 lg:pt-2 mb-4 mt-4">
                        <div className="text-sm lg:text-base">
                            {
                                posts.map(post => <SinglePost{...post} />)
                            }
                        </div>

                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className='md:w-[22%] z-10 pt-6 text-white fixed md:static bottom-0 right-4 lg:right-2 block md:my-0 md:top-0 md:mr-3  text-sm lg:text-base'>
                {/* messages */}
                <div className='border-[1px] lg:border-2 md:border-gray-900 sm:border-white rounded-2xl p-2 bg-gray-900'>
                    <div className='md:flex justify-center'>
                        <div className='justify-start grow px-2 hidden md:block'>Messages</div>
                        <div className='pr-2'>
                            <i class="bi bi-pencil-square"></i>
                        </div>
                    </div>
                    <div className='hidden md:block'>

                        <div className=' flex lg:justify-items-stretch lg:gap-4  justify-center mx-auto overflow-hidden mt-2'>
                            <div onClick={handlePrimary} className='lg:p-2 p-1 cursor-pointer border-b-2'>Primary</div>
                            <div onClick={handlegeneral} className='lg:p-2 p-1 cursor-pointer border-b-2'>General</div>
                            <div onClick={handlerequest} className='lg:p-2 p-1 cursor-pointer border-b-2'>Request(2)</div>
                        </div>
                        <div className=''>
                            {primaryShow ?
                                primary.map(data => (

                                    <div className='flex pl-2 pt-4 lg:p-3 lg:gap-2'>
                                        <div className='p-2'>
                                            <img
                                                className=" rounded-full object-cover lg:w-8 lg:h-8 md:w-6 md:h-6 relative pt-0 -mt-1 "
                                                src={data.img}
                                                alt=""
                                            />
                                        </div>
                                        <div className=''>
                                            <div className='pt-1 lg:pt-0'>{data.name}</div>
                                            <div className='text-slate-400 text-sm hidden lg:block'>Just wake up bruh</div>
                                        </div>
                                    </div>
                                ))
                                : null}

                            {requestShow ?
                                requests.map(data => (

                                    <div className='flex pl-2 pt-4 lg:p-3 lg:gap-2'>
                                        <div className='p-2'>
                                            <img
                                                className=" rounded-full object-cover lg:w-8 lg:h-8 md:w-6 md:h-6 relative pt-0 -mt-1 "
                                                src={data.img}
                                                alt=""
                                            />
                                        </div>
                                        <div className=''>
                                            <div className='pt-1 lg:pt-0'>{data.name}</div>
                                            <div className='text-slate-400 text-sm hidden lg:block'>Just wake up bruh</div>
                                        </div>
                                    </div>
                                ))
                                : null}

                            {generalShow ?
                                general.map(data => (

                                    <div className='flex pl-2 pt-4 lg:p-3 lg:gap-2'>
                                        <div className='p-2'>
                                            <img
                                                className=" rounded-full object-cover lg:w-8 lg:h-8 md:w-6 md:h-6 relative pt-0 -mt-1 "
                                                src={data.img}
                                                alt=""
                                            />
                                        </div>
                                        <div className=''>
                                            <div className='pt-1 lg:pt-0'>{data.name}</div>
                                            <div className='text-slate-400 text-sm hidden lg:block'>Just wake up bruh</div>
                                        </div>
                                    </div>
                                ))
                                : null}

                        </div>

                    </div>

                </div>
                {/* Request */}
                <div className='hidden md:block'>
                    <div className='py-2'>Requests</div>
                    {console.log(requestsf)}
                    {
                        requestsf.map(request=>{
                            return (<div className='bg-gray-900 border-gray-900 rounded-2xl p-4 pb-2 mb-2'>
                            <div className='flex'>
                                <div className='p-2'>
                                    <img
                                        className=" rounded-full object-cover w-8 h-8 relative pt-0 -mt-1 md:w-6 md:h-6"
                                        src="data:image/jpeg;base64,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"
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <div className='lg:text-xl font-bold'>{request.firstName + ' ' + request.lastName}</div>
                                    <div className='text-slate-500'> 8 mutual friends</div>
                                </div>
    
                            </div>
                            <div className='flex gap-2 mt-2 justify-center'>
                                <div className='pr-2 pb-2'>
                                    <button
                                        onClick={()=>acceptRequest(request._id)} 
                                        className='bg-red-400 lg:w-28 px-4 md:px-2 lg:px-4 rounded-2xl h-8 '
                                    >
                                        Accept
                                    </button>
                                </div>
                                <div className='pr-2 pb-2'>
                                    <button 
                                        onClick={()=>rejectRequest(request._id)}
                                        className='bg-white text-black lg:w-28 px-2 lg:px-4 rounded-2xl h-8 '
    
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
    
                        </div>)
                        })
                    }
                </div>
            </div>
        </div>


    )
}

export default Sidebar
