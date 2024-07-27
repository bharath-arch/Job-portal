import React from 'react'
import { Link } from 'react-router-dom'

function AddJobsForm() {

    const handleChange = () => {

    }

    const handleClick = () => {

    }
    return (
        <>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="" className="space-y-6">

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Company Name
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={handleChange}
                                id="companyName"
                                name="companyName"
                                type="companyName"
                                required
                                autoComplete="companyName"
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={handleChange}
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Role
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                onChange={handleChange}

                                id="role"
                                name="role"
                                type="role"
                                required
                                autoComplete=""
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Package
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                onChange={handleChange}

                                id="package"
                                name="package"
                                type="text"
                                required
                                autoComplete=""
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Image
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                onChange={handleChange}

                                id="image"
                                name="image"
                                type="file"
                                required
                                autoComplete=""
                                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>



                    <div className="flex gap-5">

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

                    </div>

                    <div>
                        <Link to={"/layout"}>
                            <button
                                onClick={handleClick}
                                type="submit"
                                className="flex p-2 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add Job
                            </button>
                        </Link>
                    </div>
                </form>


            </div>

        </>
    )
}

export default AddJobsForm
