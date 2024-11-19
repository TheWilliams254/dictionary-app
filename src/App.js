import React, { useState } from "react";
import Dictionary from "./components/Dictionary";
// import Slideshow from './Assets/components/Slideshow'; // Adjust path to the components folder

function App() {
    const [users, setUsers] = useState([]); // Simulated database of users
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
    const [currentUser, setCurrentUser] = useState(null); // Track current user
    const [showLogin, setShowLogin] = useState(true); // Toggle Login/Create Account forms

    // Function to handle account creation
    const handleCreateAccount = (username, password) => {
        if (users.find((user) => user.username === username)) {
            alert("Username already exists. Please choose another one.");
            return false;
        }
        setUsers([...users, { username, password }]); // Add new user to simulated database
        alert("Account created successfully! You can now log in.");
        setShowLogin(true); // Switch to login form
        return true;
    };

    // Function to handle login
    const handleLogin = (username, password) => {
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            setIsLoggedIn(true);
            setCurrentUser(user);
        } else {
            alert("Invalid username or password. Please try again.");
        }
    };

    return (
        <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
            {!isLoggedIn ? (
                <>
                    {/* Toggle between Login and Create Account */}
                    <div style={{ marginBottom: "20px" }}>
                        <button
                            onClick={() => setShowLogin(true)}
                            style={{
                                padding: "10px 20px",
                                marginRight: "10px",
                                backgroundColor: showLogin ? "#007BFF" : "#ccc",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setShowLogin(false)}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: !showLogin ? "#007BFF" : "#ccc",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Create Account
                        </button>
                    </div>

                    {/* Render Login or Create Account Form */}
                    {showLogin ? (
                        <LoginForm onLogin={handleLogin} />
                    ) : (
                        <CreateAccountForm onCreateAccount={handleCreateAccount} />
                    )}
                </>
            ) : (
                <WelcomePage user={currentUser} />
            )}
        </div>
    );
}

// Login Form Component
function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h2>Login</h2>
            <div style={{ marginBottom: "15px" }}>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
            </div>
            <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Login
            </button>
        </form>
    );
}

// Create Account Form Component
function CreateAccountForm({ onCreateAccount }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateAccount(username, password);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h2>Create Account</h2>
            <div style={{ marginBottom: "15px" }}>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
            </div>
            <div style={{ marginBottom: "15px" }}>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />            </div>
            <button
                type="submit"
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Create Account
            </button>
        </form>
    );
}

// Welcome Page Component
function WelcomePage({ user }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Welcome {user.username}😉</h1>
            <Dictionary/>
           
        </div>
    );
}

export default App;
