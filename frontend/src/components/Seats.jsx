import React, { useEffect, useState } from 'react'
import { getSeats } from '../services/movieService'
import freeSeat from "./../assets/seat.png"

const Seats = () => {

  const [seatsArray, setSeatsArray] = useState();
  const [seatsSelected, setSeatsSelected] = useState([]);


  useEffect(() => {
    const fetchSeats = async () => {
      const dataJson = await getSeats();
      console.log(dataJson.data);
      setSeatsArray(dataJson.data.testSeats);
    }
    fetchSeats();
  }, [])

  if (!seatsArray) return <p>Cargando asientos</p>

  const addSeats = (idSeat) => {
    const seatsAdd = [...seatsSelected];
    seatsAdd.push(idSeat);
    setSeatsSelected(seatsAdd);
  }

  return (
    <div>
      <div className='bg-[#89bcff] w-full h-10 text-white text-center mb-8 pt-2 rounded-lg'>Pantalla</div>
      <section className='grid grid-cols-[repeat(20,minmax(0,1fr))]'>
        {seatsArray.map((seat) => (
          <button onClick={() => addSeats(seat.id)} className={`p-1 ${seatsSelected.includes(seat.id)? "bg-blue-600" : ""} text-center`} key={seat.id}>
            <img src={freeSeat} alt="seat" />
          </button>
        ))}
      </section>
    </div>
  )

}

export default Seats