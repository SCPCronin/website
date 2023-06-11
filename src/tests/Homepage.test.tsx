import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from '../pages/Homepage';
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<Homepage />);
  const linkElement = screen.getByText("Homepage");
  expect(linkElement).toBeInTheDocument();
});
