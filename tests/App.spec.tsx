import { render, screen } from '@testing-library/react';
import App from '../src/App';

// we must mock our federated components as they don't actually exist in this project
jest.mock('remote_one/button', () => 'div', { virtual: true });
jest.mock('remote_two/button', () => 'div', { virtual: true });

test('Renders the main page', () => {
  const testMessage = 'Module Federation Rsbuild with React';
  render(<App />);
  expect(screen.getByText(testMessage)).toMatchSnapshot();
});
