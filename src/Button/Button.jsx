import React from 'react';
import './Button.css';

export const Button = ({ onClick, children }) => {
  return (
    <button type="button" className="Button PrimaryButton" onClick={onClick}>
      {children}
    </button>
  );
};
