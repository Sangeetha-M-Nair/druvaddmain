import React from "react";
import { Button } from "@mui/material";
import axios from "axios";

export default function Group(props){
    const handleClick = async(e)=>{
        e.preventDefault();
        const response = await axios({
            method : 'put',
            url : `/user/join/group/${props._id}`
        });
        console.log(response.data);
        alert(response.data.msg);

    }

    return <div style={{border : '1px solid black', textAlign:'center', borderRadius:'20px'}}>
        name : {props.name}
        <p>Description : {props.description}</p>
        <Button onClick={handleClick}>Join Group</Button>
    </div>
}