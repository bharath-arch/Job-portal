import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

function AddJobsForm() {
    const [formData, setFormData] = useState({
        companyName: '',
        HrEmail: '',
        image: '',
        role: '',
        Package: '',
        jobtype: '',
        jobsrole: ''
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0].name : value
        }));
    };

    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.companyName === '' ||
                formData.image === '' ||
                formData.HrEmail === '' ||
                formData.role === '' ||
                formData.Package === '' ||
                formData.jobtype === '' ||
                formData.jobsrole === '') {

                toast.error('Please fill out all field')
            }
            else {
                console.log("qqq")
                const response = await axios.post('http://localhost:4000/addjobs', formData);
                console.log('Response:', response.data.message);
                // Handle success (e.g., redirect to login or show a success message)

                if (response.data.message === 'added') {
                    toast.success('Job Posting added')
                }
                else {
                    toast.error('Please try again')
                }
            }




        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show an error message)
        }

    };

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-4xl">
            <Toaster />
            <form className="flex flex-col sm:flex-row gap-6" method='POST' onSubmit={handleSubmit} >
                {/* Left Column: File Upload and Company Details */}
                <div className="flex-1 space-y-6">
                    <div className="space-y-6">
                        {/* Company Name */}
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-900">
                                Company Name
                            </label>
                            <input
                                onChange={handleChange}
                                id="companyName"
                                name="companyName"
                                type="text"
                                required
                                autoComplete="companyName"
                                className="block w-full p-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                            />
                        </div>

                        {/* Email Address */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                Email Address
                            </label>
                            <input
                                onChange={handleChange}
                                id="email"
                                name="HrEmail"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full p-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* File Upload */}
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-900">
                            Company Logo
                        </label>
                        <input
                            onChange={handleChange}
                            id="image"
                            name="image"
                            type="file"
                            required
                            accept="image/*"
                            className="block w-full p-2 mt-1 outline-cyan-600 text-gray-900   file:py-2 file:px-4 file:text-sm file:font-semibold file:rounded-md file:text-gray-900 focus:ring-indigo-600"

                        // className="block w-full p-2 mt-1 outline-cyan-300 text-gray-900 file:border-0 file:bg-gray-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:rounded-md file:text-gray-900 focus:ring-indigo-600"
                        />
                    </div>
                </div>

                {/* Right Column: Job Role and Type */}
                <div className="flex-1 space-y-6">
                    {/* Role */}
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-900">
                            Role
                        </label>
                        <input
                            onChange={handleChange}
                            id="role"
                            name="role"
                            type="text"
                            required
                            autoComplete="role"
                            className="block w-full p-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                        />
                    </div>

                    {/* Package */}
                    <div>
                        <label htmlFor="package" className="block text-sm font-medium text-gray-900">
                            Package
                        </label>
                        <input
                            onChange={handleChange}
                            id="package"
                            name="Package"
                            type="number" // Change to text if package is not numeric
                            required
                            autoComplete="package"
                            className="block w-full p-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                        />
                    </div>

                    {/* Job Role and Type */}
                    <div className="flex flex-col gap-4 sm:flex-row">
                        {/* Job Role */}
                        <div className="flex-1">
                            <label htmlFor="jobsrole" className="block text-sm font-medium text-gray-900">
                                Job Role
                            </label>
                            <select
                                name="jobsrole"
                                id="jobsrole"
                                onChange={handleChange}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 sm:text-sm"
                            >
                                <option value="">Select a role</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                            </select>
                        </div>

                        {/* Job Type */}
                        <div className="flex-1">
                            <label htmlFor="jobtype" className="block text-sm font-medium text-gray-900">
                                Job Type
                            </label>
                            <select
                                name="jobtype"
                                id="jobtype"
                                onChange={handleChange}
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-600 sm:text-sm"
                            >
                                <option value="">Select job type</option>
                                <option value="On-sight">On-sight</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Submit Button */}
                <div className="mt-6 flex justify-center">

                    <input type='submit' value={'Add Job'}

                        className="uppercase cursor-pointer font-semibold px-3 py-2 transition-transform duration-300 ease-in-out transform bg-indigo-600 rounded-lg hover:bg-indigo-500 text-white hover:scale-105"
                    >

                    </input>

                </div>
            </form>


        </div>
    );
}

export default AddJobsForm;
