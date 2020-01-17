import React from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, SecondaryButton } from './Button';

it('Primary button renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<PrimaryButton onClick={() => {}}> Click </PrimaryButton>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Secondary button renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SecondaryButton onClick={() => {}}>Click</SecondaryButton>, div);
  ReactDOM.unmountComponentAtNode(div);
});
