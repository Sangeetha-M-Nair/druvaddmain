import React, { useState, useContext } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import { UserContext } from './userContex';

export default function EnterRefCode(){
    const { user, setUser } = useContext(UserContext)
    const [referCode, setreferCode] = useState('');
    const handleSubmit = async()=>{
        
        const response = await axios({
            method : 'PATCH',
            url : '/user/userefcode',
            data : {
                refCode : referCode
            }
        });

        if(response.data){
            alert('Refer Code accepted');
            setUser(response.data);
        }
        else{
            alert('Invalid Code');
        }
    }

    return (
        <form>
            <input onChange={(e)=>{
                setreferCode(e.target.value)
            }} type = "text" value = {referCode} placeholder="Enter referCode"></input>

            <Button onClick={handleSubmit} variant='outlined'>Submit</Button>
        </form>
    )
}
