import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    render(<BookingForm submitForm={mockSubmitForm} />);
  });

  it('renders all form fields correctly', () => {
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

    expect(await screen.findByText(/First Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Last Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Number of Guests is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Date is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Time is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Occasion is required/i)).toBeInTheDocument();
  });

  it('calls submitForm with correct data when the form is valid', async () => {
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2025-04-21' } });
    fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      guests: 4,
      date: '2025-04-21',
      time: '18:00',
      occasion: 'Birthday',
    });
  });
});