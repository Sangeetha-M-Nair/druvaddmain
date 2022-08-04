import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../userContex";
import JoinedGroup from "./joinedGroup";

export default function ViewMyGroups(){
    const { user, setUser } = useContext(UserContext);
    setUser(user);
    console.log(user);
    const [groups, setGroups] = useState([]);
    const getGroups = async()=>{
        const response = await axios ({
            method : 'GET',
            url : `group/viewGroups/joined`
        });
        console.log(response.data);
        setGroups(response.data);
    }
    useEffect(()=>{
        getGroups();
    }, [])
    

    return (
        <div>this is my groups page
            {
                groups.map(group=>{
                    return <JoinedGroup {...group}/>
                })
            }
        </div>
    )
}