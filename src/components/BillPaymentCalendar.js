import React, { useState } from 'react';

const BillPaymentCalendar = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Electricity Bill', date: '2024-10-25' },
    { id: 2, name: 'Diwali Budget', date: '2024-11-04' },
  ]);

  return (
    <div className="bill-payment-calendar">
      <h3 className="text-lg font-semibold mb-4">Upcoming Bills & Events</h3>
      <ul>
        {events.map((event) => (
          <li key={event.id} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-800">{event.name}</span>
              <span className="text-gray-600">{event.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillPaymentCalendar;
