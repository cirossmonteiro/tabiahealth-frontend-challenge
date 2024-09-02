import {act} from 'react';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Table from './';

test('renders learn react link', async () => {
  render(<Table
    categories={[{ name: "category", icon: ["solid", "house"] }]}
    countries={["country"]}
    data={[[10]]}
  />);
  expect(screen.getByTestId('sort-icon').className).toBe("fa-solid fa-sort");
  userEvent.click(screen.getByTestId('sort-icon'));
  expect(screen.getByTestId('sort-icon').className).toBe("fa-solid fa-sort-up");
  userEvent.click(screen.getByTestId('sort-icon'));
  expect(screen.getByTestId('sort-icon').className).toBe("fa-solid fa-sort-down");
  userEvent.click(screen.getByTestId('sort-icon'));
  expect(screen.getByTestId('sort-icon').className).toBe("fa-solid fa-sort");
});
