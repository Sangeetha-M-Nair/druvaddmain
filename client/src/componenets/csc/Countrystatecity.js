import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from 'axios';

function Countrystatecity() {
  const [country, setCountry] = useState([]);
  const [countryiso, setCountryiso] = useState('');
  const [states, setStates] = useState([]);
  const [stateid, setStateid] = useState('');
  const [city, setCity] = useState([]);
  // var headers = new Headers();
  // headers.append("X-CSCAPI-KEY", "UkdoU3RUa1lxUUlIRGpocWo4bkg2elBQTTBieDdMbjVMNWlBeVJMdg==");

  const getcountry = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://api.countrystatecity.in/v1/countries',
        headers: {
          'X-CSCAPI-KEY': 'UkdoU3RUa1lxUUlIRGpocWo4bkg2elBQTTBieDdMbjVMNWlBeVJMdg=='
        }
      });

      console.log('response for getting city');
      console.log(response.data);
      setCountry(response.data);
    }
    catch (err) {
      console.log(err);
    }

  }


  //getting the state for the country 
  const getState = async()=>{
    try{
      console.log(typeof countryiso);
      const url = 'https://api.countrystatecity.in/v1/countries/' + countryiso + '/states';
      console.log("here is the url", url);
      const response = await axios ({
        method : 'GET',
        url : url,
        headers: {
          'X-CSCAPI-KEY': 'UkdoU3RUa1lxUUlIRGpocWo4bkg2elBQTTBieDdMbjVMNWlBeVJMdg=='
        }
      });
      //console.log(response.data);
      setStates(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getcountry();
  }, []);

  
  useEffect(()=>{
    getState();
  }, [countryiso])

  const handlecountry = (event) => {
    console.log('handle country called');
    const getCountryIso = event.target.value;
    setCountryiso(getCountryIso);
    console.log(getCountryIso);   
  }

  // useEffect(() => {
  //   const getstate = async () => {
  //     const resstate = await fetch(`https://api.countrystatecity.in/v1/countries/${countryid}/states`);
  //     const resst = await resstate.json();
  //     setSt(await resst);
  //   }
  //   getstate();
  // }, [countryid]);

  const handlestate = (event) => {
    const getstateid = event.target.value;
    setStateid(getstateid);
  }

  // useEffect(() => {
  //   const getcity = async () => {
  //     const response = await axios
  //     // const rcity= await rescity.json();
  //     // setCity(await rcity);
  //   }
  //   getcity();
  // }, [stateid]);

  useEffect(() => {
    getcountry();
  }, [])

  return (
    <React.Fragment>
      <Container className="content">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="mt-4 mb-4 fw-bold">
              Select Country, State and City ReactJs{" "}
            </h2>

            <form className="row g-3">

              <div className="col-md-3">
                <label className="form-label">Country </label>
                <select
                  name="country"
                  className="form-control p-2"
                  onChange={(e) => handlecountry(e)}
                >
                  <option value="">--Select Country--</option>
                  {
                    country.map((getcon, index) => (
                      <option 
                        key={index} 
                        value={getcon.iso2}
                      >{getcon.name}
                    </option>
                    ))
                  }
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">State</label>
                <select className="form-select" name="state" onChange={(e) => handlestate(e)}>
                  <option value="">--Select State--</option>
                  {
                    states.map((state, index) => (
                      <option key={index} value={state.id}>{state.name} </option>
                    ))
                  }
                </select>
              </div>

              <div className="col-md-3">
                <label className="form-label">City</label>
                <select className="form-select" name="city">
                  <option value="">--Select City--</option>
                  {
                    city.map((gcity, index) => (
                      <option key={index} value={gcity.cityid}> {gcity.city_name} </option>
                    ))
                  }
                </select>
              </div>

              <div className="col-md-3">
                <button type="button" className="btn btn-primary mt-4">Submit</button>
              </div>

            </form>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Countrystatecity;