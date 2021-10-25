const test = require('tap').test;
const axios = require('axios');
const {filterUniqueFlights} = require('../routes/controller');
const mockdata = require('./mockdata');
const {URL} = require('../config');

test('Test Unique Flights Function', (t) => {
    const merged = mockdata.service1.flights.concat(mockdata.service2.flights);
    const unique = merged.reduce(filterUniqueFlights, []);

    t.ok(unique, 'Unique array');
    t.not(unique.length, 0, 'Unique array larger than 0');

    t.end();
});

test('Test Flight endpoint', async (t) => {
    const {data} = await axios.get(`${URL}/api/uniqueflights`);

    t.ok(await data, 'Response OK');
    t.equal(await data.code, 200, 'Status code 200');
    t.not(await data.data.length, 0, 'Flights array larger than 0');

    t.end();
});
