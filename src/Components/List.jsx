const HabitList = ({ habits = [] }) => {
    console.log('Habits:', habits);
  
    return (
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>{habit}</li>
        ))}
      </ul>
    );
  };
  
  export default HabitList;
  
