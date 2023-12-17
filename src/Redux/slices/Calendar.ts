import { createSlice } from "@reduxjs/toolkit";


const addEvent = (state : State , action : { payload : { title : string , description : string } , type : string }) => {
    const { title , description } = action.payload;
    const id = new Date().toISOString();
    return {
        ...state,
        [id] : {
            title,
            description
        }
    }
}
const initialState = {
    events : {} as { [key: string]: { title : string , description : string } }
}

type State = typeof initialState


const CalendarSlice = createSlice({
    name: 'Calendar',
    initialState,
    reducers : {
        createEvent : addEvent,
    }
})


export const { createEvent } = CalendarSlice.actions;
export const Calendar = CalendarSlice.reducer;