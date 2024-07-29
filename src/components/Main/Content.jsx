

// HrEmail
// : 
// "teste@exemplo.us"
// Package
// : 
// 10000
// companyName
// : 
// "www"
// image
// : 
// "Clevertap.webp"
// jobsrole
// : 
// "Full-time"
// jobtype
// : 
// "On-sight"
// role
// : 
// "www
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Content() {


    const [company, setCompany] = useState()
    useEffect(() => {
        const datafetch = async () => {

            const response = await axios.get('http://localhost:4000/addjobs/getJobData')
            console.log(response.data.message)
            setCompany(response.data.message)
        }
        datafetch()
    })
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {company?.map((item) => (
                    <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-4 flex items-center">
                            {/* <img alt={item.company} src={item.imageUrl} className="h-24 w-24 rounded-full object-cover mr-4" /> */}
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-900">{item.companyName}</h2>
                                <p className="text-sm text-gray-600">{item.jobsrole}</p>
                                <p className="mt-1 text-xs text-gray-500 truncate">{item.jobtype}</p>
                                <p className="mt-1 text-xs text-gray-500 truncate">{item.Package} Rs</p>
                                <p className="mt-1 text-xs text-gray-500 truncate">{item.HrEmail}</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-200">
                            <div className="p-4 text-center">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Content
