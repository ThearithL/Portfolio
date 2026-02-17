import React from 'react'
import { CONTACT } from '../Constants'
import { Link } from "react-router";



export default function Contact() {
  return (
    <div>
        <div className='className="border-b border-neutral-800 pb-20"'>
            <h1 className='my-10 text-center text-4xl'>Contact</h1>
            <div className="text-center  tracking-tight">
                <p className='my-4 font-light'>{CONTACT.address}</p>
                <p className='my-4 font-light'>{CONTACT.phoneNo}</p>
                <Link to={CONTACT.email} className='my-4 font-light'>{CONTACT.email}</Link>
            </div>

        </div>
    </div>
  )
}
