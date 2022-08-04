import React, { useContext } from "react";
import { UserContext } from "../userContex";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";

const Admin = () => {
    const navigate = useNavigate();
    const userCon = useContext(UserContext);
    if (userCon === null) {
        return (
            <div>Loading... </div>
        )
    }
    else {
        return <div>
            <div className="flex-box my-2">
                <Button className="primary" onClick={() => navigate('/admin/userTable')}>UserTable</Button>
                <Button className="primary mx-2" onClick={() => navigate('/admin/jobTable')}>JobTable</Button>
                <Button className="primary mx-2" onClick={() => navigate('/admin/companyTable')}>CompanyTable</Button>
                <Outlet/>
            </div>
        </div>
    }

}

export default Admin;