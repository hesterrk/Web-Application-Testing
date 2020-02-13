import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Dashboard from './components/Dashboard';

test(`it displays the header in app file`, () => {
const { getByText } = render(<App />);
getByText('Testing Ground')


});

test('renders learn football link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Football Link/i);
    expect(linkElement).toBeInTheDocument();
  });


  test(`it renders my Dashboard component`, () => {
    render(<Dashboard />);
    
    });




test('it has gets text based on id in h3 and has className', () => {
const {getByTestId} = render(<Dashboard/>);
expect(getByTestId("h3tag"));
expect(getByTestId("h3tag")).toHaveClass("h3");

})

  








//displays my Dashboard component 
// .toBeVisible