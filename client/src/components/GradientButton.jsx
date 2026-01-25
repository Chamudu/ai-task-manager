import React from 'react';
import './GradientButton.css';

const GradientButton = ({ onClick, children, isActive }) => {
  return (
    <button 
      onClick={onClick} 
      className={`gradient-button ${isActive ? 'active' : ''}`}
    >
      <span className="gradient-border"></span>
      <span className="button-content">
        <span className="button-text">
          {isActive && '✓ '}
          {children}
        </span>
        <svg className="button-arrow" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd" />
        </svg>
      </span>
    </button>
  );
};

export default GradientButton;