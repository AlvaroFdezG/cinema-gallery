import React, { useEffect } from 'react'
import { getSeats } from '../services/movieService'

const Seats = () => {

  useEffect(() => {
    getSeats();
  }, [])

  return (
    <section className='flex mt-20'>

      <table>
        <tbody>
          <tr>
            
          </tr>
        </tbody>
      </table>

    </section>
  )
}

export default Seats