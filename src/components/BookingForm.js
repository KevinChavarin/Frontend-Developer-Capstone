import { useState } from 'react'
import '../styles/BookingForm.css'

function BookingForm({ availableTimes, dispatch, submitForm }) {

    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [bookingGuests, setBookingGuests] = useState('');
    const [bookingOccasion, setBookingOccasion] = useState('');

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setBookingDate(selectedDate);
        // Convert string date (yyyy-mm-dd) to Date object
        const dateObj = new Date(selectedDate);
        dispatch(dateObj);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            date: bookingDate,
            time: bookingTime,
            guests: bookingGuests,
            occasion: bookingOccasion
        };
        submitForm(formData);
    }

    return (
        <form id='bookingForm'>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={bookingDate}
                onChange={handleDateChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={bookingTime}
                onChange={(e) => setBookingTime(e.target.value)}
            >
                {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={bookingGuests}
                onChange={(e) => setBookingGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={bookingOccasion}
                onChange={(e) => setBookingOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit" onClick={handleSubmit}>Make Your reservation</button>
        </form>
    )
}

export default BookingForm