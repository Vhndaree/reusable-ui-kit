import React from 'react';
import './Button.css';

export const Button = props => {
  const { onClick } = props;
  return (
    <button type="button" className="Button PrimaryButton" onClick={onClick}>
      click
    </button>
  );
};
