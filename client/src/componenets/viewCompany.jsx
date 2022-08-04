import React from "react";
import { useContext, useState, useEffect } from "react";
import { UserContext } from './userContex';
import { useParams } from "react-router";
import axios from "axios";
import { Button } from "@mui/material";
import { CompanyContext } from "./companyContext";
import { useNavigate } from "react-router";
import { Create } from "@mui/icons-material";


export default function ViewCompany() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    console.log('user from view company', user);
    const { company, setCompany } = useContext(CompanyContext);
    const params = useParams();
    const id = params.id;

    const getCompany = async () => {
        console.log('sending request');
        const response = await axios({
            method: 'GET',
            url: `/company/getCompany/${id}`
        });
        //console.log(response.data);
        setCompany(response.data);
        console.log(response.data);

    }

    const buttonView = () => {
        if (user !== null && company !== null) {
            if (user._id === company.userId) {
                return (
                    <div>
                        <Button onClick={() => navigate(`/${id}/addHrAdmin`)}>Add HR admin</Button>
                        <Button onClick={() => navigate(`/${id}/addContentAdmin`)}>Add Content admin</Button>
                        <Button onClick={() => navigate(`/${id}/addContentAdmin`)}>Add Sub admin</Button>
                        <br></br>
                        <Button onClick={()=>navigate('/companyPost')}>Create Post</Button>
                    </div>
                )
            }
            else if (company.ContentAdmin.includes(user._id)) {
                return <Button variant="outlined" onClick={()=>navigate('/companyPost')} color="success">Create Post</Button>
            }

        }
    }



    useEffect(() => {
        getCompany();
    }, [])

    if (company === null) {
        return <div>Loading</div>
    }
    else {
        return (
            <div>
                hello world
                <h5>Name : {company.name}</h5>
                <h5>Location : {company.location}</h5>
                <h5>Category : {company.category}</h5>
                <h5>Website : <a>{company.website}</a></h5>
                <h5>Title Description : {company.titleDesc}</h5>
                <h5>Full Description : {company.fullDesc}</h5>
                <h5>HR Admins : {company.HrAdmin.length}</h5>
                <h5>Sub Admins : {company.SubAdmin.length}</h5>
                <h5> Admins : {company.Admin.length}</h5>
                <h5> Followers : {company.company_Followers.length}</h5>
                {buttonView()}
            </div>
        )
    }
}