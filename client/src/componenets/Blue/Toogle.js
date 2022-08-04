import React, { useState } from 'react'

function Toogle() {
    const [toggle, setToggle] = useState(true);

    const toggleClass = " transform translate-x-5";
    return (
        <div className='mx-auto w-full  bg-[#ececec] h-screen'>
            <div className="flex justify-center bg-[#ececec] pt-20">
            <div className='shadow-[7px_7px_15px_0_rgba(70,70,70,0.12)] '>

                <div className="flex py-2 px-4 justify-between gap-3 shadow-[-7px_-7px_15px_0_rgba(255,255,255,0.65)] "> {/**shadow-[7px_7px_15px_0_rgba(70,70,70,0.12)] */}
                    <div className='shadow-[-7px_-7px_15px_0_rgba(255,255,255,0.65)] rounded-full'>
                        <div
                            className=" shadow-[7px_7px_15px_0_rgba(70,70,70,0.12)_inset]  w-16 h-7 flex items-center bg-white rounded-full p-1 cursor-pointer"
                            onClick={() => {
                                setToggle(!toggle);
                            }}
                        >
                            {/**shadow-[-7px_-7px_15px_0_rgba(255,255,255,0.65)] shadow-[7px_7px_15px_0_rgba(70,70,70,0.12)] shadow-[-7px_-7px_15px_0_rgba(255,255,255,0.65)_inset]*/}
                            {/* Switch */}
                            <div className='shadow-[-7px_-7px_15px_0_rgba(255,255,255,0.75)]'>
                            <div
                                className={`shadow-[7px_7px_15px_0_rgba(70,70,70,0.12)] bg-white  h-3 w-3 rounded-full  
 transform +  ${toggle ? null : toggleClass}`} 
                            >
                                {/**shadow-md */}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <h2 className="font-semibold mb-3 mt-1 ml-3"> Allow employee to apply</h2>
            </div>
        </div>
    )
}

export default Toogle
