import getDays from "./utility/getTime";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "./userContex";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { Button } from "@mui/material";

export const users =
{
  id: "1",
  Name: "Diane Cooper",
  Gender: "Female",
  Email: "diane.cooper@example.com",
  Post: "15",
  YoutubeImage:
    "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  InstagramImage:
    "https://images.pexels.com/photos/4099414/pexels-photo-4099414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

  Education: "@dianecooper12",
  UserName: "@dianecooper12",
  MonthlyViews: "5.5K",
  YoutubeName: "Musical Cooper",
  InstagramName: "cooper12",
  Subscribers: "1.2K",
  Videos: "42",
  InstagramPost: "102",
  InstagramFollowers: "2.5K",

  Followers: "200",
  DOB: "24th Feb, 1997",
  City: "Chandigarh",
  Skills: "Singing, Dancing",
  Languages: "English, French",
  Instagram: "diane.cooper12",
  Upcoming: "2",
};



function ProfileSocial() {
  const [userP, setUserP] = useState(); //
  const [education, setEducation] = useState([]);
  const [youTubeImg, setYoutubeImg] = useState("#");
  const navigate = useNavigate();
  const [folloContentVal , setFollowContentVal ] = useState('');
  const [ reload, setRelaod ] = useState(0);
  const { user, setUser } = useContext(UserContext);
  let fcv2; //flow content 2
  let frv2; //friend request 
  //console.log('this is user', user);

  const params = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const API_KEY = 'AIzaSyA8Uh08gRnWPMCDW7NIKeCjjvrvoGS16r0';
  const getChannelImg = async (channelId) => {
    const response = await axios({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${API_KEY}`
    });
    //console.log(response.data);
    //console.log(response.data.items[0].snippet.thumbnails.default.url);
    setYoutubeImg(response.data.items[0].snippet.thumbnails.default.url);
  }

  const getChannelDetails = async (channelId) => {
    const response = await axios({
      method: 'GET',
      url: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`
    });
    //console.log(response.data.items[0].statistics);
    setChannelDetails(response.data.items[0].statistics);
  }


  const getData = async () => {
    console.log('sending request');
    const resp = await axios({
      method: 'GET',
      url: '/user/profile/' + params.id
    });
    //console.log(resp.data);
    setUserP(resp.data);
    getChannelImg(resp.data.youtubeChannelId)
    getChannelDetails(resp.data.youtubeChannelId);
  }

  const getEducation = async()=>{
    const resp = await axios({
      method : 'GET',
      url : `/getUserEducation/${params.id}`
    });
    //console.log(resp.data);
    setEducation(resp.data);
  }

  const getCurrentUser = async()=>{
    if(!user){
      const response = await axios ({
        method : 'GET',
        url : '/user/getCuser'
      });
      //console.log(response.data);
      //console.log('this is current user', response.data.user);
      setUser(response.data.user);
    }
  }

  const followButtonContent = ()=>{
    if(user){
      if(user._id === userP._id){
        fcv2 = 'Edit Profile';
        return 'Edit Profile'
      }
      else{
        if(userP.followers.includes(user._id)){
          console.log('it exists');
         fcv2 = 'Unfollow';
          return 'Unfollow'
        }
        else{
          fcv2 = 'Follow';
          return 'Follow'
        }
      }
    }
    else{
      console.log('No user');
    }
  }

  const handleFollowButton = async(e)=>{
    e.preventDefault();
    if(fcv2 === 'Follow'){
      console.log('Send request for following');
      const response = await axios ({
        method : 'PUT',
        url : `/user/following/${userP._id}`
      });
      setFollowContentVal('Unfollow');
      console.log(response);
    }
    else if(fcv2 === 'Unfollow'){
      console.log('Request unfollow');
      const response = await axios ({
        method : 'PUT',
        url : `/user/unfollowing/${userP._id}`
      });
      setFollowContentVal('Follow');
      console.log(response.data);
    }
  }

  const friendRequestButtonContent = ()=>{
    if(!user){
      frv2 = 'Send Friend Reuqest'
      return 'Send Friend Request'
    }
    else{
      if(user._id === userP._id){
        frv2 = 'Logout'
        return 'Logout'
      }
      else if(userP.friendRequests.includes(user._id)){
        frv2 = 'Friend Request Sent'
        return 'Friend Request Sent'
      }
      else{
        frv2 = 'Send Friend Reuqest'
        return 'Send Friend Request'
      }
    }
  }
  

  const handleFriendRequestClick = async()=>{
    if(!user){
      alert('Please Login First');
    }
    else{
      if(frv2 === 'Send Friend Reuqest'){
        alert('sending friend request');
        const response = await axios({
          method : 'PUT',
          url : `/user/sendFriendRequest/${params.id}`
        });
        console.log(response.data);
        alert(response.data);
        setRelaod(reload + 1);
      }
      else{
        if(frv2 === 'Logout'){
          alert('Logout');
        }
      }
    }
  }

  // const friendRequestButton = async()=>{
  //   if(user && userP){
  //       return <Button>Send Friend Request</Button>
  //   }
  // }



  const logout = async () => {
    const resp = await axios({
      url: '/user/logout',
      method: 'GET'
    });
    if (resp.data === 'LO') {
      navigate('/');
    }
  }


  useEffect(() => {
    getData();
    getEducation();
    getCurrentUser();
    followButtonContent();
  }, [folloContentVal, reload])


  if (!userP) {
    return <div>Loading...</div>
  }
  else if (!channelDetails) {
    return <div>Loading...</div>
  }
  else {
    return (
      <div className="App  bg-[#f1f5f9]">
        <div className="flex w-full">
          <div className="flex lg:w-[325px] ">
            <SideBar />
          </div>

          <div className="flex flex-col w-full h-screen">
            <div className="flex   items-center h-16 justify-between w-full border-b lg:p-4  ">
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"

                  className="text-[#0d53fd] mr-4"
                  fill="currentColor"
                  width='29'
                  height='29'
                  class="bi bi-person  "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
                <h1 className="font-bold lg:text-xl mb-0  text-sm pt-1">{userP.name}</h1>
              </div>
              <div className="flex items-center">
                <div
                  className="  flex items-center rounded-xl
         pl-3 duration-300 cursor-pointer  border border-solid lg:w-32 w-24 h-6 border-[#cbd0d5] "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  <input
                    className="text-sm  ml-1 w-full focus:outline-none"
                    placeholder="Serach"
                  />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi text-[#0d53fd] lg:ml-4 ml-2  bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                <i className="bi ml-2 bi-bell-fill bg-white text-gray-600 rounded-full w-8 h-6 flex items-center justify-center"></i>
              </div>
            </div>

            <div className="flex  items-center w-full justify-between   border-b lg:p-4 h-16">
              <div className="flex items-center">
                <h1 className="text-[#0d53fd] font-bold   text-[22px] lg:mr-3">Artist List</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 lg:mr-3  text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <h1 className=" font-bold text-[#888d91]  text-[22px]">{userP.firstName + " " + userP.lastName}</h1>
              </div>
              <div className="flex">
                <div className="flex bg-white w-8 h-6 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="text-[#8f96a1]"
                    fill="currentColor"
                    class="bi bi-printer-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                  </svg>
                </div>
                <div className="flex ml-4 w-24 h-6 items-center justify-center bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="text-[#8f96a1]"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                  <h1 className=" text-[#8f96a1] mb-0 text-sm pl-1">Edit Artist</h1>
                </div>
              </div>
            </div>


            <div className="flex flex-col w-full bg-[#f1f5f9] h-full">
              <div className="flex     ">
                <div className="flex flex-col lg:flex-row w-full bg-[#fffdfe] m-6  ">
                  <div className="lg:w-1/3  flex flex-col items-center lg:p-12 p-8">

                    <img
                      src="https://images.pexels.com/photos/2010877/pexels-photo-2010877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="lg:h-32   mb-3 lg:w-32 border-4 border-solid border-gray-300   h-20 w-20 rounded-full"
                      alt=""
                    />
                    <h1 className="text-2xl  font-bold ">{userP.firstName + " " + userP.lastName}</h1>
                    <h2 className="text-[#888d91]  font-bold mb-3 text-sm">
                      {userP.userPName}
                    </h2>
                    <div className="flex mb-3">
                      <div className="flex flex-col items-center">
                        <h1 className="font-bold text-[22px]">{userP.followers.length}</h1>
                        <h2 className="text-[#888d91] font-bold text-[12px]">
                          followers 
                        </h2>
                      </div>
                      <div className=" bg-[#d6dce1] w-[2px] mx-8 h-full " />
                      <div className="flex flex-col items-center">

                        <h1 className="font-bold text-[22px]">{userP.following.length}</h1>
                        <h2 className="text-[#888d91] font-bold text-[12px]">
                          Following
                        </h2>
                      </div>

                    </div>
                    <button onClick={handleFollowButton} className="border-4 rounded-xl text-xl font-bold border-[#d6dce1] w-full h-12 ">
                      {followButtonContent()}
                    </button>

                    <button
                      id='frqb'
                      onClick={handleFriendRequestClick} 
                      className="border-4 rounded-xl text-xl font-bold border-[#d6dce1] w-full h-12 ">
                      {friendRequestButtonContent()}
                    </button>
                   

                  </div>
                  <div className=" bg-[#f6f7f9] w-[4px]  h-full " />
                  <div className="lg:w-2/3 ">
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 h-full p-8">




                      <div className="flex flex-col border-b-2 border-[#eff4f8]">
                        <h1 className="font-bold text-[#888d91] text-[16px]">
                          Name
                        </h1>
                        <h2 className="text-[16px]">{userP.firstName + " " + userP.lastName}</h2>
                      </div>
                      <div className="flex flex-col border-b-2 border-[#eff4f8]">
                        <h1 className="font-extrabold text-[#888d91] text-[16px] ">
                          Gender
                        </h1>
                        <h2 className="text-[16px]  ">{userP.gender}</h2>
                      </div>
                      <div className="flex flex-col border-b-2 border-[#eff4f8]">
                        <h1 className="font-bold text-[#888d91] text-[16px]">
                          DOB
                        </h1>
                        <h2 className="text-[16px]">{userP.DOB.toString().substring(0, userP.DOB.toString().search('T'))}</h2>
                      </div>
                      <div className="flex flex-col border-b-2 border-[#eff4f8]">
                        <h1 className="font-bold text-[#888d91] text-[16px]">
                          Email
                        </h1>
                        <h2 className="text-[16px]">{userP.email}</h2>
                      </div>

                      <div className="flex flex-col border-b-2 border-[#eff4f8]">
                        <h1 className="font-bold text-[#888d91] text-[16px]">
                          City
                        </h1>
                        <h2 className="text-[16px]">{userP.city}</h2>
                      </div>
                      <div className="flex flex-col border-b-2 border-[#eff4f8]">
                        <h1 className="font-bold text-[#888d91] text-[16px]">
                          Skills
                        </h1>
                        <h2 className="text-[16px]">{userP.skills}</h2>
                      </div>
                      <div className="flex flex-col border-b-2 border-[#eff4f8]">
                        <h1 className="font-bold text-[#888d91] text-[16px]">
                          Languages
                        </h1>
                        <h2 className="text-[16px]">{userP.Languages}</h2>
                      </div>



                    </div>
                  </div>
                </div>
              </div>
              <div className="flex    ">
                <div className="flex flex-col  lg:flex-row w-full bb m-6  ">
                  <div className="lg:w-1/2 bb bg-white flex flex-col items-center lg:p-12 p-8">
                    <h1 className="font-bold text-red-600 stroke-black  text-6xl mb-8">
                      Youtube
                    </h1>

                    <img
                      src={youTubeImg}
                      className="lg:h-28 border-4 border-solid border-gray-300   mb-3 lg:w-28 h-20 w-20 rounded-full"
                      alt=""
                    />
                    <h1 className="text-2xl  font-bold  text-blue-700 mb-4">{userP.channelName}</h1>

                    <div className="flex mb-3">
                      <div className="flex flex-col items-center">
                        <h1 className="font-bold text-[20px]">{channelDetails.subscriberCount}</h1>
                        <h2 className="text-[#888d91] font-bold text-[16px]">
                          Subscribers
                        </h2>
                      </div>
                      <div className=" bg-[#d6dce1] w-[2px] mx-8 h-full " />
                      <div className="flex flex-col items-center">
                        <h1 className="font-bold text-[20px]">{channelDetails.viewCount}</h1>
                        <h2 className="text-[#888d91] font-bold text-[16px]">
                          Views
                        </h2>
                      </div>
                      <div className=" bg-[#d6dce1] w-[2px] mx-8 h-full " />
                      <div className="flex flex-col items-center">

                        <h1 className="font-bold text-[20px]">{channelDetails.videoCount}</h1>
                        <h2 className="text-[#888d91] font-bold text-[16px]">
                          Videos
                        </h2>
                      </div>

                    </div>


                  </div>
                  <div className=" bg-[#f6f7f9] w-3  h-full " />
                  <div className="lg:w-1/2  bg-white flex flex-col items-center lg:p-12 p-8">
                    <h1 className="font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-6xl mb-3 h-20">
                      Instagram
                    </h1>

                    <img
                      src={userP.InstagramImage}
                      className="lg:h-28 border-4 border-solid border-gray-300  mb-3 lg:w-28 h-20 w-20 rounded-full"
                      alt=""
                    />
                    <h1 className="text-2xl text-blue-700   font-bold mb-4 ">{userP.InstagramName}</h1>

                    <div className="flex mb-3">
                      <div className="flex flex-col items-center">
                        <h1 className="font-bold text-[20px]">{userP.InstagramPost}</h1>
                        <h2 className="text-[#888d91] font-bold text-[16px]">
                          Post
                        </h2>
                      </div>
                      <div className=" bg-[#d6dce1] w-[2px] mx-8 h-full " />
                      <div className="flex flex-col items-center">

                        <h1 className="font-bold text-[20px]">{userP.InstagramFollowers}</h1>
                        <h2 className="text-[#888d91] font-bold text-[16px]">
                          Followers
                        </h2>
                      </div>

                    </div>


                  </div>
                </div>
              </div>

              <div className="flex b bg-[#fffdfe] h-full mx-6  ">
                <div className="flex flex-col w-full lg:p-8" >
                  <div className="hidden lg:flex bg-[#eff1f7] w-[600px] rounded-lg h-8 mb-3 ">
                    <button
                      type="button"
                      className=" text-sm font-medium text-[#0d53fd] w-full h-[28px] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 mt-[2px] "
                    >
                      Upcoming Appointments
                    </button>
                    <button
                      type="button"
                      className=" text-sm font-medium text-gray-900 w-full h-[28px] focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#0d53fd] focus:z-10 mt-[2px]  "
                    >
                      Post Appointments
                    </button>
                    <button
                      type="button"
                      className=" text-sm font-medium text-gray-900 w-full h-[28px] focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#0d53fd] focus:z-10 mt-[2px]  "
                    >
                      Medical Records
                    </button>
                  </div>

                  <div className="flex flex-col h-full  bg-[#eff1f7] b lg:p-4 p-2 ">
                    <div className="flex  items-center justify-between lg:px-5  ">

                      <h1 className="lg:text-sm text-[12px] font-extrabold">
                        Education
                      </h1>

                      <div className="flex items-center bg-white h-8 lg:w-40 w-32 justify-center  ">
                        <img src="https://cdn-icons.flaticon.com/png/512/2985/premium/2985150.png?token=exp=1653465271~hmac=518919778d45142054bb2493e8440149" className="h-4 w-3 text-[#e6e9ee] rotate-180" alt="" />
                        <h2 className="lg:text-sm text-[12px] lg:pl-3 pl-1 text-[#888d91]">
                          Show more records
                        </h2>
                      </div>
                    </div>
                    <hr className="w-full my-3" />
                    <div className="flex">
                      <div className="w-1/12 flex justify-center">
                        <div className="h-full bg-blue-500 w-1" />
                      </div>
                      <div className="flex flex-col h-full w-11/12  lg:m-8 b">



                        {education.map(edu => {
                          return (
                            <div className="flex flex-col lg:flex-row px-3 items-center justify-around mb-5 bg-white py-3 lg:py-6 rounded-3xl ">
                          <div className="relative bg-white rounded-full border-4 border-blue-800 w-6 h-6     -left-[88px] top-0"></div>
                          <div className='flex flex-col  mb-2 lg:mb-0 b w-1/4'>
                            <h1 className="text-xl"> {edu.educationType} </h1>
                            </div>
                          <div className='flex flex-col items-center mb-2 lg:mb-0 b w-1/4'>
                            <h1 className="text-sm  text-gray-400">Year</h1>
                            <h1 className="text-base font-bold">{edu.startingYear + "-"+ edu.passingYear}</h1>
                          </div>
                          <div className='flex flex-col  mb-2 lg:mb-0 items-center b w-1/4'>
                            <h1 className="text-sm text-gray-400 ">Degree</h1>
                            <h1 className="text-base font-bold"> {edu.education}</h1>
                          </div>
                          <div className='flex flex-col lg:pl-3 items-center mb-2 lg:mb-0 b w-1/4'>
                            <h1 className="text-sm text-gray-400">School</h1>
                            <h1 className="text-base font-bold">{edu.schoolName}</h1>
                          </div>
                        </div>
                          )
                        })}


                       



                          {/* <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0d53fd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
  <h1 className="text-sm text-[#0d53fd] ">
    Note
  </h1>
                    </div> */}

                        

                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default ProfileSocial;

export const SideBar = () => {



  const [state, setstate] = useState(
    {
      activeObjects: null,
      objects: [
        {
          name: 'Home',
          class: 'bi bi-house-door-fill  text-[#cbd0d5]',
          id: '1'
        },
        {
          name: 'Bookmark',
          class: 'bi bi-bookmark-fill  text-[#cbd0d5]',
          id: '2'
        },
        {
          name: 'Messages',
          class: 'bi bi-envelope-fill text-[#cbd0d5]',
          id: '3'
        },
        {
          name: 'Logout',
          class: 'bi bi-chat-left-text-fill text-[#cbd0d5]',
          id: '4'
        },


      ]
    }
  )

  const activeHandler = (index) => {

    setstate({ ...state, activeObjects: state.objects[index] })
  }



  return (
    <div>
      {/* <span className="absolute  text-4xl top-5 left-4 cursor-pointer" onclick="Openbar()">
  <i className="bi bi-filter-left  bg-gray-900 "></i>
</span> */}
      <div className="sidebar flex justify-between flex-col fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
   w-[250px] overflow-y-auto text-center bg-white shadow h-screen">
        <div className=" text-sm">
          <div className="p-2.5 mt-1 flex items-center rounded-md ">
            <i className="bi bi-app-indicator px-2 py-1 bg-[#0d53fd] rounded-md"></i>
            <h1 className="  ml-3 text-sm  font-bold">Tailwindbar</h1>
            <i className="bi bi-x ml-20 cursor-pointer lg:hidden" onclick="Openbar()"></i>
          </div>


          <div>

            {
              state.objects.map((object, index) =>
              (

                <div className="p-2.5 mt-2 flex items-center  px-4 duration-300 cursor-pointer   hover:bg-[#0d53fd] hover:text-white" onClick={activeHandler} key={index}>
                  <i className={object.class}></i>
                  <span className="text-sm ml-4 font-bold  ">{object.name}</span>
                </div>
              )



              )
            }




          </div>
        </div>
        <div className="flex">
          helo
        </div>
      </div>

    </div>
  )
}