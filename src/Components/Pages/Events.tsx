import { getEvents } from '@/Redux/selectors/Calendar'
import { State } from '@/Redux/store'
import {FC} from 'react'
import { ConnectedProps, connect } from 'react-redux'

type P = {} & ReduxProps

const Events:FC<P> =({ events })=>{
    
    if(events.length === 0){
        return <div>No Event found</div>
    }
  return <div className='space-y-3'>
    <h1 className='font-bold text-xl'>Events</h1>
    <div className='flex items-center justify-between'>
        <h1 className='pl-10'>Time</h1>
        <h1 className='w-1/3'>Title</h1>
        <h1>description</h1>
    </div>
      {
        events.map((event)=>{
            return <h1 key={event.time} className=' border rounded-md p-2 flex items-center justify-between gap-3 '>
                <p className='w-1/3'>{event.time.slice(0 , 10)}</p>
                <p className='w-1/3'>{event.title}</p>
                <p className='w-1/3'> {event.description}</p>
            </h1>
        })
      }
</div>
}

const mapStateToProps = (state:State)=>{
    return { events : getEvents(state) }
}

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>
export default connector(Events);