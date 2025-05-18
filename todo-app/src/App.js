import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ 
          background: '#f0f0f0', 
          padding: '10px',
          marginBottom: '20px'
        }}>
          <Link 
            to="/" 
            style={{ 
              marginRight: '15px', 
              textDecoration: 'none', 
              color: '#333',
              fontWeight: 'bold'
            }}
          >
            Home
          </Link>
          <Link 
            to="/todos" 
            style={{ 
              marginRight: '15px', 
              textDecoration: 'none', 
              color: '#333',
              fontWeight: 'bold'
            }}
          >
            Todos
          </Link>
          <Link 
            to="/profile" 
            style={{ 
              textDecoration: 'none', 
              color: '#333',
              fontWeight: 'bold'
            }}
          >
            Profile
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

// This is the only line that was missing from your original file
export default App;