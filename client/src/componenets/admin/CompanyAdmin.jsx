import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../userContex";
import axios from "axios";
import ViewCompanyCard from "../viewComapnyCard";

export default function CompanyAdmin() {
    const {user, setUser} = useContext(UserContext);
    const [allCompanies, setAllCompanies] = useState(null);

    const getCompanies = async () => {
        const response = await axios({
            method: 'GET',
            url: '/company/allcompanies'
        });
        // console.log('response from all companies');
        // console.log(response.data);
        setAllCompanies(response.data);
    }

    useEffect(() => {
        getCompanies();
    })

    

    if (!allCompanies) {
        return <div>Loading...</div>
    }
    else {
        return (
            allCompanies.map(company=><ViewCompanyCard {...company}/>)
        )
    }
}