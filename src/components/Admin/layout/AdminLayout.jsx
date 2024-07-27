import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

function AdminLayout() {


  const [p, setP] = useState()
  useEffect(() => {
    const para = window.location.href.split("/")
    const len = para.length
    const paramdata = para[len - 1]
    setP(paramdata)
  },[p])

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between p-5">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Job Portal
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">

            <Link to={'addjobs'}>
              {p === 'addjobs' ? (<></>) : (<>
                <button className='mt-6 bg-blue-700 px-5 text-xl text-white py-2 rounded-lg'>Add Job</button>
              </>)}

            </Link>

          </div>
        </div>

      </div>
      <div className="bg-gray-50 p-6">
        <Outlet />
      </div>
    </>
  )
}

export default AdminLayout
