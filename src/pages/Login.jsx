import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import './Login.css';

export function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert('Please enter both email and password.');
      return;
    }

    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email.trim() && storedUser.password === password.trim()) {
      // Login successful
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
      navigate('/');
    } else {
      // Invalid credentials
      alert('Invalid credentials. Please check your email and password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to JobFinder</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <Button onClick={handleLogin} variant="primary">
            Login
          </Button>
        </form>
        <p className="register-link">
          Don't have an account? <a href="#" onClick={() => navigate('/register')}>Register here</a>
        </p>
      </div>
    </div>
  );
}