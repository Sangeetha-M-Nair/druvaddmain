import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import JobCard from "./jobCard";

export default function ViewJobs(){
    const [ jobs, setJobs ] = useState(null);
    const params = useParams();
    const getJobs = async()=>{
        const response = await axios({
            method: 'GET',
            url : `/job/getJobs/${params.id}`
        });
        //console.log(response.data);
        setJobs(response.data);
    }

    useEffect(()=>{
        getJobs();
    }, [])
    if(jobs === null){
        return <div>
            Loading
        </div>
    }
    else{
        return(
            <div>
                We are in view jobs
                <br></br>
                {jobs.map(job=>{
                    console.log(job);
                    return <JobCard {...job} />
                    })}
            </div>
        )
    }

    
}