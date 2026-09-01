import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='fixed w-full top-0 left-0 m-auto pe-10 ps-10'>
            <nav className='border-2 bg-[#101724] border-[#4e5d709f] rounded-full text-white h-16 flex items-center justify-start pe-8 ps-8'>
                <Link to={"/movies"}>Cartelera</Link>
            </nav>
        </div>
    )
}

export default Header