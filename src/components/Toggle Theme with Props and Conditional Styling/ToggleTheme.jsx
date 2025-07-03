import React, { useState, useEffect } from 'react';

// 🧱 Reusable ThemedBox Component
function ThemedBox({ theme, children }) {
  const styles = {
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
    color: theme === 'dark' ? '#fff' : '#000',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return <div style={styles}>{children}</div>;
}

// 🌗 Main ThemeApp Component
function ThemeApp() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // 💾 Persist theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const appStyles = {
    minHeight: '100vh',
    padding: '40px',
    backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
    transition: 'all 0.3s ease',
  };

  const buttonStyles = {
    padding: '10px 20px',
    marginBottom: '30px',
    cursor: 'pointer',
    backgroundColor: theme === 'dark' ? '#444' : '#ddd',
    color: theme === 'dark' ? '#fff' : '#000',
    border: 'none',
    borderRadius: '5px'
  };

  return (
    <div style={appStyles}>
      <button style={buttonStyles} onClick={toggleTheme}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      {/* Render Themed Boxes */}
      <ThemedBox theme={theme}>Box 1: Theme is {theme}</ThemedBox>
      <ThemedBox theme={theme}>Box 2: Theme is {theme}</ThemedBox>
      <ThemedBox theme={theme}>Box 3: Theme is {theme}</ThemedBox>
    </div>
  );
}

export default ThemeApp;
