import React, { useState, useEffect } from "react";

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'Arial',
  },
  quoteBox: {
    background: '#f4f4f4',
    borderRadius: '10px',
    padding: '30px',
    marginBottom: '20px',
    boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: 'auto',
  },
  content: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    marginBottom: '15px',
  },
  author: {
    fontSize: '1rem',
    color: '#555',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  spinner: {
    margin: '40px auto',
    width: '40px',
    height: '40px',
    border: '5px solid #ccc',
    borderTop: '5px solid #007BFF',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  }
};

function QuoteViewer() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error("Failed to fetch quote:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <h1>📝 Daily Quote</h1>

      {loading ? (
        <div style={styles.spinner}></div>
      ) : (
        <div style={styles.quoteBox}>
          {/* <p style={styles.content}>"{quote.content}"</p>
          <p style={styles.author}>— {quote.author}</p> */}
        </div>
      )}

      <button onClick={fetchQuote} style={styles.button}>
        Get New Quote
      </button>
    </div>
  );
}

export default QuoteViewer;
