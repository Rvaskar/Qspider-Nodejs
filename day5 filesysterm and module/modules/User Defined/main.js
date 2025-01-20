//! dot notation import
// const m = require('./module')


// console.log(m)

// console.log(m.add(5,6))
// console.log(m.multiply(7,6))

//! object destructuring

const { add, multiply} = require('./module');

console.log(add(6,8))
console.log(multiply(12,2))