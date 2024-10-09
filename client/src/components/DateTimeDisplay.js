import React, { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const dayName = now.toLocaleDateString('en-US', { weekday: 'long' }); // Get full day name
      const formattedDateTime = `
        ${dayName}, ${now.getFullYear()}-${addZero(now.getMonth() + 1)}-${addZero(now.getDate())}
        Time: ${addZero(now.getHours())}:${addZero(now.getMinutes())}:${addZero(now.getSeconds())}
      `;
      setCurrentDateTime(formattedDateTime);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  // Function to add leading zero to single-digit numbers
  function addZero(number) {
    return number < 10 ? '0' + number : number;
  }

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#282c34',  // Darker background for contrast
      color: '#61dafb',             // Light text color
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',  // Subtle shadow for depth
      textAlign: 'center',           // Center text alignment
      maxWidth: '400px',            // Max width for better readability
      margin: '20px auto'           // Center the component
    }}>
      <h2 style={{ margin: '0', fontSize: '1.5em' }}>Current Date & Time</h2>
      <pre style={{
        margin: '10px 0',
        fontSize: '1.2em',            // Increased font size
        whiteSpace: 'pre-wrap'
      }}>
        <strong>{currentDateTime}</strong>
      </pre>
    </div>
  );
}

export default DateTimeDisplay;
