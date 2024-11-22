import React, { useState, useEffect } from "react";
import axios from "axios";

function Login({ onLogin }) {
    // State to store the username and password inputs
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // State to store error messages
    const [error, setError] = useState("");

    // Function to handle form submission
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior (page reload)

        // Basic username and password validation
        if (username === "user" && password === "password") {
            setError(""); // Clear error message if credentials are correct
            onLogin(true); // Notify the parent component that the user is logged in
        } else {
            setError("Invalid username or password"); // Show an error message for invalid credentials
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", // Center the login form vertically and horizontally
                fontFamily: "Arial",
            }}
        >
            <form
                onSubmit={handleLogin}
                style={{
                    padding: "20px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Add a subtle shadow
                    borderRadius: "8px", // Rounded corners
                    backgroundColor: "#f9f9f9", // Light background
                    maxWidth: "400px",
                    width: "100%", // Make it responsive
                }}
            >
                <h2 style={{ textAlign: "center" }}>Login</h2>

                {/* Username input */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update state when the input changes
                        placeholder="Enter your username"
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                        required
                    />
                </div>

                {/* Password input */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update state when the input changes
                        placeholder="Enter your password"
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                        }}
                        required
                    />
                </div>

                {/* Display error message if login fails */}
                {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

                {/* Login button */}
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: "#007BFF",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
