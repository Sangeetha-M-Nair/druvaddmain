import React, { useContext, useState } from "react";
import { CompanyContext } from "./companyContext";
import axios from "axios";
import { UserContext } from "./userContex";

export default function CompanyPost(){
    const [selectedFile, setSelectedFile] = React.useState(null);
    const { company, setCompany } = useContext(CompanyContext);
    const [desc, setDesc] = useState('');
    const { user, setUser } = useContext(UserContext);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(user);
        const formData = new FormData();
        formData.append("postImg", selectedFile);
        formData.append('Description', desc);
        formData.append('name', user.firstName + " " + user.lastName);
        formData.append('companyName', company.name);
        console.log(formData);
        for (var [key, value] of formData.entries()) {
          console.log(key, value);
        }
        try {
          const response = await axios({
            method: "post",
            url: "/post/addPost/company",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
          if(response.data.success){
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
          <h1>Create Company Post</h1>
          <input type="text" value={desc} onChange={(e) => {
            setDesc(e.target.value);
          }} name="Description" placeholder="description"></input>
          <input type="file" onChange={handleFileSelect} />
          <input type="submit" value="Upload File" />
        </form>
      )
}