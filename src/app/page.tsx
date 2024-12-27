import React from 'react';

function Page() {
  // Current date and time for dynamic display
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const currentTime = new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Page 1</h1>
      <p style={styles.info}>
        Today's date: <span style={styles.date}>{currentDate}</span>
      </p>
      <p style={styles.info}>
        Current time: <span style={styles.time}>{currentTime}</span>
      </p>
    </div>
  );
}

// Inline styles for a clean UI
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  info: {
    fontSize: '1.
