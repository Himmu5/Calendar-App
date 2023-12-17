import React, { useEffect } from 'react';
import classNames from 'classnames';
import months from '../../data/MonthName';

interface CalendarProps {
    year: number;
    month: number;
}

const daysInMonth = (month: number, year: number): Date => {
    return new Date(year, month + 1, 0)
};

const Calendar: React.FC<CalendarProps> = ({ year, month }) => {

    const totalDays: number = daysInMonth(month, year).getDate();
    const firstDayOfMonth: number = new Date(year, month, 1).getDay();
    const currentMonth = months[month];
    const ref = React.useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (new Date().getMonth() === month) {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [])

    //   const weeks : number = Math.ceil((totalDays + firstDayOfMonth) / 7);
    const daysArray: number[] = [];

    // Populate daysArray with day numbers
    for (let i = 1; i <= totalDays; i++) {
        daysArray.push(i);
    }

    return (
        <div ref={ref} className="w-full max-w-md mx-auto p-4 border border-black my-1 rounded-md shadow-md ">
            <p className='text-xl font-bold text-black text-center my-2 '>{currentMonth}</p>
            <div className="grid grid-cols-7 gap-1 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-sm font-medium text-gray-600">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
                {/* Render empty cells for days before the first day of the month */}
                {Array.from({ length: firstDayOfMonth }, (_, i) => (
                    <div key={`empty-${i}`} className="text-center"></div>
                ))}
                {/* Render days */}
                {daysArray.map(day => {
                    const currentDate = new Date()
                    const highlight = (day == currentDate.getDate() && month == currentDate.getMonth())
                    return <div
                        key={day}
                        className={classNames(
                            'text-center py-2 rounded',
                            {
                                'text-gray-400': day === 0,
                                'bg-gray-200': day % 2 === 0,
                                'bg-gray-300': day % 2 !== 0,
                            },
                            'text-gray-900 ' + ( highlight ? 'bg-blue-500 text-white' : '') 
                        )}
                    >
                        {day}
                    </div>
                })}
            </div>
        </div>
    );
};

export default Calendar;
