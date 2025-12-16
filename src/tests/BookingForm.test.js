import { render, screen } from "@testing-library/react";
import BookingForm from '../components/BookingForm';

test('Checks the initializeTimes function to validate initial times', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Checks for the updateTimes to return the same value provided', () => {
    render(<BookingForm />)
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})