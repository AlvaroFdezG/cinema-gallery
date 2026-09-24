import React, { useEffect, useState } from 'react'
import { getSeats } from '../services/movieService'
import freeSeat from "./../assets/seat.png"
import { Link } from 'react-router-dom';

const Seats = () => {

  const [seatsArray, setSeatsArray] = useState();
  const [seatsSelected, setSeatsSelected] = useState([]);
  const [charge, setCharge] = useState(0);


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

    if (seatsAdd.includes(idSeat)) {
      setSeatsSelected(seatsAdd.filter(seat => seat !== idSeat));
      setCharge(charge - 6.50);
    } else {
      seatsAdd.push(idSeat);
      setSeatsSelected(seatsAdd);
      setCharge(charge + 6.50);
    }
  }

  return (
    <div>
      <div className='bg-blue-400 w-full h-10 text-white text-center mb-8 pt-2 rounded-lg'>Pantalla</div>
      <section className='grid grid-cols-[repeat(20,minmax(0,1fr))]'>
        {seatsArray.map((seat) => (
          <button onClick={() => addSeats(seat.id)} className={`p-1 ${seatsSelected.includes(seat.id) ? "bg-blue-600" : ""} text-center`} key={seat.id}>
            <img src={freeSeat} alt="seat" />
          </button>
        ))}
      </section>
      <div className='mt-10 flex items-center gap-8 justify-center'>
        <p className='w-full text-end text-3xl'>Precio: <span className='font-bold'>{charge} €</span></p>
        <Link className='bg-blue-400 rounded-lg p-3 flex items-center justify-center'>Comprar <i className="fa-solid fa-angles-right"></i></Link>
      </div>
    </div>
  )

}

export default Seats