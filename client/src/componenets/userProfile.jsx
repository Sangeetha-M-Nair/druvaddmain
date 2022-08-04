import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Outlet, useNavigate } from "react-router";
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import { useParams } from "react-router";
import { UserContext } from './userContex';
import EnterRefCode from "./EnterRefCode";
import { JobPostingNav } from "./navBar2";


export default function UserProfile() {

    const [url, setUrl] = useState();
    const navigate = useNavigate();
    const [userP, setUserP] = useState();
    const { user, setUser } = useContext(UserContext);
    //console.log('user from profile', user);
    const handleEdit = () => {
        navigate('/edit');
    }

    const getDays = (date) => {
        let days = (new Date() - new Date(date)) / (1000 * 60 * 60 * 24);
        return days;
    }



    const params = useParams();
    const logout = async () => {
        const resp = await axios({
            url: '/user/logout',
            method: 'GET'
        });
        if (resp.data === 'LO') {
            navigate('/');
        }
    }
    const getData = async () => {
        console.log('sending request');
        const resp = await axios({
            method: 'GET',
            url: '/user/profile/' + params.id
        });
        //console.log(resp.data);
        setUserP(resp.data);
    }

    const handleCompany = () => {
        navigate('/addCompany');
    }

    const viewCompanies = () => {
        navigate("/viewCompanies/" + userP._id);
    }

    const handLeJob = () => {
        navigate(`/JobSignIn/${user._id}/`);
    }

    const viewJobs = () => {
        navigate(`/${user._id}/jobs`);
    }

    const addPost = () => {
        navigate(`/${user._id}/createpost`);
    }

    const addEducation = () => {
        navigate(`/addEducation`);
    }

    const viewReferral = () => {
        if (user.referCode === undefined) {
            return (
                <Button color="primary" onClick={createReferralCode}>Create my referral code</Button>
            )
        }

    }

    // const fetchChannelDetails = async(e)=>{

    //     e.preventDefault();
    //     const API_KEY = 'AIzaSyB4MKTE9LuXo8gay2IbzW5lhxF2aUDDJBU';
    //     const id = await youtubeChannelId(url);
    //     console.log(id);
    //     const data = await axios({
    //         method : 'GET',
    //         url : `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${API_KEY}`
    //     })
    // }

    const createReferralCode = async () => {
        console.log('sending request for creating referals');
        const response = await axios({
            method: 'patch',
            url: '/user/createrefcode'
        });
        if (response.data) {
            console.log(response);
            setUser(response.data);
        }
    }

    const viewReferOrNot = (user) => {
        let days = getDays(user.date);
        console.log(days);
        if (user.points === 0 && days < 30) {
            console.log(user.usedRefers);
            return <EnterRefCode />
        }
    }

    const contentCompany = async () => {
        const response = await axios({
            method: 'GET',
            url: '/company/contentadmin/' + user._id
        });
        console.log(response);
        if (response.data) {
            navigate('/viewCompany/' + response.data._id);
        }

    }

    const addYoutube = () => {
        window.open("http://localhost:8080/auth/youtube", "_self");
    }

    const adminOrNot = () => {
        if (user.role === 'admin') {
            return (
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => navigate('/admin')}>
                    Go To Admin Page
                </Button>
            )
        }
    }

    const friendRequest = ()=>{
        navigate('viewFriendRequest');
    }

    const createGroup = () => {
        navigate(`/createGroup/${user._id}/`);
    }

    const viewGroups = () => {
        navigate('/joinGroups');
    }

    const myGroups = () => {
        navigate('/myGroups');
    }

    const viewGroupInvites = ()=>{
        navigate('viewGroupInvites');
    }

    const buttonView = () => {
        if (user !== null) {
            if (user._id === userP._id) {
                return (
                    <div>
                        <p>points : {user.points + user.referals.length} </p>
                        <p>Refer Code : {user.referCode}</p>
                        {viewReferOrNot(user)}
                        <Button variant='outlined' color='warning' onClick={addYoutube}>add Youtube</Button>
                        <Button onClick={handleEdit}>Edit Profile<EditIcon /></Button>
                        <br></br>
                        <Button variant='outlined' color='success' onClick={addEducation}>add Education</Button>
                        <Button color="warning" onClick={logout}>Logout</Button>
                        <br></br>
                        <Button color="secondary" onClick={handleCompany}>Create Company</Button>
                        <Button color="secondary" onClick={contentCompany}>Content Company</Button>
                        <Button color="secondary" onClick={viewCompanies}>View Company</Button>
                        <Button color="secondary" onClick={handLeJob}>Post Job</Button>
                        <br></br>
                        <Button color="secondary" onClick={viewJobs}>viewJobs</Button>
                        <br></br>
                        <Button color="primary" onClick={addPost}>Add Post</Button>
                        <Button color="primary" onClick={friendRequest}>View Friend Requests</Button>
                        <Outlet/>
                        <br></br>
                        {viewReferral()}
                        <Button color="secondary" variant="outlined" onClick={createGroup}>Create Group</Button>
                        <Button color="secondary" variant="outlined" onClick={viewGroups}>Join Groups</Button>
                        <Button color="secondary" variant="outlined" onClick={myGroups}>View my groups</Button>
                        <Button color="secondary" variant="outlined" onClick={viewGroupInvites}>View Group Invites</Button>
                        {adminOrNot()}
                    </div>
                )
            }
        }
    }
    useEffect(() => {
        getData();
    }, [])

    if (!userP) {
        return <div>
            Login First
        </div>
    }
    else {
        return <div>
            <JobPostingNav />
            <h3>firstName : {userP.firstName}</h3>
            <h3>lastName : {userP.lastName}</h3>
            <h3>city : {userP.city}</h3>
            <h5>email : {userP.email}</h5>
            <h5>phoneNumber : {userP.phoneNumber}</h5>
            <h5>DOB : {userP.DOB}</h5>
            <h5>country: {userP.country}</h5>
            <h5>gender : {userP.gender}</h5>
            <h6>title description : {userP.titleDescription}</h6>
            <h6>about description : {userP.aboutDescription}</h6>
            <h6>status : {userP.status}</h6>
            <h6>role : {userP.role}</h6>
            <form>
                <input value={url} onChange={(e) => setUrl(e.target.val)} type="text" placeholder="URL"></input>
                {/* <Button onClick={(e)=>{
                    fetchChannelDetails(e);
                }} variant="outlined" color="warning">Youtube</Button> */}
            </form>
            {buttonView()}
        </div>
    }
}