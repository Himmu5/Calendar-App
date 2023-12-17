import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";

const calendarState = (state : State)=>state.Calendar;

export const formState = createSelector(calendarState , (state)=>{
    return state.createEventFormToggle;
})

export const getEvents = createSelector(calendarState , (state)=>{
    const events =  Object.keys(state.events).map((id)=>{
        return { ...state.events[id] , time : id };
    })
    return events;
})