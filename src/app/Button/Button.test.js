import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button Component', () => {
  test('renders the button with correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument(); // This should now work
  });

  // Failed unit test
  test('button label should not be incorrect', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/Not Click me/i);  // Incorrect label
    expect(buttonElement).toBeInTheDocument(); // This test will fail
  });
});
