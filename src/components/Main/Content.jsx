
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';

function Content() {


    const { search, setSearch, navlink, setNavlink } = useOutletContext();

    const [company, setCompany] = useState()
    useEffect(() => {
        const datafetch = async () => {

            const response = await axios.get('http://localhost:4000/addjobs/getJobData')
            // console.log(response.data.message)
            setCompany(response.data.message)
        }
        datafetch()
    })

    // console.log(search)
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {company?.filter((item) => {
                    return (
                        search.toLowerCase() === "" ? item :
                            item.companyName.toLowerCase().includes(search.toLowerCase())
                    );
                }).map((item) => (
                    <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-4 flex items-center">
                            {/* <img alt={item.company} src={item.imageUrl} className="h-24 w-24 rounded-full object-cover mr-4" /> */}
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-gray-900">Comapny Name : {item.companyName}</h2>
                                <p className="text-sm text-gray-600">Job Designation: {item.jobsrole}</p>
                                <p className="mt-1 text-xs text-gray-500 truncate">Job Type: {item.jobtype}</p>
                                <p className="mt-1 text-xs text-gray-500 truncate">Package : {item.Package} Rs</p>
                                <p className="mt-1 text-xs text-gray-500 truncate">Contact via :{item.HrEmail}</p>
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
