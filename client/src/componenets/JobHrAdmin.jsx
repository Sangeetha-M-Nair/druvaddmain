import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Search from "./searchBar";

export default function JobHrAdmin(){
    const [hrAdmins, setHrAdmins] = useState(null);
    const params = useParams();
    console.log(params);
    const getHrAdmins = async()=>{
        const response = await axios({
            method:'GET',
            url : `/job/${params.jobid}/gethradmins`
        });
        console.log(response);
        setHrAdmins(response.data);
    }

    const addHrAdmin = async(id)=>{
        const response = await axios({
            method : 'put',
            url : `/job/${params.jobid}/addHrAdmin`,
            data :{
                'id' : id
            }
        });
        console.log(response);
        if(response.data){
            alert('HR ADMIN ADDED');
        }
    }

    useEffect(()=>{
        getHrAdmins();
    }, [])
    if(!hrAdmins){
        return <div>Loading</div>
    } 
    else{
        return(
            <div>
                This is Job Hr Admin
                <Search data = {hrAdmins} addHrAdmin = {addHrAdmin}></Search>
            </div>
        )
    } 
    
}