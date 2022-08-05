import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { App } from './App';

describe('App', () => {
  it('App', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const HEADER = screen.getByTestId('header');
    expect(HEADER).toBeInTheDocument();
  });
});
