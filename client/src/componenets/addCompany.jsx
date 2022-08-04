import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';


Modal.setAppElement('#root');



const AddCompany = (props) => {
    
    const [formData, setFormData] = useState({
        name : "",
        location : "",
        category : "",
        website : "",
        username : "",
        titleDesc : "",
        fullDesc : ""
    });

    

    const setData = (e)=>{
        const { name, value } = e.target;
        setFormData({...formData, [name] : value});
    }

    

    const addCompany = async(e)=>{
        e.preventDefault();
        const resp = await axios({
            method:'POST',
            url:'/company/postcompany',
            data : formData
        });
        if(resp.data.success){
            alert('Company created Succesfully');
        }
    }

    return (
       <form>
            <h1 style={{ textAlign: 'center' }}>Add Company Details</h1>
            <br />
            <div class="row">
                <div class="col">
                    <input type="text" value={formData.name} onChange={setData} name="name" class="form-control" placeholder="name"></input>
                    <br></br>
                    <input type="text" value={formData.location} onChange={setData} name="location" class="form-control" placeholder="location"></input>
                    <br></br>
                    <input type="text" value={formData.username} onChange={setData} name="username" class="form-control" placeholder="username"></input>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col">
                    <input type="text" value={formData.category} onChange={setData} name="category" class="form-control" placeholder="category"></input>
                </div>
                <div class="col">
                    <input type="text" value={formData.website} onChange={setData} name="website" class="form-control" placeholder="website"></input>
                </div>
            </div>
            <br></br>
            
            <div class="row">
                <div class="col">
                    <input type="text" value={formData.titleDesc} onChange={setData} name="titleDesc" class="form-control" placeholder="title description"></input>
                </div>
                <div class="col">
                    <input type="text" value={formData.fullDesc} onChange={setData} name="fullDesc" class="form-control" placeholder="aboutDescription"></input>
                </div>
            </div>
            <br></br>
            <button type="submit" onClick={addCompany} class="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddCompany