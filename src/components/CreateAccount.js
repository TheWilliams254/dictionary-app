import React, { useState, useEffect } from "react";
import Slideshow from "./SlideShow";

function CreateAccount({ onAccountCreated }) {
    // States for user input fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State for error or success messages
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Function to validate and handle form submission
    const handleCreateAccount = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Basic validation
        if (!username.trim() || !email.trim() || !password.trim()) {
            setError("All fields are required.");
            setSuccess("");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            setSuccess("");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            setSuccess("");
            return;
        }

        // If validation passes
        setError("");
        setSuccess("Account created successfully!");
        onAccountCreated(); // Notify parent component that the account was created
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontFamily: "Arial",
            }}
        >
            <form
                onSubmit={handleCreateAccount}
                style={{
                    padding: "20px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    borderRadius: "8px",
                    backgroundColor: "#f9f9f9",
                    maxWidth: "400px",
                    width: "100%",
                }}
            >
                <h2 style={{ textAlign: "center" }}>Create Account</h2>

                {/* Username input */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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

                {/* Email input */}
                <div style={{ marginBottom: "15px" }}>
                    <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
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
                        onChange={(e) => setPassword(e.target.value)}
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

                {/* Display error message */}
                {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

                {/* Display success message */}
                {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

                {/* Submit button */}
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px",
                        borderRadius: "4px",
                        border: "none",
                        backgroundColor: "#28a745",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default CreateAccount;
