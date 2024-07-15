import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import reactLogo from './assets/react.svg'
import App from './App'; // Import your App component
import '@testing-library/jest-dom';


describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test('renders Vite and React logos with correct links', () => {
    render(<App />);

    console.log(screen);
    // Check React logo
    const reactLogo = screen.getByAltText('React logo');
    expect(reactLogo).toBeInTheDocument();
    expect(reactLogo.closest('a')).toHaveAttribute('href', 'https://react.dev');
    expect(reactLogo.closest('a')).toHaveAttribute('target', '_blank');
  });

  test('renders heading and initial count', () => {
    render(<App />);
    const heading = screen.getByText('Vite + React');
    expect(heading).toBeInTheDocument();
    const countElement = screen.getByText('count is 0'); // Initial count is 0
    expect(countElement).toBeInTheDocument();
  });

  test('increments count when button is clicked', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /count is/ });
    fireEvent.click(buttonElement);
    const updatedCountElement = screen.getByText('count is 1');
    expect(updatedCountElement).toBeInTheDocument();
  });

  test('renders instructions paragraph', () => {
    render(<App />);
    const instructionElement = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === "Edit src/App.jsx and save to test HMR";
      const nodeHasText = hasText(node);
      // Check if the current node has the text
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
    expect(instructionElement).toBeInTheDocument();
  });

  test('renders "read the docs" paragraph', () => {
    render(<App />);
    const instructionRegex = 'Click on the Vite and React logos to learn more'
    const instructionElement = screen.getByText(instructionRegex);
    expect(instructionElement).toBeInTheDocument();
  });

  test('increments count when button is clicked', () => {
    const useStateMock = jest.spyOn(React, 'useState');
    // Mock useState to return 5 as the state, and a no-op function as the setter
    useStateMock.mockImplementation((init) => [5, () => { }])();


    render(<App />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    for (let i = 0; i < 1; i++) {
      fireEvent.click(buttonElement);
    }
    const updatedCountElement = screen.getByText(/count is \d+/i);
    // const updatedCountElement = screen.getByText('count is 6');
    console.log(updatedCountElement.textContent);

    const text = screen.getByText('Count is greater than 5');
    console.log(text.textContent)
    expect(text).toContain("greater");
  });
});
