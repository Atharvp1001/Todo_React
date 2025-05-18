import React from 'react';
import { render, screen } from '@testing-library/react';
import Todos from './Todos';

test('finds task input field', () => {
  render(<Todos />);
  expect(screen.getByPlaceholderText('Enter task description')).toBeInTheDocument();
});