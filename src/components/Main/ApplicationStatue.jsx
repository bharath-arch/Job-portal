import React from 'react'
import { useOutletContext } from 'react-router-dom';

function ApplicationStatue() {

    const { search, setSearch, navlink, setNavlink } = useOutletContext();

    return (
        <>
            <p className='min-h-96'>
                App status {navlink}
            </p>
        </>
    )
}

export default ApplicationStatue
