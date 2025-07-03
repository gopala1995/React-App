import React, { useEffect, useState } from 'react';
const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxWidth: '700px',
    margin: 'auto'
  },
  input: {
    padding: '10px',
    width: '80%',
    maxWidth: '400px',
    marginBottom: '20px',
    fontSize: '1rem',
  },
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '15px',
    textAlign: 'left',
    backgroundColor: '#f9f9f9'
  },
  error: {
    color: 'red',
    marginTop: '20px'
  }
};


function UserCard({ name, email, city }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
}


function UserListApp() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('API Error');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch user profiles. Please try again later.');
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1>User Profiles</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={styles.input}
      />

      {loading && <p>Loading user data...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {!loading && !error && filteredUsers.length === 0 && <p>No users found.</p>}

      {!loading && !error &&
        filteredUsers.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))
      }
    </div>
  );
}

export default UserListApp;
