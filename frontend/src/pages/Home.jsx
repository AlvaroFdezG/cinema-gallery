import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {

    return (
        <>
            <Header />
            <div className='container max-w-[1400px] m-auto'>
                <Outlet />
            </div>
        </>
    )
}

export default Home