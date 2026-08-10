import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='border-2 border-[#4e5d709f] rounded-xl me-4 ms-4 mt-2'>
            <Link to={"/movies"}>Trending</Link>
        </nav>
    )
}

export default Header