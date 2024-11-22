import React, { useState } from "react";
import axios from "axios"; // For making API requests

function Dictionary() {
    const [word, setWord] = useState(""); // Word to search
    const [definition, setDefinition] = useState(null); // Definition of the word
    const [error, setError] = useState(null); // Error message

    const fetchDefinition = async () => {
        try {
            const response = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            setDefinition(response.data[0]);
            setError(null); // Clear error if request is successful
        } catch (err) {
            setDefinition(null);
            setError("❌ Word not found. Please try again."); // Add emoji to error message
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (word.trim() !== "") {
            fetchDefinition();
        }
    };

    return (
        <div style={styles.container}>
            {/* Page title with emoji */}
            <h1 style={styles.heading}>📖 Dictionary</h1>

            {/* Search form */}
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="🔍 Enter a word" // Placeholder with emoji
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Search 🔍
                </button>
            </form>

            {/* Display error message if there's an error */}
            {error && <p style={styles.error}>{error}</p>}

            {/* Display word details if a definition is available */}
            {definition && (
                <div style={styles.result}>
                    {/* Display the word */}
                    <h2 style={styles.word}>
                        ✏️ {definition.word}
                    </h2>
                    {/* Display the part of speech */}
                    <h3 style={styles.partOfSpeech}>
                        📚 {definition.meanings[0]?.partOfSpeech}
                    </h3>
                    {/* Display the first definition */}
                    <p style={styles.definition}>
                        📝 {definition.meanings[0]?.definitions[0]?.definition}
                    </p>
                    {/* Display an audio pronunciation if available */}
                    {definition.phonetics[0]?.audio && (
                        <audio
                            controls
                            style={styles.audio}
                            key={definition.phonetics[0]?.audio}
                        >
                            <source
                                src={definition.phonetics[0].audio}
                                type="audio/mpeg"
                            />
                            Your browser does not support the audio element.
                        </audio>
                    )}
                </div>
            )}
        </div>
    );
}

// Styles for the component
const styles = {
    container: {
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
    },
    heading: {
        fontSize: "2rem",
        color: "#333",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px",
    },
    input: {
        padding: "10px",
        fontSize: "1rem",
        borderRadius: "5px",
        border: "1px solid #ddd",
        flexGrow: 1,
        marginRight: "10px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "1rem",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007BFF",
        color: "white",
        cursor: "pointer",
    },
    error: {
        color: "red",
        fontSize: "1rem",
    },
    result: {
        marginTop: "20px",
        textAlign: "left",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    word: {
        fontSize: "1.5rem",
        color: "#007BFF",
        marginBottom: "10px",
    },
    partOfSpeech: {
        fontSize: "1rem",
        color: "#555",
        marginBottom: "10px",
    },
    definition: {
        fontSize: "1rem",
        color: "#333",
        lineHeight: "1.5",
    },
    audio: {
        marginTop: "10px",
        width: "100%",
    },
};

export default Dictionary;
