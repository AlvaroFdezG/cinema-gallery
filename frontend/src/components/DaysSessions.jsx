import dayjs from "dayjs";
import 'dayjs/locale/es';
dayjs.locale("es");

import { getSessionsByDay } from '../services/movieService';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoviesContext } from "../contexts/MoviesContext";
import { name } from "dayjs/locale/es";


const testDates = [
    {
        date: dayjs().format('D/MM/YYYY'),
        name: dayjs().format('dddd').toUpperCase()
    },
    {
        date: dayjs().add(1, "days").format('D/MM/YYYY'),
        name: dayjs().add(1, "days").format('dddd').toUpperCase()
    },
    {
        date: dayjs().add(2, "days").format('D/MM/YYYY'),
        name: dayjs().add(2, "days").format('dddd').toUpperCase()
    },
    {
        date: dayjs().add(3, "days").format('D/MM/YYYY'),
        name: dayjs().add(3, "days").format('dddd').toUpperCase()
    },
    {
        date: dayjs().add(4, "days").format('D/MM/YYYY'),
        name: dayjs().add(4, "days").format('dddd').toUpperCase()
    }
]

const DaysSessions = ({sessions, setSessions }) => {
    const { showDays, setShowDays , daySelected, setDaySelected} = useContext(MoviesContext);


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
                {testDates.map((day) => (
                    <button key={day.date} onClick={() => setDaySelected(day.date)} className={`w-full border rounded-md border-gray-400 p-2 font-semibold text--gray-400 hover:text-[#89bcff] hover:border-[#89bcff] 
                        ${daySelected === day.date ? 'border-[#89bcff] text-[#89bcff]' : 'border-gray-400 text-gray-400'}`}>
                        <p>{day.date}</p>
                        <p>{day.name}</p>
                    </button>
                ))}

            </section>
            {showDays &&
                <div className="mt-3 pt-3 border-t border-gray-400">
                    <ul className='grid grid-cols-5 gap-4'>
                        {
                            sessions.map((session) => (
                                <Link key={session.hour} className='text-center w-full border rounded-md border-gray-400 p-2 font-semibold text--gray-400 hover:text-[#89bcff] hover:border-[#89bcff]'>
                                    <p>{session.hour}</p>
                                    <p>Sala {session.room}</p>
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