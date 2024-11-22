import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';

const App = () => {
  const [habits, setHabits] = useState([]);
  const API_URL = 'https://example.com/api/habits'; // Replace with your actual API URL

  // Fetch habits from the API
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get(API_URL);
        setHabits(response.data);
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };

    fetchHabits();
  }, []);

  // Add a new habit
  const addHabit = async (newHabit) => {
    try {
      const response = await axios.post(API_URL, { name: newHabit });
      setHabits((prevHabits) => [...prevHabits, response.data]);
    } catch (error) {
      console.error('Error adding habit:', error);
    }
  };

  // Delete a habit
  const deleteHabit = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
    } catch (error) {
      console.error('Error deleting habit:', error);
    }
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} onDeleteHabit={deleteHabit} />
    </div>
  );
};

export default App;
