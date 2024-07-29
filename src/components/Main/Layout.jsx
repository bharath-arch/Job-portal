


import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
    const [search, setSearch] = useState()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    // console.log(search)
    return (

        <>
            <div className="lg:flex lg:items-center lg:justify-between p-5">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Job Portal
                    </h2>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">

                            <select name="jobsrole" className='p-2'>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                            </select>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <select name="jobstype" className='p-2'>
                                <option value="On-sight">On-sight</option>
                                <option value="Remote">Remote</option>
                            </select>

                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <input type="range" name="" id="" />
                            $120k &ndash; $140k
                        </div>



                    </div>
                </div>
                <div className="mt-5 flex lg:ml-4 lg:mt-0">
                    <span className="hidden sm:block">
                        <input type="text" placeholder='search...' className='p-2 border  outline-none' onChange={handleChange} />
                        <input type="button" value="Search" className='p-2 border cursor-pointer bg-blue-700 text-white' />
                    </span>
                </div>
            </div>
            <div className="bg-gray-50 p-6">
                <Outlet context={[search, setSearch]} />
            </div>


        </>

    )
}

export default Layout
