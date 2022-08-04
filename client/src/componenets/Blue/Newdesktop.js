import axios from 'axios';
import React, { useEffect, useState } from 'react'
import JobCard from './jobCard';
import DataCard from './DataCard';
function Newdesktop() {

    const [toggleState, setToggleState] = useState(1);
    const [allJobs, setAllJobs] = useState([]);
    
    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [fullTime, setFullTime] = useState(false);
 
    //fetching all the jobs
    const getJobs = async () => {
        const response = await axios({
            method: 'GET',
            url: '/job/getAllJobs'
        });
        console.log(response.data);
        setAllJobs(response.data);
    }

    useEffect(() => {
        getJobs();
    }, []);



    return (
        <div className='font-[poppins] '>
            <div className='lg:flex  pl-3 py-2 mt-24  '>

                <div className='lg:w-[34%] mt-2'>
                    {
                        allJobs.map((job, index) => {
                            return <JobCard toggleState={toggleState} toggleTab={toggleTab} index={index + 1} key={index} job={job} />
                        })

                    }
                </div>
                <div className='w-[67%]'>
                    {/* data 1 */}
                    {
                        allJobs.map((job, index)=>{
                            return <DataCard toggleState={toggleState} index={index+1} key={index} job={job}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Newdesktop
