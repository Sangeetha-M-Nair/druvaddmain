import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

export default function JoinedGroup(props){
    const navigate = useNavigate();
    const handleViewGroup = async(e)=>{
        navigate(`/group/${props._id}`);
    }

    return <div style={{border : '1px solid black', textAlign:'center', borderRadius:'20px'}}>
        name : {props.name}
        <p>Description : {props.description}</p>
        <Button onClick={handleViewGroup}>View Group</Button>
    </div>
}