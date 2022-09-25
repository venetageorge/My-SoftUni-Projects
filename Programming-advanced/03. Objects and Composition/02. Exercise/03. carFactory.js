function carFactory(data) {
    let result = {};
    result.model = data.model;

    let engineEnum = {
    'Small engine': { power: 90, volume: 1800 },
    'Normal engine': { power: 120, volume: 2400 },
    'Monster engine': { power: 200, volume: 3500 },
    }

    let carriageEnum = {
        hatchback: function (color) {
            return {
                type: 'hatchback',
                color
            }
        },
        coupe: function (color) {
            return {
                type: 'coupe',
                color
            }
        },
    }

    if (data.power <= 90) {
        result.engine = engineEnum['Small engine'];
    } else if (data.power <= 120) {
        result.engine = engineEnum['Normal engine'];
    } else {
        result.engine = engineEnum['Monster engine'];
    }
    result['carriage'] = carriageEnum[data.carriage](data.color);

    let size = data.wheelsize % 2 === 0 ? data.wheelsize - 1 : data.wheelsize; 
    result.wheels = new Array(4).fill(size);

    return result
}
console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));
console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));