import React, { useEffect, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { countries } from '../job2/countries';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useParams } from 'react-router';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export const JobSignIn = () => {
  const [allCompanies, setAllCompanies] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const getCompanies = async () => {
    const response = await axios({
      method: 'GET',
      url: '/company/allcompanies'
    });
    // console.log('response from all companies');
    // console.log(response.data);
    setAllCompanies(response.data);
  }
  const getAllUsers = async () => {
    console.log('sending request from all users');
    const response = await axios({
      method: 'GET',
      url: '/user/allUsers'
    });
    //console.log(response.data);
    setAllUsers(response.data);
  }

  useEffect(() => {
    getCompanies();
    getAllUsers();
  }, [])

  const defaultProps = {
    options: hrManager,
    getOptionLabel: (option) => option.name,
  };
  const [value, setvalue] = useState({
    company: '',
    languages: '',
    country: ''
  })

  const [lastDate, setLastDate] = useState(new Date());
  const [jobDetail, setJobDetail] = useState(
    {
      companyName: '',
      category: 'SocialMedia',
      jobTitle: '',
      type: 'YouTube',
      minBudget: 0,
      maxBudget: 0,
      jobType: '',
      jobSubType: 'Paid',
      jobSubSubType: '',
      country: '',
      location: '',
      limitFollower: 0,
      description: '',
      limitSubscriber: 0,
      lastDate: '',
      hrAdmin: [],
      languages: []
    });

  const params = useParams();
  const onChange = e => {
    setJobDetail({ ...jobDetail, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('form submitted');
    let formData = jobDetail;
    let languages = lng.map(l => l.lng);
    //console.log(filterTag);
    let hrAdmin = filterTag.map(val => val._id);
    formData = {
      ...formData,
      languages: languages, country: con.label,
      hrAdmin: hrAdmin,
      lastDate : lastDate,
      skills : addedSkills
    };
    console.log(formData);

    const response = await axios({
      method:'POST',
      url : `/job/${params.id}/addJob`,
      data : formData
    });

    console.log(response.data);
    if(response.data){
      alert('job posted successully');
    }
    // const response = await axios({
    //     method: 'POST',
    //     url: `/job/${params.id}/addJob`,
    //     data: { ...jobDetail, 'companyName': companyNmae, 'hrAdmin' : hrAdmin }
    // });
    // console.log(response);
    // if (response.data) {
    //     alert('Job Posted Succesfully');
    // }
  }



  // input Data 
  const [lng, setlng] = useState([])
  const [skillData, setskillData] = useState([])
  const [con, setcon] = useState({ label: 'Select your country' })
  const [hiringData, sethiringData] = useState({ name: 'Choose Hiring Manager' })
  const [addedSkills, setaddedSkills] = useState([])



  const handleKeyDown = (e) => {

    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setaddedSkills([...addedSkills, value])
    e.target.value = ''
  }

  const remove = (index) => {
    setaddedSkills(addedSkills.filter((el, i) => i !== index))
  }


  const language = [
    { lng: 'Hindi' },
    { lng: 'Punjabi' },
    { lng: 'English' },
    { lng: 'French' },
  ]

  // for opening closing  buttons
  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(false);
  const handleJob = () => {
    setopen(true);
  };
  const Handleint = () => {
    setinternOpen(true)
  }

  const [internOpen, setinternOpen] = useState(false)
  const [job, setjob] = useState('')
  const [instagram, setinstagram] = useState(false)
  const [youtube, setyoutube] = useState(false)

  //  to set a job type

  const JobType = () => {
    if (document.getElementById("Job").checked) {
      setjob("Job");
    }
    if (document.getElementById("SocialMedia").checked) {
      setjob("SocialMedia");
    }
    if (document.getElementById("Freelancing").checked) {
      setjob("Freelancing");
    }
  };


  // opening closing of components

  const [company, setcompany] = useState(true)
  const [jobType, setjobType] = useState(true)
  const [languages, setlanguages] = useState(true)
  const [country, setcountry] = useState(false)
  const [hr, sethr] = useState(false)
  const [skill, setskill] = useState(false)
  const [jobtype, setjobtype] = useState(false)
  const [social, setsocial] = useState(false)
  const [freelancing, setfreelancing] = useState(false)

  const removeTag = (index) => {
    setfilterTag(filterTag.filter((el, id) => index !== id))
  }
  const [searchTerm, setsearchTerm] = useState([])

  const [filterTag, setfilterTag] = useState([])

  const [searchWorld, setsearchWorld] = useState('')

  console.log(searchWorld);
  const handleFilter = (e) => {
    const search = e.target.value
    setsearchWorld(search)
    const newFilter = allUsers.filter(val => {
      return (val.firstName + ' ' + val.lastName).toLowerCase().includes(search.toLowerCase())

    })

    if (search === '') {
      setsearchTerm([])

    }
    else {
      setsearchTerm(newFilter)


    }
  }
  const today = new Date();
  return (

    <div className='h-full bg-gray-100 pb-5 font-bold'>

      <div className="h-20 shadow-md bg-white" ></div>
      <div className=" m-2 mb-5 bb">
        <h1 className='py-3 mt-6 font-bold'>
          General Setting
        </h1>

        <div className="bg-white shadow-md h-20 mb-5 flex items-center justify-between px-6">
          <div className="flex">

            <h1 className=" text-gray-400">
              Type:
            </h1>
            <h1 className="">
              Video Campaign
            </h1>
          </div>
          <div className="">
            Edit
          </div>
        </div>
        <input
          type="text"
          placeholder='jobTitle'
          name="jobTitle"
          value={jobDetail.jobTitle}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder='Description'
          name="description"
          value={jobDetail.description}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder='location'
          name="location"
          value={jobDetail.location}
          onChange={onChange}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={lastDate}
            minDate={new Date()}
            
            maxDate={today.setDate(today.getDate() + 20)}
            onChange={()=>{console.log('do nothing')}}

           
            renderInput={(params) => <TextField {...params} />}
          />

        </LocalizationProvider>
        <div className={`bg-white shadow-md  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full px-6 ${company ? 'h-24 my-5' : 'h-12   '}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
          {company ? <div className="flex w-full ">

            <h1 className="  w-1/6 mr-10 bb font-semibold  ">
              Company Name
            </h1>
            <div className="bb w-2/5 ">
              <input
                type="text"
                name="companyName"
                placeholder='Enter your company name'
                className='p-3 outline-none   border-gray-400 border w-full border-solid rounded-lg '
                id=""
                value={jobDetail.companyName}
                onChange={onChange} />
            </div>
          </div> : <div className="flex bb w-full">

            <h1 className="  mr-10 w-1/6">
              Company Name
            </h1>
            <div className=" text-gray-500  w-3/5">
              Custom Company
            </div>

          </div>}

          <div className="bb w-20 ">
            <svg onClick={() => setcompany(!company)} xmlns="http://www.w3.org/2000/svg" class={`h-6 w-6 translate-x-10 duration-300 text-gray-500 ${company ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>

        </div>

        <div className={`bg-white shadow-md  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full px-6 ${jobType ? 'h-full py-8 my-5' : 'h-full py-4  '}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
          {jobType ? <div className="flex w-full ">

            <h1 className="  w-1/6 mr-10 bb font-semibold ">
              JobType
            </h1>
            <div className="bb w-3/5 ">

              <div className=" ">


                <div className="flex w-full justify-between ">
                  <div class="flex items-center">
                    <input
                      onClick={() => { JobType(); handleJob(); setopen2(false); setjobtype(true) }}
                      class=" h-4 w-4   checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mr-1  cursor-pointer"
                      type="radio"
                      name="jobType"
                      id="Job"
                      onChange={onChange}
                      value="job"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault1"
                    >
                      Job
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      onClick={() => { JobType(); setopen(false);; setopen2(true); setsocial(true) }}
                      class=" h-4 w-4   checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mr-1  cursor-pointer"
                      type="radio"
                      name="jobType"
                      id="SocialMedia"
                      onChange={onChange}
                      value="Social media"

                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault1"
                    >
                      Social Media
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      onClick={() => { JobType(); setopen(false);; setopen2(false); setfreelancing(true) }}
                      class=" h-4 w-4   checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mr-1  cursor-pointer"
                      type="radio"
                      name="jobType"
                      id="Freelancing"
                      onChange={onChange}
                      value="Freelancing"
                    />
                    <label
                      class="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault1"
                    >
                      Freelancing
                    </label>
                  </div>
                </div>




                <div className="flex">



                  {open2 ? <div className=" py-3 translate-x-[270px]">
                    <div class="flex items-center mb-2">
                      <input

                        onClick={() => setinstagram(!instagram)}
                        id="youtube"
                        type='checkbox'
                        value=""
                        name="default-radio"
                        class="w-4 h-4 focus:outline-none  text-blue-600 bg-gray-100 border-gray-300 "
                      />
                      <label
                        for="default-radio-1"
                        class="ml-2  font-medium text-gray-900 dark:text-gray-300"
                      >
                        Instagram
                      </label>
                    </div>
                    <div class="flex items-center mb-2">
                      <input
                        onClick={() => setyoutube(!youtube)}
                        id="instagram"
                        type="checkbox"
                        value=""
                        name="default-radio"
                        class="w-4 h-4 focus:outline-none  text-blue-600 bg-gray-100 border-gray-300 "
                      />
                      <label
                        for="default-radio-2"
                        class="ml-2  font-medium text-gray-900 dark:text-gray-300"
                      >
                        Youtube
                      </label>
                    </div>

                  </div> : null}

                </div>

              </div>
            </div>

          </div> : <div className="flex bb w-full">

            <h1 className="  mr-10 w-1/6 font-semibold">
              JobType
            </h1>
            <div className=" bb text-gray-500  w-3/5">
              Different Options of Jobs
            </div>

          </div>}

          <div className="bb w-20 ">
            <svg onClick={() => { setjobType(!jobType); setopen(false) }} xmlns="http://www.w3.org/2000/svg" class={`h-6 w-6 translate-x-10 duration-300 text-gray-500 ${jobType ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>

        </div>
        {job === 'Job' ?
          <div className={`bg-white shadow-md  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full px-6 ${jobtype ? 'h-full py-8 my-5' : 'h-full py-4   '}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
            {jobtype ? <div className="flex w-full ">

              <h1 className="  w-1/6 mr-10 bb  font-semibold">
                Job
              </h1>
              <div className="bb w-3/5 ">


                {open ?
                  <div class=''>

                    <div className=" py-3 flex w-full justify-between">
                      <div class="flex items-center mb-2">
                        <input onClick={() => { ; Handleint() }}
                          id="default-radio-1"
                          type="radio"
                          value="internship"
                          name="jobSubType"
                          onChange={onChange}
                          class="w-4 h-4 focus:outline-none  text-blue-600 bg-gray-100 border-gray-300 "
                        />


                        <label
                          for="default-radio-1"
                          class="ml-2  font-medium text-gray-900 dark:text-gray-300"
                        >
                          Internship
                        </label>



                      </div>



                      <div class="flex items-center mb-2">
                        <input onClick={() => { setinternOpen(false) }}
                          id="default-radio-2"
                          type="radio"
                          value="full time"
                          name="jobSubType"
                          class="w-4 h-4 focus:outline-none  text-blue-600 bg-gray-100 border-gray-300 "
                          onChange={onchange}
                        />
                        <label
                          for="default-radio-2"
                          class="ml-2  font-medium text-gray-900 dark:text-gray-300"
                        >
                          Full Time
                        </label>
                      </div>
                      <div class="flex items-center mb-2">
                        <input onClick={() => { setinternOpen(false) }}
                          id="default-radio-2"
                          type="radio"
                          value="part time"
                          name="jobSubType"
                          class="w-4 h-4 focus:outline-none  text-blue-600 bg-gray-100 border-gray-300 "
                          onchange={onchange}
                        />
                        <label
                          for="default-radio-2"
                          class="ml-2  font-medium text-gray-900 dark:text-gray-300"
                        >
                          Part Time
                        </label>
                      </div>
                    </div>
                    {internOpen ?
                      <div>
                        <div class="flex items-center mb-2">
                          <input
                            id="default-radio-1"
                            type="radio"
                            value="unpaid"
                            name="jobSubSubType"
                            class="w-4 h-4 focus:outline-none  text-blue-600 bg-gray-100 border-gray-300 "
                            onchange={onChange}
                          />


                          <label
                            for="default-radio-1"
                            class="ml-2  font-medium text-gray-900 dark:text-gray-300"
                          >
                            Unpaid
                          </label>



                        </div>
                        <div class="flex items-center mb-2">
                          <input
                            id="default-radio-1"
                            type="radio"
                            value="paid"
                            name="jobSubSubType"
                            class="w-4 h-4 focus:outline-none  text-blue-600 bg-gray-100 border-gray-300 "
                            onChange={onChange}
                          />


                          <label
                            for="default-radio-1"
                            class="ml-2  font-medium text-gray-900 dark:text-gray-300"
                          >
                            Paid
                          </label>



                        </div>
                      </div> : null}
                  </div>
                  : null}

              </div>
            </div> : <div className="flex bb w-full">

              <h1 className="  mr-10 w-1/6 font-semibold">
                Job
              </h1>
              <div className=" text-gray-500  w-3/5">
                <div className="flex">


                </div>
              </div>

            </div>}

            <div className="bb w-20 ">
              <svg onClick={() => setjobtype(!jobtype)} xmlns="http://www.w3.org/2000/svg" class={`h-6 w-6 translate-x-10 duration-300 text-gray-500 ${jobtype ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>

          </div>
          : null}
        {job === "SocialMedia" ?
          <div className={`bg-white shadow-md  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full px-6 ${social ? 'h-full my-5' : 'h-12   '}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
            {social ? <div className="flex w-full ">

              <h1 className="  w-1/6 mr-10 bb font-semibold  ">
                Social Media
              </h1>
              <div className="bb w-2/5 ">
                {youtube ?
                  <div className="pb-3">
                    <h1 className="font-semibold mb-2 text-gray-500">
                      Youtube Budget
                    </h1>
                    <div className="grid grid-cols-2 gap-x-3">

                      <input
                        type="text"
                        name="minBudget"
                        placeholder='Min budget'
                        className='p-3 outline-none   border-gray-400 border w-full border-solid rounded-lg '
                        id=""
                        value={jobDetail.minBudget}
                        onChange={onChange}
                      />

                      <input
                        type="text"
                        name="maxBudget"
                        placeholder='Max budget'
                        className='p-3 outline-none   border-gray-400 border w-full border-solid rounded-lg '
                        id=""
                        value={jobDetail.maxBudget}
                        onChange={onChange}
                      />

                    </div>
                    <input 
                      type="text" 
                      name="limitSubscriber" 
                      placeholder='Minimum Subscribers' 
                      className='p-3 outline-none mt-3   border-gray-400 border w-full border-solid rounded-lg ' 
                      id="" 
                      value={jobDetail.limitSubscriber} 
                      onChange={onChange} />
                  </div>
                  : null}

                {instagram ?
                  <div className="py-3">
                    <h1 className="font-semibold mb-2 text-gray-500">
                      Instagram Budget
                    </h1>
                    <div className="grid grid-cols-2 gap-x-3">
                      <input
                        type="text"
                        name="minBudget"
                        placeholder='Min budget'
                        className='p-3 outline-none   border-gray-400 border w-full border-solid rounded-lg '
                        id=""
                        value={jobDetail.minBudget}
                        onChange={onChange}
                      />

                      <input
                        type="text"
                        name="maxBudget"
                        placeholder='Max budget'
                        className='p-3 outline-none   border-gray-400 border w-full border-solid rounded-lg '
                        id=""
                        value={jobDetail.maxBudget}
                        onChange={onChange}
                      />

                    </div>
                    <input 
                      type="text" 
                      name="limitFollower" 
                      placeholder='Minimum Followers' 
                      className='p-3 outline-none mt-3   border-gray-400 border w-full border-solid rounded-lg ' 
                      id="" 
                      value={jobDetail.limitFollower} 
                      onChange={onChange} />
                  </div> : null}


              </div>
            </div> : <div className="flex bb w-full">

              <h1 className="  mr-10 w-1/6">
                Social Media
              </h1>
              <div className=" text-gray-500  w-3/5">
                Custom social
              </div>

            </div>}

            <div className="bb w-20 ">
              <svg onClick={() => setsocial(!social)} xmlns="http://www.w3.org/2000/svg" class={`h-6 w-6 translate-x-10 duration-300 text-gray-500 ${social ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>

          </div>
          : null}
        {job === "Freelancing" ?
          <div className={`bg-white shadow-md  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full px-6 ${freelancing ? 'h-full my-5' : 'h-12   '}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
            {freelancing ? <div className="flex w-full ">

              <h1 className="  w-1/6 mr-10 bb font-semibold  ">
                Freelancing
              </h1>
              <div className="bb w-2/5 ">

                <div className="py-3">
                  <h1 className="font-semibold mb-2 text-gray-400">
                    Freelancing Budget
                  </h1>
                  <div className="grid grid-cols-2 gap-x-3">
                    <input
                      type="text"
                      name="minBudget"
                      placeholder='Min budget'
                      className='p-3 outline-none   border-gray-400 border w-full border-solid rounded-lg '
                      id=""
                      value={jobDetail.minBudget}
                      onChange={onChange}
                    />

                    <input
                      type="text"
                      name="maxBudget"
                      placeholder='Max budget'
                      className='p-3 outline-none   border-gray-400 border w-full border-solid rounded-lg '
                      id=""
                      value={jobDetail.maxBudget}
                      onChange={onChange}
                    />


                  </div>
                </div>



              </div>
            </div> : <div className="flex bb w-full">

              <h1 className="  mr-10 w-1/6">
                Freelancing
              </h1>
              <div className=" text-gray-500  w-3/5">

              </div>

            </div>}

            <div className="bb w-20 ">
              <svg onClick={() => setfreelancing(!freelancing)} xmlns="http://www.w3.org/2000/svg" class={`h-6 w-6 translate-x-10 duration-300 text-gray-500 ${freelancing ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>

          </div>
          : null}
        <div className={`bg-white shadow-md  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full px-6 ${languages ? 'h-24 my-5' : 'h-12   '}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
          {languages ? <div className="flex w-full ">

            <h1 className="  w-1/6 mr-10 bb  font-semibold">
              Languages
            </h1>
            <div className="bb w-2/5 ">




              <Autocomplete
                multiple
                value={lng}
                id="multiple-limit-tags"
                options={language}
                getOptionLabel={(option) => option.lng}

                onChange={(event, value) => setlng(value)}
                renderInput={(params) => (
                  <TextField {...params} label="" placeholder="languages" />
                )}
                sx={{ width: '500px' }}
              />


            </div>
          </div> : <div className="flex bb w-full">

            <h1 className="  mr-10 w-1/6 font-semibold">
              Languages
            </h1>
            <div className=" text-gray-500  w-3/5">
              <div className="flex">

                {lng.map((lng, key) => <h1 className='font-semibold mr-2'>
                  {lng.lng}
                </h1>,

                )
                }
              </div>
            </div>

          </div>}

          <div className="bb w-20 ">
            <svg onClick={() => setlanguages(!languages)} xmlns="http://www.w3.org/2000/svg" class={`h-6 w-6 translate-x-10 duration-300 text-gray-500 ${languages ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>

        </div>
        <div className={`bg-white shadow-md  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full px-6 ${country ? 'h-24 my-5' : 'h-12   '}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
          {country ? <div className="flex w-full ">

            <h1 className="  w-1/6 mr-10 bb  font-semibold">
              Country
            </h1>
            <div className="bb w-2/5 ">


              <Autocomplete
                id="country-select-demo"
                sx={{ width: 300 }}
                defaultValue={countries[0]}
                value={con}
                onChange={(event, value) => setcon(value)}
                options={countries}

                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a country"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />


            </div>
          </div> : <div className="flex bb w-full">

            <h1 className="  mr-10 w-1/6 font-semibold">
              Country
            </h1>
            <div className=" text-gray-500  w-3/5">
              <h1 className='font-semibold mr-2'>
                {con.label}
              </h1>
            </div>

          </div>}

          <div className="bb w-20 ">
            <svg onClick={() => setcountry(!country)} xmlns="http://www.w3.org/2000/svg" class={`h-6 w-6 translate-x-10 duration-300 text-gray-500 ${country ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>

        </div>
        <div className={`bg-white shadow-md  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full px-6 ${hr ? 'h-full py-4 my-5' : 'py-4  '}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
          {hr ? <div className="flex w-full ">

            <h1 className="  w-1/6 mr-10 bb  font-semibold">
              Hiring Management
            </h1>
            <div className="bb w-2/5 ">

              <div className=" flex flex-wrap p-1 outline-none   border-gray-400 border w-full border-solid rounded-lg">

                {filterTag.map((tag, index) => (
                  <div key={index} className="flex bg-gray-600 text-white items-center rounded-lg mr-1  p-1 mb-1 text-sm">
                    {console.log("this is tag", tag)}
                    {tag.firstName + ' ' + tag.lastName}
                    <img onClick={() => removeTag(index)}
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik01Mi4wMyw0Mi4yNDc1bC05Ljc4MjUsOS43ODI1bDM0LjE4NSwzMy45N2wtMzQuMTg1LDMzLjk3bDkuNzgyNSw5Ljc4MjVsMzQuMTg1LC0zMy45N2wzNC4xODUsMzMuOTdsOS42NzUsLTkuNzgyNWwtMzQuMDc3NSwtMzMuOTdsMzQuMDc3NSwtMzMuOTdsLTkuNjc1LC05Ljc4MjVsLTM0LjE4NSwzMy45N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" className='h-4 w-4' alt="" />
                  </div>
                ))}
                <input value={searchWorld} onChange={handleFilter} type="search" placeholder='Search' name="" className='p-3 outline-none   w-full border-solid rounded-lg' id="" />

              </div>
              {searchTerm.length !== 0 && (

                <div className="border-2 absolute p-1 h-44 overflow-y-scroll w-72">
                  {searchTerm.map((val, index) => (
                    <div key={index} className="p-2 flex items-center border mb-1 rounded-lg bg-gray-100" onClick={() => { setfilterTag([...filterTag, val]); setsearchWorld(''); setsearchTerm([]) }}>
                      <img src={val.img} className='h-6 w-6 rounded-full mr-2' alt="" />
                      <h1>
                        {val.firstName + ' ' + val.lastName}

                      </h1>
                    </div>
                  ))}
                </div>
              )

              }

            </div>
          </div> : <div className="flex bb w-full">

            <h1 className="  mr-10 w-1/6 font-semibold">
              Hiring Management
            </h1>
            <div className=" text-gray-500  w-3/5">
              <h1 className='font-semibold mr-2'>
                {hiringData.name}
              </h1>
            </div>

          </div>}

          <div className="bb w-20 ">
            <svg onClick={() => sethr(!hr)} xmlns="http://www.w3.org/2000/svg" class={`h-6 w-6 translate-x-10 duration-300 text-gray-500 ${hr ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>

        </div>
        <div className={`bg-white shadow-md  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full px-6 ${skill ? 'h-24 my-5' : 'h-12   '}`} style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}>
          {skill ? <div className="flex w-full ">

            <h1 className="  w-1/6 mr-10 bb  font-semibold">
              Skills
            </h1>
            <div className="bb w-2/5 ">



              <div className='p-3 outline-none   border-gray-400 border w-full border-solid rounded-lg flex flex-wrap' >
                {addedSkills.map((skil, index) => (
                  <span key={index} className="bg-gray-300 h-6 p-2 mr-2 rounded-xl flex items-center  justify-center">
                    {skil}
                    <img src="https://img.icons8.com/material-rounded/344/multiply--v1.png" className='h-3 ml-1 bg-gray-400 rounded-full  w-3' alt="" onClick={() => remove(index)} />
                  </span>
                ))}

                <input onKeyDown={handleKeyDown} type="text" placeholder='UI Design, Communication' className='  bg-white text-sm  rounded-lg placeholder:text-[12px]   placeholder:font-bold p-1  outline-none'   ></input>


              </div>

            </div>
          </div> : <div className="flex bb w-full">

            <h1 className="  mr-10 w-1/6 font-semibold">
              Skills
            </h1>
            <div className=" text-gray-500  w-3/5">
              <div className="flex">

                {addedSkills.map((skils, key) => {
                  return <h1 className='font-semibold mr-2'>
                    {skils}
                  </h1>
                }

                )
                }
              </div>
            </div>

          </div>}

          <div className="bb w-20 ">
            <svg onClick={() => setskill(!skill)} xmlns="http://www.w3.org/2000/svg" class={`h-6 w-6 translate-x-10 duration-300 text-gray-500 ${skill ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </div>

        </div>

      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

const hrManager =
  [
    {
      id: 1,
      name: 'Jot',
      img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Rattan',
      img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Dilpreet',
      img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: 'Anant',
      img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      name: 'Harman',
      img: 'https://images.pexels.com/photos/1996887/pexels-photo-1996887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      name: 'Harjit',
      img: 'https://images.pexels.com/photos/1892876/pexels-photo-1892876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 7,
      name: 'Gursimran',
      img: 'https://images.pexels.com/photos/1926843/pexels-photo-1926843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 8,
      name: 'Jarry',
      img: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 9,
      name: 'teg',
      img: 'https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 10,
      name: 'Anmol',
      img: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ]