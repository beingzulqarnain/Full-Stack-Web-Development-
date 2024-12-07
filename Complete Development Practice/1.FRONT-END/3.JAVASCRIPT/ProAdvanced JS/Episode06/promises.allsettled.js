
//*********Promises.Allsettled() may fulfilled or rejected ku nhi dekhta saray execute karta hai Brother. */

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
            // resolve("api2");
            reject("rejected");
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

let result = Promise.allSettled([api1(),api2(),api3()]).then((data) => {
    console.log(data);    
}).catch((error) => {
    console.log(error);
    
})