import React, { useState } from 'react';

const HabitForm = ({ onAddHabit }) => {
  const [habit, setHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddHabit && typeof onAddHabit === 'function') {
      onAddHabit(habit); // Call the passed function with the new habit
      setHabit(''); // Clear the input field
    } else {
      console.error('onAddHabit is not a function');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter a new habit"
        required
      />
      <button type="submit">Add Habit</button>
    </form>
  );
};

export default HabitForm;
