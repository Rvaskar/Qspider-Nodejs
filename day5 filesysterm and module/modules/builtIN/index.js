//! constr variableName = require('path');
//! const variableName = require('modulename')

const abc = require('fs');
console.log(abc)

//! CRUD ON FILES IN SYNCHORONOUS(SYNC) WAY

//* 1) Creating a files 

// method name ==> writeFileSync();
// syntax ==> fs.writeFileSync("filename/path", "data")

//? the first parameter is the path of the file and file and also the name
//? the second parameter is the data that we want to write 

// you can give any extension of the file you want

console.log('start')
console.log("middle")
abc.writeFileSync("./dat1.txt","let a= 10")
console.log('end')


//! Create a file demo.java inside user define folder

