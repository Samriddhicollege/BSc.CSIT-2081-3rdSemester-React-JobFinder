import './Button.css';

export function Button({ children, onClick, variant = 'primary', disabled = false, title }) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
}
