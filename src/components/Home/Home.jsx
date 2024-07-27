import React from 'react';
import { Outlet } from 'react-router-dom';

function Home() {
    return (
        <>
            <header className="bg-gray-800 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">Job Portal</h1>
            </header>
            <Outlet />
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 Job Portal. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Home;
