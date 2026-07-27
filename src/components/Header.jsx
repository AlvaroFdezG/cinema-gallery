import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <Link to={"/discover"}>Header</Link>
        </nav>
    )
}

export default Header