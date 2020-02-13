import React from 'react';
import { render } from '@testing-library/react';
import App, { reset } from './App';

test(`it displays the header in app file`, () => {
const { getByText } = render(<App />);

getByText('Testing Ground')


});






//displays my Dashboard component 
// .toBeVisible