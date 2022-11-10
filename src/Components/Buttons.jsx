import React from 'react'

const Buttons = () => {
  return (
    <div className='flex justify-between flex-wrap'>
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 my-1 px-4 rounded-full">
            All
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2  my-1 px-4 rounded-full">
            Pending
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 my-1 px-4 rounded-full">
            Shipped
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 my-1 px-4 rounded-full">
            Delivered
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 my-1 px-4 rounded-full">
            Cancelled
        </button>
    </div>
  )
}

export default Buttons
