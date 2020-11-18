import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // i in regex is for ignoring case sensitivity
  // const linkElement = screen.getByText(/sup/i);
  // expect(linkElement).toBeInTheDocument();

  const linkElement = screen.getByText(/sup/i);
  expect(linkElement).toBeInTheDocument();

  // const imageElement = screen.getByAltText('logo')
  // expect(imageElement).toBeInTheDocument();
});
