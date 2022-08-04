import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ViewCompanyCard from "./viewComapnyCard";


export default function ViewCompanies(){
    const [ userCompanies, setUserCompanies ] = useState(null);
    const params = useParams();

    const getComapnies = async()=>{
        console.log('Sending request to get all the companies of the user');
        const response = await axios({
            method : 'GET',
            url : '/company/getCompanies/' + params.id
        });
        console.log(response.data);
        setUserCompanies(response.data);
    }

    useEffect(()=>{
        getComapnies();
    }, []);


    if(!userCompanies){
        return <div>Loading ...</div>
    }
    else{
        return (
            <div>
                {userCompanies.map(company=><ViewCompanyCard {...company}/>)}
            </div>
        )
    }
}