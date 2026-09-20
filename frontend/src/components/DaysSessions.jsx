import dayjs from "dayjs";
import 'dayjs/locale/es';

dayjs.locale("es");

const DaysSessions = () => {
    return (
        <div>
            <section>
                {/* horarios temporales pendientes de api */}
                <h4 className='text-xl mb-4'>Elige el día</h4>
                <section className='grid grid-cols-3 gap-4'>
                    <button className='w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                        <p>{dayjs().format('D/MM/YYYY')}</p>
                        <p>{dayjs().format('dddd').toUpperCase()}</p>
                    </button>
                    <button className='w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                        <p>{dayjs().add(1, "days").format('D/MM/YYYY')}</p>
                        <p>{dayjs().add(1, "days").format('dddd').toUpperCase()}</p>
                    </button>
                    <button className='w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                        <p>{dayjs().add(2, "days").format('D/MM/YYYY')}</p>
                        <p>{dayjs().add(2, "days").format('dddd').toUpperCase()}</p>
                    </button>
                    <button className='w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                        <p>{dayjs().add(3, "days").format('D/MM/YYYY')}</p>
                        <p>{dayjs().add(3, "days").format('dddd').toUpperCase()}</p>
                    </button>
                    <button className='w-full border rounded-md border-gray-400 p-2 font-semibold text-[#89bcff]'>
                        <p>{dayjs().add(4, "days").format('D/MM/YYYY')}</p>
                        <p>{dayjs().add(4, "days").format('dddd').toUpperCase()}</p>
                    </button>
                </section>
            </section>
        </div>
    )
}

export default DaysSessions