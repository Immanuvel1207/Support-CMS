import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <h1 style={styles.helpText}>How may I help you?</h1>
        <input
          type="text"
          placeholder="Search tickets, articles, topics..."
          style={styles.searchBar}
        />
      </div>

      <h2 style={styles.title}>Dashboard</h2>
      <p style={styles.subtitle}>Welcome to the Support CMS Dashboard.</p>

      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h3>Total Tickets</h3>
          <p>120</p>
        </div>
        <div style={styles.card}>
          <h3>Resolved Tickets</h3>
          <p>95</p>
        </div>
        <div style={styles.card}>
          <h3>Pending Tickets</h3>
          <p>25</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: 'white',
    minHeight: '100vh',
  },
  heroSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '250px',
    backgroundColor: '	#4682B4',
    borderRadius: '10px',
    marginBottom: '30px',
    textAlign: 'center',
    width:'1475px'
  },
  helpText: {
    fontSize: '40px',
    marginBottom: '15px',
    color: 'white',
  },
  searchBar: {
    width: '100%',
    maxWidth: '500px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '20px',
    backgroundColor: '#ffffff', // white background
    color: '#000000',           // black text
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '30px',
    color: '#666',
  },
  cardsContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    padding: '20px',
    flex: '1',
    minWidth: '200px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
};

export default Dashboard;
