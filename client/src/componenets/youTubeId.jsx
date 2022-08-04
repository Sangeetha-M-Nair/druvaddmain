import { Button } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

export default function YoutubDetails(){
    const [ channelId, setChannelId ] = useState('');
    const [ channelDetails, setChannelDetails ] = useState(null);
    const API_KEY = 'AIzaSyB4MKTE9LuXo8gay2IbzW5lhxF2aUDDJBU';

    const getChannelDetails = async()=>{
        const response = await axios({
            method:'GET',
            url : `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`
        });
        console.log(response.data.items[0].statistics);
        setChannelDetails(response.data.items[0].statistics);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        getChannelDetails();
    }
    return (
        <div>
            <form>
                <input onChange={(e)=>{
                    setChannelId(e.target.value)
                }} type = "text" placeholder='youtube channel id'></input>
                <Button onClick={handleSubmit} variant='outlined'>Get Details</Button>
            </form>
            {JSON.stringify(channelDetails)}
        </div>
    )
}