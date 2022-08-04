import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router";

export default function CreateGroup(){
    const [ formVal, setFormVal ] = useState({
        name : '',
        description : ''
    });
    const params = useParams();
    const handleSubmit = async(e)=>{
        console.log('handle submit called');
        e.preventDefault();
        console.log(formVal);
        const response = await axios({
            method : 'POST',
            url: `/group/createGroup`,
            data : formVal
        });
        console.log(response.data);
        if(response.data){
            alert('Group created successfully')
        }
    }

    const handleChange = (e)=>{
        console.log(e.target);
        const { name, value } = e.target;
        setFormVal({...formVal, [name]: value});
    }


    return (
        <div>
            <form>
                <input onChange={handleChange} name="name" value={formVal.name} type="text" placeholder="group name"/>
                <input onChange={handleChange} name="description" value={formVal.description}  type="text" placeholder="submit"/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}