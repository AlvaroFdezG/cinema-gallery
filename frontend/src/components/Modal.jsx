import React, { useContext } from 'react'
import { MoviesContext } from '../contexts/MoviesContext';

const Modal = ({ children }) => {

  const {setShowModal } = useContext(MoviesContext);

  return (
    <div className='z-50 p-8 pt-20 flex justify-center items-center fixed top-0 left-0 w-screen h-screen'>
      <div onClick={() => setShowModal(false)} className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30'></div>
      <div className='relative w-[1400px] h-full rounded-lg p-6 bg-[#313a46] border-2 border-[#4e5d709f] flex flex-col gap-5 text-white'>
        <button onClick={() => setShowModal(false)} className='absolute top-3 right-3 text-[#89bcff]'>
          <i className="text-3xl fa-solid fa-xmark"></i>
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal