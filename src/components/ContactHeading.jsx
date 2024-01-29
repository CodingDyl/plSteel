import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BiConversation } from "react-icons/bi";

const ContactHeading = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-0 w-[100%] p-4'>
        <div className='flex flex-col justify-center items-center text-center gap-4'>
            <div className='rounded-full w-9 h-9 bg-[#25618b]/40 text-white flex justify-center items-center'>
                <BiConversation />
            </div>
            <h1 className='text-lg text-secondary'>Enquires</h1>
            <p>For any enquiries, questions or recommendations, please call: 011 397 3873 or fill out the following form</p>
        </div>

        <div className='flex flex-col justify-center items-center text-center gap-4'>
            <div className='rounded-full w-9 h-9 bg-[#25618b]/40 text-white flex justify-center items-center'>
                <CiLocationOn />
            </div>
            <h1 className='text-lg text-secondary'>Head Office</h1>
            <p>28 Patrick Road <br />
                Jet Park <br />
                Boksburg <br />
                1459
            </p>
        </div>

        <div className='flex flex-col justify-center items-center text-center gap-4'>
            <div className='rounded-full w-9 h-9 bg-[#25618b]/40 text-white flex justify-center items-center'>
                <IoCallSharp />
            </div>
            <h1 className='text-lg text-secondary'>Get a Quote</h1>
            <p>Tel: 011 397 3873 <br/> Fax: 086 632 0822</p>
        </div>
    </div>
  )
}

export default ContactHeading