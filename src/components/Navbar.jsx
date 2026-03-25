import { Link } from 'react-router-dom';
import { Button } from './Button';
import { useTheme } from './ThemeContext';

export function Navbar({ user, handleLogout }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          JobFinder
        </Link>        <div className="user-welcome">
          <span className="user-name">{user?.name || 'User'}</span>
        </div>        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Browse Jobs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/saved-jobs" className="nav-link">
              Saved Jobs
            </Link>
          </li>
        </ul>
        <div className="nav-user">
          <Button title={user?.name} onClick={handleLogout} variant="secondary">Logout</Button>
          <button onClick={toggleTheme} className="theme-toggle" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}