import axios from "axios";
import React, { useState } from "react";
import { UserContext } from "./userContex";

export default function AddEducation(){
    const [formFields, setFormFields] = useState([
        { schoolName: '', education: '', educationType : '', startingYear : '', passingYear : '', location :' '},
      ])
    
      const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
      }
    
      const submit = async(e) => {
        e.preventDefault();
        console.log(formFields);
        const response = await axios({
            method : 'POST',
            url :'/education/addUserEducation',
            data : formFields
        })
        console.log(response.data);
      }
    
      const addFields = () => {
        let object = { schoolName: '', education: '', educationType : '', startingYear : '', passingYear : '', location :' '}
    
        setFormFields([...formFields, object])
      }
    
      const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }
    
      return (
        <div className="App">
          <form onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <input
                    name='schoolName'
                    placeholder='School Name'
                    onChange={event => handleFormChange(event, index)}
                    value={form.schoolName}
                  />
                  <input
                    name='education'
                    placeholder='education'
                    onChange={event => handleFormChange(event, index)}
                    value={form.education}
                  />
                  <input
                    name='educationType'
                    placeholder='educationType'
                    onChange={event => handleFormChange(event, index)}
                    value={form.educationType}
                  />
    
                  <input
                    name='startingYear'
                    placeholder='Starting year'
                    onChange={event => handleFormChange(event, index)}
                    value={form.startingYear}
                  />
                  <input
                    name='passingYear'
                    placeholder='Passing year'
                    onChange={event => handleFormChange(event, index)}
                    value={form.passingYear}
                  />
                  <input
                    name='location'
                    placeholder='Location'
                    onChange={event => handleFormChange(event, index)}
                    value={form.location}
                  />
                  <button onClick={() => removeFields(index)}>Remove</button>
                </div>
              )
            })}
          </form>
          <button onClick={addFields}>Add More..</button>
          <br />
          <button onClick={submit}>Submit</button>
        </div>
      );
    }