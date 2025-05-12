function Home() {
  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '500px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h2>Welcome to My Todo App</h2>
      <p>Navigate to "Todos" to start managing your tasks with:</p>
      <ul style={{ 
        textAlign: 'left',
        display: 'inline-block',
        margin: '20px auto'
      }}>
        <li>Priority levels (High/Medium/Low)</li>
        <li>Categories (Work/Personal/Shopping)</li>
        <li>Due dates with overdue alerts</li>
        <li>Persistent storage</li>
      </ul>
    </div>
  );
}

export default Home;