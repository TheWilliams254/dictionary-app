import React, { useState, useEffect } from 'react';

// Import images directly into the component
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

function Slideshow() {
    // Array of images imported directly
    const images = [image1, image2, image3];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Set an interval to automatically change the image every 3 seconds
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        // Cleanup the interval when component unmounts
        return () => clearInterval(intervalId);
    }, []);

    // Function to go to the previous image
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Function to go to the next image
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                {/* Display the current image */}
                <img 
                    src={images[currentIndex]} 
                    alt={`Slide ${currentIndex}`} 
                    style={styles.image}
                />
            </div>
            
            {/* Buttons to go to the previous and next images */}
            <button onClick={goToPrevious} style={styles.button}>Previous</button>
            <button onClick={goToNext} style={styles.button}>Next</button>
        </div>
    );
}

// Styles for the slideshow component
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "800px",
        margin: "0 auto",
    },
    imageContainer: {
        maxWidth: "100%",
        overflow: "hidden",
        position: "relative",
    },
    image: {
        width: "100%",
        height: "auto", 
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    },
    button: {
        padding: "10px 20px",
        margin: "10px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem",
    }
};

export default Slideshow;
