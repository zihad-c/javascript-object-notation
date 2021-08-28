/* =============== 1. JSON ================= */

// JSON = Javascript Object Notation
// convert object to string with JSON.stringify
const products = {
    name: 'kitkat',
    id: 12,
    price: 60,
    shop: 'mamur dokan',
    numbers: [
        21, 32, 43, 54, 65, 76, 87, 98
    ],
    location: 'Savar',
    user: {
        name: 'Rabbi',
        age: 27,
        position: 'manager',
        salary: 20000,
    },
    profit: 150000,
    members: [
        'Abdul',
        'Karim',
        'Jabir',
        'Hasan']

};

console.log(products);
const stringify1 = JSON.stringify(products);
console.log(stringify1);

const stringify2 = JSON.stringify(products.numbers);
console.log(stringify2);

const stringify3 = JSON.stringify(products.user);
console.log(stringify3);

// convert string to object with JSON.parse
const convertedString = JSON.parse(stringify1);
console.log(convertedString);
