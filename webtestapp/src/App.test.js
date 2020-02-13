import React from 'react';
import { render } from '@testing-library/react';
import App, { reset } from './App';

test(`it displays the header in app file`, () => {
const { getByText } = render(<App />);
getByText('Testing Ground')


});

test('renders learn football link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Football Link/i);
    expect(linkElement).toBeInTheDocument();
  });





//displays my Dashboard component 
// .toBeVisible