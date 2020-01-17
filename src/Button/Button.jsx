import React from 'react';
import './Button.css';

export const PrimaryButton = ({ onClick, children }) => {
  return (
    <button type="button" className="Button PrimaryButton" onClick={onClick}>
      {children}
    </button>
  );
};

export const SecondaryButton = ({ onClick, children }) => {
  return (
    <button type="button" className="Button SecondaryButton" onClick={onClick}>
      {children}
    </button>
  )
}
