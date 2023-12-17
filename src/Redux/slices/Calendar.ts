import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

const addEvent = (state : State , action : { payload : { title : string , description : string }}) => {
    const { title , description } = action.payload;
    return {
        ...state,
        events : {
            ...state.events,
            [state.selectedEventDate] : {
                title,
                description
            }
        }
    }
}

const toggleForm = (state : State ) =>{
    return {
        ...state,
        createEventFormToggle : !state.createEventFormToggle
    }
}


const dateSelector = (state : State , action : PayloadAction<string>)=>{
    console.log(action.payload);
    return {
        ...state,
        selectedEventDate : action.payload
    }
}

const initialState = {
    events : {} as { [key: string]: { title : string , description : string } },
    createEventFormToggle : false,
    selectedEventDate : ""
}

type State = typeof initialState

const CalendarSlice = createSlice({
    name: 'Calendar',
    initialState,
    reducers : {
        createEvent : addEvent,
        toggleForm,
        dateSelector,
    }
})


export const { createEvent , toggleForm : isFormVisible , dateSelector : selectDate } = CalendarSlice.actions;
export const Calendar = CalendarSlice.reducer;