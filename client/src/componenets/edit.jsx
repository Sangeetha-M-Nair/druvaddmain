import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Edit() {
    const navigate = useNavigate();
    const [formData, setForm] = useState({
        firstName: "",
        lastName: "",
        city: "",
        username: "",
        phoneNumber: "",
        DOB: "",
        country: "",
        gender: "",
        titleDescription: "",
        aboutDescription: "",
        role: "",
        status: ""
    })
    const setData = (e) => {
        const { name, value } = e.target;
        setForm({ ...formData, [name]: value });
    }

    const getData = async () => {
        //console.log('sending request');
        const resp = await axios({
            method: 'GET',
            url: '/user/getCuser'
        });
        //console.log(resp.data);
        //console.log(resp.data.user);
        setForm(resp.data.user);
    }

    const updateData = async (e) => {
        e.preventDefault();
        console.log("formData for updating", formData);
        const response = await axios.patch('/user/update',
            {
                'firstName' : formData.firstName,
                'lastName' : formData.lastName,
                'country': formData.country, 
                'city': formData.city,
                'status' : formData.status,
                'phoneNumber' : formData.phoneNumber,
                'role' : formData.role,
                'DOB' : formData.DOB,
                'gender' : formData.gender,
                'email' : formData.email,
                'titleDescription': formData.titleDescription,
                'aboutDescription' : formData.aboutDescription
            })
        if (response.data !== null) {
            alert('Updated Successfully');
            navigate('/');
        }
        else {
            alert("Couldn't update data");
        }

    }




    useEffect(() => {
        getData();
    }, []);


    return (
        <form>
            <h1 style={{ textAlign: 'center' }}>Edit Profile</h1>
            <br />
            <div class="row">
                <div class="col">
                    <input type="text" value={formData.firstName} onChange={setData} name="firstName" class="form-control" placeholder="name"></input>
                    <input type="text" value={formData.lastName} onChange={setData} name="lastName" class="form-control" placeholder="name"></input>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col">
                    <input type="text" value={formData.city} onChange={setData} name="city" class="form-control" placeholder="city"></input>
                </div>
                <div class="col">
                    <input type="text" value={formData.email} onChange={setData} name="email" class="form-control" placeholder="email"></input>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col">
                    <input type="text" value={formData.role} onChange={setData} name="role" class="form-control" placeholder="role"></input>
                </div>
                <div class="col">
                    <input type="text" value={formData.phoneNumber} onChange={setData} name="phoneNumber" class="form-control" placeholder="phoneNumber"></input>
                </div>
            </div>
            <br></br>

            <div class="row">
                <div class="col">
                    <input type="text" value={formData.country} onChange={setData} name="country" class="form-control" placeholder="country"></input>
                </div>
                <div class="col">
                    <input type="date" value={formData.DOB} onChange={setData} name="DOB" class="form-control" placeholder="DOB"></input>
                </div>
            </div>

            <br></br>

            <div class="row">
                <div class="col">
                    <input type="text" value={formData.gender} onChange={setData} name="gender" class="form-control" placeholder="gender"></input>
                </div>
                <div class="col">
                    <input type="text" value={formData.status} onChange={setData} name="status" class="form-control" placeholder="status"></input>
                </div>
            </div>
            <br></br>

            <div class="row">
                <div class="col">
                    <input type="text" value={formData.titleDescription} onChange={setData} name="titleDescription" class="form-control" placeholder="title description"></input>
                </div>
                <div class="col">
                    <input type="text" value={formData.aboutDescription} onChange={setData} name="aboutDescription" class="form-control" placeholder="aboutDescription"></input>
                </div>
            </div>

            <button type="submit" onClick={updateData} class="btn btn-primary">Submit</button>
        </form>
    )
}
