//! 1)async ans sync

// ===========================================================================
// synchronous execution

// here code  will be execute line by line

console.log('start')
console.log("middle")

for (let index = 0; index < 20; index++) {
    console.log(index)
    
}

// here for this loop we will wait for some second to execute next line
// REASON : js is single threaded it have only one callstack which occupied by loop

console.log('end')

// ===========================================================================
//! asynchronous execution
setTimeout(() => {
    console.log("inside set timeout")
}, 0);
console.log('start')
console.log("middle")


// here for this loop we will wait for some second to execute next line
console.log('end')

//================================================================================
