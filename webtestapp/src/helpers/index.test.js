import * as help from './index'

test('initialises with an empty tank', () => {
const toyato = new help.Car('Toyato', 60)
expect(toyato.tank).toBe(0);

})

