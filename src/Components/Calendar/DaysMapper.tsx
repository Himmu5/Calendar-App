import { createEvent, isFormVisible, selectDate } from '@/Redux/slices/Calendar';
import classNames from 'classnames'
import { FC } from 'react'
import { ConnectedProps, connect } from 'react-redux';

type P = {
    daysArray: number[];
    month: number
} & ReduxProps

const DaysMapper: FC<P> = ({ daysArray, month, isFormVisible, selectDate }) => {

    const handleActions = (day : number) => {
        isFormVisible();
        selectDate(new Date(2023, month, day + 1).toISOString())
    }

    return <>
        {daysArray.map(day => {
            const currentDate = new Date()
            const highlight = (day == currentDate.getDate() && month == currentDate.getMonth())
            return <div
                onClick={()=>handleActions(day)}
                style={{ backgroundColor: highlight ? '#0000FF' : '', color: highlight ? '#FFFFFF' : '' }}
                key={day}
                className={classNames(
                    'text-center py-2 rounded',
                    {
                        'text-gray-400': day === 0,
                        'bg-gray-200': day % 2 === 0,
                        'bg-gray-300': day % 2 !== 0,
                    },
                    'text-gray-900 '
                )}
            >
                {day}
            </div>
        })}
    </>
}


const mapDispatchToProps = {
    createEvent,
    isFormVisible,
    selectDate
}

const connector = connect(null, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(DaysMapper);