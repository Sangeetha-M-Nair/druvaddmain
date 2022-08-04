import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Group from "./singleGroupComp";

export default function ViewGroupsToJoin(){
    const [groups, setGroups] = useState([]);
    const params = useParams();
    const getGroups = async()=>{
        const response = await axios ({
            method : 'GET',
            url : `group/viewGroups/toJoin`
        });
        console.log(response.data);
        setGroups(response.data);
    }
    useEffect(()=>{
        getGroups();
    }, [])

    return (
        <div>this is groups page
            {
                groups.map(group=>{
                    return <Group{...group}/>
                })
            }
        </div>
    )
}