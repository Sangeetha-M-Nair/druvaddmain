import React, { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function AddJob() {
    let [allCompanies, setAllCompanies] = useState(null);
    let [companyNmae, setCompanyName] = useState('');
    const [focus, setOnFocus] = useState(false);
    const [focusHr, setOnFocusHr] = useState(false);
    const [allUsers, setAllUsers] = useState(null);
    const [hrAdmin, setHrAdmin] = useState([]);
    const [hrAdminText, setHrAdminText] = useState('');
    let [hrAdminText2, setHrAdminText2] = useState('');
    const getCompanies = async () => {
        const response = await axios({
            method: 'GET',
            url: '/company/allcompanies'
        });
        console.log('response from all companies');
        console.log(response.data);
        setAllCompanies(response.data);
    }

    const getAllUsers = async () => {
        console.log('sending request from all users');
        const response = await axios({
            method: 'GET',
            url: '/user/allUsers'
        });
        //console.log(response.data);
        setAllUsers(response.data)
    }

    useEffect(() => {
        getCompanies();
        getAllUsers();
    }, [])

    const [jobDetail, setJobDetail] = useState(
        {
            companyName: '',
            category: 'SocialMedia',
            jobTitle: '',
            type: 'YouTube',
            minBudget: 0,
            maxBudget: 0,
            jobType: 'FullTime',
            jobSubType: 'Paid',
            country: '',
            location: '',
            limitFollower: 0,
            description: '',
            limitSubscriber: 0,
            lastDate: '',
            hrAdmin: []
        });
    //const navigate = useNavigate();
    const params = useParams();
    const onChange = e => {
        setJobDetail({ ...jobDetail, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('form submitted');
        console.log(jobDetail);
        const response = await axios({
            method: 'POST',
            url: `/job/${params.id}/addJob`,
            data: { ...jobDetail, 'companyName': companyNmae, 'hrAdmin' : hrAdmin }
        });
        console.log(response);
        if (response.data) {
            alert('Job Posted Succesfully');
        }
    }
    if (!allCompanies && !allUsers) {
        return <div>
            Loading...
        </div>
    }
    else {
        return (
            <div>
                <div className="App   ">
                    <div className="mx-12">
                        <div className="px-4 my-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Job Information</h3>
                            <p className="mt-1 text-sm text-gray-600">
                                Use a Your Company Name To Post Successfully
                            </p>
                        </div>
                        <div className="md:mt-0 md:col-span-2 ">

                            <form className="">
                                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">companyName</label>
                                <input type="text" style={{ border: '1px solid black' }} name="companyName" value={companyNmae} onChange={(e) => setCompanyName(e.target.value)} onFocus={() => setOnFocus(true)}></input>
                                {

                                    focus && allCompanies.filter((company) => {
                                        if (companyNmae === "") {
                                            console.log('jere');
                                            return null;
                                        }
                                        else if (company.name.includes(companyNmae)) {
                                            console.log('here 2');
                                            return company;
                                        }
                                    }).map(company => {
                                        return (<div>
                                            <button onClick={(e) => {
                                                e.preventDefault();
                                                setCompanyName(company.name); setOnFocus(false)
                                            }}>{company.name}</button>
                                        </div>)
                                    })
                                }
                                <br></br>
                                <br></br>
                                <label>HR ADMINS</label><br></br>
                                <p>{hrAdminText2}</p>
                                <input type="text" style={{ border: '1px solid black' }} name="hrAdmin" value={hrAdminText} onChange={(e) => setHrAdminText(e.target.value)} onFocus={() => setOnFocusHr(true)}></input>
                                {
                                    focusHr && allUsers.filter((user) => {
                                        if (hrAdminText === "") {
                                            return null;
                                        }
                                        else if ((user.firstName + " " + user.lastName).includes(hrAdminText)) {
                                            console.log('here');
                                            return user;
                                        }
                                    }).map((user, key) => {
                                        console.log(user);
                                        return <button onClick={(e) => {
                                            e.preventDefault();
                                            setHrAdmin(hrAdmin => {
                                                return [...hrAdmin, user._id]
                                            });
                                            setHrAdminText2((prevVal)=>{
                                                return prevVal + user.firstName + " " + user.lastName + ","
                                            })
                                            setHrAdminText('0');

                                        }}
                                        >{user.firstName + " " + user.lastName}</button>
                                    })
                                }


                                <div className="shadow overflow-hidden sm:rounded-md bg-gray-50">
                                    <div className="px-4 py-3 bg- sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">jobTitle</label>
                                                <input type="text" onChange={onChange} value={jobDetail.jobTitle} name="jobTitle" id="jobTitle" autoComplete="jobTitle" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md input" />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">

                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">category</label>
                                                <select id="category" value={jobDetail.category} onChange={onChange} name="category" autoComplete="category" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                    <option>SocialMedia</option>
                                                    <option>Freelancing</option>
                                                    <option>Job</option>
                                                </select>
                                            </div>

                                            {jobDetail.category === 'SocialMedia' &&
                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="Type" className="block text-sm font-medium text-gray-700">Type</label>
                                                    <select id="Type" value={jobDetail.Type} onChange={onChange} name="Type" autoComplete="Type" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option>YouTube</option>
                                                        <option>Instagram</option>
                                                    </select>
                                                </div>
                                            }
                                            {(jobDetail.category === 'SocialMedia' || jobDetail.category === 'Freelancing') &&
                                                <div>
                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                        <label htmlFor="maxBudget" className="block text-sm font-medium text-gray-700">Min Budget</label>
                                                        <input type="number" onChange={onChange} value={jobDetail.minBudget} name="minBudget" id="minBudget" autoComplete="Budget" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md input" />

                                                        <label htmlFor="minBudget" className="block text-sm font-medium text-gray-700">Max Budget</label>
                                                        <input type="number" onChange={onChange} value={jobDetail.maxBudget} name="maxBudget" id="maxBudget" autoComplete="Budget" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md input" />

                                                        <label htmlFor="limitFollower" className="block text-sm font-medium text-gray-700">Limit Followers</label>
                                                        <input type="number" onChange={onChange} value={jobDetail.limitFollower} name="limitFollower" id="limitFollowers" autoComplete="Budget" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md input" />

                                                        <label htmlFor="limitSubscriber" className="block text-sm font-medium text-gray-700">Limit Subscribers</label>
                                                        <input type="number" onChange={onChange} value={jobDetail.limitSubscriber} name="limitSubscriber" id="limitSubscriber" autoComplete="Budget" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md input" />
                                                    </div>
                                                </div>



                                            }
                                            {jobDetail.category === 'Job' && <>
                                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                    <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">jobType</label>
                                                    <select id="jobType" value={jobDetail.jobType} onChange={onChange} name="jobType" autoComplete="jobType" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option>FullTime</option>
                                                        <option>PartTime</option>
                                                        <option>Intern</option>
                                                    </select>
                                                </div>
                                                {jobDetail.jobType === "Intern" ?
                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                        <label htmlFor="jobSubType" className="block text-sm font-medium text-gray-700">jobSubType</label>
                                                        <select id="jobSubType" value={jobDetail.jobSubType} onChange={onChange} name="jobSubType" autoComplete="jobSubType" className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                            <option>Paid</option>
                                                            <option>UnPaid</option>
                                                        </select>
                                                    </div>
                                                    :
                                                    <div></div>

                                                }
                                            </>}

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                                                <input type="text" value={jobDetail.country} onChange={onChange} name="country" id="country" className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md input" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">location</label>
                                                <input type="text" value={jobDetail.location} onChange={onChange} name="location" id="location" className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md input" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="desccription" className="block text-sm font-medium text-gray-700">description</label>
                                                <input type="text" value={jobDetail.description} onChange={onChange} name="description" id="description" className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md input" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Last Date</label>
                                                <input type="date" value={jobDetail.lastDate} onChange={onChange} name="lastDate" id="lastDate" className=" focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md input" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-2 bg-gray-50 text-right ">
                                        <button onClick={handleSubmit} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Save
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )

    }

}

