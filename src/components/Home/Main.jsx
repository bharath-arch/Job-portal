import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <>
            <main className="flex items-center justify-center min-h-screen bg-gray-900">
                <div className="max-w-4xl p-8 bg-gray-800 rounded-lg shadow-2xl text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                        Boost your productivity.
                        <br />
                        Start using our app today.
                    </h2>
                    <p className="mt-6 text-lg text-gray-300">
                        Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                    </p>
                    <div className="mt-10 flex items-center gap-4 lg:flex-row lg:items-start lg:justify-start">
                        <Link
                            to="/create-account" // Use the appropriate route for account creation
                            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition"
                        >
                            Create account
                        </Link>
                        <Link
                            to="/login" // Use the appropriate route for login
                            className="rounded-md px-4 py-2 text-white text-sm font-semibold hover:text-gray-900 shadow-sm hover:bg-gray-100 transition"
                        >
                            Login <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main
