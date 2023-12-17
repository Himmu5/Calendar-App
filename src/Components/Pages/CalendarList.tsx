import {FC} from 'react'
import Form from '../EventForm/Form'
import Calendar from '../Calendar/Calendar'
type P = {}
const CalendarList:FC<P> =()=>{
  return <div>
       <Form />
      {
        [...Array(12).keys()].map((month, index) => {
          return <Calendar key={index} year={2023} month={month} />
        })
      }
</div>
}
export default CalendarList;