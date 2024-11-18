import React from 'react';
import background from '../Assets/images/routine.jpg'; // Update the path as needed

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover', // Ensures the image covers the entire area
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents tiling
    width: '100vw', // Full width of the viewport
    height: '100vh', // Full height of the viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // Contrast text color
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to the Habit Tracker</h1>
      <p>Track your habits and improve your daily routine!</p>
    </div>
  );
};

export default Home;
