import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../userContex";

export default function CreateGroupPost() {
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [desc, setDesc] = useState('');
    const { user, setUser } = useContext(UserContext);
    const params = useParams();
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("postImg", selectedFile);
        formData.append('Description', desc);
        formData.append('name', user.firstName + " " + user.lastName);
        console.log(formData);
        for (var [key, value] of formData.entries()) {
            console.log(key, value);
        }
        try {
            const response = await axios({
                method: "post",
                url: `/post/addPost/group/${params.gid}`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            if (response.data.success) {
                alert('Posted successfully');
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={desc} onChange={(e) => {
                setDesc(e.target.value);
            }} name="Description" placeholder="description"></input>
            <input type="file" onChange={handleFileSelect} />
            <input type="submit" value="Upload File" />
        </form>
    )
}
