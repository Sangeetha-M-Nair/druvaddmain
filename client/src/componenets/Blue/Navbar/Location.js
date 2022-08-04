import React from 'react';
import 'tw-elements';

function Location() {
  return (
    <div className=''>
    <div>
    <div class="flex justify-center">
  <div class="w-full ">
    <select class=" shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)] hover:shadow-[-3px_-3px_7px_0px_rgba(0,0,0,0.2)_inset] form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Location" placeholder=''>
        <option selected>Location</option>
        <option value="1">Bokaro</option>
        <option value="2">Ranchi</option>
        <option value="3">Pune</option>
        <option value="4">Banglore</option>
    </select>
  </div>
</div>
  </div></div>
  )
}

export default Location

