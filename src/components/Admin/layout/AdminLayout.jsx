import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

function AdminLayout() {

  const [navlink, setNavlink] = useState('home')

  const [p, setP] = useState()

  const params = window.location.href.split("/")
  console.log(params)
  useEffect(() => {
    const para = window.location.href.split("/")
    const len = para.length
    const paramdata = para[len - 1]
    setP(paramdata)
  }, [params])

  return (
    <>
      <div className="lg:flex-col lg:items-center lg:justify-between p-5 ">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Job Portal
          </h2>
        </div>

        <div className=" flex  sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">


          <ul className='mt-10 flex gap-x-6'>
            <Link to={'/admin'}>
              <li
                className={`uppercase cursor-pointer font-semibold px-3 py-2 transition-transform duration-300 ease-in-out transform ${navlink === 'home' ? 'bg-blue-500 text-white' : 'hover:scale-105'}`}
                onClick={() => { setNavlink('home'); }}
              >
                Home
              </li></Link>
            <Link to={'addjobs'}>
              <li
                className={`uppercase cursor-pointer font-semibold px-3 py-2 transition-transform duration-300 ease-in-out transform ${navlink === 'add-jobs' ? 'bg-blue-500 text-white' : 'hover:scale-105'}`}
                onClick={() => { setNavlink('add-jobs'); }}
              >
                Add Jobs
              </li>
            </Link>

            <li
              className={`uppercase cursor-pointer font-semibold px-3 py-2 transition-transform duration-300 ease-in-out transform ${navlink === 'view-candidates' ? 'bg-blue-500 text-white' : 'hover:scale-105'}`}
              onClick={() => { setNavlink('view-candidates'); }}
            >
              View Candidates
            </li>
          </ul>

          {/* <Link to={'addjobs'}>
              {p === 'addjobs' ? (<></>) : (<>
                <button className='mt-6 bg-blue-700 px-5 text-xl text-white py-2 rounded-lg'>Add Job</button>
              </>)}

            </Link> */}

        </div>


      </div>
      <div className="bg-gray-50 p-6">
        <Outlet />
      </div>
      <footer className="text-black p-10 bg-gray-100 text-center  bottom-0 left-0 w-full">
        <p>&copy; 2024 Job Portal. All rights reserved.</p>
      </footer>


    </>
  )
}

export default AdminLayout
