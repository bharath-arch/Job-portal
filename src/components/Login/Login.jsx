

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
        type: '',
    })

    const handleClick = () => {
        alert("hello")
    }

    const handleChange = (e) => {
        e.preventDefault()
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    console.log(formdata)
    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
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
                                    Create password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={handleChange}

                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                       
                        <div>

                            <div className="mt-2 ">
                                <select name="jobsrole" id="job" onChange={handleChange} className='p-2'>
                                    <option value="Job Seeker">Job Seeker</option>
                                    <option value="Job Provider">Job Provider</option>
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
                                Login
                            </button>
                            </Link>
                        </div>
                    </form>


                </div>
            </div>
        </>
    )
}

export default Login
