import * as help from './index'


//Checking tank is at 0 

test('initialises with an empty tank', () => {
const toyato = new help.Car('Toyato', 80)
expect(toyato.tank).toBe(0);

});
