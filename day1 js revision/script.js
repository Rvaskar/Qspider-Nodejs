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

//! Then and catch

let payload = fetch("api");
console.log(payload) // it will be json object or promises

payload.then((data)=>{
    console.log(data) // response object
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('finally')
})

//================================================================================
//? Javascript Object  and Json

let obj = {
    key1: "value",
    key2:'value2',
    key1:'value3'
}

// value we can store in object: all type of datatypes we can use as value in js object

console.log(obj)

//op ===> obje{ key1: 'value3',key2:'value2'}

//? JSON : Javascript Object notation

let emp = {
    "name": "rutik",
    "skills": ["js",'typescript','react'] 
}

// JSon can not store null and function 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let payload1 = fetch("https://jsonplaceholder.typicode.com/posts")
console.log(payload1) // it will be json object or promises

payload1.then((data)=>{
    console.log(data) // response object
    console.log(typeof data) //object
    
    //when we convert object to json it will return promise
    let jsonData = data.json();
    console.log(jsonData) // its promise
    
    //then catch chaining
    jsonData.then((value)=>{
        console.log(value)
    }).catch((error)=>{
        console.log(error)
    })
    
    
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('finally')
})

//================================================================================

//! async and await both are used together 
//! async user in function declaration and await in body, both used to handle promise
//!async always return promise

let apiCall = async()=>{
    let payload1 = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(payload1) // it will be json object or promises

    let jsonData = await payload1.json();
    console.log(jsonData)
}

apiCall()