import { useReducer } from "react";
import BookingForm from "../components/BookingForm"
import { useNavigate } from "react-router-dom";


function BookingPage() {
    const navigate = useNavigate();
    function updateTimes(state, action) {
        return window.API.fetchAPI(action);
    }

    function initializeTimes() {
        if (window.API && window.API.fetchAPI) {
            const times = window.API.fetchAPI(new Date());
            return times;
        }
        return [];
    }

    function submitForm(formData){
        window.API.submitAPI(formData) ? navigate('/bookingConfirmed') : console.log("Submission failed");
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  return (
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm = {submitForm} />
  )
}

export default BookingPage