import React from "react";
import Card from '@mui/material/Card';

export default function UserCard(user) {
    //console.log(user);
    return (
        <div>
            <br></br>
            <Card variant="outlined" onClick={() => user.addHrAdmin(user._id) }>
                Name : {user.firstName + " " + user.lastName}
                <br></br>
                title : {user.titleDescription}
            </Card>

            <br></br>
        </div>
    )
}