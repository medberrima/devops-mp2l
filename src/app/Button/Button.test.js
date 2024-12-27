import '@testing-library/jest-dom';  
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button'; 

describe('Button Component', () => {
  test('renders the button with correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument(); // This should now work
  });

  // test('fires onClick event when clicked (intentionally failing)', () => {
  //   const handleClick = jest.fn();
  //   render(<Button label="Click me" onClick={handleClick} />);
  //   const buttonElement = screen.getByText(/Click me/i);
  //   fireEvent.click(buttonElement);

  //   // Intentionally fail the test by expecting the wrong number of calls
  //   expect(handleClick).toHaveBeenCalledTimes(2); // This will fail, should be 1 instead of 2
  // });
});
