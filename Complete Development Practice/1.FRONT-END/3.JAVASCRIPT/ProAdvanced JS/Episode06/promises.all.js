
//*********Promises.All() may sara fullfilled wala chaltay hain agar aik nhi reject huawa tu yae agay run nhi karay ga Brother. */


function api1(){
    return new Promise((resolve,reject) => {
       setTimeout(() => {
        resolve("api1");
       },3000)
    })
}

function api2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("api2");
            // reject("rejected");
           },0)
    })
}

function api3(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("api3");
           },7000)
    })
}

// let result = Promise.all([api1(),api2(),api3()]).then((data) => {
//     console.log(data);    
// }).catch((error) => {
//     console.log(error);
    
// })


