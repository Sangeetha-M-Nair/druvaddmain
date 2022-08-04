import React, { useState } from 'react'

export default function DarkProfileBar() {
    const [active1, setactive1] = useState(false)
    const [active2, setactive2] = useState(false)
    const [active3, setactive3] = useState(false)

    const handleActive1 = () => {
        setactive1(!active1)
        setactive2(false)
        setactive3(false)
    }
    const handleActive2 = () => {
        setactive2(!active2)
        setactive1(false)
        setactive3(false)
    }
    const handleActive3 = () => {
        setactive3(!active3)
        setactive2(false)
        setactive1(false)
    }

    return (
        <div className="flex  h-12 bg-[#2c2e2f] my-3  items-center w-full rounded-full ">
            <button onClick={handleActive1} className={`${active1 ? '  rounded-full h-10 bg-[#3f8cfb] w-1/3' : '  rounded-full h-10 w-1/3'}`}>
                Explore
            </button>
            <button onClick={handleActive2} className={`${active2 ? '  rounded-full bg-[#3f8cfb] h-10 w-1/3' : '  rounded-full h-10 w-1/3'}`}>
                Discover
            </button>
            <button onClick={handleActive3} className={`${active3 ? '  rounded-full h-10 bg-[#3f8cfb] w-1/3' : '  rounded-full h-10 w-1/3'}`}>
                Explore
            </button>

        </div>
    )
}