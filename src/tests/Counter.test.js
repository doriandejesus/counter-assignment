import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCounterMessage = screen.getByText(/Counter/i);
  const zeroCount = screen.getByText(/0/i);
  expect(zeroCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent(1);
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countDisplay = screen.getByTestId('count');

  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent(-1);
});
