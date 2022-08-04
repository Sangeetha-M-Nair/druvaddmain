import React from "react";
import Card from '@mui/material/Card';
import { useParams, useNavigate, useLocation } from "react-router";
import { Button } from "@mui/material";

export default function JobCard(props){
    const id = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const handleHrAdmin = ()=>{
        //console.log('Handling HR admin');
        //console.log(props._id);
        //console.log(navigate);
        //console.log(location.pathname);
        navigate(`${location.pathname}/${props._id}/addHr`)
    }
    const ButtonView = ()=>{
        if(props){
            if(props.userId === id.id){
                return(
                    <Button color = 'success'  onClick={handleHrAdmin} >Add Hr Admins</Button>
                )
            }
        }
    }
    
    return(
        <div>
            <Card variant="outlined">
                <h5>title : {props.jobTitle}</h5>
                <h6>company : {props.companyName}</h6>
                <h6>description : {props.description}</h6>
                {ButtonView()}
            </Card>
        </div>
    )
}