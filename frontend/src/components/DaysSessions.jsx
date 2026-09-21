import dayjs from "dayjs";
import 'dayjs/locale/es';
import { getSessionsByDay } from '../services/movieService';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../contexts/MoviesContext";

dayjs.locale("es");

const DaysSessions = ({ daySelected, setDaySelected, sessions, setSessions }) => {
    const { showDays, setShowDays } = useContext(MoviesContext);
    useEffect(() => {
        if (!daySelected) return;
        const getSessions = async () => {
            setShowDays(true);
            const days = await getSessionsByDay(daySelected);
            setSessions(days);
            console.log(days);
            console.log(daySelected);
            console.log(showDays);
        }
        getSessions();
    }, [daySelected]);

    return (

        <section>
            {/* horarios temporales pendientes de api */}
            <h4 className='text-xl mb-3'>Elige el día</h4>
            <section className='grid grid-cols-5 gap-4'>
                <button onClick={() => setDaySelected(dayjs().format('D/MM/YYYY'))} className='w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                    <p>{dayjs().format('D/MM/YYYY')}</p>
                    <p>{dayjs().format('dddd').toUpperCase()}</p>
                </button>
                <button onClick={() => setDaySelected(dayjs().add(1, "days").format('D/MM/YYYY'))} className='w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                    <p>{dayjs().add(1, "days").format('D/MM/YYYY')}</p>
                    <p>{dayjs().add(1, "days").format('dddd').toUpperCase()}</p>
                </button>
                <button onClick={() => setDaySelected(dayjs().add(2, "days").format('D/MM/YYYY'))} className='w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                    <p>{dayjs().add(2, "days").format('D/MM/YYYY')}</p>
                    <p>{dayjs().add(2, "days").format('dddd').toUpperCase()}</p>
                </button>
                <button onClick={() => setDaySelected(dayjs().add(3, "days").format('D/MM/YYYY'))} className='w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                    <p>{dayjs().add(3, "days").format('D/MM/YYYY')}</p>
                    <p>{dayjs().add(3, "days").format('dddd').toUpperCase()}</p>
                </button>
                <button onClick={() => setDaySelected(dayjs().add(4, "days").format('D/MM/YYYY'))} className='w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                    <p>{dayjs().add(4, "days").format('D/MM/YYYY')}</p>
                    <p>{dayjs().add(4, "days").format('dddd').toUpperCase()}</p>
                </button>
            </section>
            {showDays &&
                <div className="mt-3">
                    <p className='text-xl mb-3'>Elige la hora</p>
                    <ul className='grid grid-cols-5 gap-4'>
                        {
                            sessions.map((session) => (
                                <Link key={session.hour} className='text-center w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                                    {session.hour}
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            }
        </section>

    )
}

export default DaysSessions