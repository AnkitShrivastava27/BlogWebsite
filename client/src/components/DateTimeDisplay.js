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
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>

      <pre style={{ margin: '0', fontSize: '14px', color: '#000', whiteSpace: 'pre-wrap' }}><strong>{currentDateTime}</strong></pre>
    </div>
  );
}

export default DateTimeDisplay;
