"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react'
import Dashborard from '@/app/dashboard/page'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)


  return (
    <>
    <nav className='bg-gray-900 text-white flex justify-between px-4 items-center h-16 '>
        <div className="logo font-bold text-lg flex justify-center items-center gap-2">
           <Link href={"/"}> <img className='pb-3' width={24} src="tea.gif" alt="" /></Link>
           <Link href={"/"}> <span>Get Me a Chai!</span></Link>
        </div>
        {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign up</li>
            <li>Login</li>
        </ul> */}

        <div className='pt-2 relative'>
          
          {session && <>
<button onClick={()=> setShowDropdown(!showDropdown)} onBlur={()=> {setTimeout(() => {
  setShowDropdown(false)
}, 100);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 mx-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div onMouseDown={(e)=> e.preventDefault()} id="dropdown" className={`z-10 ${showDropdown?"":"hidden"}  bg-white divide-y divide-gray-100 absolute rounded-lg left-[155px] shadow-sm w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
      </li>
      <li>
        <Link onClick={()=> {signOut()}} href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
      </li>
    </ul>
</div>
</>}

            {!session && <Link href={"/login"}>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
            </Link>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
