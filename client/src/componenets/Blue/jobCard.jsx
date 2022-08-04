import React from "react";

export default function JobCard(props){
    console.log(props);
    console.log(props.job);
    return <div className={props.toggleState === props.index ? "bg-white text-black rounded-2xl border-r-4  shadow-[-3px_-3px_7px_0px_rgba(98,60,234,0.5)_inset] mb-2" : " mb-2 bg-[#623cea] text-white rounded-2xl"}
    onClick={() => props.toggleTab(props.index)}>
    <div className='flex p-2 cursor-pointer w-full'>
    <div className='p-2 w-[13%]'>
            <img src='./images/OIP.jpg' alt='oip' className='h-12 w-12 rounded-lg' />
        </div>
        <div className='p-2 grow w-[87%]'>
            <div className='flex gap-2'>
                <div className='text-xl w-[35%] lg:text-2xl md:text-xl'>{props.job.companyName}</div>
                <div className='md:flex md:gap-2'>
                    {/* <div className={(toggleState === 1 ? " bg-[#f4f2fd] text-red-500" : " bg-[#8566f6] text-white") + " py-1 md:mb-3 px-1 rounded-lg flex mb-1 h-8"}>
                        <i className="bi bi-youtube text-sm px-1 md:py-1"></i>
                        <div className=' px-1 text-sm md:text-base' >Youtuber</div>
                    </div> */}
                    {
                        props.job.type.map(t=><div className={(props.toggleState === props.index ? " bg-[#f4f2fd] text-pink-500" : " bg-[#8566f6] text-white") + " md:py-1 md:mb-3 px-1 rounded-lg flex gap-1 h-8"}>
                        <i class="bi bi-instagram text-sm py-1 px-1"></i>
                       
                          <div className='pr-1 text-sm md:text-base'>{t}</div>
                        
                    </div>)
                    }
                    
                </div>
            </div>
            <div className='md:flex gap-1 font-semibold my-2 mb-1 md:mb-2'>
                <div className='grow'>{props.job.jobTitle}</div>
                <div></div>
            </div>
            <div className='text-[#d0c5f7] mb-1 md:my-2'>{props.job.location+ ', ' + props.job.country}</div>
            <div className='flex'>
                <div className='flex grow gap-2'>
                    {
                        props.job.skills.map(skill=><div className={(props.toggleState === props.index ? " bg-[#f4f2fd]" : " bg-[#623cea]") + " px-1 text-sm md:text-base rounded-lg"}>{skill}</div>)
                    }
                </div>
                <div className='px-1 text-sm md:text-base'></div>
            </div>
        </div>
    </div>
</div>
}