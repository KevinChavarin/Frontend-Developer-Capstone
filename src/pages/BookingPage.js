import { useReducer } from "react";
import BookingForm from "../components/BookingForm"


function BookingPage() {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    function updateTimes(state, action) {
        switch(action.type) {
            case 'SET_TIMES':
                return action.payload;
            case 'ADD_TIME':
                return [...state, action.payload];
            case 'REMOVE_TIME':
                return state.filter(time => time !== action.payload);
            default:
                return state;
        }
    }

    function initializeTimes() {
        return initialState;
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
  )
}

export default BookingPage