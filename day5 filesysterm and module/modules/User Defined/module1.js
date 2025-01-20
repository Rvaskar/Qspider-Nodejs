const fs = require('fs');

const math = (a,b)=>{
    return a+b
}

// fs.writeFileSync("demo.js", `const math = (a,b)=>{
//     return a+b
// }`)
fs.writeFileSync("demo2.js", 
    `// hi
// hello
// kya hhgai`)


//! 2) reading and fetching a file synchronously

//? method name ==> readFileSync()
// syntax ==> fs.readFileSync("path",'encoding')

//? path ==> path of the file which you want to read

//? encoding == todo


// console.log('start');
let a = fs.readFileSync('demo.js')
//? <Buffer 63 6f 6e 73 74 20 6d 61 74 68 20 3d 20 28 61 2c 62 29 3d 3e 7b 0a 20 20 20 20 72 65 74 75 72 6e 20 61 2b 62 0a 7d>  // > its is an array > in hexadecimal format
// let a = fs.readFileSync('demo.js',encodeURI('utf-8'))
console.log(a)

let b = a.toString()
console.log(b)