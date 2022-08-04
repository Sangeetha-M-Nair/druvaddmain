import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./searchBar";
import { useParams } from "react-router";

export default function ContentAdmin(){
    const params = useParams();
    //console.log(params, 'params from hr admin');
    const [allUsers, setAllUsers] = useState([]);

    const addContentAdmin = async(id)=>{
        //console.log('adding hr admin request sent');
        const idd = params.id;
        //console.log(idd);
        //console.log(params, 'params from hr admin');
        const response = await axios({
            method :'patch',
            url : `/company/${idd}/addContent`,
            data :  {
                'id' : id
            }
        });
        console.log(response);
        if(response.data === 'success'){
            alert('Content admin added successfully');
        }
    }


    const getAllUsers = async()=>{
        console.log('sending request from all users');
        const response = await axios({
            method:'GET',
            url:'/users/allusers'
        });
        //console.log(response.data);
        setAllUsers(response.data)
    }

    useEffect(()=>{
        getAllUsers();
    }, []);
    
    return(
        <div>
            Loading...
            <Search data = {allUsers} addHrAdmin = {addContentAdmin}/>
        </div>
    )
}