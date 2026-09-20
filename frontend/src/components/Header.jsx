import { Link, NavLink } from 'react-router-dom'
import userDefault from "../assets/userDefault.jpg";

const Header = () => {
    return (
        <div className='fixed w-full top-0 left-0 m-auto pe-10 ps-10 z-50'>
            <nav className='m-auto border-2 bg-[#101724] border-[#4e5d709f] rounded-full text-white h-16 flex items-center justify-between pe-8 ps-8 max-w-[1400px]'>
                <NavLink to={"/movies"} className={({ isActive }) => `text-white ${isActive ? 'font-bold' : 'font-light'}`}>Cartelera</NavLink>
                <Link className='flex justify-center items-center gap-2'>
                    <img className='rounded-full w-8 h-8' src={userDefault} alt="user icon" />
                    <span className='text-sm font-semibold'>Iniciar sesión</span>
                </Link>
            </nav>
        </div>
    )
}

export default Header