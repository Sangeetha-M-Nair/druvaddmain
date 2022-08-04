import React from 'react'
import Center from './Center'
import { Chatbox } from './Chatbox'
import Prrofile from './Prrofile'

function Chating_Section() {
  return (
    <div className='flex w-full'>
        <Chatbox className=""/>
        <Center/>
        <Prrofile/>
    </div>
  )
}

export default Chating_Section;
