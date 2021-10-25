const axios = require('axios');
const { auth } = require('../config');

const options = {
    auth
};

function filterUniqueFlights(prevValue, currentValue) {
    let isDuplicate = prevValue && prevValue.filter((flight) => {
        if(JSON.stringify(currentValue) === JSON.stringify(flight)) {
            return true;
        }

        return false;
    });

    if(isDuplicate && isDuplicate.length == 0) {
        prevValue.push(currentValue);
    }
        
    return prevValue;
}

module.exports = {
    getUniqueFlights: async (req, res) => {
        axios.all([
            axios.get('https://discovery-stub.comtravo.com/source1'),
            axios.get('https://discovery-stub.comtravo.com/source2', options)
        ]).then(axios.spread((data1, data2) => {
            const merged = data1.data.flights.concat(data2.data.flights);
            const unique = merged.reduce(filterUniqueFlights, []);
    
            res.json({
                code: 200,
                data: unique
            });
        })).catch((e) => {
            res.json({
                code: e.status,
                message: e.message
            });
        });
    },

    filterUniqueFlights
}