import React from "react";
import UserCard from "./UserSearchCard";
import { useState } from "react";

export default function Search(props){
    const [searchTerm ,setSearchTerm] = useState();
    //console.log('props', props);
    return <div>
        <input style={{border:'1px solid black'}}type = "text" onChange={(e)=>setSearchTerm(e.target.value)} value = {searchTerm}></input>
        <br></br>
        {props.data.filter((user)=>{
            if(searchTerm === ""){
                return user;
            }
            else if((user.firstName + " " + user.lastName).includes(searchTerm)){
                console.log('here');
                return user;
            }
        }).map((user, key) =>{
            console.log(user);
            user.addHrAdmin = props.addHrAdmin;
            return <UserCard {...user}></UserCard>
        })}
    </div>
}