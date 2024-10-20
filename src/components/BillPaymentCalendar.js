import React, { useState } from 'react';
import { Calendar } from 'react-calendar'; // Ensure you have react-calendar installed
import { FaGift, FaDollarSign } from 'react-icons/fa'; // Font Awesome icons

const BillPaymentCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Sample Event',
      date: '2024-11-01',
      suggestedBudget: 200,
      description: 'This is a sample event description.',
      typicalExpenses: [{ item: 'Food', amount: 50 }, { item: 'Venue', amount: 100 }]
    }
    // Add more sample events as needed
  ]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [showNewEventDialog, setShowNewEventDialog] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    suggestedBudget: '',
    description: '',
    typicalExpenses: []
  });
  const [newExpenseItem, setNewExpenseItem] = useState({ item: '', amount: '' });

  const handleAddExpenseItem = () => {
    if (newExpenseItem.item && newExpenseItem.amount) {
      setNewEvent(prev => ({
        ...prev,
        typicalExpenses: [...prev.typicalExpenses, newExpenseItem]
      }));
      setNewExpenseItem({ item: '', amount: '' }); // Reset expense item input
    }
  };

  const handleCreateEvent = () => {
    if (newEvent.name && newEvent.date && newEvent.suggestedBudget) {
      const eventId = events.length ? Math.max(events.map(event => event.id)) + 1 : 1; // Unique ID for new event
      setEvents(prev => [...prev, { ...newEvent, id: eventId }]);
      setNewEvent({ name: '', date: '', suggestedBudget: '', description: '', typicalExpenses: [] }); // Reset event input
      setShowNewEventDialog(false); // Close the dialog
    }
  };

  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 30;
  });

  const EventCalendarSection = () => {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaGift size={20} />
            <h2 className="text-xl font-semibold">Event Calendar</h2>
          </div>
          <button 
            onClick={() => setShowNewEventDialog(true)} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add New Event
          </button>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </div>
        </div>

        <h3 className="font-semibold mb-2">Upcoming Events</h3>
        <div className="space-y-4">
          {upcomingEvents.map(event => (
            <div key={event.id} className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{event.name}</h4>
                <span className="text-sm text-gray-500">{event.date}</span>
              </div>
              <div className="text-sm text-gray-600">{event.description}</div>
              <div className="flex items-center gap-2">
                <FaDollarSign size={16} />
                <span>Budget: ${event.suggestedBudget}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-semibold mt-4 mb-2">Event Budgets</h3>
        <div className="space-y-4">
          {upcomingEvents.map(event => {
            const totalExpenses = event.typicalExpenses.reduce((sum, exp) => sum + exp.amount, 0);
            return (
              <div key={event.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>{event.name}</span>
                  <span className="text-sm text-gray-500">${totalExpenses} planned</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div 
                    className="h-full bg-blue-500 rounded" 
                    style={{ width: `${(totalExpenses / event.suggestedBudget) * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Financial Dashboard</h1>
      <EventCalendarSection />

      {/* Modal for adding a new event */}
      {showNewEventDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="font-semibold mb-2">Add New Event</h3>
            <div>
              <label className="block mb-1">Event Name</label>
              <input
                type="text"
                value={newEvent.name}
                onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                className="border rounded w-full p-2 mb-2"
              />
            </div>
            <div>
              <label className="block mb-1">Event Date</label>
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="border rounded w-full p-2 mb-2"
              />
            </div>
            <div>
              <label className="block mb-1">Suggested Budget</label>
              <input
                type="number"
                value={newEvent.suggestedBudget}
                onChange={(e) => setNewEvent({ ...newEvent, suggestedBudget: e.target.value })}
                className="border rounded w-full p-2 mb-2"
              />
            </div>
            <div>
              <label className="block mb-1">Description</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                className="border rounded w-full p-2 mb-2"
              />
            </div>
            <h4 className="font-semibold mt-4">Typical Expenses</h4>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Item"
                value={newExpenseItem.item}
                onChange={(e) => setNewExpenseItem({ ...newExpenseItem, item: e.target.value })}
                className="border rounded p-2 w-full"
              />
              <input
                type="number"
                placeholder="Amount"
                value={newExpenseItem.amount}
                onChange={(e) => setNewExpenseItem({ ...newExpenseItem, amount: e.target.value })}
                className="border rounded p-2 w-full"
              />
              <button 
                onClick={handleAddExpenseItem} 
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Add
              </button>
            </div>
            <div className="space-y-2">
              {newEvent.typicalExpenses.map((expense, index) => (
                <div key={index} className="flex justify-between">
                  <span>{expense.item}</span>
                  <span>${expense.amount}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={handleCreateEvent} 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Create Event
            </button>
            <button 
              onClick={() => setShowNewEventDialog(false)} 
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillPaymentCalendar;
