import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./userContex";

const CreatePost = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [desc, setDesc] = useState('');
  const { user, setUser } = useContext(UserContext);
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
        url: "/post/addPost/user",
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

  console.log(user);
  const today = new Date();
  const blocked = new Date(user.postsBlockedUntil);
  if(blocked > today){
    console.log(user.postsBlockedUntil);
    return <div>
      <h6>Posting Blocked</h6>
    </div>
  }
  else{
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
}

export default CreatePost;
