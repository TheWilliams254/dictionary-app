import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import HabitForm from './Components/HabitForm';
import HabitList from './Components/List';
import ProgressChart from './Components/ProgressChart';

function App() {
  return (
    <div>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    <HabitForm/>
    <HabitList/>
    <ProgressChart/>
    </div>
  );
}

export default App;
