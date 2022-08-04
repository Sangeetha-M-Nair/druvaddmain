import React, { useContext } from "react";
import { UserContext } from "./userContex";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";

export default function ViewCompanyCard(props){
    const company = props;
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const adminOrNot = () => {

        const deleteCompany = async(e)=>{
            console.log('sending request to delete');
            const response = await axios({
                method : 'DELETE',
                url : `/admin/deleteCompany/${company._id}`
            });
            console.log(response.data);            
        }
        
        if (user.role === 'admin') {
            return (
                <div>
                    <Button
                        variant="outlined"
                        color="secondary"
                        
                    >
                        Edit Company
                    </Button>

                    <Button
                        variant="outlined"
                        color="warning"
                        onClick={deleteCompany}
                    >
                        Delete company
                    </Button>

                </div>

            )
        }
    }
    
    const buttonView = () => {
        if (user !== null && company !== null) {
            if (user._id === company.userId) {
                return (
                    <div>
                        <Button onClick={() => navigate(`/${company._id}/addHrAdmin`)}>Add HR admin</Button>
                        <Button onClick={() => navigate(`/${company._id}/addContentAdmin`)}>Add Content admin</Button>
                        {adminOrNot()}
                    </div>
                )
            }
        }
    }

    return(
        <div style={{border:'1px solid black', padding : '10px', textAlign:'center', marginBottom:'10px'}}>
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