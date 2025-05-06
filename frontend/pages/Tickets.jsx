import React from 'react';

const Tickets = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tickets</h1>
      <p style={styles.subtitle}>Manage support tickets from users here.</p>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#101</td>
            <td>Login not working</td>
            <td>Open</td>
            <td>High</td>
          </tr>
          <tr>
            <td>#102</td>
            <td>Page load issue</td>
            <td>Resolved</td>
            <td>Medium</td>
          </tr>
          <tr>
            <td>#103</td>
            <td>Billing error</td>
            <td>In Progress</td>
            <td>High</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: 'white',
    minHeight: '100vh',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '30px',
    color: '#666',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  thtd: {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
  },
};

export default Tickets;
