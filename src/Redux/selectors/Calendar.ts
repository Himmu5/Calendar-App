import { createSelector } from "@reduxjs/toolkit";
import { State } from "../store";

const calendarState = (state : State)=>state.Calendar;

export const formState = createSelector(calendarState , (state)=>{
    return state.createEventFormToggle;
})