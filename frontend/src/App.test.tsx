import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('should render drop beer button', () => {
  const screen = render(<App />);
  screen.getByText('PILS');
});
