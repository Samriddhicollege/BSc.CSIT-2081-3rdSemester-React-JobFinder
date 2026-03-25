import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import './Register.css';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    // Store user data in localStorage
    const userData = { name: name.trim(), email: email.trim(), password: password.trim() };
    localStorage.setItem('user', JSON.stringify(userData));

    // Show success message
    alert('Registration successful! Please login.');

    // Redirect to Login page
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register for JobFinder</h2>
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
              required
            />
          </div>
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
          <Button onClick={handleRegister} variant="primary">
            Register
          </Button>
        </form>
        <p className="login-link">
          Already have an account? <a href="#" onClick={() => navigate('/login')}>Login here</a>
        </p>
      </div>
    </div>
  );
}