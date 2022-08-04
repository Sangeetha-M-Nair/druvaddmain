import React, { useEffect, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { countries } from './countries';
import Box from '@mui/material/Box';
import axios from 'axios';
import "soft-ui-library/dist/css/neumorphism-ui.css"
import { useParams } from 'react-router';
import WorkIcon from '@mui/icons-material/Work';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BadgeIcon from '@mui/icons-material/Badge';
import DnsIcon from '@mui/icons-material/Dns';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import TranslateIcon from '@mui/icons-material/Translate';
import PublicIcon from '@mui/icons-material/Public';
import GroupIcon from '@mui/icons-material/Group';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import GradeIcon from '@mui/icons-material/Grade';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ComputerIcon from '@mui/icons-material/Computer';
import TagIcon from '@mui/icons-material/Tag';

export const Job2 = () => {

  // data for company
  const options = ['Option 1', 'Option 2'];
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
  const [ socialMedias, setSocialMedias ] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('form submitted');
    let formData = jobDetail;
    let languages = lng.map(l => l.lng);
    //console.log(filterTag);
    let hrAdmin = filterTag.map(val => val._id);
    //console.log(formFields); //these are the form fields 
    //filling youtube instagram value
    const type = [];
    if(instagramChecked){
      type.push('instagram');
    }
    if(youtubeChecked){
      type.push('youtube');
    }
    formData = {
      ...formData,
      languages: languages, country: con.label,
      hrAdmin: hrAdmin,
      lastDate: lastDate,
      skills: addedSkills,
      skillsRated: formFields,
      companyName: comp,
      type : type
    };
    console.log(formData);
    console.log('sending job data to the server');
    const response = await axios({
      method: 'POST',
      url: `/job/${params.id}/addJob`,
      data: formData
    });

    console.log(response.data);
    if (response.data) {
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
  const [comp, setcomp] = useState(null)
  //console.log("this is company", comp);
  const [hiringData, sethiringData] = useState({ name: 'Choose Hiring Manager' })
  const [addedSkills, setaddedSkills] = useState([])
  //console.log("conhi", con);
  // to set bg of job component arrow

  const [selectJob, setselectJob] = useState('')
  const [ instagramChecked, setinstagramChecked ] = useState(false);
  const [ youtubeChecked, setYoutubeChecked ] = useState(false);

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
  const [jobTitle, setjobTitle] = useState(false)
  const [location, setlocation] = useState(false)
  const [descrip, setdescrip] = useState(false)
  const [hr, sethr] = useState(false)
  const [skill, setskill] = useState(false)
  const [jobtype, setjobtype] = useState(false)
  const [social, setsocial] = useState(false)
  const [freelancing, setfreelancing] = useState(false)
  const [rating, setrating] = useState(false)

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
  //console.log("lng hasi", lng);
  //form
  const [formFields, setFormFields] = useState([
    { name: '', value: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    // console.log(data);
    // console.log(event.target.name);
    // console.log(event.target.value);
    // data[index] = {
    //   name : event.target.name,
    //   value : event.target.value
    // };
    // //data[index][event.target.name] = event.target.value;
    // console.log(data);
    //setFormFields(data);
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const addFields = () => {
    let object = {
      name: '',
      value: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (

    <div className='h-full  pb-5 px-8 light-mode text-white '>

      {/* <div className="h-20 shadow-md bg-white" ></div> */}
      <div className=" m-2 mb-5 bb">
        <h4 className='py-3 mt-6 text-black '>
          General Setting
        </h4>




        <div className={` bg-indigo-600 sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full items-center px-6 ${jobTitle ? 'h-full py-8  mb-5' : 'h-full py-4 mb-3   '}`} style={{ backgroundColor: '#8b14f9' }} >
          <div className="w-14 bb mr-5">
            <WorkIcon sx={{ fontSize: 40 }} className=' text-3xl ' />
          </div>
          {jobTitle ? <div className="flex w-full items-center ">

            <h4 className="  w-1/6 mr-10 bb   ">
              Job Title
            </h4>
            <div className="bb w-2/5 ">
              <input
                type="text"
                name="jobTitle"
                placeholder='Enter your Job Title'

                className='p-3 sul-text-field rounded-lg '
                id=""
                value={jobDetail.jobTitle}
                onChange={onChange} />
            </div>
          </div> : <div className="flex bb w-full ">

            <h4 className="  mr-10 w-1/6">
              Job Title
            </h4>


          </div>}

          <div className="bb w-20 h-full flex justify-end  items-center ">
            <div className={` w-20 h-14 rounded-full flex items-center justify-center ${jobDetail.jobTitle
              === '' ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

              <svg onClick={() => setjobTitle(!jobTitle)} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${jobTitle ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>

        </div>

        <div className={`sul-box-raised-3 with-hover rounded-lg border-gray-200  flex text-black pt-3  duration-300  w-full items-center px-6 ${company ? 'h-full py-8 my-5' : 'h-full py-4 mb-3'}`}    >
          <div className="w-14 bb mr-5">
            <ApartmentIcon sx={{ fontSize: 40 }} className=' text-3xl ' />
          </div>
          {company ? <div className="flex w-full  items-center">

            <h4 className="  w mr-10 bb   ">
              Company Name
            </h4>
            <div className="bb w-2/5 ">
              <Autocomplete
                disablePortal
                className='p-3 sul-text-field rounded-lg '
                id="combo-box-demo"
                options={allCompanies.map(company => company.name)}
                value={comp}
                onChange={(event, value) => setcomp(value)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Company Name" />}
              />

            </div>
          </div> : <div className="flex bb w-full ">

            <h4 className="  mr-10">
              Company Name
            </h4>


          </div>}

          <div className="bb w-20 h-full flex justify-end  items-center ">
            <div className={` w-20 h-14 rounded-full flex items-center justify-center ${comp
              === null ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

              <svg onClick={() => setcompany(!company)} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${company ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>

        </div>

        <div className={`sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full items-center px-6 ${jobType ? 'h-full py-8 my-5' : 'h-full py-4 mb-3'}`} style={{ backgroundColor: '#8b14f9' }}  >
          <div className="w-14 bb mr-5">
            <BadgeIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
          </div>
          {jobType ? <div className="flex w-full  items-center">

            <h4 className="  w-1/6 mr-10 bb  ">
              Job Type
            </h4>
            <div className="bb w-3/5 ">

              <div className=" ">


                <div className="flex w-full justify-between ">
                  <div class="flex items-center">
                    <input
                      onClick={() => { JobType(); handleJob(); setopen2(false); setjobtype(true) }}
                      class="sul-radio"
                      type="radio"
                      name="jobType"
                      id="Job"
                      onChange={onChange}
                      value="job"
                    />

                    <label
                      class="form-check-label inline-block text-white"
                      for="flexRadioDefault1"
                    >
                      Job
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      onClick={() => { JobType(); setopen(false);; setopen2(true); setsocial(true) }}
                      class="sul-radio"
                      type="radio"
                      name="jobType"
                      id="SocialMedia"
                      onChange={onChange}
                      value="Social media"

                    />
                    <label
                      class="form-check-label inline-block text-white"
                      for="flexRadioDefault1"
                    >
                      Social Media
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      onClick={() => { JobType(); setopen(false);; setopen2(false); setfreelancing(true) }}
                      class="sul-radio"
                      type="radio"
                      name="jobType"
                      id="Freelancing"
                      onChange={onChange}
                      value="Freelancing"
                    />
                    <label
                      class="form-check-label inline-block text-white"
                      for="flexRadioDefault1"
                    >
                      Freelancing
                    </label>
                  </div>
                </div>




                <div className="flex">



                  {open2 ? <div className=" py-3 translate-x-[220px]">
                    <div class="flex items-center mb-2">
                      <input

                        onClick={() => setinstagram(!instagram)}
                        id="youtube"
                        type='checkbox'
                        class="sul-checkbox-type-1"
                        value="Instagram"
                        checked={instagramChecked}
                        onChange={()=>setinstagramChecked(!instagramChecked)}
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
                        class="sul-checkbox-type-1"
                        value="youtube"
                        checked={youtubeChecked}
                        onChange={()=>setYoutubeChecked(!youtubeChecked)}
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

          </div> : <div className="flex bb  w-full">

            <h4 className="  mr-10 w-1/6 ">
              Job Type
            </h4>


          </div>}

          <div className="bb w-20 h-full flex justify-end  items-center ">
            <div className={` w-20 h-14 rounded-full flex items-center justify-center ${job
              === '' ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

              <svg onClick={() => { setjobType(!jobType) }} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${jobType ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>

        </div>
        {job === 'Job' ?
          <div className={`sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full text-black items-center px-6 ${jobtype ? 'h-full py-8 my-5' : 'h-full py-4 mb-3 '}`}   >
            <div className="w-14 bb mr-5">
              <DnsIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
            </div>
            {jobtype ? <div className="flex w-full ">

              <h4 className="  w-1/6 mr-10 bb  ">
                Job
              </h4>
              <div className="bb w-3/5 ">


                {open ?
                  <div class=''>

                    <div className=" py-3 flex w-full justify-between">
                      <div class="flex items-center mb-2">
                        <input onClick={() => { setselectJob('Intern'); Handleint() }}
                          id="default-radio-1"
                          class="sul-radio"
                          type="radio"
                          name="jobSubType"
                          onChange={onChange}
                          value="Internship"
                        />
                        <label
                          for="default-radio-1"
                          class="ml-2  font-medium text-gray-900 dark:text-gray-300"
                        >
                          Internship
                        </label>
                      </div>

                      <div class="flex items-center mb-2">
                        <input onClick={() => { setselectJob('Full'); setinternOpen(false) }}
                          id="default-radio-2"
                          class="sul-radio"
                          type="radio"
                          name="jobSubType"
                          value="Full Time"
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
                        <input onClick={() => { setselectJob('Part'); setinternOpen(false) }}
                          id="default-radio-2"
                          class="sul-radio"
                          type="radio"
                          name="jobSubType"
                          value="Part time"
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
                            class="sul-radio"
                            type="radio"
                            name="jobSubSubType"
                            value="Unpaid"
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
                            class="sul-radio"
                            type="radio"
                            name="jobSubSubType"
                            value="Paid"
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
            </div> : <div className="flex bb w-full items-center">

              <h4 className="  mr-10 w-1/6 ">
                Job
              </h4>


            </div>}

            <div className="bb w-20 h-full flex justify-end  items-center ">
              <div className={` w-20 h-14 rounded-full flex items-center justify-center ${selectJob
                === '' ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

                <svg onClick={() => { setjobtype(!jobtype) }} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${jobtype ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </div>
            </div>

          </div>
          : null}
        {job === "SocialMedia" ?
          <div className={`sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full items-center text-black px-6 ${social ? 'h-full py-8 my-5' : 'py-4 h-full mb-3  '}`}    >
            <div className="w-14 bb mr-5">
              <TagIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
            </div>
            {social ? <div className="flex w-full ">

              <h4 className="  w-1/6 mr-10 bb   ">
                Social Media
              </h4>
              <div className="bb w-2/5 ">
                {youtube ?
                  <div className="pb-3">
                    <h4 className=" mb-2 ">
                      Youtube Budget
                    </h4>
                    <div className="grid grid-cols-2 gap-x-3">

                      <input
                        type="text"
                        name="minBudget"
                        placeholder='Min budget'
                        className='p-3 sul-text-field rounded-lg '
                        id=""
                        value={jobDetail.minBudget}
                        onChange={onChange}
                      />

                      <input
                        type="text"
                        name="maxBudget"
                        placeholder='Max budget'
                        className='p-3 sul-text-field rounded-lg '
                        id=""
                        value={jobDetail.maxBudget}
                        onChange={onChange}
                      />

                    </div>
                    <input
                      type="text"
                      name="limitSubscriber"
                      placeholder='Minimum Subscribers'
                      className='p-3 sul-text-field rounded-lg mt-3 '
                      id=""
                      value={jobDetail.limitSubscriber}
                      onChange={onChange} />
                  </div>
                  : null}

                {instagram ?
                  <div className="py-3">
                    <h4 className=" mb-2 ">
                      Instagram Budget
                    </h4>
                    <div className="grid grid-cols-2 gap-x-3">
                      <input
                        type="text"
                        name="minBudget"
                        placeholder='Min budget'
                        className='p-3 sul-text-field rounded-lg '
                        id=""
                        value={jobDetail.minBudget}
                        onChange={onChange}
                      />

                      <input
                        type="text"
                        name="maxBudget"
                        placeholder='Max budget'
                        className='p-3 sul-text-field rounded-lg '
                        id=""
                        value={jobDetail.maxBudget}
                        onChange={onChange}
                      />

                    </div>
                    <input
                      type="text"
                      name="limitFollower"
                      placeholder='Minimum Followers'
                      className='p-3 sul-text-field rounded-lg  mt-3'
                      id=""
                      value={jobDetail.limitFollower}
                      onChange={onChange} />
                  </div> : null}


              </div>
            </div> : <div className="flex bb w-full">

              <h4 className="  mr-10 w-1/6">
                Social Media
              </h4>


            </div>}

            <div className="bb w-20 h-full flex justify-end  items-center ">
              <div className={` w-20 h-14 rounded-full flex items-center justify-center ${jobDetail.minBudget
                === '' ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

                <svg onClick={() => { setsocial(!social) }} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${social ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </div>
            </div>
          </div>
          : null}
        {job === "Freelancing" ?
          <div className={`sul-box-raised-3 with-hover  text-black rounded-lg border-gray-200  flex  pt-3  duration-300  w-full items-center px-6 ${freelancing ? 'h-full py-8 my-5' : 'py-4 h-full mb-3  '}`}    >
            <div className="w-14 bb mr-5">
              <ComputerIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
            </div>
            {freelancing ? <div className="flex w-full ">

              <h4 className="  w-1/6 mr-10 bb   ">
                Freelancing
              </h4>
              <div className="bb w-2/5 ">

                <div className="py-3">
                  <h4 className=" mb-2 text-gray-400">
                    Freelancing Budget
                  </h4>
                  <div className="grid grid-cols-2 gap-x-3">
                    <input
                      type="text"
                      name="minBudget"
                      placeholder='Min budget'
                      className='p-3 sul-text-field rounded-lg '
                      id=""
                      value={jobDetail.minBudget}
                      onChange={onChange}
                    />

                    <input
                      type="text"
                      name="maxBudget"
                      placeholder='Max budget'
                      className='p-3 sul-text-field rounded-lg '
                      id=""
                      value={jobDetail.maxBudget}
                      onChange={onChange}
                    />


                  </div>
                </div>



              </div>
            </div> : <div className="flex bb w-full">

              <h4 className="  mr-10 w-1/6">
                Freelancing
              </h4>
              <div className=" text-white  w-3/5">

              </div>

            </div>}
            <div className="bb w-20 h-full flex justify-end  items-center ">
              <div className={` w-20 h-14 rounded-full flex items-center justify-center ${jobDetail.minBudget
                === '' ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

                <svg onClick={() => { setfreelancing(!freelancing) }} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${freelancing ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </div>
            </div>

          </div>
          : null}
        <div className={`sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex text-black pt-3  duration-300  w-full items-center px-6 ${location ? 'h-full py-8  mb-5' : 'h-full py-4 mb-3  '}`}   >
          <div className="w-14 bb mr-5">
            <AddLocationAltIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
          </div>
          {location ? <div className="flex w-full items-center ">

            <h4 className="  w-1/6 mr-10 bb   ">
              Location
            </h4>
            <div className="bb w-2/5 ">
              <input
                type="text"
                name="location"
                placeholder='Enter your Location'
                className='p-3 sul-text-field rounded-lg '
                id=""
                value={jobDetail.location}
                onChange={onChange} />
            </div>
          </div> : <div className="flex bb w-full ">

            <h4 className="  mr-10 w-1/6">
              Location
            </h4>

          </div>}

          <div className="bb w-20 h-full flex justify-end  items-center ">
            <div className={` w-20 h-14 rounded-full flex items-center justify-center ${jobDetail.location
              === '' ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

              <svg onClick={() => setlocation(!location)} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${location ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>

        </div>
        <div className={`sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full items-center px-6 ${descrip ? 'h-full py-8  mb-5' : 'h-full py-4 mb-3  '}`} style={{ backgroundColor: '#8b14f9' }}  >
          <div className="w-14 bb mr-5">
            <DescriptionIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
          </div>
          {descrip ? <div className="flex w-full ">

            <h4 className="  w-1/6 mr-10 bb   ">
              Description
            </h4>
            <div className="bb w-2/5 ">
              <textarea name="description"

                placeholder='Enter your Description'
                class="sul-text-field"
                id=""
                value={jobDetail.description}
                onChange={onChange} cols="30" rows="10"></textarea>
            </div>
          </div> : <div className="flex bb w-full ">

            <h4 className="  mr-10 w-1/6">
              Description
            </h4>


          </div>}

          <div className="bb w-20 h-full flex justify-end  items-center ">
            <div className={` w-20 h-14 rounded-full flex items-center justify-center ${jobDetail.description
              === '' ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

              <svg onClick={() => setdescrip(!descrip)} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${descrip ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>

        </div>
        <div className={`sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full items-center text-black  px-6 ${languages ? 'h-full py-8  my-5' : 'h-full py-4 mb-3  '}`}    >
          <div className="w-14 bb mr-5">
            <TranslateIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
          </div>
          {languages ? <div className="flex w-full items-center ">

            <h4 className="  w-1/6 mr-10 bb  ">
              Languages
            </h4>
            <div className="bb w-2/5 ">




              <Autocomplete
                multiple
                value={lng}
                id="multiple-limit-tags"
                options={language}
                getOptionLabel={(option) => option.lng}
                style={{ backgroundColor: 'white' }}
                onChange={(event, value) => setlng(value)}
                renderInput={(params) => (
                  <TextField {...params} label="" placeholder="languages" />
                )}
                sx={{ width: '500px' }}
              />


            </div>
          </div> : <div className="flex bb w-full">

            <h4 className="  mr-10 w-1/6 ">
              Languages
            </h4>
            <div className=" text-white  w-3/5">
              <div className="flex">

                {lng.map((lng, key) => <div className=' mr-2'>
                  {lng.lng}
                </div>,

                )
                }
              </div>
            </div>

          </div>}

          <div className="bb w-20 h-full flex justify-end  items-center ">
            <div className={` w-20 h-14 rounded-full flex items-center justify-center ${lng.length === 0 ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

              <svg onClick={() => { setlanguages(!languages) }} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${languages ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>

        </div>
        <div className={`sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full items-center px-6 ${country ? 'h-full py-8  my-5' : 'h-full py-4 mb-3  '}`} style={{ backgroundColor: '#8b14f9' }}  >
          <div className="w-14 bb mr-5">
            <PublicIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
          </div>
          {country ? <div className="flex w-full items-center ">

            <h4 className="  w-1/6 mr-10 bb  ">
              Country
            </h4>
            <div className="bb w-2/5 ">


              <Autocomplete
                id="country-select-demo"
                style={{ backgroundColor: 'white' }}
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
                    // label="Choose a country"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />


            </div>
          </div> : <div className="flex bb w-full">

            <h4 className="  mr-10 w-1/6 ">
              Country
            </h4>
            {/* <div className=" text-white  w-3/5">
              <div className=' mr-2'>
                {con.label}
              </div>
            </div> */}

          </div>}


          <div className="bb w-20 h-full flex justify-end  items-center ">
            <div className={` w-20 h-14 rounded-full flex items-center justify-center ${con.label === 'Select your country' || con.label === '' ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

              <svg onClick={() => { setcountry(!country) }} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${country ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>

        </div>
        <div className={`sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full items-center text-black px-6 ${hr ? 'h-full py-4 my-5' : 'py-4 mb-3'}`}  >
          <div className="w-14 bb mr-5">
            <GroupIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
          </div>
          {hr ? <div className="flex w-full items-center">

            <h4 className="  w-1/6 mr-10 bb  ">
              Hiring Management
            </h4>
            <div className="bb w-2/5 ">

              <div className=" flex flex-wrap p-1 outline-none bg-white   border-gray-400 border w-full border-solid rounded-lg">

                {filterTag.map((tag, index) => (
                  <div key={index} className="flex bg-gray-600 text-black items-center rounded-lg mr-1  p-1 mb-1 text-sm">
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
                      <img src={val.img} className=' w-20 h-14 rounded-full mr-2' alt="" />
                      <h4>
                        {val.firstName + ' ' + val.lastName}
                      </h4>
                    </div>
                  ))}
                </div>
              )
              }
            </div>
          </div> : <div className="flex bb w-full">
            <h4 className="  mr-10 w-1/6 ">
              Hiring Management
            </h4>
            {/* <div className=" text-white  w-3/5">
              <div className=' mr-2'>
                {hiringData.name}
              </div>
            </div> */}
          </div>}
          <div className="bb w-20 h-full flex justify-end  items-center ">
            <div className={` w-20 h-14 rounded-full flex items-center justify-center ${searchWorld === "" ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>
              <svg onClick={() => { sethr(!hr) }} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${hr ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className={`sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full items-center px-6 ${skill ? 'h-full py-8  my-5' : 'h-full py-4 mb-3  '}`} style={{ backgroundColor: '#8b14f9' }}  >
          <div className="w-14 bb mr-5">
            <FormatListBulletedIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
          </div>
          {skill ? <div className="flex w-full items-center ">
            <h4 className="  w-1/6 mr-10 bb  ">
              Skills
            </h4>
            <div className="bb w-2/5 ">
              <div className='p-3 outline-none bg-white   border-gray-400 border w-full border-solid rounded-lg flex flex-wrap' >
                {addedSkills.map((skil, index) => (
                  <span key={index} className="bg-gray-300 h-6 p-2 text-black mr-2 rounded-xl flex items-center  justify-center">
                    {skil}
                    <img src="https://img.icons8.com/material-rounded/344/multiply--v1.png" className='h-3 ml-1 bg-gray-400 rounded-full  w-3' alt="" onClick={() => remove(index)} />
                  </span>
                ))}
                <input onKeyDown={handleKeyDown} type="text" placeholder='UI Design, Communication' className='  bg-white text-sm  rounded-lg placeholder:text-[12px]   placeholder: p-1  outline-none'   ></input>
              </div>

            </div>
          </div> : <div className="flex bb w-full">
            <h4 className="  mr-10 w-1/6 ">
              Skills
            </h4>
            <div className=" text-white  w-3/5">
              <div className="flex">
                {addedSkills.map((skils, key) => {
                  return <div className=' mr-2'>
                    {skils}
                  </div>
                }
                )
                }
              </div>
            </div>
          </div>}
          <div className="bb w-20 h-full flex justify-end  items-center ">
            <div className={` w-20 h-14 rounded-full flex items-center justify-center ${addedSkills.length === 0 ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

              <svg onClick={() => { setskill(!skill) }} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${skill ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className={`sul-box-raised-3 with-hover  rounded-lg border-gray-200  flex  pt-3  duration-300  w-full items-center text-black  px-6 ${rating ? 'h-full py-4 my-5' : 'py-4 mb-3'}`}   >
          <div className="w-14 bb mr-5 flex">
            <GradeIcon sx={{ fontSize: 40 }} className=' text-3xl  ' />
            
          </div>
          {rating ?
          <div className='w-full'>
          <h1 className="  w-1/6 mr-10 bb font-bold text-[25px]  ">
                Rate
              </h1>
            <div className="flex flex-col w-full items-center ">
              
              {
                formFields.map((form, index) => {
                  return (

                    <div className="div w-full my-2">
                      <div className="flex w-full items-center bb">
                        <div className="bb w-2/5 ">
                          <input
                            type="text"
                            placeholder='rating'
                            name="name"
                            value={form.name}
                            onChange={event => handleFormChange(event, index)}
                            className='p-3 outline-none   border-gray-400 border w-full border-solid rounded-lg '
                          />
                        </div>
                        <div className="bb w-2/5 flex justify-center">
                          <Stack spacing={12}>
                            <Rating
                              name="value"
                              size="large"
                              value={form.value}
                              onChange={event => handleFormChange(event, index)}
                            />
                          </Stack>
                        </div>
                        <div onClick={removeFields} className="w-1/5 bb flex justify-center" >
                          <DeleteIcon />
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <div onClick={addFields} className="flex  skills  cursor-pointer mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                <span className="text-sm ml-1 font-bold">
                  Add New Skill
                </span>
              </div>
            </div>
              </div>



            : <div className="flex bb w-full">

              <h4 className="  mr-10 w-1/6 ">
                Rating
              </h4>


            </div>}

          <div className="bb w-20 h-full flex justify-end  items-center ">
            <div className={` w-20 h-14 rounded-full flex items-center justify-center ${searchWorld === "" ? "bg-[#a52a2a57]" : "bg-yellow-400"}`}>

              <svg onClick={() => { setrating(!rating) }} xmlns="http://www.w3.org/2000/svg" class={`h-8 w-8 a duration-300 text-white  ${rating ? "rotate-180" : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </div>
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
